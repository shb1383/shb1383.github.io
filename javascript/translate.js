// Get the nav elements
var projectsNav = document.getElementById("projects_nav");
var aboutNav = document.getElementById("about_nav");
var blogNav = document.getElementById("blog_nav");
var contactNav = document.getElementById("contact_nav");
var translate = document.getElementById("translate");

// Get the mobile nav elements
var mobileProjectsNav = document.getElementById("mobile_projects_nav");
var mobileAboutNav = document.getElementById("mobile_about_nav");
var mobileBlogNav = document.getElementById("mobile_blog_nav");
var mobileContactNav = document.getElementById("mobile_contact_nav");

// Get the section headers
var projectsHeader = document.getElementById("projects_header");
var aboutHeader = document.getElementById("about_header");
var blogHeader = document.getElementById("blog_header");
var contactHeader = document.getElementById("contact_header");

// Get the hero section content
var heroSubheader = document.getElementById("hero_subheader");
var heroCaption = document.getElementById("hero_caption");

// Get the projects section descriptions
var mpulseDescription = document.getElementById("mpulse_description");
var triplDescription = document.getElementById("tripl_description");
var jurassicSafariDescription = document.getElementById("jurassic_safari_description");

// Get the projects section buttons
var mpulseButton = document.getElementById("mpulse_button");
var triplAppButton = document.getElementById("tripl_app_button");
var triplGithubButton = document.getElementById("tripl_github_button");
var jurassicSafariButton = document.getElementById("jurassic_safari_button");

// Get the about section description
var aboutDescription = document.getElementById("about_description");

// Get the blog section description
var blogDescriptionTop = document.getElementById("blog_description_top");
var blogDescriptionBottom = document.getElementById("blog_description_bottom");

// Get the cv button
var cvButton = document.getElementById("cv_button");

// Get the contact section comment
var contactComment = document.getElementById("contact_comment");

