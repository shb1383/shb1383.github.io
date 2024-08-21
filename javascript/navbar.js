// When the user scrolls the page, execute stickyFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Get the mobile menu icon
var mobileMenuIcon = document.querySelector('.icon');

// Get the mobile menu
var mobileMenu = document.querySelector('.mobile_menu');

// Get the body
var body = document.querySelector('body');

// Toggle the styling for the mobile menu to be displayed + disable body scrolling and mobile menu to not be displayed + enable body scrolling when the mobile icon is clicked
mobileMenuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
  }
  else {
    mobileMenu.style.display = "none";
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
  }
});
