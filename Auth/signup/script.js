//Helper functions
const addClass = (element, className) =>{
    element.classlist.add(className)
}
const removeClass = (element, className) =>{
    element.classlist.remove(className)
}
function isValidEmail(email) {
    // Regular expression pattern for email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
//Eventlistener and validation for getting otp form.
const userEmail = document.getElementById("user-email");
const getOptBtn = document.getElementById("otp-btn");
const validationText = document.querySelector("p.warning")
userEmail.addEventListener("input", ()=>{
    getOptBtn.style.backgroundColor = "#3EC1D5";
    if (userEmail.value.length < 1 || !isValidEmail(userEmail.value)) {
        getOtpBtn.style.backgroundColor = "#d3f1f5"
        getOptBtn.disabled = true;
    }
})
getOptBtn.addEventListener("click", function () {
    if (userEmail.value.length < 1) {
        validationText.innerHTML = "Email field can't be empty";
        validationText.classList.remove("hidden")
    }
    else {
        if (!isValidEmail(userEmail.value)){
            validationText.innerHTML = "Invalid email address";
            validationText.classList.remove("hidden");
        }
        else{
            document.querySelector(".otp-confirmation-comtainer").classList.remove("hidden");
            document.querySelector(".recieve-email-container").classList.add("hidden");
            document.querySelector(".top-message").innerHTML =  `An OTP has been sent to  ${userEmail.value} for verification. Kindly enter the OTP in the text box below.`
            document.getElementById("comapany-email").value = userEmail.value
        }
    }

})

//Eventlistener and validation for proceeding to main registration form

const confirmOtpBtn = document.getElementById("confirm-otp-btn");
const otpField = document.getElementById("recieved-otp");
confirmOtpBtn.addEventListener("click", ()=>{
    //add otp validation here
    document.querySelector(".registration-form-container").classList.remove("hidden");
    document.querySelector(".otp-confirmation-comtainer").classList.add("hidden")
    document.querySelector(".top-message").innerHTML =  `Let's get to know you.`
})
otpField.addEventListener("input", ()=>{
    confirmOtpBtn.style.backgroundColor = "#3EC1D5";
    if (otpField.value.length < 1) {confirmOtpBtn.style.backgroundColor = "#d3f1f5"
    }
})

//Eventlistener and validation for main registration form
const submitRegFormBtn = document.getElementById("submit-reg")
const regForm = document.getElementById("registration-form");
let inputs = regForm.querySelectorAll("input");

// Filter out the input elements that are buttons and not checkboxes
let filteredInputs = Array.from(inputs).filter(function(input) {
  return input.type !== "button" && input.type !== "checkbox" && input.type !== "tel";
});
function checkEmptyInput(params) {
    var isValid = true;
inputs.forEach(function(input) {
  if (input.type === "checkbox") {
    if (!input.checked) {
      isValid = false;
    }
  } else if (input.value.trim() === "") {
    isValid = false;
  }
});
return isValid;
}
inputs.forEach(element => {
    element.addEventListener("input", ()=>{
        if (checkEmptyInput) {
            submitRegFormBtn.style.backgroundColor = "#3EC1D5";
        } else {
            submitRegFormBtn.style.backgroundColor = "#d3f1f5";
        }
    })
});

document.getElementById("registration-form").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("lol")
    filteredInputs.forEach(input => {
        let inputVal = input.value.trim().length;
        let nextSibling = input.nextElementSibling;
        setTimeout(() => {
            nextSibling.innerHTML = ""; // Clear validation message
        }, 3000);
      if (inputVal === 0) {
        nextSibling.innerHTML = "This field is required"; // Print validation message
      } else {
        nextSibling.innerHTML = ""; // Clear validation message
      }
    });
})
document.getElementById("confirm-password").addEventListener("input", ()=>{
    if (document.getElementById("confirm-password").value === document.getElementById("password").value) {
        document.getElementById("confirm-password").nextElementSibling.innerHTML = ""
    } else if(document.getElementById("confirm-password").value !== document.getElementById("password").value){
        document.getElementById("confirm-password").nextElementSibling.innerHTML = "password does not match."
    }
})