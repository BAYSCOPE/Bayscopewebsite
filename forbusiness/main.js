
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
  
  