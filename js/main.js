// =========== SWIPER ===========
let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
});

// =========== THEME DARK/LIGHT ===========
const changeThemeBtn = document.querySelector('#change-theme');

changeThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('icons-bg-light');
});

// =========== MOBILE MENU ===========
class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = '') 
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);
mobileNavbar.init();

// =========== ANIMATED TEXT ===========
const text = document.querySelector('.text-wrapper');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.text-wrapper .letter',
    scale: [0, 1],
    duration: 2500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })

const text2 = document.querySelector('.home-subtitle');
text2.innerHTML = text2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home-subtitle .letter2',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2200,
    delay: (el, i) => 500 + 30 * i
  })

const text3 = document.querySelector('.home-description');
text3.innerHTML = text3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home-description .letter3',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  const hiddenxElements = document.querySelectorAll('.hiddenx');
  hiddenxElements.forEach((el) => observer.observe(el));

  const hiddensElements = document.querySelectorAll('.hiddens');
  hiddensElements.forEach((el) => observer.observe(el));