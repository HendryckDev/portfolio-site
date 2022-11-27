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