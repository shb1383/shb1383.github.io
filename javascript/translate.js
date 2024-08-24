// Get the nav elements
var projectsNav = document.getElementById("projects_nav");
var aboutNav = document.getElementById("about_nav");
var contactNav = document.getElementById("contact_nav");
var translate = document.getElementById("translate");

// Get the footer location
var locationFooter = document.querySelector('.location');

// Get the section headers
var projectsHeader = document.getElementById("projects_header");
var aboutHeader = document.getElementById("about_header");
var contactHeader = document.getElementById("contact_header");

// Get the projects section descriptions
var mpulseDescription = document.getElementById("mpulse_description");
var triplDescription = document.getElementById("tripl_description");

// Get the projects section buttons
var mpulseButton = document.getElementById("mpulse_button");
var triplAppButton = document.getElementById("tripl_app_button");
var triplGithubButton = document.getElementById("tripl_github_button");

// Get the about section description
var aboutDescription = document.getElementById("about_description");

// Get the email header
var emailHeader = document.getElementById("email_header");

// Get the cv button
var cvButton = document.getElementById("cv_button");

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerHTML === "JP") {
    // Navbar
    projectsNav.innerHTML = "プロジェクト";
    aboutNav.innerHTML = "ついて";
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

    // About section
    aboutHeader.innerHTML = "ついて";
    aboutDescription.innerHTML = `
    マルチメディアコンテンツクリエイターとして、ウェブ開発、ビデオ制作、写真撮影など、幅広い経験を持っています。
    <br><br>
    ウェブ開発に興味を持ち始めたのは、カリフォルニア州立大学ノースリッジ校で勉強していたときです。でも、卒業後はビデオ制作と写真撮影に集中することにしました。2019年に日本に旅行したことで人生が変わり、2020年に日本に移住しました。それ以来、ウェブ開発にまた取り組み始め、テクノロジー業界でクリエイティブなスキルを活かせる機会を探しています。
    <br><br>
    ウェブ開発の仕事に加えて、日本の教育システムにも貢献していて、英語を教えるサポートをしています。また、ビデオ制作や写真撮影も続けていて、日本での冒険の瞬間をカメラに収めています。
    `;
    cvButton.innerHTML = "履歴書をダウンロード";

    // Contact section
    contactHeader.innerHTML = "コンタクト";
    emailHeader.innerHTML = "メールアドレス";
  }

  else {
    // Navbar
    projectsNav.innerHTML = "PROJECTS";
    aboutNav.innerHTML = "ABOUT";
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

    // About section
    aboutHeader.innerHTML = "ABOUT";
    aboutDescription.innerHTML = `
    I am a multimedia content creator with a diverse background in web development, video production, and photography.
    <br><br>
    My journey into web development began during my studies at California State University, Northridge. However, upon graduating, I chose to focus on video production and photography.
    A transformative trip to Japan in 2019 led me to relocate here in 2020. Since then, I've been delving back into web development and am enthusiastic about finding opportunities to apply my creativity and expertise in the tech industry.
    <br><br>
    In addition to my work in web development, I contribute to the Japanese educational system by assisting in teaching English. I also continue to engage in video production and photography, capturing the essence of my adventures throughout Japan.
    `;
    cvButton.innerHTML = "DOWNLOAD CV";

    // Contact section
    contactHeader.innerHTML = "CONTACT";
    emailHeader.innerHTML = "MAIL";
  }
});
