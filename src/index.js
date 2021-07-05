import "./style.css"
import showHeader from "./header"
import showHome from "./home"
import showMenu from "./menu"
import showContact from "./contact"

// Create & get the barebone elements
let content = document.getElementById("content");
let main = document.createElement("div");
main.classList.add("main");
main.id = "main";

// Init the contents
content.appendChild(showHeader());
content.appendChild(main);
showHome();

// Tab switching logic
let navItems = document.getElementsByClassName("nav-link")
navItems[0].classList.add("active");

navItems[0].onclick = () => {
    main.innerHTML = "";
    navItems[0].classList.add("active");
    navItems[1].classList.remove("active");
    navItems[2].classList.remove("active");
    showHome();
}

navItems[1].onclick = () => {
    main.innerHTML = "";
    navItems[1].classList.add("active");
    navItems[0].classList.remove("active");
    navItems[2].classList.remove("active");
    showMenu();
}

navItems[2].onclick = () => {
    main.innerHTML = "";
    navItems[2].classList.add("active");
    navItems[0].classList.remove("active");
    navItems[1].classList.remove("active");
    showContact();
}