// Toggle the styling between japanese and english when the translate nav element is selected
translate.addEventListener('click', () => {
  if (translate.innerText === "JP") {
    // Navbar
    projectsNav.innerText = "プロジェクト";
    aboutNav.innerText = "自己紹介";
    blogNav.innerText = "ブログ";
    contactNav.innerText = "コンタクト";
    translate.innerText = "EN";

    // Mobile Navbar
    mobileProjectsNav.innerText = "プロジェクト";
    mobileAboutNav.innerText = "自己紹介";
    mobileBlogNav.innerText = "ブログ";
    mobileContactNav.innerText = "コンタクト";

    // Hero section
    heroSubheader.innerText = "フロントエンドエンジニア";
    heroCaption.innerText = "東京を拠点に、創造力と正確性を活かして、美しく高品質な仕事を提供します。";

    // Projects section
    projectsHeader.innerText = "プロジェクト";
    mpulseDescription.innerHTML = "周辺地域で開催されるライブイベントを見つけ、<br>あなたにぴったりな体験や世界に出会うことができます。";
    mpulseButton.innerText = "コードを表示";
    triplDescription.innerHTML = "革新的なトリップアプリで、<br>忘れられない日帰り旅行に出かけましょう。";
    triplAppButton.innerText = "アプリを試す";
    triplGithubButton.innerText = "コードを表示";
    jurassicSafariDescription.innerText = "没入型VRアプリで、恐竜の世界に飛び込み、彼らを観察しながら勉強やアドベンチャーをお楽しみください。";
    jurassicSafariButton.innerText = "アプリをプレビュー";

    // About section
    aboutHeader.innerText = "自己紹介";
    aboutDescription.innerHTML = `
    みなさんこんにちは、サイリーンです。私はアメリカ・サンディエゴ出身のフロントエンドエンジニアで、ウェブ開発からビデオ制作、写真撮影まで幅広い経験を持っています。
    <br><br>
    カリフォルニア州立大学ノースリッジ校でマルチメディア制作を学んでいた際に、初めてコーディングに出会いました。最終学年のキャップストーン・プロジェクトでは、私のチームはVRアプリ制作で賞を受賞し、学部の年次マルチメディア・プロダクション・ショーケースで表彰されました。卒業後は映像制作と写真撮影のフリーランスとして活動してきましたが、2019年の日本旅行をきっかけに、翌年には日本へ移住しました。日本での生活を通じてテクノロジーへの興味が再熱し、Le Wagon Tokyoのウェブ開発ブートキャンプへ参加しました。
    <br><br>
    コーディングの合間には、日本各地へ旅行し、その土地での思い出をビデオに収めることを楽しんでいます。
    `;
    cvButton.innerText = "履歴書をダウンロード";

    // Blog section
    blogHeader.innerText = "ブログ";
    blogDescriptionTop.innerText = "私のポートフォリオをご覧いただきありがとうございます。こちらはjavascript、html、cssを使って一から作り上げました。私が制作を楽しんだように、皆様にも楽しんでいただければ幸いです。";
    blogDescriptionBottom.innerText = "2022年GW　大阪";

    // Contact section
    contactHeader.innerText = "コンタクト";
    contactComment.innerText = "ぜひ一緒に素晴らしいものを作り上げましょう。お気軽にご連絡ください。";
  }

  else {
    // Navbar
    projectsNav.innerText = "PROJECTS";
    aboutNav.innerText = "ABOUT";
    blogNav.innerText = "BLOG";
    contactNav.innerText = "CONTACT";
    translate.innerText = "JP";

    // Mobile Navbar
    mobileProjectsNav.innerText = "PROJECTS";
    mobileAboutNav.innerText = "ABOUT";
    mobileBlogNav.innerText = "BLOG";
    mobileContactNav.innerText = "CONTACT";

    // Hero section
    heroSubheader.innerText = "frontend developer";
    heroCaption.innerHTML = "Building aesthetically pleasing & high-quality work through creativity & precision in <br>Tokyo, Japan.";

    // Projects section
    projectsHeader.innerText = "PROJECTS";
    mpulseDescription.innerHTML = "Discover a vibrant world of live events in your local and surrounding areas with our mobile app, designed to help you find the perfect <br>experiences to attend.";
    mpulseButton.innerText = "VIEW CODE";
    triplDescription.innerText = "Embark on spontaneous adventures with our innovative trip app, connecting users for unforgettable day trips.";
    triplAppButton.innerText = "TRY THE APP";
    triplGithubButton.innerText = "VIEW CODE";
    jurassicSafariDescription.innerText = "Explore dinosaurs up close in our immersive VR app, and enjoy an educational adventure where the past comes to life.";
    jurassicSafariButton.innerText = "PREVIEW THE APP";

    // About section
    aboutHeader.innerText = "ABOUT";
    aboutDescription.innerHTML = `
    Hello, I’m Syrene. I’m a frontend developer from San Diego with a diverse background in web development, video production, and photography.
    <br><br>
    I first delved into coding while studying Multimedia Production at California State University, Northridge. For our capstone project during my final year, my team created an award-winning VR app that was recognized at our department's annual Multimedia Production showcase. However, upon graduating, I focused on freelancing in video production and photography. A trip to Japan in 2019 inspired me to move here in 2020, where I reignited my passion for tech and completed Le Wagon Tokyo's web development bootcamp.
    <br><br>
    When I’m not coding, I enjoy creating videos and capturing moments from my adventures around Japan.
    `;
    cvButton.innerText = "DOWNLOAD CV";

    // Blog section
    blogHeader.innerText = "BLOG";
    blogDescriptionTop.innerText = "Welcome to my portfolio. I built this from the ground up using javascript, html, and css. I hope you enjoy it as much as I did creating it. Thank you for visiting.";
    blogDescriptionBottom.innerText = "Golden Week in Osaka, Japan 2022";

    // Contact section
    contactHeader.innerText = "CONTACT";
    contactComment.innerText = "Send a message and let’s create something great together.";
  }
});
