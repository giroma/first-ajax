document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.querySelector('.rootButton')

  rootButton.addEventListener('click', function () {

    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    })
    console.log(response);
  })
});
