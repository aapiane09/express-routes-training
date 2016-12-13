console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/pick-a-number/',
      data: $('#guess-number-form').serialize(),
      success: success,
      error: function(){
        console.log("Error!");
      }
    });//AJAX
  });//EVENT LISTENER

  $('#target-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/pick-a-number/',
      data: $('#target-number-form').serialize(),
      success: success,
      error: function(){
        console.log("Error!");
      }
    });//AJAX
  });//EVENT LISTENER
});//DOM

function success(data){
  console.log('success', data)
}
