// Get the nav elements
var projectsNav = document.getElementById("projects_nav");
var aboutNav = document.getElementById("about_nav");
var contactNav = document.getElementById("contact_nav");
var translate = document.getElementById("translate");

// Get the mobile nav elements
var mobileProjectsNav = document.getElementById("mobile_projects_nav");
var mobileAboutNav = document.getElementById("mobile_about_nav");
var mobileContactNav = document.getElementById("mobile_contact_nav");

// Get the section headers
var projectsHeader = document.getElementById("projects_header");
var aboutHeader = document.getElementById("about_header");
var contactHeader = document.getElementById("contact_header");

// Get the hero section content
var heroSubheader = document.getElementById("hero_subheader");
var heroCaption = document.getElementById("hero_caption");

// Get the projects section descriptions
var mpulseDescription = document.getElementById("mpulse_description");
var triplDescription = document.getElementById("tripl_description");

// Get the projects section buttons
var mpulseButton = document.getElementById("mpulse_button");
var triplAppButton = document.getElementById("tripl_app_button");
var triplGithubButton = document.getElementById("tripl_github_button");

// Get the about section description
var aboutDescription = document.getElementById("about_description");

// Get the cv button
var cvButton = document.getElementById("cv_button");

// Get the contact section comment
var contactComment = document.getElementById("contact_comment");

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerHTML === "JP") {
    // Navbar
    projectsNav.innerHTML = "プロジェクト";
    aboutNav.innerHTML = "自己紹介";
    contactNav.innerHTML = "コンタクト";
    translate.innerHTML = "EN";

    // Mobile Navbar
    mobileProjectsNav.innerHTML = "プロジェクト";
    mobileAboutNav.innerHTML = "自己紹介";
    mobileContactNav.innerHTML = "コンタクト";

    // Hero section
    heroSubheader.innerHTML = "フロントエンドエンジニア",
    heroCaption.innerHTML = "東京を拠点として、創造性と正確性を持って、美しく高品質な仕事を作り上げます。";

    // Projects section
    projectsHeader.innerHTML = "プロジェクト";
    mpulseDescription.innerHTML = "周辺地域で開催されるライブイベントを発見し、<br>あなたにぴったりな体験と世界を見つけることができます。";
    mpulseButton.innerHTML = "コードを表示";
    triplDescription.innerHTML = "革新的なトリップアプリで、<br>忘れられない日帰り旅行に出かけましょう。";
    triplAppButton.innerHTML = "アプリを試す";
    triplGithubButton.innerHTML = "コードを表示";

    // About section
    aboutHeader.innerHTML = "自己紹介";
    aboutDescription.innerHTML = `
    みなさんこんにちは、サイリーンです。私は、ウェブ開発からビデオ制作、写真撮影まで様々なバックグラウンドを持つ、サンディエゴ出身のフロントエンドエンジニアです。
    <br><br>
    カリフォルニア州立大学ノースリッジ校でマルチメディア制作を学んでる際に、初めてコーディングを勉強しましたが、卒業後は映像制作と写真撮影のフリーランスに専念してきました。そんな中、2019年こ日本旅行をきっかけに、翌年には日本へ移住して来ました。日本での生活がテクノロジーへの情熱を呼び起こし、Le Wagon Tokyoのウェブ開発ブートキャンプへ参加しました。
    <br><br>
    コーディング以外の時間は、日本各地での旅行の瞬間を捉えたビデオ制作を楽しんでいます。
    `;
    cvButton.innerHTML = "履歴書をダウンロード";

    // Contact section
    contactHeader.innerHTML = "コンタクト";
    contactComment.innerHTML = "共に素晴らしいものを作り上げるためにお気軽にご連絡ください。";
  }

  else {
    // Navbar
    projectsNav.innerHTML = "PROJECTS";
    aboutNav.innerHTML = "ABOUT";
    contactNav.innerHTML = "CONTACT";
    translate.innerHTML = "JP";

    // Mobile Navbar
    mobileProjectsNav.innerHTML = "PROJECTS";
    mobileAboutNav.innerHTML = "ABOUT";
    mobileContactNav.innerHTML = "CONTACT";

    // Hero section
    heroSubheader.innerHTML = "frontend developer",
    heroCaption.innerHTML = "Building aesthetically pleasing & high-quality work through creativity & precision in <br>Tokyo, Japan.";

    // Projects section
    projectsHeader.innerHTML = "PROJECTS";
    mpulseDescription.innerHTML = "Discover a vibrant world of live events in your local and surrounding areas with our mobile app, designed to help you find the perfect <br>experiences to attend.";
    mpulseButton.innerHTML = "VIEW CODE";
    triplDescription.innerHTML = "Embark on spontaneous adventures with our innovative trip app, connecting users for unforgettable day trips.";
    triplAppButton.innerHTML = "TRY THE APP";
    triplGithubButton.innerHTML = "VIEW CODE";

    // About section
    aboutHeader.innerHTML = "ABOUT";
    aboutDescription.innerHTML = `
    Hello, I’m Syrene. I’m a frontend developer from San Diego with a diverse background in web development, video production, and photography.
    <br><br>
    I first delved into coding while studying Multimedia Production at California State University, Northridge. However, upon graduating, I focused on freelancing in video production and photography. A trip to Japan in 2019 inspired me to move here in 2020, where I reignited my passion for tech and completed Le Wagon Tokyo's web development bootcamp.
    <br><br>
    When I’m not coding, I enjoy creating videos and capturing moments from my adventures around Japan.
    `;
    cvButton.innerHTML = "DOWNLOAD CV";

    // Contact section
    contactHeader.innerHTML = "CONTACT";
    contactComment.innerHTML = "Send a message and let’s create something great together.";
  }
});
