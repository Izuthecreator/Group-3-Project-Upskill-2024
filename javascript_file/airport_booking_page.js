// Tab navigation with sliding animation
document.addEventListener("DOMContentLoaded", function () {
    const pickupTab = document.getElementById("pickup-tab");
    const dropoffTab = document.getElementById("dropoff-tab");
    const pickupContent = document.getElementById("pickup-content");
    const dropoffContent = document.getElementById("dropoff-content");
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
  
    pickupTab.addEventListener("click", () => {
      pickupTab.classList.add("active");
      dropoffTab.classList.remove("active");
      pickupContent.classList.add("active");
      dropoffContent.classList.remove("active");
    });
  
    dropoffTab.addEventListener("click", () => {
      dropoffTab.classList.add("active");
      pickupTab.classList.remove("active");
      dropoffContent.classList.add("active");
      pickupContent.classList.remove("active");
    });
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and forms
        tabs.forEach(t => t.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));

        // Add active class to the clicked tab and corresponding form
        tab.classList.add('active');
        forms[index].classList.add('active');
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});
  