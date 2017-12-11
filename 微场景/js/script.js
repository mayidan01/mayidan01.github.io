 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    
    });
  
//var mp3btn = {
//	changeClass: function (target,id) {
//       	var className = $(target).attr('class');
//       	var ids = document.getElementById(id);
//       	(className == 'on')
//           	? $(target).removeClass('on').addClass('off')
//           	: $(target).removeClass('off').addClass('on');
//       	(className == 'on')
//           	? ids.pause()
//           	: ids.play();
//   	},
//	play:function(){
//		document.getElementById('media').play();
//	}
//}
//mp3btn.play();