document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.querySelector('.rootButton');
  var secondButton = document.querySelector('.secondButton');
  var thirdButton = document.querySelector('.thirdButton');
  var fourthButton = document.querySelector('.fourthButton');
  var fifthButton = document.querySelector('.fifthButton');

  rootButton.addEventListener('click', function () {

    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
    console.log(response);
  });

  secondButton.addEventListener('click', function (e) {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (response) {
      console.log(response);
      console.log(secondButton); //path[1] selects the parent element
      secondButton.parentNode.append(response)
    })
  });

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
      console.log('always');
    })
  });

  fourthButton.addEventListener('click', function () {
    var response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Europe/Sofia'},
      dataType: 'text'
    }).done(function (response) {
      console.log(response);
      fourthButton.parentNode.innerHTML += `<p>${response}</p>`
    }).fail(function () {
      fourthButton.parentNode.append('there was an error')
    }).always(function () {
      console.log('always');
    })
  });

  fifthButton.addEventListener('click', function () {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function (response) {
      var list = document.createElement('ul')
      list.id = 'unordered'
      list.innerHTML = response
      fifthButton.parentNode.append(list)
      console.log(response);

    }).fail(function () {
      fifthButton.parentNode.append('there was an error')
    })
  });

});
