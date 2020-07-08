const form = document.getElementById('form');

const diepste = document.getElementById('diepstepunt');
const brandweertoegang = document.getElementById('brandweertoegang');
//const password = document.getElementById('password');
//const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkbrandweertoegangInput(input) {
  console.log(input);
  const re = /^([1-1000])$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Entered input not valid. Please enter a number between 1 and 1000');
  }
}

// Check email is valid
function checkdiepsteInput(input) {
  const re = /^([1-5000])$/;
  console.log(input);

  if (re.test(input)) {
    showSuccess(input);
  } else {
    showError(input, 'Entered input not valid. Please enter a number between 1 and 5000');
  }
}


// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  //checkRequired([username, email, password, password2]);
  //checkLength(username, 3, 15);
  checkbrandweertoegangInput(brandweertoegang);
  checkdiepsteInput(diepste);
  //checkEmail(email);
  //checkPasswordsMatch(password, password2);
});
