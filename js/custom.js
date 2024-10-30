$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_visual_slide .swiper-pagination",
            clickable: true
        },

    })
})

$(function () {
    const mainSetSlide = new Swiper('.main_set_slide', {
        //slidesPerView: "4",
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_set .arrows .next',
            prevEl: '.main_set .arrows .prev',
        },

    })
})