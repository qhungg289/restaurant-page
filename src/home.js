import myImage from "./sample.jpg"
import myLogo from "./logo.svg"

export default function homeDisplay() {
    let content = document.getElementById("content");
    let header = document.createElement("header");

    // Logo and branding
    let logoContainer = document.createElement("div");
    logoContainer.classList.add("branding");
    let logo = new Image();
    logo.src = myLogo;
    logo.id = "logo";
    let branding = document.createElement("h1");
    branding.innerHTML = "TSUKI";
    logoContainer.appendChild(logo);
    logoContainer.appendChild(branding);

    // Create a list for nav bar
    let ul = document.createElement("ul");
    ul.classList.add("nav");
    let navItems = ["home", "menu", "contact"];
    navItems.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("nav-link");
        li.innerHTML = item;
        ul.appendChild(li);
    })

    // Append all elements to the header
    header.appendChild(logoContainer);
    header.appendChild(ul);

    // Main section
    let main = document.createElement("div");
    main.classList.add("main")

    // Sample image
    let sampleImg = new Image();
    sampleImg.src = myImage;
    sampleImg.alt = "Sample";

    // Head;ine
    let headline = document.createElement("h2");
    headline.innerHTML = "Good food for a good day";

    // Paragraph
    let p = document.createElement("p");
    p.innerHTML = `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Sagittis orci a scelerisque purus semper eget duis at tellus. 
                    Dignissim cras tincidunt lobortis feugiat vivamus. 
                    Eu ultrices vitae auctor eu augue ut. 
                    Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. 
                    Sed faucibus turpis in eu. 
                    Eu lobortis elementum nibh tellus molestie nunc non. 
                    Eget mi proin sed libero enim sed faucibus. 
                    Sed augue lacus viverra vitae congue eu consequat ac felis.
                    Venenatis a condimentum vitae sapien pellentesque. `

    // Append all elements to the main section
    main.appendChild(sampleImg);
    main.appendChild(headline);
    main.appendChild(p);

    // Append all elements to the content div
    content.appendChild(header);
    content.appendChild(main);
}