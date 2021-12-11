let form = document.getElementById('form');
let formName = document.getElementById('formName');
let formEmail = document.getElementById('formEmail');
let formPassword = document.getElementById('formPassword');
let submitButton = document.getElementById('submitButton');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
});
