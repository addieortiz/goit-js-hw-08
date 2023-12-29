// Import throttle from lodash
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

// Input
function handleInput(e) {
  e.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  console.log(formData);
}

form.addEventListener('input', throttle(handleInput, 500));

// Load
function handleLoad() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = savedData ? savedData.email : '';
  messageInput.value = savedData ? savedData.message : '';
}

window.addEventListener('load', handleLoad);

function handleSubmit(e) {
  e.preventDefault();
  console.log('Form Data:', formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}

form.addEventListener('submit, handleSubmit');

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', handleForm);

// let formData;

// function handleForm(event) {
//   // prevent from reloading and submission default
//   event.preventDefault();

//   // get form elements
//   const email = loginForm.elements.email;
//   const password = loginForm.elements.password;

//   // not empty field, collect field values
//   if (email.value.trim() === '' || password.value.trim() === '') {
//     // empty fields
//     alert('All fields must be filled in.');
//   } else {
//     formData = {
//       email: email.value,
//       password: password.value,
//     };
//   }

//   // Display object with entered data from complete form input
//   console.log(formData);

//   // Clear form once submitted
//   loginForm.reset();
// }
