//Toggle effect for sub menu in nav
function navigation(){
  document.querySelectorAll(".drop-down-opener").forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let dropdown = this.nextElementSibling;
    let down = this.querySelector(".fa-angle-down");
    let up = this.querySelector(".fa-angle-up");
    const dropdownMenu = document.querySelectorAll(".mid-section");
    const faupIcon = document.querySelectorAll(".fa-angle-up");
    const fadownIcon = document.querySelectorAll(".fa-angle-down");
    dropdownMenu.forEach((menu) => {
      if (menu !== dropdown && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }
    });
    dropdown.classList.toggle("hidden");
    down.parentNode.classList.toggle("hidden");
    up.parentNode.classList.toggle("hidden");
    fadownIcon.forEach((icon) => {
      if (icon !== down && icon.parentNode.classList.contains("hidden")) {
        icon.parentNode.classList.remove("hidden");
      }
    });
    faupIcon.forEach((icons) => {
      if (icons !== up && !icons.parentNode.classList.contains("hidden")) {
        icons.parentNode.classList.add("hidden");
      }
    });
  });
});

const navToggler = document.getElementById("nav-toggler")
navToggler.addEventListener("click", function () {
  document.querySelector(".fixed-nav-container").classList.toggle("close-nav")
  document.querySelector(".fixed-nav-container").classList.toggle("open-nav")
  document.querySelector(".side-nav").classList.toggle("close-nav")
  document.querySelector(".side-nav").classList.toggle("open-nav")
})

document.getElementById("nav-closer").addEventListener("click", function () {
  document.querySelector(".fixed-nav-container").classList.add("close-nav")
  document.querySelector(".fixed-nav-container").classList.remove("open-nav")
  document.querySelector(".side-nav").classList.toggle("close-nav")
  document.querySelector(".side-nav").classList.toggle("open-nav")
})

}

//Open and close of navbar for mobile device




/**
 * ---------------------------------------------------
 *   API  dashboard requests
 * -------------------------------------------------
 * 
 */

window.addEventListener('DOMContentLoaded', function () {
  let pagecontent = body.innerHTML;
  body.innerHTML = '';
  
  

  // Create a new div element
  const loadingDiv = document.createElement('div');
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.top = '50%';
  loadingDiv.style.left = '50%';
  loadingDiv.style.transform = 'translate(-50%, -50%)';
  loadingDiv.style.zIndex = '9999';
  loadingDiv.style.fontSize = '300';
  loadingDiv.innerHTML = `   <img src="/assets/images/Processing.gif" alt="Loading Dashboard" srcset=""> <br> Loading Dashboard....`;

 
  body.appendChild(loadingDiv);

  request.sendRequest('GET', '/auth/check')
    .then((data) => {
      
      if (data.authenticated === false) {

        window.location.href = '/auth/login';
        console.log(data.authenticated);
      } else {
        // Remove the loading div
        body.removeChild(loadingDiv);
        //render the dashboard
        body.innerHTML = pagecontent;
        navigation();
       

        // start updating dashboard content with user data
        headerName.innerHTML = data.client.name
        welcomeName.innerHTML = data.client.name
        clientName.innerHTML = data.client.name
        clientEmail.innerHTML = data.client.email
        clientPin.innerHTML = data.client.pin
        clientContact.innerHTML = data.client.contact
        clientAddress.innerHTML = data.client.address
        serviceCount.textContent = data.services.length
        requestCount.textContent = data.requests.length
        invoiceCount.textContent =  data.invoices.length
        
       //update services
        if (data.services.length <= 0) {
          document.getElementById('services').innerHTML += `<div> <P> You have no active service please request or purchase one to get started</p></div>`;
        }
        else {
          data.services.forEach((service) => {
            const serviceDiv = document.createElement('div');
            serviceDiv.style.border = '1px solid #ddd';
            serviceDiv.style.padding = '20px';
            serviceDiv.style.margin = '10px 0';
            serviceDiv.style.borderRadius = '5px';
            serviceDiv.style.backgroundColor = '#f9f9f9';
            serviceDiv.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
            const statusDiv = document.createElement('div');
            statusDiv.style.marginBottom = '10px';
            
            const statusSpan = document.createElement('span');
            statusSpan.style.display = 'inline-block';
            statusSpan.style.padding = '5px 10px';
            statusSpan.style.color = '#fff';
            statusSpan.style.backgroundColor = '#28a745';
            statusSpan.style.borderRadius = '3px';
            statusSpan.style.fontWeight = 'bold';
            statusSpan.textContent = service.status;
            statusDiv.appendChild(statusSpan);
        
            const solutionP = document.createElement('p');
            solutionP.style.margin = '5px 0';
            solutionP.textContent = service.solution;
            statusDiv.appendChild(solutionP);
        
            const domainP = document.createElement('p');
            domainP.style.margin = '5px 0';
            const domainLink = document.createElement('a');
            domainLink.href = service.domain;
            domainLink.style.color = '#007bff';
            domainLink.style.textDecoration = 'none';
            domainLink.textContent = service.domain;
            domainLink.onmouseover = function() { this.style.textDecoration = 'underline'; };
            domainLink.onmouseout = function() { this.style.textDecoration = 'none'; };
            domainP.appendChild(domainLink);
            statusDiv.appendChild(domainP);
        
            const buttonDiv = document.createElement('div');
        
            const loginButton = document.createElement('button');
            loginButton.style.backgroundColor = '#007bff';
            loginButton.style.color = 'white';
            loginButton.style.border = 'none';
            loginButton.style.padding = '10px 15px';
            loginButton.style.marginRight = '10px';
            loginButton.style.borderRadius = '5px';
            loginButton.style.cursor = 'pointer';
            loginButton.onmouseover = function() { this.style.backgroundColor = '#0056b3'; };
            loginButton.onmouseout = function() { this.style.backgroundColor = '#007bff'; };
            loginButton.textContent = 'Login to bPanel';
        
            const detailsButton = document.createElement('button');
            detailsButton.style.backgroundColor = '#007bff';
            detailsButton.style.color = 'white';
            detailsButton.style.border = 'none';
            detailsButton.style.padding = '10px 15px';
            detailsButton.style.marginRight = '10px';
            detailsButton.style.borderRadius = '5px';
            detailsButton.style.cursor = 'pointer';
            detailsButton.onmouseover = function() { this.style.backgroundColor = '#0056b3'; };
            detailsButton.onmouseout = function() { this.style.backgroundColor = '#007bff'; };
            detailsButton.textContent = 'View details';
        
            buttonDiv.appendChild(loginButton);
            buttonDiv.appendChild(detailsButton);
        
            serviceDiv.appendChild(statusDiv);
            serviceDiv.appendChild(buttonDiv);
        
            document.getElementById('services').appendChild(serviceDiv);
          });
        }
        
     
      // update specialist
       agentImage.src = data.specialist[0].image;
       agentName.innerHTML = data.specialist[0].name;
       agentEmail.innerHTML = data.specialist[0].email;
       agentContact.innerHTML = data.specialist[0].contact;
       agentContact.href = `tel:+${data.specialist[0].contact}`


      }


    })
    .catch((error) => {
      console.log(error);
    });
});


