// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});
// Highlight active page
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});