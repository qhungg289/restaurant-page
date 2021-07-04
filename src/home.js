import myImage from "./sample.jpg"

export default function showHome() {
    let main = document.getElementById("main");

    // Sample image
    let sampleImg = new Image();
    sampleImg.src = myImage;
    sampleImg.classList.add("home-sample");
    sampleImg.classList.add("animate-fading");

    // Headline
    let headline = document.createElement("h2");
    headline.innerHTML = "Good food<br>for a good day";

    // Paragraph
    let p = document.createElement("p");
    p.innerHTML = `With the ingredients straight from our organic farm, 
                   we're proud to deliver the most delicious meal for you and the one you love the most.`

    // Button
    let orderButton = document.createElement("button");
    orderButton.innerHTML = "ORDER NOW";

    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    textContainer.classList.add("animate-fading");
    textContainer.appendChild(headline);
    textContainer.appendChild(p);
    textContainer.appendChild(orderButton);

    // Append all elements to the main section
    main.appendChild(sampleImg);
    main.appendChild(textContainer);
}