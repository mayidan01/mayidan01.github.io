//lun
var mySwiper = new Swiper ('.swiper-container', {
    speed:2000,
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay:2000
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


