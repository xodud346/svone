/*all.js*/
var win_w, win_h, scr_ck_num, scroll_y, l_ck_cum, main_nav_y = 0;
var scr_ck = false;
$(document).ready(function(){
	resize();
	//top parallx
	console.log(this_pg);
	if(this_pg == "main"){
		main_nav_y = $(".main_con_d .con_nav").offset().top; //메인에 내용 메뉴
		$(window).scroll(scroll_ck);
		//parallx_img = "img/img_main_top.jpg";
		
		$('.parallax-window').parallax({
			imageSrc: "img/img_main_top.jpg"
			,speed: 0.2
			,position: "top center"
		});

	}else if(this_pg == "about"){
		//parallx_img = "img/img_ab_top.jpg";
		$('.parallax-window').parallax({
			imageSrc: "img/img_ab_top.jpg"
			,speed: 0.2
			,position: "top center"
		});
		$('.parallax_img').parallax({
			imageSrc: "img/img_ab_01.jpg"
			,speed: 0.2
			,position: "top center"
			,zIndex: 1
		});
		$('.parallax_img2').parallax({
			imageSrc: "img/img_ab_02.jpg"
			,speed: 0.2
			,position: "top center"
			,zIndex: 1
		});
	}
});
$(window).resize(resize);
$(window).scroll(scroll_ck);
//
function resize(){
	win_h = $(window).height();
	win_w = $(window).width();
	if($(window).height() == 0 || $(window).height() > document.body.clientHeight) win_h = document.body.clientHeight;
	if($(window).width() == 0 || $(window).width() > document.body.clientWidth) win_w = document.body.clientWidth;

	console.log("win_w = "+win_w+" / win_h = "+win_h);
}
//
function scroll_ck(){
	if(!scr_ck && $(window).scrollTop() == 0 && scr_ck_num == 0){
		scr_ck = true;
		scr_ck_num = 1;
	}else scr_ck_num = 1;

	if(scr_ck) scroll_y = $("body").scrollTop();
	else scroll_y = $(window).scrollTop();

	console.log("scroll_y = "+scroll_y+" / main_nav_y = "+main_nav_y);	
	if(scroll_y >= main_nav_y) $(".main_con_d .con_nav").addClass("fix");
	else $(".main_con_d .con_nav").removeClass("fix");
}
//
function l_open(){
	var L_d = $("#nav");
	if(L_d.hasClass("open")) L_d.removeClass("open").animate({left:"100%"},300);
	else L_d.addClass("open").animate({left:"80%"},300);
}