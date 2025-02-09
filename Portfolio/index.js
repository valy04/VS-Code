window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    if (window.scrollY >= 60) {
        nav.classList.add("blur");
    } else {
        nav.classList.remove("blur");
    }
});
