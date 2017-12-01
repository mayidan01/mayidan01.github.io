$(function(){
	var i=0
	$("#goL").click(function(){
		i++
		if(i==4){i=0}	
		$("#banner_pic ul li a img").stop().animate({"marginLeft":-250*i},500)
	})
	$("#goR").click(function(){
		if(i==0){i=4}
		i--	
	$("#banner_pic ul li a img").stop().animate({"marginLeft":-250*i},500)
	})

})