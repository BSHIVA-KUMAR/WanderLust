// // const Listing = require("../models/listing");

// // module.exports.index= async (req, res) => {
// //     const allListings = await Listing.find({});
// //     res.render("listings/index.ejs", { allListings });
// // };

// // module.exports.renderNewForm =  (req, res) => {
// //     res.render("listings/new.ejs");
// // };

// // module.exports.showListing = async (req, res) => {
// //     let { id } = req.params;
// //     const listing = await Listing.findById(id)
// //     .populate({path: "reviews", 
// //     populate: {
// //     path: "author",
// //     },
// // }).populate("owner");          
// // if(!listing){
// //         req.flash("error", "Listing you requested for doesn't exist!");
// //         res.redirect("/listings");
// //     }
// //     res.render("listings/show.ejs", { listing });
// // };

// // module.exports.createListing = async (req, res, next) =>{
// //     // if(!req.body.listing){
// //     //     throw new ExpressError(400, "send valid data for listing");
// //     // }

// //     let url = req.file.path;
// //     let filename = req.file.filename;
    
// //     const newListing = new Listing(req.body.listing);
// //     newListing.owner = req.user._id;
// //     newListing.image = {url, filename};
// //     await newListing.save();
// //     req.flash("success", "New Listing Created!");
// // res.redirect("/listings");
// // };

// // module.exports.renderEditForm = async (req, res) => {
// //     let { id } = req.params;
// //     const listing = await Listing.findById(id);
// //     if(!listing){
// //         req.flash("error", "Listing you requested for doesn't exist!");
// //         res.redirect("/listings");
// //     }
// //     let originalImageUrl = listing.image.url;
// //     originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250")
// //     res.render("listings/edit.ejs", { listing, originalImageUrl });
// // };

// // module.exports.updateListing = async (req, res) => {
// //     let { id } = req.params; // This line extracts the id parameter
// //     // let listing = await Listing.findById(id);
// //     // if(!listing.owner._id.equals(res.locals.currUser._id)){
// //     //     req.flash("error", "You don't have Access/Permission to Edit!");
// //     //     res.redirect(`/listings/${id}`);
// //     // }
// //     let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
// //     if(typeof req.file !== "undefined"){
// //         let url = req.file.path;
// //         let filename = req.file.filename;
// //         listing.image = {url, filename};
// //         await listing.save();
// //     }
// //     req.flash("success", "Listing Updated!");
// //     res.redirect(`/listings/${id}`);
// // };

// // module.exports.destroyListing = async (req, res, next) => {
// //     // try {
// //         let { id } = req.params;
// //         let deletedListing = await Listing.findByIdAndDelete(id);
// //         if (!deletedListing) {
// //             req.flash("error", "Listing not found");
// //             return res.redirect("/listings");
// //         }
// //         req.flash("success", "Listing Deleted!");
// //         res.redirect("/listings");
// //     // } catch (err) {
// //     //     next(err); // Pass ccthe error to the error handling middleware
// //     // }
// // };




// // const { TLSSocket } = require('tls');

// // // Set the maximum number of listeners for TLSSocket
// // TLSSocket.setMaxListeners(15); // Set to an appropriate value

// // const express = require("express");
// // const router = express.Router();

// // const wrapAsync = require("../utils/wrapAsync.js");
// // const Listing = require("../models/listing.js");
// // const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// // const listingController = require("../controllers/listings.js");
// // //storage

// // const multer  = require('multer')
// // const { storage } = require("../cloudConfig.js");
// // const upload = multer({ storage });
// // ///
// // router.route("/")
// // .get(wrapAsync(listingController.index)) //index
// // .post(
// //     isLoggedIn,
// //         upload.single('listing[image]'),
// //         validateListing,
// //         wrapAsync(listingController.createListing) // create
// // );
// // // .post(upload.single('listing[image]'), (req, res ) => {
// // //     res.send(req.file);
// // //   });
// // //new Route
// // router.get("/new", isLoggedIn, listingController.renderNewForm);

// // router.route("/:id")
// // .get(wrapAsync(listingController.showListing))
// // .put(
// //     isLoggedIn,
// //     isOwner,
// //     upload.single('listing[image]'),
// //     validateListing,
// //     wrapAsync(listingController.updateListing)
// // )
// // .delete(
// //     isLoggedIn,
// //     isOwner,
// //     wrapAsync(listingController.destroyListing)
// // );

// // // Edit Route
// // router.get("/:id/edit",
// //      isLoggedIn,
// //      isOwner,
// //     wrapAsync(listingController.renderEditForm));


// // module.exports = router;

// //00000000000000000000000000000000


// // const Listing = require("./models/listing");
// // const Review = require("./models/review");
// // const ExpressError = require("./utils/ExpressError.js");
// // const {listingSchema, reviewSchema } = require("./schema.js");

