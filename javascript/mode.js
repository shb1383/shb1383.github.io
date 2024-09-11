var mode = document.getElementById('mode');

var body = document.querySelector('body');

mode.addEventListener('click', () => {
  if (body.classList.contains('body_light')) {
    body.classList.remove('body_light');
    body.classList.add('body_dark');
  } else {
    body.classList.remove('body_dark');
    body.classList.add('body_light');
  }
});

var hrs = document.querySelectorAll('hr');

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

var navbar = document.getElementById('navbar');

mode.addEventListener('click', () => {
  if (navbar.classList.contains('navbar_light')) {
    navbar.classList.remove('navbar_light');
    navbar.classList.add('navbar_dark');
  } else {
    navbar.classList.remove('navbar_dark');
    navbar.classList.add('navbar_light');
  }
});

var navLinks = document.querySelectorAll('.nav_link');

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

var icon = document.querySelector('.icon');

mode.addEventListener('click', () => {
  if (icon.classList.contains('nav_link_light')) {
    icon.classList.remove('nav_link_light');
    icon.classList.add('nav_link_dark');
  } else {
    icon.classList.remove('nav_link_dark');
    icon.classList.add('nav_link_light');
  }
});

var mobileMenuContainer = document.querySelector('.mobile_menu_container');

mode.addEventListener('click', () => {
  if (mobileMenuContainer.classList.contains('mobile_menu_light')) {
    mobileMenuContainer.classList.remove('mobile_menu_light');
    mobileMenuContainer.classList.add('mobile_menu_dark');
  } else {
    mobileMenuContainer.classList.remove('mobile_menu_dark');
    mobileMenuContainer.classList.add('mobile_menu_light');
  }
});

var mobileMenu = document.querySelector('.mobile_menu');

mode.addEventListener('click', () => {
  if (mobileMenu.classList.contains('mobile_menu_light')) {
    mobileMenu.classList.remove('mobile_menu_light');
    mobileMenu.classList.add('mobile_menu_dark');
  } else {
    mobileMenu.classList.remove('mobile_menu_dark');
    mobileMenu.classList.add('mobile_menu_light');
  }
});

var h5s = document.querySelectorAll('h5');

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

var aboutDescription = document.getElementById('about_description');

mode.addEventListener('click', () => {
  if (aboutDescription.classList.contains('about_description_light')) {
    aboutDescription.classList.remove('about_description_light');
    aboutDescription.classList.add('about_description_dark');
  } else {
    aboutDescription.classList.remove('about_description_dark');
    aboutDescription.classList.add('about_description_light');
  }
});

var cvButton = document.getElementById('cv_button');

mode.addEventListener('click', () => {
  if (cvButton.classList.contains('button_light')) {
    cvButton.classList.remove('button_light');
    cvButton.classList.add('button_dark');
  } else {
    cvButton.classList.remove('button_dark');
    cvButton.classList.add('button_light');
  }
});

var blog = document.getElementById('blog');
var pBlog = blog.querySelectorAll('p');

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

var contactComment = document.getElementById('contact_comment');

mode.addEventListener('click', () => {
  if (contactComment.classList.contains('contact_light')) {
    contactComment.classList.remove('contact_light');
    contactComment.classList.add('contact_dark');
  } else {
    contactComment.classList.remove('contact_dark');
    contactComment.classList.add('contact_light');
  }
});

var contactEmail = document.getElementById('contact_email');

mode.addEventListener('click', () => {
  if (contactEmail.classList.contains('contact_email_light')) {
    contactEmail.classList.remove('contact_email_light');
    contactEmail.classList.add('contact_email_dark');
  } else {
    contactEmail.classList.remove('contact_email_dark');
    contactEmail.classList.add('contact_email_light');
  }
});

var footer = document.getElementById('footer');

mode.addEventListener('click', () => {
  if (footer.classList.contains('footer_light')) {
    footer.classList.remove('footer_light');
    footer.classList.add('footer_dark');
  } else {
    footer.classList.remove('footer_dark');
    footer.classList.add('footer_light');
  }
});

var footerLinks = footer.querySelectorAll('a');

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

var copyright = document.getElementById('copyright');

mode.addEventListener('click', () => {
  if (copyright.classList.contains('copyright_light')) {
    copyright.classList.remove('copyright_light');
    copyright.classList.add('copyright_dark');
  } else {
    copyright.classList.remove('copyright_dark');
    copyright.classList.add('copyright_light');
  }
});

var heroBackgroundImage = document.querySelector('.hero_background_image');

mode.addEventListener('click', () => {
  if (heroBackgroundImage.classList.contains('hero_background_image_light')) {
    heroBackgroundImage.classList.remove('hero_background_image_light');
    heroBackgroundImage.classList.add('hero_background_image_dark');
  } else {
    heroBackgroundImage.classList.remove('hero_background_image_dark');
    heroBackgroundImage.classList.add('hero_background_image_light');
  }
});

mode.addEventListener('click', () => {
  var heroHeader = document.querySelector('.hero_header');
  var heroAbout = document.querySelector('.hero_about');
  heroHeader.classList.toggle('hero_dark');
  heroAbout.classList.toggle('hero_dark');
});
