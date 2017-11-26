let map;
let lastMarker;

// magic.js
$(document).ready(function() {
  onFormSubmit();


});

function initMap() {
  let uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
}

function placeMarker(latitude, longitude, message) {
  if(lastMarker) { lastMarker.setMap(null) };
  let location = {lat: latitude, lng: longitude};
  map.setCenter(location);
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });

  let infowindow = new google.maps.InfoWindow({
    content: message
  });
  marker.addListener('click', function() {
    console.log('clicked');
    infowindow.open(map, marker);
  });
  lastMarker = marker;
}

function onFormSubmit() {
  $('form').submit(function(event) {
    console.log('submitting');
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)

    let message = $('input[name=message]').val();
    let latitude = parseInt($('input[name=latitude]').val());
    let longitude = parseInt($('input[name=longitude]').val());

    placeMarker(latitude, longitude, message);

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
}

/*
function onFormSubmit() {
  // process the form
  $('form').submit(function(event) {
    console.log('submitting');
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'message'              : $('input[name=message]').val(),
      'latitude'             : $('input[name=latitude]').val(),
      'longitude'            : $('input[name=longitude]').val()
    };

    // process the form
    $.ajax({
      type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url         : 'controller.rb/post', // the url where we want to POST
      data        : JSON.stringify(formData), // our data object
      dataType    : 'json', // what type of data do we expect back from the server
      encode          : true
    })
    // using the done promise callback
    .done(function(data) {

      // log data to the console so we can see
      console.log(data);

      // here we will handle errors and validation messages
    });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
}
*/
