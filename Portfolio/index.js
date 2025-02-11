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

let currentIndex = 0;
const projectsWrapper = document.querySelector('.wrp-projects');
const dots = document.querySelectorAll('.dot');
const leftBtn = document.querySelector('.nav-btn.left');
const rightBtn = document.querySelector('.nav-btn.right');
const totalItems = document.querySelectorAll('.wrp-projects .project').length; 

function changeSlide(index) {
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0; 
    } else {
        currentIndex = index;
    }

    const newPosition = 385 * currentIndex;

    projectsWrapper.scrollTo({
        left: newPosition,
        behavior: 'smooth',
    });

    dots.forEach((dot, i) => dot.checked = i === currentIndex);
}

leftBtn.addEventListener('click', () => changeSlide(currentIndex - 1));

rightBtn.addEventListener('click', () => changeSlide(currentIndex + 1));

dots.forEach((dot, index) => {
    dot.addEventListener('change', () => changeSlide(index));
});

projectsWrapper.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        
        return;
    } else {
        
        e.preventDefault();

        
        if (e.deltaX > 0) {
            changeSlide(currentIndex + 1); 
        } else {
            changeSlide(currentIndex - 1);
        }
    }
});