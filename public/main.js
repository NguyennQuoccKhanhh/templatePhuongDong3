const dropMenu = document.getElementById('dropMenu');
const clickMenu = document.getElementById('clickMenu');

if (dropMenu && clickMenu) {  // Kiểm tra sự tồn tại của cả dropMenu và clickMenu
    document.addEventListener('click', (e) => {
        if (clickMenu.contains(e.target)) {
            dropMenu.classList.toggle('hidden');
        } else if (!dropMenu.contains(e.target)) {
            dropMenu.classList.add('hidden');
        }
    });
}

var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext',
        prevEl: '.docterPrev',
    },
    breakpoints: {
        1536: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
    
});
var gridSwiper = new Swiper(".gridSwiper", {
    slidesPerView: 5.5,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext1',
        prevEl: '.docterPrev1',
    },
    breakpoints: {
        1536: {
            slidesPerView: 5.5,
        },
        1280: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
    
});
