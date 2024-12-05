// // Sign-in form submission
// const signInForm = document.querySelector('#sign-in-form');
// signInForm.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
  
//   // Perform sign-in logic here, e.g. send data to a server
//   console.log('Signing in with:', email, password);
// });

// // Sign-up form submission
// const signUpForm = document.querySelector('#sign-up-form');
// signUpForm.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const name = document.querySelector('#name').value;
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
  
//   // Perform sign-up logic here, e.g. send data to a server
//   console.log('Signing up with:', name, email, password);
// });

// Sign-in form submission
const signInForm = document.querySelector('#sign-in-form');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Perform sign-in logic here
  if (password === 'password123') {
    // Redirect to the home page with the default password
    window.location.href = '../index.html?defaultPassword=password123';
  } else {
    alert('Invalid password');
  }
});

// Sign-up form submission
const signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Perform sign-up logic here
  // For this example, we'll just redirect to the home page with the default password
  window.location.href = '../index.html/booking?defaultPassword=password123';
});