// // module.exports.isLoggedIn = (req, res, next) => {
// //     if (!req.isAuthenticated()) {
// //         req.session.redirectUrl = req.originalUrl;
// //         req.flash("error", "You must be logged in to Create Listing!");
// //         return res.redirect("/login");
// //     }
// //     next();
// // };

// // module.exports.saveRedirectUrl = (req, res, next) => {
// //     if (req.session.redirectUrl) {
// //         res.locals.redirectUrl = req.session.redirectUrl; 
// //     }
// //     next();
// // };
// // // owner
// // // module.exports.isOwner = async (req, res, next) => {
// // //     let { id } = req.params;
// // //     let listing = await Listing.findById(id);
// // //         if(!listing.owner._id.equals(res.locals.currUser._id)){
// // //             req.flash("error", "You aren't the Owner of the Listing, you don't have Access/Permission to Edit and Delete!");
// // //             res.redirect(`/listings/${id}`);
// // //         }
// // //         next();
// // // }

// // module.exports.isOwner = async (req, res, next) => {
// //     try {
// //         let { id } = req.params;
// //         let listing = await Listing.findById(id);
        
// //         if (!listing) {
// //             req.flash("error", "Listing not found");
// //             return res.redirect("/listings");
// //         }

// //         if (!listing.owner || !res.locals.currUser || !listing.owner._id.equals(res.locals.currUser._id)) {
// //             req.flash("error", "You aren't the Owner of the Listing, you don't have Access/Permission to Edit and Delete!");
// //             return res.redirect(`/listings/${id}`);
// //         }

// //         next();
// //     } catch (err) {
// //         next(err); // Pass the error to the error handling middleware
// //     }
// // }


// // module.exports.validateListing = (req, res, next) => {
// //     let { error } = listingSchema.validate(req.body);
// //             if(error){
// //                 let errMsg = error.details.map((el) => el.message).join(",");
// //                 throw new ExpressError(400, errMsg);
// //             } else {
// //                 next();
// //             }
// // };

// // module.exports.validateReview = (req, res, next) => {
// //     let { error } = reviewSchema.validate(req.body);
// //             if(error){
// //                 let errMsg = error.details.map((el) => el.message).join(",");
// //                 throw new ExpressError(400, errMsg);
// //             } else {
// //                 next();
// //             }
// // };

// // module.exports.isReviewAuthor = async (req, res, next) => {
// //     let { id, reviewId } = req.params;
// //     let review = await Review.findById(reviewId);
// //         if(!review.author._id.equals(res.locals.currUser._id)){
// //             req.flash("error", "You aren't the Author of the Review to Delete");
// //             return res.redirect(`/listings/${id}`);
// //         }
// //         next();
// // }
// // module.exports.isReviewAuthor = async (req, res, next) => {
// //     let { id, reviewId } = req.params;
// //     let review = await Review.findById(reviewId);
// //         if(!review.author._id.equals(res.locals.currUser._id)){
// //             req.flash("error", "You aren't the Author of the Review to Delete");
// //             return res.redirect(`/listings/${id}`);
// //         }
// //         next();
// // };


// //lllllllllllllllllllllll

// // const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;

// // const listingSchema = new Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //   },
// //   description: String,
// //   image: {
// //     url: String,
// //     filename: String,

// //     // default:
// //     //   "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     // set: (v) => {
// //     //   if (typeof v === 'object' && v.url) {
// //     //     return v.url; // Assuming 'url' is the property holding the image URL
// //     //   } else if (typeof v === 'string') {
// //     //     return v;
// //     //   } else {
// //     //     return "";
// //     //   }
// //     // },
// //   },
// //   price: Number,
// //   location: String,
// //   country: String,
// //   reviews: [
// //     {
// //       type: Schema.Types.ObjectId,
// //       ref: "Review",
// //     },
// //   ],
// //   owner: {
// //     type: Schema.Types.ObjectId,
// //     ref: "User",
// //   },
// // });

// // // category: {
// // //   type: String,
// // //   enum: ["mountain", "beach"]
// // // }

// // listingSchema.post("findOneAndDelete", async (listing) => {
// //   if(listing){
// //     await Review.deleteMany({_id: {$in: listing.reviews}});
// //   }
// // });

// // const Listing = mongoose.model("Listing", listingSchema);
// // module.exports = Listing;



// //view show

