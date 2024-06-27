
 
    contactUs.addEventListener('submit', (e) => {
        postdata = new FormData(contactUs);
        e.preventDefault();
       request.showloader('sending message');
        request.sendRequest('POST', '/contact', postdata)
            .then((data) => {
              request.succ(data)
               // further actions here
               
            })  
            .catch((error) =>{
                request.err(error)
            });
    });



    callRequest.addEventListener('submit', (e) => {
        postdata = new FormData(callRequest)
        postdata.append('request_type','callback');
        e.preventDefault();
        request.showloader('sending request');
        request.sendRequest('POST', '/request', postdata)
            .then((data) => {
              request.succ(data)
               // further actions here
            })  
            .catch((error) =>{
                request.err(error)
            });
    });



    demo.addEventListener('submit', (e) => {
        postdata = new FormData(demo)
        postdata.append('request_type','demo');
        e.preventDefault();
        request.showloader(' sending request');
        request.sendRequest('POST', '/request', postdata)
            .then((data) => {
              request.succ(data)
               // further actions here
              
            })  
            .catch((error) =>{
                request.err(error)
            });
    });




    var input = document.getElementById("tel-number");
    window.intlTelInput(input, {
      // Options
      separateDialCode: true,
      initialCountry: "auto",
      initialCountry: "ng",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    var input2 = document.getElementById("tel-number2");
    window.intlTelInput(input2, {
      // Options
      separateDialCode: true,
      initialCountry: "auto",
      initialCountry: "ng",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

   var input3 = document.getElementById("tel-numberii");
    window.intlTelInput(input3, {
      // Options
      separateDialCode: true,
      initialCountry: "auto",
      initialCountry: "ng",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });


