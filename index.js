const form = document.querySelector('.form-container');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('.error');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(password.value !== confirmPassword.value) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
    alert(`Congratulations to ${firstName.value}-${lastName.value} on your membership!`);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNumber.value = '';
    password.value = '';
    confirmPassword.value = '';
  }
});