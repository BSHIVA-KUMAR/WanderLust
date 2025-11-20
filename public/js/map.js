// Wait for DOM and mapboxgl to be ready
document.addEventListener('DOMContentLoaded', function() {
  if (typeof mapboxgl === 'undefined') {
    console.error('Mapbox GL JS library not loaded');
    return;
  }

  if (typeof mapToken !== 'undefined' && mapToken && typeof listing !== 'undefined' && listing && listing.geometry && listing.geometry.coordinates) {
    mapboxgl.accessToken = mapToken;
    
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: listing.geometry.coordinates, // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    // Add marker when map loads
    map.on('load', function() {
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h4>${listing.title}</h4><p>${listing.location}</p>`))
        .addTo(map);
    });
  } else {
    console.error('Map cannot be initialized: missing mapToken, listing, or coordinates');
  }
});