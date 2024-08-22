// Get the nav elements
var projectsNav = document.getElementById("projects_nav");
var skillsNav = document.getElementById("skills_nav");
var servicesNav = document.getElementById("services_nav");
var contactNav = document.getElementById("contact_nav");
var translate = document.getElementById("translate");

// Get the footer location
var locationFooter = document.querySelector('.location');

// Get the section headers
var projectsHeader = document.getElementById("projects_header");
var skillsHeader = document.getElementById("skills_header");
var servicesHeader = document.getElementById("services_header");
var contactHeader = document.getElementById("contact_header");

// Get the projects section descriptions
var mpulseDescription = document.getElementById("mpulse_description");
var triplDescription = document.getElementById("tripl_description");

// Get the skills section subheaders
var frontendHeader = document.getElementById("frontend_header");
var backendHeader = document.getElementById("backend_header");
var otherHeader = document.getElementById("other_header");

// Get the services section subheaders
var webDesignHeader = document.getElementById("web_design_header");
var webDevelopmentHeader = document.getElementById("web_development_header");
var mobileDevelopmentHeader = document.getElementById("mobile_development_header");

// Get the contact section subheaders
var emailHeader = document.getElementById("email_header");
var linkedinHeader = document.getElementById("linkedin_header");
var githubHeader = document.getElementById("github_header");
var cvHeader = document.getElementById("cv_header");

// Get the cv subheader caption
var cvCaption = document.getElementById("cv_caption");

// Get the cv subheader button
var cvButton = document.getElementById("cv_button");

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerHTML === "JP") {
    // Navbar
    projectsNav.innerHTML = "プロジェクト";
    skillsNav.innerHTML = "スキル";
    servicesNav.innerHTML = "サービス";
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "EN";

    // Footer
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> 東京</p>';

    // Projects section
    projectsHeader.innerHTML = "プロジェクト";
    mpulseDescription.innerHTML = "参加するのに最適な体験を見つけるのに役立つように設計されたモバイル アプリを使用して、地元および周辺地域のライブ イベントの活気に満ちた世界を発見してください。";
    triplDescription.innerHTML = "革新的な旅行アプリで自発的な冒険に乗り出し、ユーザーを忘れられない日帰り旅行に結び付けましょう。";

    // Skills section
    skillsHeader.innerHTML = "スキル";
    frontendHeader.innerHTML = "フロントエンド";
    backendHeader.innerHTML = "バックエンド";
    otherHeader.innerHTML = "その他";

    // Services section
    servicesHeader.innerHTML = "サービス";
    webDesignHeader.innerHTML = "ウェブデザイン";
    webDevelopmentHeader.innerHTML = "ウェブ開発";
    mobileDevelopmentHeader.innerHTML = "モバイルアプリ開発";

    // Contact section
    contactHeader.innerHTML = "コンタクト";
    emailHeader.innerHTML = "メールアドレス";
    linkedinHeader.innerHTML = "ネットワーク";
    githubHeader.innerHTML = "フォロー";
    cvHeader.innerHTML = "職歴";
    cvCaption.innerHTML = "豊富な経験と専門的なスキルで、貴社とのパートナーシップを通じてどのような素晴らしい成果を生み出せるかご確認ください。";
    cvButton.innerHTML = "履歴書をダウンロード";
  }
  else {
    // Navbar
    projectsNav.innerHTML = "PROJECTS";
    skillsNav.innerHTML = "SKILLS";
    servicesNav.innerHTML = "SERVICES";
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "JP";

    // Footer
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> Tokyo, Japan</p>';

    // Projects section
    projectsHeader.innerHTML = "PROJECTS";
    mpulseDescription.innerHTML = "Discover a vibrant world of live events in your local and surrounding areas with our mobile app, designed to help you find the perfect experiences to attend.";
    triplDescription.innerHTML = "Embark on spontaneous adventures with our innovative trip app, connecting users for unforgettable day trips.";

    // Skills section
    skillsHeader.innerHTML = "SKILLS";
    frontendHeader.innerHTML = "Frontend";
    backendHeader.innerHTML = "Backend";
    otherHeader.innerHTML = "Other";

    // Services section
    servicesHeader.innerHTML = "SERVICES";
    webDesignHeader.innerHTML = "Web Design";
    webDevelopmentHeader.innerHTML = "Web Development";
    mobileDevelopmentHeader.innerHTML = "Mobile Development";

    // Contact section
    contactHeader.innerHTML = "CONTACT";
    emailHeader.innerHTML = "Write";
    linkedinHeader.innerHTML = "Connect";
    githubHeader.innerHTML = "Follow";
    cvHeader.innerHTML = "Experience";
    cvCaption.innerHTML = "Learn how my experience and skills can help us create great things together.";
    cvButton.innerHTML = "DOWNLOAD CV";
  }
});
