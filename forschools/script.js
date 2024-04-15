// Function to animate the counting
function animateCount(target, duration) {
  let start = 0;
  const increment = target / duration;
  const countElement = document.getElementById("count");
  const interval = setInterval(() => {
    start += increment;
    countElement.textContent = Math.floor(start);
    if (start >= target) {
      clearInterval(interval);
      countElement.textContent = target;
    }
  }, 10);
}

// Start counting animation
animateCount(400, 2000); // Change the duration (ms) as needed
