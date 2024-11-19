// Get the nav section elements
const navSectionElements = document.querySelectorAll(".nav_section_link");

// Add the "active" class to the navbar elements when selected. Remove "active" when not selected
navSectionElements.forEach(navSectionElement => {
  navSectionElement.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    navSectionElement.classList.add('active');
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
  navSectionElements.forEach(navSectionElement => {
    navSectionElement.classList.remove('active');
    document.querySelector('.nav_link[href*= '+ current +']').classList.add('active');
  });
});

// Get the body
var body = document.querySelector('body');

// Get the mobile menu container
var mobileMenuContainer = document.querySelector('.mobile_menu_container');

// Changes mobile menu container height to 0, icon to "bars", and enables body scrolling after selecting navbar link
navSectionElements.forEach(navSectionElement => {
  navSectionElement.addEventListener('click', () => {
    document.querySelector('.icon').innerHTML = '<i class="fa-solid fa-bars"></i>';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
    mobileMenuContainer.style.height = 0;
  });
});

// Changes mobile menu container height to 0, icon to "bars", and enables body scrolling after clicking outside of mobile menu
sections.forEach(section => {
  section.addEventListener('click', () => {
    document.querySelector('.icon').innerHTML = '<i class="fa-solid fa-bars"></i>';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
    mobileMenuContainer.style.height = 0;
  });
});
