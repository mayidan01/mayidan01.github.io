$(function(){
	$("#skin li").click(function(){
		var n=$(this).index()
		$(this).addClass("selected").siblings().removeClass("selected")
		$("#cssFile").attr("href","css/skin_"+n+".css")
	})
	$(".center-center .one").click(function(){
		$(".center-top .pic").attr("src","images/blue_one_small.jpg")
	})
	$(".center-center .three").click(function(){
		$(".center-top .pic").attr("src","images/blue_two_small.jpg")
	})
	$(".center-center .two").click(function(){
		$(".center-top .pic").attr("src","images/blue_three_small.jpg")
	})
	$(".center-top .pic").jqueryzoom({xzoom:300,yzoom:300,offset:50})
})