window.onload=function(){
    var li=document.querySelectorAll("#nav li");
        var o=true;
    li[li.length-1].onclick=function(){
        for (var i=0;i<li.length;i++){
            var n=i-6;
            if(o){
                n=n*15;
            }else{
                n=360;
            }
            li[i].style.transform="rotateZ("+n+"deg)"
        }
        o=!o;
    }
    for (var i=0;i<li.length-1;i++){
        li[i].index=i;
        //通过自定义赋值下标值
        li[i].onclick=function(){
            //当前点击的对象执行的代码 旋转至0度
            this.style.transform="rotate(0deg)";
            //当前点击导航的左侧导航依次旋转
            console.log(this.index);
            var leftdeg=0;
            for (var i=this.index-1;i>=0;i--){
                console.log(i);
                leftdeg=leftdeg-15;
        i[i].style.transform="rotate("+leftdeg+"deg)";
            }
            var rightdeg=15;
            for (var i=this.index+1;i<li.length;i++){
                rightdeg=rightdeg+15;
                li[i].style.transform="rotate("+rightdeg+"deg)";
            }
        }
    }
}
