
addtomaillist.addEventListener('submit', (e) => {
    postdata = new FormData(addtomaillist);
    e.preventDefault();
      request.showloader('adding to mailing list');
      request.sendRequest('POST', '/addToMailList', postdata)
          .then((data) => {
            request.succ(data)
             // further actions here
          })  
          .catch((error) =>{
              request.err(error)
          });
  });
  

  $(document).ready(function () {
    //   $('.testimonial-videos').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     appendArrows: $('.arrow')
    //   });
  

    });

    function getstarted(){
        $('#getStartedModal').modal('show');
    }

   
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

function showmodal(){
    $('#learnMoreModal').modal('show')
}
  