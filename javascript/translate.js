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
var mpulseDemoButton = document.getElementById("mpulse_demo_button");
var mpulseButton = document.getElementById("mpulse_button");
var triplAppButton = document.getElementById("tripl_app_button");
var triplGithubButton = document.getElementById("tripl_github_button");
var jurassicSafariButton = document.getElementById("jurassic_safari_button");

// Get the about section description
var aboutDescription = document.getElementById("about_description");

// Get the blog section description
var blogDescriptionTop4 = document.getElementById("blog_description_top_4");
var blogDescriptionTop3 = document.getElementById("blog_description_top_3");
var blogDescriptionTop2 = document.getElementById("blog_description_top_2");
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
    mpulseDescription.innerHTML = "周辺地域で開催されるライブイベントを見つけ、あなた<br>にぴったりな体験や世界に出会うことができます。";
    mpulseDemoButton.innerText = "アプリのデモを見る";
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
    blogDescriptionTop4.innerHTML = `2024年は、技術面でも人生面でも学びと成長の年でした。そして、ウェブ開発者として卒業した年でもあります。
    <br><br>
    2025年がさらに新しく、ワクワクするような機会に満ちた年になりますように。よいお年をお過ごしください。`;
    blogDescriptionTop3.innerHTML = `最近は、秋の心地よい気候や旅行を楽しんでいたこともあり、勉強は少しスローペースになっています。先日、初めて福岡を訪れ、福岡マラソンのファンラン（5.2km）に参加しました。マラソンはもちろん、街歩きや地元の名物料理も満喫し、とても楽しい時間を過ごせました。
    <br><br>
    旅のハイライトをまとめた動画を投稿したので、ぜひご覧ください。`;
    blogDescriptionTop2.innerHTML = `Apple製品の熱烈なファンなので、最近swiftとswiftUIの勉強を始めました。現在、swiftUIの100日チャレンジに挑戦しており、この1ヶ月で基礎練習として、割り勘用の計算機や、国旗当てゲームなど いくつかのiOSアプリを作りました。
    <br><br>
    下のswiftのロゴをクリックすると、私のgithubリポジトリで、コードや今後のプロジェクトを確認することができますので、ぜひご覧ください。`;
    blogDescriptionTop.innerHTML = `私のポートフォリオをご覧いただきありがとうございます。こちらのサイトはjavascript、html、cssを使って一から作成しました。私が制作を楽しんだように、皆様にも楽しんでいただければ幸いです。
    <br><br>
    ここでは、エンジニアとしての学びと成長を続ける過程を紹介しています。また、撮影した写真や作成したビデオも時々投稿して参ります。`;
    blogDescriptionBottom.innerText = "福岡 2024";

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
    heroSubheader.innerText = "FRONTEND DEVELOPER";
    heroCaption.innerText = "Building aesthetically pleasing & high-quality work through creativity & precision in Tokyo, Japan.";

    // Projects section
    projectsHeader.innerText = "PROJECTS";
    mpulseDescription.innerHTML = "Discover a vibrant world of live events in your <br>local and surrounding areas with our mobile app, <br>designed to help you find the perfect <br>experiences to attend.";
    mpulseDemoButton.innerText = "VIEW APP DEMO";
    mpulseButton.innerText = "VIEW CODE";
    triplDescription.innerHTML = "Embark on spontaneous adventures with our <br>innovative trip app, connecting users for <br>unforgettable day trips.";
    triplAppButton.innerText = "TRY THE APP";
    triplGithubButton.innerText = "VIEW CODE";
    jurassicSafariDescription.innerHTML = "Explore dinosaurs up close in our immersive VR <br>app, and enjoy an educational adventure where <br>the past comes to life.";
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
    blogDescriptionTop4.innerHTML = `2024 has been a year of learning and growth, both in tech and in life. It’s also the year I graduated as a web developer.
    <br><br>
    Here’s to 2025 – may it bring even more new and exciting opportunities. Happy New Year.`;
    blogDescriptionTop3.innerHTML = `Learning has been a bit slow lately with the nice autumn weather and some travel opportunities. I recently got to visit Fukuoka for the first time and took part in the Fukuoka Marathon Fun Run (5.2km). I had a great time exploring the city, trying local foods, and, of course, running.
    <br><br>
    Below is a video with some of the highlights from my trip. Enjoy.`;
    blogDescriptionTop2.innerHTML = `As an avid fan of Apple products, I recently decided to learn swift and swiftUI. Over the past month, I've been taking on a 100 days of swiftUI challenge, and I've already built a few small iOS apps to practice the basics. So far, I’ve created a calculator for splitting bills and a game where you guess country flags, among other projects.
    <br><br>
    You can check out the code and future projects as I progress through the course on my github repository by clicking the swift logo below.`;
    blogDescriptionTop.innerHTML = `Welcome to my portfolio. I built this from the ground up using javascript, html, and css. I hope you enjoy it as much as I did creating it. Thank you for visiting.
    <br><br>
    Here, you can follow along with my tech journey as I keep learning and growing as a developer. I’ll also share some of my videos and photos from time to time.`;
    blogDescriptionBottom.innerText = "Fukuoka, Japan 2024";

    // Contact section
    contactHeader.innerText = "CONTACT";
    contactComment.innerText = "Send a message and let’s create something great together.";
  }
});
