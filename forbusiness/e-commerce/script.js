document.addEventListener('DOMContentLoaded', function() {
  let currentAdvertIndex = 0;
  const adverts = [
    {
      title: "Intuitive Dashboard",
      description: "Experience seamless management of your e-commerce platform with our user-friendly dashboard. Gain insights, track sales, and manage orders with ease.",
      imgSrc: "/assets/images/dashboard-ecommerce.png"
    },
    {
      title: "Modern Store",
      description: "Explore the main website to learn more about our comprehensive solutions tailored to your business needs.",
      imgSrc: "/assets/images/e-comuiii.png"
    },
    {
      title: "Custom Deployment",
      description: " BayScope e-commerce is not a SASS. We deploy independently for you, ensuring a personalized experience also allowing you take full ownweship and control for  <span style='color: #3EC1D5'>yourstore.com, admin.yourstore.com,<span> and more.",
      imgSrc: "/assets/images/e-comuii.jpg"
    }
  ];

  const advertImage = document.getElementById('advertImage');
  const advertTitle = document.getElementById('advertTitle');
  const advertDescription = document.getElementById('advertDescription');
  const indicators = document.querySelectorAll('.bullets ul li .indicator');

  function changeAdvert(index) {
    const advert = adverts[index];
    advertImage.src = advert.imgSrc;
    advertTitle.textContent = advert.title;
    advertDescription.innerHTML = advert.description;
    updateActiveIndicator(index);
  }

  function updateActiveIndicator(index) {
    indicators.forEach((indicator, idx) => {
      if (idx === index) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentAdvertIndex = index;
      changeAdvert(currentAdvertIndex);
    });
  });

  function rotateAdverts() {
    currentAdvertIndex = (currentAdvertIndex + 1) % adverts.length;
    changeAdvert(currentAdvertIndex);
  }

  // Change advert every 9 seconds
  setInterval(rotateAdverts, 9000);

  // Initialize
  changeAdvert(0);
});