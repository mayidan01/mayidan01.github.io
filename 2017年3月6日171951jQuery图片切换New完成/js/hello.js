//ÎÊºò
var d = new Date();
var h = d.getHours();
var s = '';
if(h<11){
    s = 'Good morning' + '.';
}else{
    s = 'Good afternoon' + '.';
}
document.getElementById("s").innerHTML=s;