// // <!-- <% layout("/layouts/boilerplate") %>
// // <div class="row mt-3">
// //   <div class="col-8 offset-3">
// //     <h3> <b><%= listing.title %></b></h3>
// //   </div>
// // <div class="card col-6 offset-3 show-card listing-card">
// //   <img src="<%= listing.image.url %>" class="card-img-top show-img" alt="listing_image">
// //   <div class="card-body">
// //     <p class="card-text">
// //       <br>
// //       <i> Owned By: <%= listing.owner.username %></i>
// //     </p>
// //     <p class="card-text"><%= listing.description %> </p>
// //     <p class="card-text">&#8377; <%= listing.price.toLocaleString("en-IN") %> </p>
// //     <p class="card-text"><%= listing.location %> </p>
// //     <p class="card-text"><%= listing.country %> </p>
// //   </div>
// // </div>

// // <br />
// // <% if(currUser && currUser._id.equals(listing.owner._id)) { %>
// //   <div class="btns">
// //     <a href="/listings/<%= listing._id %>/edit" 
// //       class="btn btn-dark col-1 offset-3 edit-btn"
// //       >Edit</a>
// //     <form method="POST" action="/listings/<%= listing._id %>?_method=DELETE">
// //       <button class="btn btn-dark offset-5">Delete</button>
// //     </form>
// //   </div>
// //   <% } %>

// //   <div class="col-8 offset-3 mb-3">
// //     <hr>
// //     <% if(currUser) { %>
// //     <h4>Leave a Review...</h4>
// //     <form action="/listings/<%= listing.id %>/reviews" 
// //       method="POST"
// //       novalidate
// //       class="needs-validation">

// //     //  <div class="md-3 mt-3"> 
// //     //    <label for="rating" class="form-label">Rating</label>
// //     //    <input type="range" min="1" max="5" id="rating" name="review[rating]" class="form-range">
// //       </div>
// //       <div class="md-3 mt-3"> 
// //         <label for="review[rating]" class="form-label">Rating</label>
// //       <fieldset class="starability-slot">
// //         <input type="radio" id="no-rate" class="input-no-rate" name="review[rating]" value="1" checked aria-label="No rating." />
// //         <input type="radio" id="first-rate1" name="review[rating]" value="1" />
// //         <label for="first-rate1" title="Terrible">1 star</label>
// //         <input type="radio" id="first-rate2" name="review[rating]" value="2" />
// //         <label for="first-rate2" title="Not good">2 stars</label>
// //         <input type="radio" id="first-rate3" name="review[rating]" value="3" />
// //         <label for="first-rate3" title="Average">3 stars</label>
// //         <input type="radio" id="first-rate4" name="review[rating]" value="4" />
// //         <label for="first-rate4" title="Very good">4 stars</label>
// //         <input type="radio" id="first-rate5" name="review[rating]" value="5" />
// //         <label for="first-rate5" title="Amazing">5 stars</label>
// //       </fieldset>
// //       </div>
// //       <div class="mb-3 mt-3">
// //         <label for="comment" class="form-label">Comments</label>
// //         <textarea 
// //         name="review[comment]" 
// //         id="comment" 
// //         rows="5"
// //         cols="30"
// //         class="form-control"
// //         required       
// //         > 
// //         </textarea>
// //         <div class="invalid-feedback">Please add some comments for review</div>
               
// //       </div>
// //       <div>
// //         <button class="btn btn-outline-dark">Submit</button>
// //       </div>
// //     </form>
// //     <hr/>
// //   <% } %>
// //     <p><b>All Reviews</b></p>
// //     <div class="row">
// //       <% for(review of listing.reviews ) { %> 
// //         <div class="card col-5 ms-3 mb-3">
// //           <div class="card-body">
// //             <h5 class="card-title">@<%= review.author.username %></h5>
// //               <p class="starability-result card-text" data-rating="<%= review.rating %>"></p>
// //             <p class="card-text"> <%= review.comment %> </p> 
// //             <form 
// //               class="mb-3"
// //               method="POST"
// //               action="/listings/<%= listing._id %>/reviews/<%= review._id %>?_method=DELETE">
// //               <button class="btn btn-sm btn-dark">Delete</button>
// //             </form>
// //           </div>
// //         </div>
// //       <% } %>
// //     </div>
// //   </div>
// // </div> -->


// const Listing = require("../models/listing");
// const { bookingSchema } = require("../schema.js");
// const ExpressError = require("../utils/ExpressError.js");

// module.exports.index = async (req, res) => {
//     const listings = await Listing.find({});
//     res.render("listings/index", { allListings: listings });
//   };

// module.exports.createListing = async (req, res) => {
//   const listing = new Listing(req.body.listing);
//   listing.owner = req.user._id;
//   listing.image = { url: req.file.path, filename: req.file.filename };
//   await listing.save();
//   req.flash("success", "Successfully created a new listing!");
//   res.redirect(`/listings/${listing._id}`);
// };

// module.exports.showListing = async (req, res) => {
//   const listing = await Listing.findById(req.params.id).populate("reviews").populate("owner");
//   if (!listing) {
//     req.flash("error", "Cannot find that listing!");
//     return res.redirect("/listings");
//   }
//   res.render("listings/show", { listing });
// };

