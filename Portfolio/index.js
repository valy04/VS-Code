// - - - - - NAV BAR SCROLLING - - - - -

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    if (window.scrollY >= 60) {
        nav.classList.add("blur");
    } else {
        nav.classList.remove("blur");
    }
});

// - - - - - SLIDER PROJECTS - - - - -

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".wrp-projects");
//     const leftBtn = document.querySelector(".nav-btn.left");
//     const rightBtn = document.querySelector(".nav-btn.right");
//     const firstArticle = container.querySelector(".project");

//     const calculateScrollAmount = () => {
//         const articleWidth = firstArticle.offsetWidth;
//         const marginRight = parseInt(window.getComputedStyle(container).marginRight.replace("px", ""));
//         return articleWidth + marginRight;
//     };

//     rightBtn.addEventListener("click", function () {
//         const scrollAmount = calculateScrollAmount();
//         container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     });

//     leftBtn.addEventListener("click", function () {
//         const scrollAmount = calculateScrollAmount();
//         container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     });
// });