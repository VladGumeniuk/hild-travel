const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 60,
        },
        610: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    },
});

const mySwiper = new Swiper(".mySwiperOffer", {
    loop: true,
    speed: 1500,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});