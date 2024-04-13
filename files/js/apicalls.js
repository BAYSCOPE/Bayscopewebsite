/**
 * create a class for sending request to my application backend
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
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error sending request: ${response.statusText}`);
        }

        return response.json();
    }


}


/**
 * inclue every request and process them here
*/

const request = new RequestSender('http://localhost:8000/api/v1');
const loader = document.getElementById('loader');
const loaderContent = document.getElementById('loader').innerHTML;

// adding user to mailing list
const addtomaillist = document.getElementById('addtomaillist');
addtomaillist.addEventListener('submit', (e) => {
    e.preventDefault();
    request.showloader('adding to mailing list');
    request.sendRequest('POST', '/addToMailList', { data: 'example' })
        .then((data) => {
            console.log('Request sent successfully');
            request.hideloader(`${data.message}`);
        })
        .catch((error) => {
            console.error('Error sending request:', error);
            request.hideloader(`sorry we could not establish a connection to the server`);

        });
});


// adding item to cart









/**
 * send a request to my application backend to add items to cart
 * */