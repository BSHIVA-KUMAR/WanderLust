const Listing = require("../models/listing");
const Review = require("../models/review");
const { bookingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index", { allListings: listings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};


module.exports.showListing = async (req, res) => {
  // Prevent "search", "new", "category" from being treated as IDs
  const reservedWords = ['search', 'new', 'category'];
  if (reservedWords.includes(req.params.id.toLowerCase())) {
    req.flash('error', 'Invalid listing ID!');
    return res.redirect('/listings');
  }

  // Check if ID is a valid MongoDB ObjectId format
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    req.flash('error', 'Invalid listing ID!');
    return res.redirect('/listings');
  }

  const listing = await Listing.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: { path: 'author' }
    })
    .populate('owner');
  
  if (!listing) {
    req.flash('error', 'Cannot find that listing!');
    return res.redirect('/listings');
  }

  // Filter out any null or deleted reviews
  if (listing.reviews) {
    listing.reviews = listing.reviews.filter(review => review !== null && review !== undefined);
  }

  const isOwner = req.user && listing.owner.equals(req.user._id);
  const currentUser = req.user;
  // mapToken is already available via res.locals from middleware
  res.render('listings/show', { listing, isOwner, currentUser });
};

module.exports.createListing = async (req, res, next) => {
  try {
    let response = await geocodingClient.forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    }).send();

    const listingData = req.body.listing;
    listingData.owner = req.user._id;
    listingData.image = { url: req.file.path, filename: req.file.filename };
    listingData.geometry = {
      type: 'Point',
      coordinates: response.body.features[0].geometry.coordinates,
    };

    const listing = new Listing(listingData);
    await listing.save();
    req.flash("success", "Successfully created a new listing!");
    res.redirect(`/listings/${listing._id}`);
  } catch (error) {
    // Handle error
    next(error);
  }
};

module.exports.renderEditForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image ? listing.image.url : ''; // Check if image exists
  originalImageUrl.replace("/upload", "/upload/h_300,w_200");
  res.render("listings/edit", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
  }
  await listing.save();
  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted listing!");
  res.redirect("/listings");
};

module.exports.renderBookingForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/book", { listing });
};

module.exports.bookListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  const booking = {
    user: req.user._id,
    name: req.body.name,
    aadharNumber: req.body.aadharNumber,
    dateOfBooking: req.body.dateOfBooking,
    dateOfExit: req.body.dateOfExit,
  };
  listing.bookings.push(booking);
  await listing.save();
  req.flash("success", "Successfully booked the listing!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.filterByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const listings = await Listing.find({ category });
    if (!listings.length) {
      req.flash('error', 'No listings found in this category.');
      return res.redirect('/listings');
    }
    res.render('listings/index', { allListings: listings, category });
  } catch (e) {
    req.flash('error', 'Unable to fetch listings. Please try again.');
    res.redirect('/listings');
  }
};

module.exports.searchListings = async (req, res) => {
  const { q } = req.query;
  
  console.log('Search query received:', q); // Debug log
  
  if (!q || q.trim() === '') {
    req.flash('error', 'Please enter a search term.');
    return res.redirect('/listings');
  }

  try {
    const searchQuery = q.trim();
    console.log('Searching for:', searchQuery); // Debug log
    
    // Search in title, location, country, and description
    const listings = await Listing.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { location: { $regex: searchQuery, $options: 'i' } },
        { country: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    });

    console.log('Found', listings.length, 'listings'); // Debug log

    if (!listings.length) {
      req.flash('info', `No listings found for "${searchQuery}". Showing all listings.`);
      return res.redirect('/listings');
    }

    res.render('listings/index', { 
      allListings: listings, 
      searchQuery: searchQuery 
    });
  } catch (e) {
    console.error('Search error:', e); // Debug log
    req.flash('error', 'Unable to perform search. Please try again.');
    res.redirect('/listings');
  }
};
