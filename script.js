'use strict';

function getDogImage() {
  let breed = document.getElementById("breed").value;
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(data) {
  let breed = document.getElementById("breed").value;
  if (data.status == "success") {
    $('#images').append(`<img src="${data.message}" class="results-img">`);
    console.log(data.message);
    $('#breed-display').html(`${breed}`);
    $('.results').removeClass('hidden');
    console.log('photo of a ' + breed + ' is displayed.');
  }
  else {
    $('.results').addClass('hidden');
    alert(`Sorry, I didn't recognize the breed ${breed}`);
  }
  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('#images').html('');
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});