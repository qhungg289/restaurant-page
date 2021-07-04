import location from "./location.png"

export default function showContact() {
    let main = document.getElementById("main");

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");
    contactContainer.classList.add("animate-fading");

    let address = new Image();
    address.src = location;

    let telephone = document.createElement("p");
    telephone.innerHTML = "<b>Telephone:</b> 0000 1111 2222";

    let email = document.createElement("p");
    email.innerHTML = "<b>Email:</b> tsuki@gmail.com";

    contactContainer.appendChild(address);
    contactContainer.appendChild(telephone);
    contactContainer.appendChild(email);

    main.appendChild(contactContainer);
}