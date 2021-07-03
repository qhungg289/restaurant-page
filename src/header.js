import myLogo from "./logo.svg"
import myBrand from "./brand.svg"

export default function showHeader() {
    // Header section
    let header = document.createElement("header");

    // Logo and branding
    let logoContainer = document.createElement("div");
    logoContainer.classList.add("branding");
    let logo = new Image();
    logo.src = myLogo;
    logo.id = "logo";
    let branding = new Image();
    branding.src = myBrand;
    branding.id = "brand";
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

    return header;
}