// module.exports.renderNewForm = (req, res) => {
//   res.render("listings/new");
// };

// module.exports.renderEditForm = async (req, res) => {
//   const listing = await Listing.findById(req.params.id);
//   if (!listing) {
//     req.flash("error", "Cannot find that listing!");
//     return res.redirect("/listings");
//   }
//   res.render("listings/edit", { listing });
// };

// module.exports.updateListing = async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   if (req.file) {
//     listing.image = { url: req.file.path, filename: req.file.filename };
//   }
//   await listing.save();
//   req.flash("success", "Successfully updated listing!");
//   res.redirect(`/listings/${listing._id}`);
// };

// module.exports.destroyListing = async (req, res) => {
//   const { id } = req.params;
//   await Listing.findByIdAndDelete(id);
//   req.flash("success", "Successfully deleted listing!");
//   res.redirect("/listings");
// };

// module.exports.bookListing = async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   const { error } = bookingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   }
//   const booking = {
//     user: req.user._id,
//     name: req.body.name,
//     aadharNumber: req.body.aadharNumber,
//     dateOfBooking: req.body.dateOfBooking,
//     dateOfExit: req.body.dateOfExit
//   };
//   listing.bookings.push(booking);
//   await listing.save();
//   req.flash("success", "Successfully booked the listing!");
//   res.redirect(`/listings/${listing._id}`);
// };



// module.exports.filterByCategory = async (req, res) => {
//     const category = req.params.category;
//     const listings = await Listing.find({ category });
//     res.render("listings/index", { allListings: listings });
//   };


//   const express = require("express");
// const router = express.Router();

// const wrapAsync = require("../utils/wrapAsync.js");
// const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// const listingController = require("../controllers/listings.js");

// // Storage
// const multer = require('multer');
// const { storage } = require("../cloudConfig.js");
// const upload = multer({ storage });

// router.route("/")
//   .get(wrapAsync(listingController.index)) // Index
//   .post(
//     isLoggedIn,
//     upload.single('listing[image]'),
//     validateListing,
//     wrapAsync(listingController.createListing) // Create
//   );

// // New Route
// router.get("/new", isLoggedIn, listingController.renderNewForm);

// // Filter Route
// router.get("/category/:category", wrapAsync(listingController.filterByCategory));

// router.route("/:id")
//   .get(wrapAsync(listingController.showListing))
//   .put(
//     isLoggedIn,
//     isOwner,
//     upload.single('listing[image]'),
//     validateListing,
//     wrapAsync(listingController.updateListing)
//   )
//   .delete(
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.destroyListing)
//   );

// // Book Route
// router.post("/:id/book", isLoggedIn, wrapAsync(listingController.bookListing));

// // Edit Route
// router.get("/:id/edit",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.renderEditForm)
// );

// module.exports = router;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   aadharNumber: {
//     type: String,
//     required: true,
//   },
//   dateOfBooking: {
//     type: Date,
//     required: true,
//   },
//   dateOfExit: {
//     type: Date,
//     required: true,
//   }
// });

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     url: String,
//     filename: String,
//   },
//   price: Number,
//   location: String,
//   country: String,
//   category: {
//     type: String,
//     enum: ["mountain", "beach", "city", "forest"], // Add more categories as needed
//     default: "city"
//   },
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
//   bookings: [bookingSchema]
// });

// listingSchema.post("findOneAndDelete", async (listing) => {
//   if (listing) {
//     await Review.deleteMany({ _id: { $in: listing.reviews } });
//   }
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

// <% layout("/layouts/boilerplate") %>
// <div class="row <form action="/listings/<%= listing._id %>/book" method="POST">
//   <div class="mb-3">
//     <label for="name" class="form-label">Name</label>
//     <input type="text" class="form-control" id="name" name="booking[name]" required>
//   </div>
//   <div class="mb-3">
//     <label for="aadharNumber" class="form-label">Aadhar Number</label>
//     <input type="text" class="form-control" id="aadharNumber" name="booking[aadharNumber]" required>
//   </div>
//   <div class="mb-3">
//     <label for="dateOfBooking" class="form-label">Date of Booking</label>
//     <input type="date" class="form-control" id="dateOfBooking" name="booking[dateOfBooking]" required>
//   </div>
//   <div class="mb-3">
//     <label for="dateOfExit" class="form-label">Date of Exit</label>
//     <input type="date" class="form-control" id="dateOfExit" name="booking[dateOfExit]" required>
//   </div>
//   <button type="submit" class="btn btn-primary">Book</button>
// </form>

// const Listing = require("./models/listing");
// const Review = require("./models/review");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema, bookingSchema } = require("./schema.js");

