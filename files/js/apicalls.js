/**
 * this file send all APi
 */



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
        //handle unauthorize
        console.log('Request sent successfully');
        this.hideloader(`${data.message}`);
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

const request = new RequestSender('http://localhost:8000/api/v1');
const loader = document.getElementById('loader');
const loaderContent = document.getElementById('loader').innerHTML;
let postdata;


/**
 * this will set page links according to authentication
 */

      