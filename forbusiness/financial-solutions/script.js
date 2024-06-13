$(document).ready(function () {
    $('.testimonial-videos').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      appendArrows: $('.arrow')
    });
  });

  function playVideo(videoId) {
    var video = document.getElementById(videoId);
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
    video.play();
  }





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

