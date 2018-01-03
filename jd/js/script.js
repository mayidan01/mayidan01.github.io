 var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;  
    var rollCon = document.getElementById('rollCon');  
    var rollSubject = document.getElementById('rollSubject');  
    var rollCopy = document.getElementById('rollCopy');  
    rollCopy.innerHTML = rollSubject.innerHTML;  
    if(($('#rollSubject').height()>0)&&($('#rollSubject').height()<$('#rollCon').height())){  
        $('#rollCon').css('height',$('#rollSubject').height());  
        setInterval(Marquee, 50);  
    }else if(($('#rollSubject').height()>0)&&($('#rollSubject').height()>=$('#rollCon').height())){  
        setInterval(Marquee, 50);  
    }  
    function Marquee() {  
        if ((rollCopy.offsetTop-rollSubject.offsetTop)<rollCon.scrollTop)  
            rollCon.scrollTop =0;  
        else {  
            rollCon.scrollTop++;  
        }  
    }  





