
$(function() {
  $('button.submit').on('click', function() {
    let message = $('input[name="message"]').val();
    let latitude = $('input[name="latitude"]').val();
    let longitude = $('input[name="longitude"]').val();
    placePin(message, latitude, longitude);
  });
});


function placePin(message, lat, long) {
  
}
