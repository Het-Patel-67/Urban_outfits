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

function dropdown() {
    const covers = document.querySelectorAll(".drop-cover");

    covers.forEach(wrapper => {
        const trigger = wrapper.querySelector(".drop-trigger");
        const content = wrapper.querySelector(".drop-content");

        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            content.classList.toggle("hidden");
            content.classList.toggle("flex");
            content.classList.toggle("flex-col");
        });
    });
}
window.addEventListener("click", function (e) {
    const dropdowns = document.querySelectorAll(".drop-content");
    dropdowns.forEach((dropdown) => {
        if (!dropdown.classList.contains("hidden")) {
            dropdown.classList.add("hidden");
            dropdown.classList.remove("flex", "flex-col");
        }
    });
});

window.onload = () => {
    dropdown();
};
function search()
{
   let search = document.querySelector(".search");
   search.classList.toggle("block");
   search.classList.toggle("hidden");
}