// module.exports.isLoggedIn = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     req.session.redirectUrl = req.originalUrl;
//     req.flash("error", "You must be logged in to Create Listing!");
//     return res.redirect("/login");
//   }
//   next();
// };

// module.exports.saveRedirectUrl = (req, res, next) => {
//   if (req.session.redirectUrl) {
//     res.locals.redirectUrl = req.session.redirectUrl;
//   }
//   next();
// };

// module.exports.isOwner = async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
    
//     if (!listing) {
//       req.flash("error", "Listing not found");
//       return res.redirect("/listings");
//     }

//     if (!listing.owner || !res.locals.currUser || !listing.owner._id.equals(res.locals.currUser._id)) {
//       req.flash("error", "You aren't the Owner of the Listing, you don't have Access/Permission to Edit and Delete!");
//       return res.redirect(`/listings/${id}`);
//     }

//     next();
//   } catch (err) {
//     next(err); // Pass the error to the error handling middleware
//   }
// };

// module.exports.validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

// module.exports.validateReview = (req, res, next) => {
//   let { error } = reviewSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

// module.exports.isReviewAuthor = async (req, res, next) => {
//   let { id, reviewId } = req.params;
//   let review = await Review.findById(reviewId);
//   if (!review.author._id.equals(res.locals.currUser._id)) {
//     req.flash("error", "You aren't the Author of the Review to Delete");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// };

// show----------------------------------------------------------------

// <!-- <% layout("/layouts/boilerplate") %>
// <div class="row mt-3">
//   <div class="col-8 offset-3">
//     <h3> <b><%= listing.title %></b></h3>
//   </div>
//   <div class="card col-6 offset-3 show-card listing-card">
//     <img src="<%= listing.image.url %>" class="card-img-top show-img" alt="listing_image">
//     <div class="card-body">
//       <p class="card-text">
//         <br>
//         <i> Owned By: <%= listing.owner.username %></i>
//       </p>
//       <p class="card-text"><%= listing.description %> </p>
//       <p class="card-text">&#8377; <%= listing.price.toLocaleString("en-IN") %> </p>
//       <p class="card-text"><%= listing.location %> </p>
//       <p class="card-text"><%= listing.country %> </p>
//     </div>
//   </div>

//   <br />
//   <% if(currUser && currUser._id.equals(listing.owner._id)) { %>
//     <div class="btns">
//       <a href="/listings/<%= listing._id %>/edit" 
//         class="btn btn-dark col-1 offset-3 edit-btn"
//         >Edit</a>
//       <form method="POST" action="/listings/<%= listing._id %>?_method=DELETE">
//         <button class="btn btn-dark offset-5">Delete</button>
//       </form>
//     </div>
//   <% } %>

//   <div class="col-8 offset-3 mb-3">
//     <hr>
//     <% if(currUser) { %>
//       <h4>Leave a Review...</h4>
//       <form action="/listings/<%= listing.id %>/reviews" 
//         method="POST"
//         novalidate
//         class="needs-validation">

//         <div class="md-3 mt-3"> 
//           <label for="review[rating]" class="form-label">Rating</label>
//           <fieldset class="starability-slot">
//             <input type="radio" id="no-rate" class="input-no-rate" name="review[rating]" value="1" checked aria-label="No rating." />
//             <input type="radio" id="first-rate1" name="review[rating]" value="1" />
//             <label for="first-rate1" title="Terrible">1 star</label>
//             <input type="radio" id="first-rate2" name="review[rating]" value="2" />
//             <label for="first-rate2" title="Not good">2 stars</label>
//             <input type="radio" id="first-rate3" name="review[rating]" value="3" />
//             <label for="first-rate3" title="Average">3 stars</label>
//             <input type="radio" id="first-rate4" name="review[rating]" value="4" />
//             <label for="first-rate4" title="Very good">4 stars</label>
//             <input type="radio" id="first-rate5" name="review[rating]" value="5" />
//             <label for="first-rate5" title="Amazing">5 stars</label>
//           </fieldset>
//         </div>
//         <div class="mb-3 mt-3">
//           <label for="comment" class="form-label">Comments</label>
//           <textarea 
//             name="review[comment]" 
//             id="comment" 
//             rows="5"
//             cols="30"
//             class="form-control"
//             required       
//           ></textarea>
//           <div class="invalid-feedback">Please add some comments for review</div>
//         </div>
//         <div>
//           <button class="btn btn-outline-dark">Submit</button>
//         </div>
//       </form>
//       <hr/>
//     <% } %>
//     <p><b>All Reviews</b></p>
//     <div class="row">
//       <% for(review of listing.reviews ) { %> 
//         <div class="card col-5 ms-3 mb-3">
//           <div class="card-body">
//             <h5 class="card-title">@<%= review.author.username %></h5>
//             <p class="starability-result card-text" data-rating="<%= review.rating %>"></p>
//             <p class="card-text"> <%= review.comment %> </p> 
//             <form 
//               class="mb-3"
//               method="POST"
//               action="/listings/<%= listing._id %>/reviews/<%= review._id %>?_method=DELETE">
//               <button class="btn btn-sm btn-dark">Delete</button>
//             </form>
//           </div>
//         </div>
//       <% } %>
//     </div>
//   </div>
// </div> -->
// <!-- 
//  <% layout("layouts/boilerplate") %>

