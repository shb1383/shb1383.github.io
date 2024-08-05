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

// Get the nav elements
const navElements = document.querySelectorAll(".nav_link");

// Add the "active" class to the navbar elements when selected. Remove "active" when not selected
navElements.forEach(navElement => {
  navElement.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    navElement.classList.add('active');
  });
});

// Get the nav sections
const sections = document.querySelectorAll('section');

// Add the "active" class to the navbar elements when you reach section's scroll position. Remove "active" when you leave the scroll position
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    if (scrollY + 80 >= sectionTop) {
        current = section.getAttribute('id');
    }
  });
  navElements.forEach(navElement => {
    navElement.classList.remove('active');
    document.querySelector('.nav_link[href*= '+ current +']').classList.add('active');
  });
});
