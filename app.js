let form = document.getElementById('form');
let formName = document.getElementById('formName');
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
    return `Welcome ${formName.value}`;
  }
}
// Add Event Listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const user1 = new Information(
    formName.value,
    formEmail.value,
    formPassword.value
  );

  console.log(user1.greeting());
});
