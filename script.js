let slideIdx = 1;
slideShow();

function slideShow() {
    let i;
    let slides = document.querySelectorAll(".slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIdx++;
    if (slideIdx > slides.length) {
        slideIdx = 1;
    }
    slides[slideIdx - 1].style.display = "block";
    setTimeout(slideShow, 5000)
}

function dotShow() {
    let scrollContainer = document.getElementById("scroll");
    let scrollLeft = scrollContainer.scrollLeft;
    let itemWidth = scrollContainer.querySelector(".elem").offsetWidth + 16;
    let index = Math.round(scrollLeft / itemWidth);
    let dots = document.querySelectorAll(".dots");

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.style.backgroundColor = "black";
        }
        else {
            dot.style.backgroundColor = "grey";
        }
    })

}
function dotShow2() {
    let scrollContainer = document.querySelector(".scroll");
    let scrollLeft = scrollContainer.scrollLeft;
    let itemWidth = scrollContainer.querySelector(".elem2").offsetWidth;
    let index = Math.round(scrollLeft / itemWidth);
    let dots = document.querySelectorAll(".dots2");

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.style.backgroundColor = "black";
        } else {
            dot.style.backgroundColor = "grey";
        }
    });
}

const cover = document.querySelectorAll(".drop-cover");
cover.forEach(dropdown => {
    const contents = dropdown.querySelector(".drop-content");
    const trigger = dropdown.querySelector(".drop-trigger");
    const closeBtn = dropdown.querySelector(".close");
    trigger.addEventListener("click", () => {
        contents.classList.remove("hidden");
        contents.classList.add("flex", "flex-col");
    });

    closeBtn.addEventListener("click", () => {
        contents.classList.add("hidden");
        contents.classList.remove("flex", "flex-col");
    });
})


function search() {
    let search = document.querySelector(".search");
    search.classList.toggle("block");
    search.classList.toggle("hidden");
}
