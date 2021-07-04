import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";

export default function showMenu() {
    let main = document.getElementById("main");

    // Declare all the images
    let f1 = new Image();
    f1.src = food1;
    f1.classList.add("food-images");
    let f1Desc = document.createElement("p");
    f1Desc.innerHTML = "spicy curry";
    let foodSlide1 = document.createElement("div");
    foodSlide1.classList.add("food-slide");
    foodSlide1.classList.add("animate-fading");
    foodSlide1.appendChild(f1);
    foodSlide1.appendChild(f1Desc);

    let f2 = new Image();
    f2.src = food2;
    f2.classList.add("food-images");
    let f2Desc = document.createElement("p");
    f2Desc.innerHTML = "garlic bread";
    let foodSlide2 = document.createElement("div");
    foodSlide2.classList.add("food-slide");
    foodSlide2.classList.add("animate-fading");
    foodSlide2.appendChild(f2);
    foodSlide2.appendChild(f2Desc);

    let f3 = new Image();
    f3.src = food3;
    f3.classList.add("food-images");
    let f3Desc = document.createElement("p");
    f3Desc.innerHTML = "authentic pasta";
    let foodSlide3 = document.createElement("div");
    foodSlide3.classList.add("food-slide");
    foodSlide3.classList.add("animate-fading");
    foodSlide3.appendChild(f3);
    foodSlide3.appendChild(f3Desc);

    let f4 = new Image();
    f4.src = food4;
    f4.classList.add("food-images");
    let f4Desc = document.createElement("p");
    f4Desc.innerHTML = "wagyu steak";
    let foodSlide4 = document.createElement("div");
    foodSlide4.classList.add("food-slide");
    foodSlide4.classList.add("animate-fading");
    foodSlide4.appendChild(f4);
    foodSlide4.appendChild(f4Desc);

    // Container
    let foodSlideContainer = document.createElement("div");
    foodSlideContainer.id = "food-slide-container";


    // Buttons
    let prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&#10094;";
    prevBtn.id = "prev-btn";

    let nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&#10095;";
    nextBtn.id = "next-btn";

    foodSlideContainer.appendChild(prevBtn);
    foodSlideContainer.appendChild(foodSlide1);
    foodSlideContainer.appendChild(foodSlide2);
    foodSlideContainer.appendChild(foodSlide3);
    foodSlideContainer.appendChild(foodSlide4);
    foodSlideContainer.appendChild(nextBtn);

    main.appendChild(foodSlideContainer);

    // Slide logic
    let index = 1;
    showDivs(index);

    function plusDivs(n) {
        showDivs(index += n);
    }

    function showDivs(n) {
        let i;
        let x = document.getElementsByClassName("food-slide");
        if (n > x.length) {
            index = 1;
        }
        if (n < 1) {
            index = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[index - 1].style.display = "block";
    }

    prevBtn.onclick = () => {
        plusDivs(-1);
    }
    nextBtn.onclick = () => {
        plusDivs(+1);
    }
}