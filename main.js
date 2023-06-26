// Open external links in a new tab/window
var externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(function(link) {
    link.setAttribute('target', '_blank');
});

// Smooth scroll to sections when clicking on navigation links
var navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});