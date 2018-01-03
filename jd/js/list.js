//轮播开始 
var lis=document.getElementById("lun")
            .firstElementChild
            .children;
    var num_list=document.getElementById("num_list")
            .firstElementChild
            .children;
    var lun=document.getElementById("lun");
    var i=0;
    var timer;
    function run(){
        timer=setInterval(function(){
//停止定时器clearInterval(timer);
        lis[i].removeAttribute("class");
            num_list[i].firstElementChild
                .removeAttribute("class");
           i++;
            if(i>=lis.length){
                i=0;
            }
            lis[i].setAttribute("class","active");
            num_list[i].firstElementChild.setAttribute("class","active_num")
    },1000)
    }
run();
lun.onmouseover=function(){
    clearInterval(timer)
};
    lun.onmouseout=function(){
        run();
    };
for(var j=0;j<num_list.length;j++){
    num_list[j].firstElementChild.setAttribute("num",j);
    num_list[j].onmouseover=function(){
        lis[i].removeAttribute("class");
        num_list[i].firstElementChild.removeAttribute("class");
        clearInterval(timer);
        i=this.firstElementChild.getAttribute("num");
        lis[i].setAttribute("class","active");
        num_list[i].firstElementChild.setAttribute("class","active_num")
    }
}
//轮播结束

//图片切换
 var swiper = new Swiper('.list .dv11 .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

var swiper = new Swiper('.dv12 .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//选项卡开始
 $(function(){
	$(".main-left-top ul li").click(function(){
		var i=$(this).index()
		$(".main-left-bot>div").eq(i).show().siblings("div").hide()
		$(this).css({"color":"red"}).siblings("li").css({"color":"#000"})
	})
})
 //选项卡结束