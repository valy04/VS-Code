
/* LOGIN / REGISTER / LOGIN / REGISTER */

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

/* LOGIN / REGISTER / LOGIN / REGISTER */


// SEARCH-BAR 



// SEARCH-BAR


/* HIDDEN ARROW-DOWN WHEN SCROLL */

var arrowDiv = document.querySelector(".arrow-hidden-scroll");

  window.onscroll = function() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    arrowDiv.style.opacity = "0";
  } else {
  arrowDiv.style.opacity = "1";
  }
};

/* HIDDEN ARROW-DOWN WHEN SCROLL */


/* ARROW-APPEAR WHEN SCROLL */

myID = document.getElementById("arrow-appear-scroll");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 400) {
        myID.className = "arrow-appear-scroll show"
    } else {
        myID.className = "arrow-appear-scroll hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

/* ARROW-APPEAR WHEN SCROLL */


// SCROLL-SMOOTH - - - - SCROLL-SMOOTH - - - - SCROLL-SMOOTH

function scrollToTop() {
  var position =
      document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 17);
  } else clearTimeout(scrollAnimation);
}

// SCROLL-SMOOTH - - - - SCROLL-SMOOTH - - - - SCROLL-SMOOTH


// SLIDER-BANNER - - - - SLIDER-BANNER - - - - SLIDER-BANNER

const banners = document.querySelectorAll(".banner");
const totalBanners = banners.length;
let currentBanner = 0;

function showBanner(num) {
  banners.forEach(banner => {
    banner.classList.remove("active");
  });

  banners[num].classList.add("active");
}

function nextBanner() {
  currentBanner++;
  if (currentBanner >= totalBanners) {
    currentBanner = 0;
  }
  showBanner(currentBanner);
}

function prevBanner() {
  currentBanner--;
  if (currentBanner < 0) {
    currentBanner = totalBanners - 1;
  }
  showBanner(currentBanner);
}

document.querySelector(".prev").addEventListener("click", prevBanner);
document.querySelector(".next").addEventListener("click", nextBanner);

showBanner(currentBanner);

// SLIDER-BANNER - - - - SLIDER-BANNER - - - - SLIDER-BANNER


// CART-SHOP - - - - CART-SHOP - - - - CART-SHOP



// CART-SHOP - - - - CART-SHOP - - - - CART-SHOP
