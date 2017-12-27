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


//计时器

  function getRTime(){
        var EndTime= new Date('2018/12/25 10:00:00'); 
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        
        
        var h=Math.floor(t/1000/60/60%24);
        var m=Math.floor(t/1000/60%60);
        var s=Math.floor(t/1000%60);

        document.getElementById("t_h").innerHTML = h + ":";
        document.getElementById("t_m").innerHTML = m + ":";
        document.getElementById("t_s").innerHTML = s + "";
    }
    setInterval(getRTime,1000);