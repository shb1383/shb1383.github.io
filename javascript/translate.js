// Get the nav elements
var projectsNav = document.getElementById("projectsNav");
var skillsNav = document.getElementById("skillsNav");
var servicesNav = document.getElementById("servicesNav");
var contactNav = document.getElementById("contactNav");
var translate = document.getElementById("translate");

// Get the footer location
var locationFooter = document.querySelector('.location');

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerHTML === "日本語") {
    projectsNav.innerHTML = "プロジェクト";
    skillsNav.innerHTML = "スキル";
    servicesNav.innerHTML = "サービス";
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "ENGLISH";
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> 東京</p>';
  }
  else {
    projectsNav.innerHTML = "PROJECTS";
    skillsNav.innerHTML = "SKILLS";
    servicesNav.innerHTML = "SERVICES";
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "日本語";
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> Tokyo, Japan</p>';
  }
});
