/**
 * this file contains the request class used to send and handle all Api calls
 * more handing can be  done on respective pages e.g updating DOM etc..
 */


const baseUrl = 'http://localhost:8000/api/v1';



class RequestSender {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    showloader(message) {

        loader.innerHTML += message
        loader.style.display = 'block';
    }

    hideloader(message) {
        loader.innerHTML = message
        setTimeout(() => {
            loader.style.display = 'none';
            loader.innerHTML = loaderContent;
        }, 3000)

    }


    async sendRequest(method, url, data) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method,
            // send request with cookies
            credentials: 'include', 
            headers: {
                //'Content-Type': 'multipart/form-data',
               
            },
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Error sending request: ${response.statusText}`);
        }

        return response.json();
    }

    succ(data){
  //handle validation errors
          if(data.validation){
            this.hideloader(`${data.validation}`);
            return;
        }
       
        //hide loader with response message
        this.hideloader(`${data.message}`);

        //  handle redirecting  if the response wants to redirect the user
        
        if(data.redirect){
            setTimeout(()=>window.location.href = data.redirect,2000 )
           
        }      
        
        //handle unauthorize


        console.log('Request sent successfully');
       
    }

    err(error)
    {
        console.error('An error occured:', error);
        if(error.message){
            this.hideloader(`${error.message}`);
            return;
        }
        this.hideloader(`sorry something went wrong `);
    }


}


/**
 *  use the request sender class to send request to the server
*/

const request = new RequestSender(baseUrl);
const loader = document.getElementById('loader');
const loaderContent = document.getElementById('loader').innerHTML;
// use this variable on any page that requrs a post request like this postdata = new formData() without re-declaring
let postdata;



/**
 * ----------------------------------------------------
 * Handle Checkout Requests
 * ----------------------------------------------------
 * 
 */

document.querySelector('.purchase-btn').addEventListener('click', () => {
    // const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0);
    request.showloader('processing..');

    request.sendRequest('GET', '/client/checkout')
      .then(data => {
     // handle successfull response
        request.succ(data);
    
      })
      .catch(error => {
        request.err(error);
      });
  });
  
  //checkout single solution
  function checkout(solutionName, price) {
    request.showloader('Processing   checkout');
      console.log(price);
  
    request.sendRequest('GET', `/client/checkout/${solutionName}`)
      .then(data => {
        request.succ(data);
        console.log('Single solution checkout successful:', data);
      })
      .catch(error => {
        request.err(error);
      });
  }
  