// <h1><%= listing.title %></h1>
// <p><%= listing.description %></p>
// <img src="<%= listing.image.url %>" alt="<%= listing.title %>">

// <p>Category: <%= listing.category %></p>
// <p>Price: $<%= listing.price %></p>
// <p>Location: <%= listing.location %>, <%= listing.country %></p>

// <% if (isOwner) { %>
//   <h2>Bookings</h2>
//   <ul>
//     <% listing.bookings.forEach(booking => { %>
//       <li><%= booking.name %> - <%= booking.dateOfBooking.toDateString() %> to <%= booking.dateOfExit.toDateString() %></li>
//     <% }) %>
//   </ul>
// <% } else if (currentUser) { %>
//   <a href="/listings/<%= listing._id %>/book" class="btn btn-primary">Book this Listing</a>
// <% } %>

// <div class="col-8 offset-3 mb-3">
//   <hr>
//   <% if (currUser) { %>
//     <h4>Leave a Review...</h4>
//     <form action="/listings/<%= listing.id %>/reviews" method="POST" novalidate class="needs-validation">
//       <div class="md-3 mt-3"> 
//         <label for="review[rating]" class="form-label">Rating</label>
//         <fieldset class="starability-slot">
//            Your rating input goes here 
//         </fieldset>
//       </div>
//       <div class="mb-3 mt-3">
//         <label for="comment" class="form-label">Comments</label>
//         <textarea name="review[comment]" id="comment" rows="5" cols="30" class="form-control" required></textarea>
//         <div class="invalid-feedback">Please add some comments for review</div>
//       </div>
//       <div>
//         <button class="btn btn-outline-dark">Submit</button>
//       </div>
//     </form>
//     <hr/>
//   <% } %>
//   <p><b>All Reviews</b></p>
//   <div class="row">
//     <% for (review of listing.reviews) { %> 
//       <div class="card col-5 ms-3 mb-3">
//         <div class="card-body">
//           <h5 class="card-title">@<%= review.author.username %></h5>
//           <p class="starability-result card-text" data-rating="<%= review.rating %>"></p>
//           <p class="card-text"> <%= review.comment %> </p> 
//           <form class="mb-3" method="POST" action="/listings/<%= listing._id %>/reviews/<%= review._id %>?_method=DELETE">
//             <button class="btn btn-sm btn-dark">Delete</button>
//           </form>
//         </div>
//       </div>
//     <% } %>
//   </div>
// </div> -->


// <!--  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm -->
// <!-- 
//  <% layout("layouts/boilerplate") %>

// <h1><%= listing.title %></h1>
// <p><%= listing.description %></p>
// <img src="<%= listing.image.url %>" alt="<%= listing.title %>">

// <p>Category: <%= listing.category %></p>
// <p>Price: $<%= listing.price %></p>
// <p>Location: <%= listing.location %>, <%= listing.country %></p>

// <% if (isOwner) { %>
//   <h2>Bookings</h2>
//   <ul>
//     <% listing.bookings.forEach(booking => { %>
//       <li><%= booking.name %> - <%= booking.dateOfBooking.toDateString() %> to <%= booking.dateOfExit.toDateString() %></li>
//     <% }) %>
//   </ul>
// <% } else if (currentUser) { %>
//   <a href="/listings/<%= listing._id %>/book" class="btn btn-primary">Book this Listing</a>
// <% } %> 


// //show=======================================================
// <!-- <% layout("/layouts/boilerplate.ejs") %>
// <style>
//   .filters {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//   }
//   .filter {
//     text-align: center;
//     margin-right: 2rem;
//     margin-top: 2rem;
//     opacity: 0.7;
//   }
//   .filter:hover {
//     opacity: 1;
//     cursor: pointer;
//   }
//   .filter p {
//     font-size: 0.8rem;
//   }
//   .tax-info {
//     display: none;
//   }
//   .tax-toggle {
//     border: 1px solid black;
//     border-radius: 1rem;
//     height: 3.25rem;
//     padding: 1rem;
//     margin-left: 2rem;
//     display: flex;
//     align-items: center;
//   }
// </style>

