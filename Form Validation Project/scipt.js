 var nameError = document.getElementById('name-error')
 var phoneError = document.getElementById('phone-error')
 var emailError = document.getElementById('email-error')
 var messageError = document.getElementById('message-error')
 var submitError = document.getElementById('submit-error')

document.getElementById("contact-name").addEventListener("keyup", validateName);

function validateName() {
  var name = document.getElementById("contact-name").value;
  var nameError = document.getElementById("name-error"); // Assuming there's an element with ID 'name-error' to display error messages

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Enter full name";
    return false;
  }

  nameError.innerHTML = '✅';
  return true;
}

 document.getElementById("contact-phone").addEventListener("keyup", validatePhone);
 function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  if (!phone.match(/^\d+$/)) {
    phoneError.innerHTML = "Only digits allowed";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "Phone no. should be 10 digits";
    return false;
  }
  phoneError.innerHTML = '✅';
  return true;
}
 

document.getElementById("contact-email").addEventListener("keyup", validateEmail);
function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Enter a valid email address";
    return false;
  }
  emailError.innerHTML = '✅';
  return true;
}


function validateMessage(){
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if(left>0){
    messageError.innerHTML= left + ' more characters required';
    return false;
  }
  messageError.innerHTML = '✅';
  return true;
}

document.getElementById("submitt").addEventListener("click", validateForm);

function validateForm(e){
  e.preventDefault(); // It submits the form from refreshing after submission
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
   
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
     return false;
  }
  submitError.innerHTML = 'Form Submitted Successfully ✅'
  submitError.style.color = 'seagreen'; 
  setTimeout(function(){
    submitError.style.display = 'none';
    document.getElementById("contact-name").value = '';
    document.getElementById("contact-phone").value = ''; 
    document.getElementById("contact-email").value = '';
    document.getElementById("contact-message").value = '';
    document.getElementById("phone-error").innerHTML = '';
    document.getElementById("name-error").innerHTML = '';
    document.getElementById("message-error").innerHTML = '';
    document.getElementById("email-error").innerHTML = '';
    
  }, 4000);  
  return true;
}

