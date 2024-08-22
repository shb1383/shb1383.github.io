// Get the nav elements
var projectsNav = document.getElementById("projectsNav");
var skillsNav = document.getElementById("skillsNav");
var servicesNav = document.getElementById("servicesNav");
var contactNav = document.getElementById("contactNav");
var translate = document.getElementById("translate");

// Get the footer location
var locationFooter = document.querySelector('.location');

// Get the section headers
var projectsHeader = document.getElementById("projectsHeader");
var skillsHeader = document.getElementById("skillsHeader");
var servicesHeader = document.getElementById("servicesHeader");
var contactHeader = document.getElementById("contactHeader");

// Get the skills section subheaders
var frontendHeader = document.getElementById("frontendHeader");
var backendHeader = document.getElementById("backendHeader");
var otherHeader = document.getElementById("otherHeader");

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerHTML === "JA") {
    projectsNav.innerHTML = "プロジェクト";
    skillsNav.innerHTML = "スキル";
    servicesNav.innerHTML = "サービス";
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "EN";
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> 東京</p>';
    projectsHeader.innerHTML = "プロジェクト";
    skillsHeader.innerHTML = "スキル";
    servicesHeader.innerHTML = "サービス";
    contactHeader.innerHTML = "コンタクト";
    frontendHeader.innerHTML = "フロントエンド";
    backendHeader.innerHTML = "バックエンド";
    otherHeader.innerHTML = "その他";
  }
  else {
    projectsNav.innerHTML = "PROJECTS";
    skillsNav.innerHTML = "SKILLS";
    servicesNav.innerHTML = "SERVICES";
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "JA";
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> Tokyo, Japan</p>';
    projectsHeader.innerHTML = "PROJECTS";
    skillsHeader.innerHTML = "SKILLS";
    servicesHeader.innerHTML = "SERVICES";
    contactHeader.innerHTML = "CONTACT";
    frontendHeader.innerHTML = "Frontend";
    backendHeader.innerHTML = "Backend";
    otherHeader.innerHTML = "Other";
  }
});
