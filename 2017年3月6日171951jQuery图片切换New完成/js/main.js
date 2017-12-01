$("#box ul li a")
//在给定的祖先元素下匹配所有的后代元素
    .hover(a, b)
//hover(鼠标移到元素上要触发的函数,鼠标移出元素要触发的函数)

//方法a是:鼠标移入要做的事情
function a() {

    if (this != $("#box ul li a")[$("#box ul li a").length - 1]) {
        //如果当前鼠标指向的不是最后一张(第5张)图,那么才执行下面的效果

        $(this)
        //当前a
            .stop()
            //停止所有在指定元素上正在运行的动画。
            .animate({width: '600px'}, 500, a1);
        //animate(一组包含作为动画属性和终值的样式属性和及其值的集合,三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒数值(如：1000),在动画完成时执行的函数，每个元素执行一次。)

        $(this).find(".text")
            .stop()
            .animate({opacity: '1'}, 500);

    }


    if (this != $("#box ul li a")[$("#box ul li a").length - 1]) {
        $("#box ul li a").last().find(".text").stop().animate({opacity: '0'}, 500)
    }

};
// h3
function a1() {
    $(this).find(".text").find("h3")
        .stop()
        .delay(100)  //设置一个延时来推迟执行队列中之后的项目。
        .animate({top: '0', opacity: '1'}, 300, a2);
};
// s
function a2() {
    $(this).next()
        .stop()
        .delay(100)
        .animate({width: '100%'}, 300, a3);
};
// p
function a3() {
    $(this).next()
        .stop()
        .delay(100)
        .animate({opacity: '1', top: '0'}, 500);
};

//方法b是:鼠标移出要做的事情
function b() {

    if (this != $("#box ul li a")[$("#box ul li a").length - 1]) {
        // if(this != $("#box ul li a")[4]) { 等于上面的代码

        $(this)
            .stop()
            .animate({width: '88px'}, 500);

        $(this).find(".text")
            .stop()
            .animate({opacity: '0'}, 200);// .text

        $(this).find(".text").find("h3")
            .stop()
            .animate({top: '-50px', opacity: '0'}, 100);// h3

        $(this).find(".text").find("h3").next()
            .stop()
            .animate({width: '0'}, 100) //s

        $(this).find(".text").find("h3").next().next()
            .stop()
            .animate({opacity: '0', top: '-10px'}, 100) //p


    }

    if (this != $("#box ul li a")[$("#box ul li a").length - 1]) {
        $("#box ul li a").last().find(".text").stop().animate({opacity: '1'}, 500)
    }

};
