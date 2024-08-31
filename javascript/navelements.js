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

// Get the body
var body = document.querySelector('body');

// Get the mobile menu container
var mobileMenuContainer = document.querySelector('.mobile_menu_container');

// Get the hero link
var heroLink = document.getElementById('hero_nav');

// Get the translate link
var translateLink = document.getElementById('translate');

// Changes mobile menu container height to 0, icon to "bars", displays hero and translate nav links, and enables body scrolling after selecting navbar link
navElements.forEach(navElement => {
  navElement.addEventListener('click', () => {
    document.querySelector('.icon').innerHTML = '<i class="fa-solid fa-bars"></i>';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
    mobileMenuContainer.style.height = 0;
    heroLink.style.display = "inline";
    translateLink.style.display = "inline";
  });
});

// Changes mobile menu container height to 0, icon to "bars", displays hero and translate nav links, and enables body scrolling after clicking outside of mobile menu
sections.forEach(section => {
  section.addEventListener('click', () => {
    document.querySelector('.icon').innerHTML = '<i class="fa-solid fa-bars"></i>';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
    mobileMenuContainer.style.height = 0;
    heroLink.style.display = "inline";
    translateLink.style.display = "inline";
  });
});
