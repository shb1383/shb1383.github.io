var projectsNav = document.getElementById("projectsNav");
var skillsNav = document.getElementById("skillsNav");
var servicesNav = document.getElementById("servicesNav");
var contactNav = document.getElementById("contactNav");
var translate = document.getElementById("translate");


translate.addEventListener('click', () => {
  if (translate.innerHTML === "日本語") {
    projectsNav.innerHTML = "プロジェクト";
    skillsNav.innerHTML = "スキル";
    servicesNav.innerHTML = "サービス";
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "ENGLISH";
  }
  else {
    projectsNav.innerHTML = "PROJECTS";
    skillsNav.innerHTML = "SKILLS";
    servicesNav.innerHTML = "SERVICES";
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "日本語";
  }
});
