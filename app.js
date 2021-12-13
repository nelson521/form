let form = document.getElementById('form');
let userName = document.getElementById('formName');
let formEmail = document.getElementById('formEmail');
let formPassword = document.getElementById('formPassword');
let submitButton = document.getElementById('submitButton');

class Information {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  greeting() {
    return `Welcome ${userName.value}`;
  }
}
// Add Event Listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const user1 = new Information(
    userName.value,
    formEmail.value,
    formPassword.value
  );

  console.log(user1.greeting());
});
