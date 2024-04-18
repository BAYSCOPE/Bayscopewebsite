'use strict'

const formOne = document.getElementById("group-1")
const formTwo = document.getElementById("group-2")
const formThree = document.getElementById("group-3")
const counterOne = document.getElementById("counter-1")
const counterTwo = document.getElementById("counter-2")
const counterThree = document.getElementById("counter-3")

// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")

// const businessName = document.getElementById("business-name")
// const businessEmail = document.getElementById("business-email")
// const country = document.getElementById("country")
// const button = document.getElementById("submit")
// const industry = document.getElementById("industry")
// const address = document.getElementById("address")
// const contact = document.getElementById("contact")




let current = 1;

const details = {}


function changeForm(){
    
if(current === 1){
    counterOne.style.backgroundColor = " #3EC1D5";
    counterOne.style.color = "white";

    counterTwo.style.backgroundColor = "gray";
        counterTwo.style.color = "black";
    
        counterThree.style.backgroundColor = "gray";
        counterThree.style.color = "black";
    
    formOne.style.display = "flex";
    formTwo.style.display = "none";
    formThree.style.display = "none";
}else if(current === 2){
    counterTwo.style.backgroundColor = " #3EC1D5";
    counterTwo.style.color = "white";

    counterOne.style.backgroundColor = "gray";
        counterOne.style.color = "black";
    
        counterThree.style.backgroundColor = "gray";
        counterThree.style.color = "black";
    
    formTwo.style.display = "flex";
    formOne.style.display = "none";
    formThree.style.display = "none";
}else if(current === 3){
    counterThree.style.backgroundColor = " #3EC1D5";
    counterThree.style.color = "white";

    counterTwo.style.backgroundColor = "gray";
        counterTwo.style.color = "black";
    
        counterOne.style.backgroundColor = "gray";
        counterOne.style.color = "black";

    formThree.style.display = "flex";
    formTwo.style.display = "none";
    formOne.style.display = "none";
}
}

counterOne.addEventListener('click', function(){
    // details.businessName = businessName.value;
    // details.businessEmail = businessEmail.value;
    // details.industry = industry.value;
    current = 1;
    changeForm();
});

counterTwo.addEventListener('click', function(){
    // details.username = username.value;
    // details.password = password.value;
    // details.email = email.value;
    current = 2;
    changeForm();
});

counterThree.addEventListener('click', () => {
    // details.country = country.value;
    // details.address = address.value;
    // details.contact = contact.value;
    current = 3;
    changeForm();
})

// button.addEventListener("click", function(){
//     details.businessName = businessName.value;
//     details.businessEmail = businessEmail.value;
//     details.industry = industry.value;

//     details.username = username.value;
//     details.password = password.value;
//     details.email = email.value;

//     details.country = country.value;
//     details.address = address.value;
//     details.contact = contact.value;


//     console.log(businessEmail.value, country.value, username.value)
// })

changeForm();