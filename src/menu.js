export default function showMenu() {
    let main = document.getElementById("main");

    let p = document.createElement("p");
    p.innerHTML = "Testing menu";

    main.appendChild(p);
}