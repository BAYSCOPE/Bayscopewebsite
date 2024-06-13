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
           sendotp();
        }
    }

})


function sendotp(){
    let data = new FormData();
    data.append('email', userEmail.value)

  //import the request object script in the html  before this main script to send otp
  request.showloader(`sending OTP to  ${userEmail.value}`)
   request.sendRequest('POST', '/client/otp/send', data )
   .then( (data) => {
     request.succ(data)
     document.querySelector(".otp-confirmation-comtainer").classList.remove("hidden");
     document.querySelector(".recieve-email-container").classList.add("hidden");
     document.querySelector(".top-message").innerHTML =  `An OTP has been sent to  ${userEmail.value} for verification. Kindly enter the OTP in the text box below.`
     document.getElementById("comapany-email").value = userEmail.value
    } )
   .catch((error)=>{ request.err(error)})
    
}

//Eventlistener and validation for proceeding to main registration form

const confirmOtpBtn = document.getElementById("confirm-otp-btn");
const otpField = document.getElementById("recieved-otp");



confirmOtpBtn.addEventListener("click", ()=>{
    //add otp validation here
    if(otpField.value.length < 4){
        validationText.innerHTML = " otp cannot be lesser than 4 characaters";
        return;
    }
     let otp = new FormData();
     otp.append('email', userEmail.value)
     otp.append('otp', otpField.value)

     request.showloader(`verifyng otp`)
     request.sendRequest('POST', '/client/otp/verify', otp )
     .then( (data) => {
      request.succ(data)
             if(data.status){
                  document.querySelector(".registration-form-container").classList.remove("hidden");
                  document.querySelector(".otp-confirmation-comtainer").classList.add("hidden")
                  document.querySelector(".top-message").innerHTML =  `Let's get to know you.`
               }
     } )
    .catch((error)=>{ request.err(error)})
   
   
})
otpField.addEventListener("input", ()=>{
    confirmOtpBtn.style.backgroundColor = "#3EC1D5";
    if (otpField.value.length < 4) {
        confirmOtpBtn.style.backgroundColor = "#d3f1f5"
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
        setTimeout((nextSibling = this.nextSibling) => {
            nextSibling.innerHTML = " .."; // Clear validation message
        }, 3000);
      if (inputVal === 0) {
        nextSibling.innerHTML = "This field is required";
        return;
      } else { 
      ; // Clear validation message
      }
    });

    let form = new FormData(regForm);
    request.showloader(`setting things up `)
    request.sendRequest('POST', '/client/register', form)
    .then( (data) => {
     request.succ(data)

 //log user in after a sucessfull signup
     setTimeout(function() {
        if(data.status == true){

            let login  = new FormData
            login.append('email', document.getElementById("comapany-email").value)
            login.append('password', document.getElementById("password").value)
       
           request.showloader(`logging you in`)
            request.sendRequest('POST', '/client/login', login )
            .then( (data) => {
               //request.succ(data)
               request.hideloader('logged in');
               console.log(data.message);

               //display iintro section
               document.querySelector(".registration-form-container").classList.add("hidden");
               document.querySelector(".otp-confirmation-comtainer").classList.add("hidden");
               document.querySelector(".top-message").innerHTML =  `welcome onboard`
 
            
                   // Display the intro modal
                   document.getElementById('introSection').style.display = 'block';
                   document.getElementById('account').innerHTML = `signed in as <span style="font-weight:bold" >  <i class="fa fa-user-circle-o" aria-hidden="true"></i>  ${document.getElementById('first-name').value}</span>`;
       
           } )
           .catch((error) =>{
               request.err(error)
           })
        
          }    
     }, 3000)
  

          })
    
   .catch((error)=>{ request.err(error)})
  

    
})
document.getElementById("confirm-password").addEventListener("input", ()=>{
    if (document.getElementById("confirm-password").value === document.getElementById("password").value) {
        document.getElementById("confirm-password").nextElementSibling.innerHTML = ""
        submitRegFormBtn.disabled = false
    }
     else if(document.getElementById("confirm-password").value !== document.getElementById("password").value){
        document.getElementById("confirm-password").nextElementSibling.innerHTML = "password does not match."
        submitRegFormBtn.disabled = true;

    }
})