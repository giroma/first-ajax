document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.querySelector('.rootButton')
  var secondButton = document.querySelector('.secondButton')
  var thirdButton = document.querySelector('.thirdButton')

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
      secondButton.parentNode.append('there was an error')
    })
    response.always(function () {
      console.log('finished');
    })
  })

  thirdButton.addEventListener('click', function () {
    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function (response) {
      console.log(response);
      thirdButton.parentNode.innerHTML += `<p>${response}</p>`
    }).fail(function () {
      thirdButton.parentNode.append('there was an error')
    }).always(function () {
      console.log('finished');
    })
  })

});
