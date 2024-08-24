// Get the nav elements
var projectsNav = document.getElementById("projects_nav");
var contactNav = document.getElementById("contact_nav");
var translate = document.getElementById("translate");

// Get the footer location
var locationFooter = document.querySelector('.location');

// Get the section headers
var projectsHeader = document.getElementById("projects_header");
var contactHeader = document.getElementById("contact_header");

// Get the projects section descriptions
var mpulseDescription = document.getElementById("mpulse_description");
var triplDescription = document.getElementById("tripl_description");

// Get the projects section buttons
var mpulseButton = document.getElementById("mpulse_button");
var triplAppButton = document.getElementById("tripl_app_button");
var triplGithubButton = document.getElementById("tripl_github_button");

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
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "EN";

    // Footer
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> 東京</p>';

    // Projects section
    projectsHeader.innerHTML = "プロジェクト";
    mpulseDescription.innerHTML = "周辺地域で開催されるライブイベントの多彩な世界を発見し、あなたにぴったりな体験を見つけることができます。";
    mpulseButton.innerHTML = "コードを表示";
    triplDescription.innerHTML = "革新的なトリップアプリで、忘れられない日帰り旅行に出かけましょう。";
    triplAppButton.innerHTML = "アプリを試す";
    triplGithubButton.innerHTML = "コードを表示";

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
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "JP";

    // Footer
    locationFooter.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> Tokyo, Japan</p>';

    // Projects section
    projectsHeader.innerHTML = "PROJECTS";
    mpulseDescription.innerHTML = "Discover a vibrant world of live events in your local and surrounding areas with our mobile app, designed to help you find the perfect experiences to attend.";
    mpulseButton.innerHTML = "VIEW CODE";
    triplDescription.innerHTML = "Embark on spontaneous adventures with our innovative trip app, connecting users for unforgettable day trips.";
    triplAppButton.innerHTML = "TRY THE APP";
    triplGithubButton.innerHTML = "VIEW CODE";

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
