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

// Get the mobile menu container
var mobileMenuContainer = document.querySelector('.mobile_menu_container');

// Get the mobile menu icon
var mobileMenuIcon = document.querySelector('.icon');

// Get the hero link
var heroLink = document.getElementById('hero_nav');

// Get the translate link
var translateLink = document.getElementById('translate');

// Get the mobile menu
var mobileMenu = document.querySelector('.mobile_menu');

// Get the body
var body = document.querySelector('body');

// Toggle the styling for the mobile menu to slide down and be displayed and hides the hero and translate links when the menu icon is clicked
mobileMenuIcon.addEventListener('click', () => {
  var mobileMenuHeight = mobileMenu.getBoundingClientRect().height;
  var mobileMenuContainerHeight = mobileMenuContainer.getBoundingClientRect().height;

  if (mobileMenuContainerHeight === 0) {
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    mobileMenuContainer.style.height = `${mobileMenuHeight}vh`;
    heroLink.style.display = "none";
    translateLink.style.display = "none";
  }
  else {
    mobileMenuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    mobileMenuContainer.style.height = 0;
    heroLink.style.display = "inline";
    translateLink.style.display = "inline";
  }
});
