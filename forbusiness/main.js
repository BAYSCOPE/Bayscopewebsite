
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
  
  window.addEventListener('DOMContentLoaded', function() {
      request.sendRequest('GET', '/auth/check')
             .then((data) => {
               if(data.authenticated = true){
                 alert(` loged in with id: ${data.client.pin}`)
                 signinlink.innerHTML = 'Client Dashboard';
                 signinlink.href = '/dashboard'
                 signuplink.innerHTML = 'B-panel'
                 signuplink.href = '/bpanel'
               }
            
          })  
             .catch((error) =>{
                console.log(error)
             });
     })