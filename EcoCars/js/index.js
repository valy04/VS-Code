// NAV SCROLL BACKGROUND BLUR
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu-responsive');

    if (!menu.classList.contains('active')) {
      if (window.scrollY > 30) { // ajustează valoarea după preferință
        nav.classList.add('scroll');
      } else {
        nav.classList.remove('scroll');
      }
    }
  });

  // MENU RESPONSIVE
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.nv-li-svg');
  const closeButton = document.querySelector('.btn-close');
  const menu = document.querySelector('.menu-responsive');
  const body = document.body;
  const menuItems = document.querySelectorAll('.menu-responsive-li');

  toggleButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
});

// AFISARE CONTENT CAND APESI PE "START"
// document.addEventListener('DOMContentLoaded', (event) => {
//     const startBtn = document.querySelector('.start-btn');
//     const pageContentWrp = document.querySelector('.page-content-wrp');
//     const aboutWrp = document.querySelector('.about-wrp');
  
//     startBtn.addEventListener('click', () => {
//       // Adaugă clasa 'active' la 'page-content-wrp'
//       pageContentWrp.classList.add('active');
  
//       // Derulează pagina la secțiunea 'about-wrp'
//       aboutWrp.scrollIntoView({ behavior: 'smooth' });
//     });
//   });  