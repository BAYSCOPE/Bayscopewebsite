document.addEventListener('DOMContentLoaded', function() {
  let currentAdvertIndex = 0;
  const adverts = [
    {
      title: "Intuitive Dashboard",
      description: "Experience seamless management of your e-commerce platform with our user-friendly dashboard. Gain insights, track sales, and manage orders with ease.",
      imgSrc: "/assets/images/dashboard-ecommerce.png"
    },
    {
      title: "Modern Store",
      description: "Advanced e-commerce store with modern look and feel  that  just keeps your customers coming back.",
      imgSrc: "/assets/images/ecomiv.jpg"
    },
    {
      title: "Custom Deployment",
      description: " BayScope e-commerce is not a SASS. We deploy independently for you, ensuring a personalized experience also allowing you take full ownweship and control for  <span style='font-weight:bold;'>yourstore.com, admin.yourstore.com,<span> and more.",
      imgSrc: "/assets/images/e-comuii.jpg"
    }
  ];

  const advertImage = document.getElementById('advertImage');
  const advertTitle = document.getElementById('advertTitle');
  const advertDescription = document.getElementById('advertDescription');
  const indicators = document.querySelectorAll('.bullets ul li .indicator');

  function changeAdvert(index) {
    const advert = adverts[index];
    advertImage.src = advert.imgSrc;
    advertTitle.textContent = advert.title;
    advertDescription.innerHTML = advert.description;
    updateActiveIndicator(index);
  }

  function updateActiveIndicator(index) {
    indicators.forEach((indicator, idx) => {
      if (idx === index) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentAdvertIndex = index;
      changeAdvert(currentAdvertIndex);
    });
  });

  function rotateAdverts() {
    currentAdvertIndex = (currentAdvertIndex + 1) % adverts.length;
    changeAdvert(currentAdvertIndex);
  }

  // Change advert every 9 seconds
  setInterval(rotateAdverts, 9000);

  // Initialize
  changeAdvert(0);
});



/**
 * ------------------------------------------------------
 * THIS FOLLOWING EVENTS  AND FUNCTION WILL HANDLE THE AUTHENTICATION STATE OF USERS ON THE PAGE 
 * ----------------------------------------------------
 */
window.addEventListener('DOMContentLoaded', function() {
   
  checklogin();
 
})


function checklogin()
{
request.sendRequest('GET', '/auth/check')
.then((data) => {

if(data.authenticated != false){

signuplink.innerHTML = 'B-panel'
signuplink.href = '/bpanel'
signinlink.innerHTML = 'Client Dashboard';
signinlink.href = '/dashboard'
logoutt.style.display = 'block'
}
else{
 return;
}

})  
.catch((error) =>{
console.log(error)
});
}

function logout(){

// log user out
request.showloader('logging out')
request.sendRequest('GET', '/client/logout')
   .then((data) => {
    request.hideloader('you have been logged out')
// after logging  them out confirm if they are actually loged out
    request.sendRequest('GET', '/auth/check')
    .then((data) => {
// if they are logged out  modilfy page
     if(data.authenticated == false){
       signinlink.innerHTML = 'Client Login';
       signinlink.href = '/login'
       signuplink.innerHTML = 'Client Signup';
       signuplink.href = '/signup'
       window.location.href = '/';
       logoutt.style.display = 'none';
     }
     else{
        return;
     }
    })
  
})  
   .catch((error) =>{
      console.log(error)
   });
}