// <div class="filters">
//   <a href="/" class="filter">
//     <div><i class="fa fa-home"></i></div>
//     <p>All</p>
//   </a>
//   <a href="/category/trending" class="filter">
//     <div><i class="fa-solid fa-fire"></i></div>
//     <p>Trending</p>
//   </a>
//   <a href="/category/rooms" class="filter">
//     <div><i class="fa-solid fa-bed"></i></div>
//     <p>Rooms</p>
//   </a>
//   <a href="/category/iconic_city" class="filter">
//     <div><i class="fa-solid fa-mountain-city"></i></div>
//     <p>Iconic city</p>
//   </a>
//   <a href="/category/mountains" class="filter">
//     <div><i class="fa-solid fa-mountain"></i></div>
//     <p>Mountains</p>
//   </a>
//   <a href="/category/castles" class="filter">
//     <div><i class="fa-brands fa-fort-awesome-alt"></i></div>
//     <p>Castles</p>
//   </a>
//   <a href="/category/amazing_pools" class="filter">
//     <div><i class="fa-solid fa-person-swimming"></i></div>
//     <p>Amazing pools</p>
//   </a>
//   <a href="/category/camping" class="filter">
//     <div><i class="fa-solid fa-campground"></i></div>
//     <p>Camping</p>
//   </a>
//   <a href="/category/farms" class="filter">
//     <div><i class="fa-solid fa-tractor"></i></div>
//     <p>Farms</p>
//   </a>
//   <a href="/category/boats" class="filter">
//     <div><i class="fa-solid fa-ship"></i></div>
//     <p>Boats</p>
//   </a>
//   <a href="/category/domes" class="filter">
//     <div><i class="fa-solid fa-igloo"></i></div>
//     <p>Domes</p>
//   </a>
//   <div class="tax-toggle">
//     <div class="form-check-reverse form-switch">
//       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
//       <label class="form-check-label" for="flexSwitchCheckDefault">Display total after taxes</label>
//     </div>
//   </div>
// </div>

// <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mt-3">
//   <% for (let listing of allListings) { %>
//     <a href="/listings/<%= listing._id %>" class="listing-link">
//       <div class="card col listing-card">
//         <img src="<%= listing.image.url %>" 
//              class="card-img-top" 
//              alt="listing_image" 
//              style="height: 20rem">
//         <div class="card-img-overlay">Click for Details</div>
//         <div class="card-body">
//           <p class="card-text">
//             <b><%= listing.title %></b> <br>
//             <% if (listing.price !== null && listing.price !== undefined) { %>
//               &#8377; <%= listing.price.toLocaleString("en-IN") %> / night
//             <% } else { %>
//               Price not available
//             <% } %>
//             <i class="tax-info"> &nbsp; +18% GST</i>
//           </p>
//         </div>
//       </div>
//     </a>
//   <% } %>
// </div>

// <script>
//   document.addEventListener("DOMContentLoaded", function() {
//     let taxSwitch = document.getElementById("flexSwitchCheckDefault");
//     taxSwitch.addEventListener("change", function() {
//       let taxInfo = document.getElementsByClassName("tax-info");
//       for (let info of taxInfo) {
//         info.style.display = taxSwitch.checked ? "inline" : "none";
//       }
//     });
//   });
// </script> -->


//new

// <!-- <% layout("/layouts/boilerplate") %>

// <div class="row mt-3">
//     <div class="col-8 offset-2">
//         <br><br>
//     <h3>Create a new listing</h3>
//     <form method="POST" action="/listings" class="needs-validation" novalidate enctype="multipart/form-data">
//         <div class="mb-3">
//             <label for="title" class="form-label">Title</label>
//             <input name="listing[title]" 
//             placeholder="enter title" 
//             type="text" 
//             class="form-control" 
//             required
//            >
//             <div class="valid-feedback"></div>
//         </div>

//         <div class="mb-3">
//             <label for="description" class="form-label">Description</label>
//             <textarea 
//             name="listing[description]"
//             class="form-control"
//             required
//             ></textarea>
            
//         </div>

//         <div class="mb-3">
//             <label for="image" class="form-label">Upload Listing Image</label>
//             <input name="listing[image]"
//                 type="file" 
//                 class="form-control" >
                
//         </div>
//         <div class="form-group ">
//             <label for="category">Category</label>
//             <select class="form-control" id="category" name="listing[category]" required>
//               <option value="trending">Trending</option>
//               <option value="rooms">Rooms</option>
//               <option value="iconic_city">Iconic City</option>
//               <option value="mountains">Mountains</option>
//               <option value="castles">Castles</option>
//               <option value="amazing_pools">Amazing Pools</option>
//               <option value="camping">Camping</option>
//               <option value="farms">Farms</option>
//               <option value="boats">Boats</option>
//               <option value="domes">Domes</option>
//             </select>
//           </div>
//         <div class="row">
//             <div class="mb-3 col-md-4">
//                 <label for="price" class="form-label">Price</label>
//                 <input name="listing[price]" placeholder="enter price" 
//                 class="form-control" 
//                 required
//                 >
//             </div>
            
