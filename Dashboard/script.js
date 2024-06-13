//Toggle effect for sub menu in nav
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


//Open and close of navbar for mobile device
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




/**
 * ---------------------------------------------------
 *   API  dashboard requests
 * -------------------------------------------------
 * 
 */

window.addEventListener('DOMContentLoaded', function () {
  let pagecontent = body.innerHTML;

  // Create a new div element
  const loadingDiv = document.createElement('div');
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.top = '50%';
  loadingDiv.style.left = '50%';
  loadingDiv.style.transform = 'translate(-50%, -50%)';
  loadingDiv.style.zIndex = '9999';
  loadingDiv.style.fontSize = '300';
  loadingDiv.innerHTML = `   <img src="/assets/images/Processing.gif" alt="" srcset="">`;

  // Append the loading div to the body
  body.innerHTML = '';
  body.appendChild(loadingDiv);

  request.sendRequest('GET', '/auth/check')
    .then((data) => {
      console.log(data);
      if (data.authenticated === false) {
        window.location.href = '/auth/login';
        console.log(data.authenticated);
      } else {
        // Remove the loading div
        body.removeChild(loadingDiv);
        //render the dashboard
        body.innerHTML = pagecontent;

        // start updating dashboard content with user data
        headerName.innerHTML = data.client.name
        welcomeName.innerHTML = data.client.name
        serviceCount.textContent = data.services.length
        

        if (data.services.length <= 0) {
          document.getElementById('services').innerHTML += `<div> <P> You have no active service please request or purchase one to get started</p></div>`;
        }
        else {
          data.services.forEach((service) => {
            document.getElementById('services').innerHTML += `
             <div>
                  <div>
                     <span class="active">${service.status}</span>
                       <p> ${service.plan}</p>
                         <p> Domain <a href='${service.domain}'> ${service.domain}</a></p>
                  </div>
                 <div>
                     <button >Login to bPanel</button>
                      <button>View details</button>
                 </div>
            </div>`
          })
        }

      }
    })
    .catch((error) => {
      console.log(error);
    });
});


