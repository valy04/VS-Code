// - - - - - SLIDER PROJECTS - - - - -

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".wrp-projects");
    const leftBtn = document.querySelector(".nav-btn.left");
    const rightBtn = document.querySelector(".nav-btn.right");
    const firstArticle = container.querySelector(".project");

    const calculateScrollAmount = () => {
        const articleWidth = firstArticle.offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(container).marginRight.replace("px", ""));
        return articleWidth + marginRight;
    };

    const scrollAmount = calculateScrollAmount();
    let scrollPosition = 0;
    let autoScrollInterval;

    const scrollInfinite = () => {
        scrollPosition += scrollAmount;

        if (scrollPosition >= container.scrollWidth) {
            container.scrollLeft = 0;
            scrollPosition = 0;
            resetAutoScroll();
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const resetAutoScroll = () => {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
        autoScrollInterval = setInterval(scrollInfinite, 5000);
    };

    resetAutoScroll();

    rightBtn.addEventListener("click", function () {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        resetAutoScroll();
    });

    leftBtn.addEventListener("click", function () {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        resetAutoScroll();
    });
});

// - - - - - ANIMATION KEYFRAMES APPEAR - - - - -

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".appear, .move-to-top");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach((el) => observer.observe(el));
});