//             <div class="mb-3 col-md-8">
//                 <label for="country" class="form-label">Country</label>
//                 <input name="listing[country]" placeholder="enter country" type="text" class="form-control"
//                 required
//                 >
                
//             </div> 

//         </div>
        
//         <div class="mb-3">
//             <label for="location" class="form-label">Location</label>
//             <input name="listing[location]" placeholder="enter location" type="text" class="form-control"
//             required
//             >
            
//         </div>
//         <button class="btn-dark add-btn mt-3">Add</button>
//         <br><br>
//     </form>
// </div>
// </div> -->
// <!-- <% layout("/layouts/boilerplate") %>

// <div class="row mt-3">
//     <div class="col-8 offset-2">
//         <br><br>
//     <h3>Create a new listing</h3>
//     <form method="POST" action="/listings" class="needs-validation" novalidate enctype="multipart/form-data">
//         <div class="mb-3">
//             <label for="title" class="form-label">Title</label>
//             <input name="listing[title]" 
//             placeholder="enter title" 
//             type="text" 
//             class="form-control" 
//             required
//            >
//             <div class="valid-feedback"></div>
//         </div>

//         <div class="mb-3">
//             <label for="description" class="form-label">Description</label>
//             <textarea 
//             name="listing[description]"
//             class="form-control"
//             required
//             ></textarea>
            
//         </div>

//         <div class="mb-3">
//             <label for="image" class="form-label">Upload Listing Image</label>
//             <input name="listing[image]"
//                 type="file" 
//                 class="form-control" >
                
//         </div>
//         <div class="form-group ">
//             <label for="category">Category</label>
//             <select class="form-control" id="category" name="listing[category]" required>
//               <option value="trending">Trending</option>
//               <option value="rooms">Rooms</option>
//               <option value="iconic_city">Iconic City</option>
//               <option value="mountains">Mountains</option>
//               <option value="castles">Castles</option>
//               <option value="amazing_pools">Amazing Pools</option>
//               <option value="camping">Camping</option>
//               <option value="farms">Farms</option>
//               <option value="boats">Boats</option>
//               <option value="domes">Domes</option>
//             </select>
//           </div>
//         <div class="row">
//             <div class="mb-3 col-md-4">
//                 <label for="price" class="form-label">Price</label>
//                 <input name="listing[price]" placeholder="enter price" 
//                 class="form-control" 
//                 required
//                 >
//             </div>
            
//             <div class="mb-3 col-md-8">
//                 <label for="country" class="form-label">Country</label>
//                 <input name="listing[country]" placeholder="enter country" type="text" class="form-control"
//                 required
//                 >
                
//             </div> 

//         </div>
        
//         <div class="mb-3">
//             <label for="location" class="form-label">Location</label>
//             <input name="listing[location]" placeholder="enter location" type="text" class="form-control"
//             required
//             >
            
//         </div>
//         <button class="btn-dark add-btn mt-3">Add</button>
//         <br><br>
//     </form>
// </div>
// </div> --></br>

// Models

// Bookings Model

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   aadharNumber: {
//     type: String,
//     required: true,
//   },
//   dateOfBooking: {
//     type: Date,
//     required: true,
//   },
//   dateOfExit: {
//     type: Date,
//     required: true,
//   }
// });

// // Listings Model
// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     url: String,
//     filename: String,
//   },
//   price: Number,
//   location: String,
//   country: String,
//   category: {
//     type: String,
//     enum: [ "trending",
//     "rooms",
//     "iconic_city",
//     "mountains",
//     "castles",
//     "amazing_pools",
//     "camping",
//     "farms",
//     "boats",
//     "domes",], // Add more categories as needed
//     default: "rooms",
//     required: true,
//   },
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
//   bookings: [bookingSchema],

//   geometry: {
//     type: {
//       type: String, // Don't do `{ location: { type: String } }`
//       enum: ['Point'], // 'location.type' must be 'Point'
//       // required: true
//     },
//     coordinates: {
//       type: [Number],
//       // required: true,
//     }
//   }
// });

// listingSchema.post("findOneAndDelete", async (listing) => {
//   if (listing) {
//     await Review.deleteMany({ _id: { $in: listing.reviews } });
//   }
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

// // Reviews Model

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//     comment: {
//         type: String,
//         required: true,
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 5,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now(),
//     },
//     author: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
// });

// module.exports = mongoose.model("Review", reviewSchema);

// // User Model
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     },
// });
// userSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model("User", userSchema);