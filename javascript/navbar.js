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

// Toggle the styling for the mobile menu to be displayed and not displayed when the mobile icon is clicked
mobileMenuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
  else {
    mobileMenu.style.display = "none";
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
