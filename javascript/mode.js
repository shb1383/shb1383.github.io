// Gets the mode link in the navbar
var mode = document.getElementById('mode');

// Gets the body
var body = document.querySelector('body');

// Toggles the body styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (body.classList.contains('body_light')) {
    body.classList.remove('body_light');
    body.classList.add('body_dark');
  } else {
    body.classList.remove('body_dark');
    body.classList.add('body_light');
  }
});

// Gets the hrs
var hrs = document.querySelectorAll('hr');

// Toggles the hrs styling from light mode to dark mode
hrs.forEach(hr => {
  mode.addEventListener('click', () => {
    if (hr.classList.contains('hr_light')) {
      hr.classList.remove('hr_light');
      hr.classList.add('hr_dark');
    } else {
      hr.classList.remove('hr_dark');
      hr.classList.add('hr_light');
    }
  })
});

// Gets the navbar
var navbar = document.getElementById('navbar');

// Toggles the navbar styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (navbar.classList.contains('navbar_light')) {
    navbar.classList.remove('navbar_light');
    navbar.classList.add('navbar_dark');
  } else {
    navbar.classList.remove('navbar_dark');
    navbar.classList.add('navbar_light');
  }
});

// Gets the nav links
var navLinks = document.querySelectorAll('.nav_link');

// Toggles the nav links styling from light mode to dark mode
navLinks.forEach(navLink => {
  mode.addEventListener('click', () => {
    if (navLink.classList.contains('nav_link_light')) {
      navLink.classList.remove('nav_link_light');
      navLink.classList.add('nav_link_dark');
    } else {
      navLink.classList.remove('nav_link_dark');
      navLink.classList.add('nav_link_light');
    }
  })
});

// Gets the mobile navbar menu icon
var icon = document.querySelector('.icon');

// Toggles the mobile navbar menu icon styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (icon.classList.contains('nav_link_light')) {
    icon.classList.remove('nav_link_light');
    icon.classList.add('nav_link_dark');
  } else {
    icon.classList.remove('nav_link_dark');
    icon.classList.add('nav_link_light');
  }
});

// Gets the mobile menu container
var mobileMenuContainer = document.querySelector('.mobile_menu_container');

// Toggles the mobile menu container styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (mobileMenuContainer.classList.contains('mobile_menu_light')) {
    mobileMenuContainer.classList.remove('mobile_menu_light');
    mobileMenuContainer.classList.add('mobile_menu_dark');
  } else {
    mobileMenuContainer.classList.remove('mobile_menu_dark');
    mobileMenuContainer.classList.add('mobile_menu_light');
  }
});

// Gets the mobile menu
var mobileMenu = document.querySelector('.mobile_menu');

// Toggles the mobile menu styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (mobileMenu.classList.contains('mobile_menu_light')) {
    mobileMenu.classList.remove('mobile_menu_light');
    mobileMenu.classList.add('mobile_menu_dark');
  } else {
    mobileMenu.classList.remove('mobile_menu_dark');
    mobileMenu.classList.add('mobile_menu_light');
  }
});

// Gets the section headers
var h5s = document.querySelectorAll('h5');

// Toggles the section headers styling from light mode to dark mode
h5s.forEach(h5 => {
  mode.addEventListener('click', () => {
    if (h5.classList.contains('header_light')) {
      h5.classList.remove('header_light');
      h5.classList.add('header_dark');
    } else {
      h5.classList.remove('header_dark');
      h5.classList.add('header_light');
    }
  })
});

// Gets the hero section background image
// var heroBackgroundImage = document.querySelector('.hero_background_image');

// Toggles the hero section background image from light mode to dark mode
// mode.addEventListener('click', () => {
  // if (heroBackgroundImage.classList.contains('hero_background_image_light')) {
    // heroBackgroundImage.classList.remove('hero_background_image_light');
    // heroBackgroundImage.classList.add('hero_background_image_dark');
  // } else {
    // heroBackgroundImage.classList.remove('hero_background_image_dark');
    // heroBackgroundImage.classList.add('hero_background_image_light');
  // }
// });

// Gets the about description
var aboutDescription = document.getElementById('about_description');

// Toggles the about description styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (aboutDescription.classList.contains('about_description_light')) {
    aboutDescription.classList.remove('about_description_light');
    aboutDescription.classList.add('about_description_dark');
  } else {
    aboutDescription.classList.remove('about_description_dark');
    aboutDescription.classList.add('about_description_light');
  }
});

// Gets the CV button
var cvButton = document.getElementById('cv_button');

// Toggles the CV button styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (cvButton.classList.contains('button_light')) {
    cvButton.classList.remove('button_light');
    cvButton.classList.add('button_dark');
  } else {
    cvButton.classList.remove('button_dark');
    cvButton.classList.add('button_light');
  }
});

// Gets the blog section
var blog = document.getElementById('blog');

// Gets the blog p text
var pBlog = blog.querySelectorAll('p');

// Toggles the blog p text styling from light mode to dark mode
pBlog.forEach(p => {
  mode.addEventListener('click', () => {
    if (p.classList.contains('blog_entry_light')) {
      p.classList.remove('blog_entry_light');
      p.classList.add('blog_entry_dark');
    } else {
      p.classList.remove('blog_entry_dark');
      p.classList.add('blog_entry_light');
    }
  })
});

// Gets the contact comment text
var contactComment = document.getElementById('contact_comment');

// Toggles the contact comment text styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (contactComment.classList.contains('contact_light')) {
    contactComment.classList.remove('contact_light');
    contactComment.classList.add('contact_dark');
  } else {
    contactComment.classList.remove('contact_dark');
    contactComment.classList.add('contact_light');
  }
});

// Gets the contact email link
var contactEmail = document.getElementById('contact_email');

// Toggles the contact email link styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (contactEmail.classList.contains('contact_email_light')) {
    contactEmail.classList.remove('contact_email_light');
    contactEmail.classList.add('contact_email_dark');
  } else {
    contactEmail.classList.remove('contact_email_dark');
    contactEmail.classList.add('contact_email_light');
  }
});

// Gets the footer
var footer = document.getElementById('footer');

// Toggles the footer styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (footer.classList.contains('footer_light')) {
    footer.classList.remove('footer_light');
    footer.classList.add('footer_dark');
  } else {
    footer.classList.remove('footer_dark');
    footer.classList.add('footer_light');
  }
});

// Gets the footer links
var footerLinks = footer.querySelectorAll('a');

// Toggles the footer links styling from light mode to dark mode
footerLinks.forEach(footerLink => {
  mode.addEventListener('click', () => {
    if (footerLink.classList.contains('footer_item_light')) {
      footerLink.classList.remove('footer_item_light');
      footerLink.classList.add('footer_item_dark');
    } else {
      footerLink.classList.remove('footer_item_dark');
      footerLink.classList.add('footer_item_light');
    }
  })
});

// Gets the copyright text
var copyright = document.getElementById('copyright');

// Toggles the copyright text styling from light mode to dark mode
mode.addEventListener('click', () => {
  if (copyright.classList.contains('copyright_light')) {
    copyright.classList.remove('copyright_light');
    copyright.classList.add('copyright_dark');
  } else {
    copyright.classList.remove('copyright_dark');
    copyright.classList.add('copyright_light');
  }
});
