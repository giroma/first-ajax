document.addEventListener("DOMContentLoaded", function() {

  var response = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  })
  console.log(response);
});
