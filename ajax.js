document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.querySelector('.rootButton')
  var secondButton = document.querySelector('.secondButton')

  rootButton.addEventListener('click', function () {

    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    })
    console.log(response);
  })
  secondButton.addEventListener('click', function (e) {

    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (response) {

      console.log(response);
      console.log(secondButton); //path[1] selects the parent element
      secondButton.parentNode.innerHTML += `<p>${response}</p>`

    })
    response.fail(function () {
      secondButton.parentNode.innerHTML += `<p>there was an error</p>`
    })
  })

});
