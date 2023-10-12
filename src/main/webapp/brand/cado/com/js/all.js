/*all.js*/
var win_w, win_h, scr_ck_num, scroll_y, l_ck_cum, sc_n2_ok = 0;
var scr_ck = false;
var ie_vs = [];//[ie,etc / ie버전 / 호환성보기]
var v_pg_lod = setTimeout(pg_lod);
//디바이스 체크
//d_chk();

var screenHeight = Math.floor(screen.height / window.devicePixelRatio - window.screenTop);
var screenWidth = Math.floor(screen.width / window.devicePixelRatio - window.screenLeft);
var isiPad = (/ipad/i.test(navigator.userAgent.toLowerCase()));
var check1 = false;
var check2 = false;

(function(a, b) {
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
			.test(a)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
					.test(a.substr(0, 4)))
		check1 = true;
})(navigator.userAgent || navigator.vendor || window.opera);

if(check1 == true){
	if (/Windows NT/i.test(window.navigator.userAgent)) {
		check2 = false;
	}else{
		if(/Tablet PC/i.test(window.navigator.userAgent)) {
			check2 = false;
		}else{
			check2 = true;	
		}
	}
}else{
	if(/iPad|tablet|android/i.test(window.navigator.userAgent)) {
		if (/Windows NT/i.test(window.navigator.userAgent)) {
			check2 = false;
		}else{
			if(/Tablet PC/i.test(window.navigator.userAgent)) {
				check2 = false;
			}else{
				check2 = true;	
			}
		}
	}else{
		check2 = false;
	}
};

/*
alert("check2 : "+check2);
alert("isiPad : "+isiPad);
alert("screenWidth : "+screenWidth);
alert("screenHeight : "+screenHeight);
*/

if(check2 == true){
	if(!isiPad && ((screenWidth <= 970 && screenHeight < screenWidth)||(screenWidth <= 601 && screenHeight > screenWidth))){
		//$("html").addClass("tablet2");
		//alert("1234567 Tablet");
		if(window.location.href.indexOf("index.html") < 1 && window.location.href.indexOf(".html") > -1){
			window.location.href = window.location.href.replace("/cado/","/cado/m/sub/");
		}else{
			window.location.href = window.location.href.replace("/cado/","/cado/m/");
		}
		
	}else{
		if(window.location.href.indexOf("/m/") > -1){
			if(window.location.href.indexOf("/sub/") > -1){
				window.location.href = window.location.href.replace("/cado/m/sub/","/cado/");
			}else{
				window.location.href = window.location.href.replace("/cado/m/","/cado/");
			}
		}
	};
};

//디바이스 체크



//버전체크
agt_ck();

$(function(){
	$("body").css("overflow","hidden");
});
$(window).load(function(){
	clearTimeout(v_pg_lod);
	if(this_pg != "main") $("body").removeAttr("style");
	$("#pg_loding").fadeOut("slow");

	$(document).ready(document_ready);
});
function document_ready(){
	resize();
	
	if(this_pg == "main"){
		//메인
		main_tx();

		$(".main_pg .bg_bxslider ul").bxSlider({
			mode: 'vertical',
//			speed: 1000,
			pause: 7000,
			auto: true,
			pager: true,
			controls: false,
			captions: true,
			onSliderLoad:function(currentIndex){
				var paper_d = $(".main_pg .bg_bxslider .bx-pager");
				var paper_h = paper_d.height();
				paper_d.css("marginTop",-(paper_h/2));

				$(".main_pg .bg_bxslider .img_"+(currentIndex+1)).find(".ti").delay(1000).animate({width:ti_w[currentIndex]},1000);//ti_w[currentIndex]
				$(".main_pg .bg_bxslider .img_"+(currentIndex+1)).find(".tx").delay(1000).animate({opacity:"1",top:"0"},1000);
			},
			onSlideBefore:function($slideElement, oldIndex, newIndex){
				$(".main_pg .bg_bxslider .img_"+(oldIndex+1)).find(".ti,.tx").removeAttr("style");
				$(".main_pg .bg_bxslider .img_"+(newIndex+1)).find(".ti").delay(1000).animate({width:ti_w[newIndex]},1000);//ti_w[newIndex]
				$(".main_pg .bg_bxslider .img_"+(newIndex+1)).find(".tx").delay(1000).animate({opacity:"1",top:"0"},1000);
			}
		});

		//2015.06.05 메인팝업
		var pop_con = $(".main_popup .pop_con");
		var pop_con_h = pop_con.outerHeight(true);
		if($(".main_popup").hasClass("open")){
			$("body").css("overflow","hidden");
			if(win_h > pop_con_h) pop_con.css("marginTop",((win_h-pop_con_h)/2));
		}
	}else{
		if(ie_vs[1] != 10 && ie_vs[1] != 9 && ie_vs[1] != 8 && ie_vs[1] != 7) pg_prx();//최신버전ie10~,chrome,safari
		else pg_bg();//하위버전
		
		//상단 제목 페이드인
		if(this_pg != "main" || this_pg != "store") $(".hd_img .tx").animate({opacity:"1"},2000);
		
		//shop에 리스트체크
		if(this_pg == "shop"){
			var this_idx = null;
			var list_d = $(".shop_pg .pr_list_d .pr_list");
			list_d.find("li").on("mouseenter",function(){
				if($(this).hasClass("no_list")) return;
				else{
					this_idx = $(this).index();
					$(this).addClass("hover");
					list_d.each(function(){
						$(this).find("li").eq(this_idx).addClass("bg_hover");
					});
				}
			}).on("mouseleave",function(){
				if($(this).hasClass("no_list")) return;
				else{
					list_d.find(".bg_hover").removeClass("bg_hover");
					$(this).removeClass("hover");
				}
			});
		}
	}
}
$(window).resize(resize);
$(window).scroll(scroll_ck);
//메인 글씨 비율맞게 줄이자
var tx_h = [];
var tx_w = [199,514,325,622,365];
var ti_h = [];
var ti_w = [423,409,595,678,588];
var box_mt = [];
var tx_ml = [];
var c_ti_h = [];
function main_tx(){
	$("#wrap.main_pg .heder,.bg_bxslider ul li").css({width:win_w,height:(win_h-149)});
	if(win_w >= 1250 && win_h >= 800 ) $("body").removeAttr("style").css({overflow:"hidden"}).find("#wrap.main_pg").removeAttr("style").find(".heder,.bg_bxslider ul li").css({width:win_w,height:(win_h-149)});
	else{
		if(win_h <= 800) $("body").css({overflowY:"auto"}).find("#wrap.main_pg").css({height:"800px"}).find(".heder,.bg_bxslider ul li").css({height:"710px"});
		if(win_w <= 1250) $("body").find("#wrap.main_pg").css({width:"1250px"}).find(".heder,.bg_bxslider ul li").css({width:"1250px"});
	}

	var img_h_m = 960 - $(".main_pg .heder,.main_pg .bg_bxslider ul li").height();
	img_h_p = (img_h_m/(960/100)).toFixed(1);
	
	for(var i = 0; i < 5;i++){
		var this_d = $(".main_pg .bg_bxslider .img_"+(i+1));
		var this_ti = this_d.find(".ti");
		var this_tx = this_d.find(".tx");
		var this_box = this_d.find(".ti_box");
		if(tx_h.length != 5){
			ti_h.push(this_ti.height());
			tx_h.push(this_tx.height());
			box_mt.push(this_box.css("marginTop").replace(/[^0-9]/g,''));
			tx_ml.push(this_tx.css("marginLeft").replace(/[^0-9]/g,''));
		}
		c_ti_h = (ti_h[i] / 100)*img_h_p;
		c_tx_h = (tx_h[i] / 100)*img_h_p;
		c_ti_w = (ti_w[i] / 100)*img_h_p;
		c_box_mt = (box_mt[i] / 100)*img_h_p;
		c_tx_ml = (tx_ml[i] / 100)*img_h_p;

		/*console.log("=================================================");
		console.log("i = "+i);
		console.log("ti_w[i] = "+ti_w[i]+" / ti_h[i] = "+ti_h[i]+" / tx_h[i] = "+tx_h[i]+" / box_mt[i] = "+box_mt[i]+" / tx_ml[i] = "+tx_ml[i]);
		console.log("c_ti_w = "+c_ti_w+" / c_ti_h = "+c_ti_h+" / c_tx_h = "+c_tx_h+" / c_box_mt = "+c_box_mt+" / c_tx_ml = "+c_tx_ml);*/

		//this_ti.height(Math.round(ti_h[i]-c_ti_h));//.width(Math.round(ti_w[i]-c_ti_w));
		//if(win_h < 850) this_tx.height("20px");
		//else this_tx.height(Math.round(tx_h[i]-c_tx_h));
		//this_box.css("marginTop",- Math.round(box_mt[i]-c_box_mt));
	}
}
//로딩중
function pg_lod(){
	var v_delay = 100;
	$("#pg_loding .ico_d div").each(function(i){
		$(this).delay(v_delay*(i+1)).animate({left:0},1000,function(){
			$(this).animate({opacity:0},500,function(){
				$(this).removeAttr("style");
			});
		});
	});
	v_pg_lod = setTimeout(pg_lod,2000);
}
//ie9이하에서는 페럴렉스 삭제 백그라운드로 변경
function pg_bg(){
	$("*[data-image-src]").each(function(i){
		this_src = $(this).attr("data-image-src");
		if(ie_vs[1] == 9 || ie_vs[1] == 10){
			$(this).css({background:"url("+this_src+") no-repeat",backgroundSize:"cover"});//.removeAttr("data-parallax,data-image-src");
			$(this).removeAttr("data-parallax").removeAttr("data-image-src");
		}else{
			$(this).css({background:"url("+this_src+") no-repeat",backgroundSize:"cover"}).removeAttr("data-*");
		}
		
	});
}
//ie9이상 페이지별 페럴렉스
function pg_prx(){
	if(this_pg == "about"){
		prx($('.prx_hd_img'),"img/img_ab_top.jpg",0.7,-1);
		prx($('.prx_sec_2_img'),"img/img_ab_04.jpg",0.7,-1);
		prx($('.prx_sec_5_img'),"img/img_ab_05.jpg",0.8,-1);
	}else if(this_pg == "air"){
		prx($('.prx_hd_img'),"img/img_air_top.jpg",0.7,-1);
		prx($('.prx_sec_2_img'),"img/img_air_02.jpg",0.9,-1);
		prx($('.prx_sec_3_img'),"img/img_air_05.jpg",0.8,-1);
	}else if(this_pg == "shop"){
		prx($('.prx_hd_img'),"img/img_shop_01.jpg",0.8,-1);
		prx($('.prx_sec_2_img'),"img/img_shop_02.jpg",0.8,-1);
	}else if(this_pg == "product_700"){
		prx($('.prx_hd_img'),"img/img_pr_700_01.jpg",0.5,-1);
		prx($('.prx_info_img'),"img/img_pr_700_03.jpg",0.5,-1);
	}else if(this_pg == "product_300"){
		prx($('.prx_hd_img'),"img/bg_main_01.jpg",0.5,-1);
		prx($('.prx_info_img'),"img/img_pr_300_03.jpg",0.7,-1);
	}else if(this_pg == "product_100"){
		prx($('.prx_hd_img'),"img/img_100_01.jpg",0.5,-1);
		prx($('.prx_info_img'),"img/img_100_03.jpg",0.5,-1);
	}else if(this_pg == "product_10"){
		prx($('.prx_hd_img'),"img/img_pr_10_01.jpg",0.5,-1);
		prx($('.prx_info_img'),"img/img_pr_10_02.jpg",0.7,-1);
	}else if(this_pg == "store"){
		prx($('.prx_sec_2_img'),"img/img_store_01.jpg",0.7,-1);
	}
}
//resize 사이즈체크
function resize(){
	win_h = $(window).height();
	win_w = $(window).width();
	if($(window).height() == 0 || $(window).height() > document.body.clientHeight) win_h = document.body.clientHeight;
	if($(window).width() == 0 || $(window).width() > document.body.clientWidth) win_w = document.body.clientWidth;
	
	if(win_w <= 900) $("body").removeAttr("class").addClass("w_900");
	else if(win_w >= 900 && win_w <= 1300) $("body").removeAttr("class").addClass("w_1300");
	else $("body").removeAttr("class");

	//메인
	if(this_pg == "main"){
		main_tx();

		var paper_d = $(".main_pg .bg_bxslider .bx-pager");
		var paper_h = paper_d.height();
		paper_d.css("marginTop",-(paper_h));
	}
}
//scroll 체크
var pg_sc_ck = false;
var pg_sc_ck2 = false;//여분
var map_of_top = 0; //store map위치
function scroll_ck(){
	if(ie_vs[1] == 10 || ie_vs[1] == 9 || ie_vs[1] == 8 || ie_vs[1] == 7){
		if($(".parallax-mirror").length > 0) $(".parallax-mirror").remove();
	}

	if(!scr_ck && $(window).scrollTop() == 0 && scr_ck_num == 0){
		scr_ck = true;
		scr_ck_num = 1;
	}else scr_ck_num = 1;

	if(scr_ck) scroll_y = $("body").scrollTop();
	else scroll_y = $(window).scrollTop();
	sc_n2_ok = (win_h/2)+scroll_y;// 화면과 스크롤 가운대 위치 값

	//air
	if(this_pg == "air"){		
		if(sc_n2_ok >= $(".air_con_d .sec_3").offset().top && !pg_sc_ck){
			pg_sc_ck = true;
			an_air_sec3();
		}
		if(sc_n2_ok >= $(".air_con_d .sec_2").offset().top && !pg_sc_ck2){
			pg_sc_ck2 = true;
			air_ar();
		} 

	}else if(this_pg.indexOf("product") > -1){
		//product
		//상단메뉴 제어해보자
		var pr_nav = $(".pro_pg .pr_nav");
		if(scroll_y >= 50) pr_nav.addClass("sc_ck").stop().animate({padding:"10px 0"},200);			
		else pr_nav.removeClass("sc_ck").stop().animate({padding:"38px 0"},200);

		//pr_700
		if(sc_n2_ok >= $(".pro_con_d .pr_info_01").offset().top && !pg_sc_ck){
			pg_sc_ck = true;
			pr_700();
		}
		
		//하단 글씨
		if(sc_n2_ok >= $(".pro_con_d .pr_info_02").offset().top) $(".pro_con_d .pr_info_02 .fr .first .ti").animate({opacity:"1"},2000);

	}else if(this_pg == "store"){
		//store
		var map_d = $(".store_pg .hd_img .map");
		if(!pg_sc_ck){
			pg_sc_ck =  true;
			map_of_top = map_d.offset().top;
			store_sec2_top = $(".store_pg .sec_02").offset().top;
		}

		if((scroll_y+86) >= map_of_top) map_d.removeAttr("style").addClass("pos_fx");
		else map_d.removeAttr("style").removeClass("pos_fx");
		if((scroll_y+86+410) >= store_sec2_top) map_d.css("borderBottom","10px solid #f5f5f5");
	}
}
//
function air_ar(){
	setTimeout(function(){$("#ar_on").css({"background-position-y":"20px"})},300);
	setTimeout(function(){$("#ar_on").css({"background-position-y":"42px"})},600);
	setTimeout(function(){$("#ar_on").css({"background-position-y":"0px"})},900);

	setTimeout(air_ar,900);
}
//nav 페이지 체크
function pg_ck(){
	var nav_d = $("#nav ul li");
	if(this_pg =="about") nav_d.eq(0).addClass("on");
	else if(this_pg =="air") nav_d.eq(2).addClass("on");
	else if(this_pg =="shop") nav_d.eq(3).addClass("on");
	else if(this_pg.indexOf("pr_c") > -1) nav_d.eq(1).addClass("on");
	else if(this_pg =="store") nav_d.eq(4).addClass("on");
}
//parallax
function prx(Idx,Img,Sp,Zin){
	Idx.parallax({
		imageSrc: Img
		,speed: Sp
		,zIndex: Zin
	});
}
//버전체크
function agt_ck(){
	var agt = navigator.userAgent.toLowerCase();
	var ck_1 = "";

	if (agt.indexOf("chrome") != -1) ck_1 = 'Chrome'; 
	else if (agt.indexOf("opera") != -1) ck_1 = 'Opera'; 
	else if (agt.indexOf("staroffice") != -1) ck_1 = 'Star Office'; 
	else if (agt.indexOf("webtv") != -1) ck_1 = 'WebTV'; 
	else if (agt.indexOf("beonex") != -1) ck_1 = 'Beonex'; 
	else if (agt.indexOf("chimera") != -1) ck_1 = 'Chimera'; 
	else if (agt.indexOf("netpositive") != -1) ck_1 = 'NetPositive'; 
	else if (agt.indexOf("phoenix") != -1) ck_1 = 'Phoenix'; 
	else if (agt.indexOf("firefox") != -1) ck_1 = 'Firefox'; 
	else if (agt.indexOf("safari") != -1) ck_1 = 'Safari'; 
	else if (agt.indexOf("skipstone") != -1) ck_1 = 'SkipStone'; 
	else if (agt.indexOf("msie") != -1) ck_1 = 'Internet Explorer'; 
	else if (agt.indexOf("netscape") != -1) ck_1 = 'Netscape'; 
	else if (agt.indexOf("mozilla/5.0") != -1) ck_1 = 'Mozilla'; 
	ie_vs[0] = ck_1;
	
	var rv = "-1";
	var ua = navigator.userAgent;
	var ie_Trident = 0;// 4 = ie8 , 5 = ie9 , 6 = ie10 , 7 = ie11 , 0 = 크롬,사파리,파폭
	if (navigator.appName == 'Microsoft Internet Explorer') {        
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);

		var ivs = ua.split("Trident/");
		ie_Trident = ivs[1].split(".");
		ie_Trident = ie_Trident[0];

	}else{
		//navigator.appName == Netscape
		var ivs = ua.split("Trident/");

		if(ivs[1] == "undefined" || ivs[1] == null) ivs = "ie_x";
		else{
			ie_Trident = ivs[1].split(".");
			ie_Trident = ie_Trident[0];
		}
	}

	if(rv == "7"){
		if(ie_Trident == "4"){ie_vs[1] = 8; ie_vs[2] = true;}
		else if(ie_Trident == "5"){ie_vs[1] = 9; ie_vs[2] = true;}
		else if(ie_Trident == "6"){ie_vs[1] = 10; ie_vs[2] = true;}
		else{ie_vs[1] = 7; ie_vs[2] = false;}
	}else if(rv == "8"){ie_vs[1] = 8; ie_vs[2] = false;}
	else if(rv == "9"){ie_vs[1] = 9; ie_vs[2] = false;}
	else if(rv == "10"){ie_vs[1] = 10; ie_vs[2] = false;}
	else if(rv == "11"){ie_vs[1] = 11; ie_vs[2] = false;}
	else if(rv == "-1"){
		if(ie_Trident == "7"){ie_vs[1] = 11; ie_vs[2] = true;}
		else{ ie_vs[1] = -1; ie_vs[2] = false; }
	}
}
//air tx animate
function an_air_sec3(){
	var an_d = $(".air_con_d .sec_3 .an_tx_d");

	an_d.children(".ti").find("div").animate({top:"0"},200);
	an_d.children(".sub_ti").find("div").delay(200).animate({top:"0"},200);
	an_d.children(".tx_big").find("div").css({top:"0",opacity:"0"}).delay(400).animate({opacity:"1"},800);
	an_d.children(".tx_list").find(".ti div").css({top:"0",opacity:"0"}).delay(600).animate({opacity:"1"},800);
	an_d.children(".tx_list").find(".tx_01 div").delay(600).animate({top:"0"},400);
	an_d.children(".tx_list").find(".tx_02 div").delay(800).animate({top:"0"},400);
	an_d.children(".tx_list").find(".tx_03 div").delay(1000).animate({top:"0"},400);
}
//ptoduct tx animate :: 700d
function pr_700(){
	var an_d_l = $(".pro_con_d .pr_info_01 .fl");
	var an_d_r = $(".pro_con_d .pr_info_01 .fr");
	
	dl_time = 200;
	an_d_l.children("li").each(function(i){
		$(this).find(".ti div").delay(dl_time*i).animate({left:"0",opacity:"1"},600);
		$(this).find(".tx div").delay(dl_time*(i+1)).animate({left:"0",opacity:"1"},600);
	});
	an_d_r.children("li").each(function(i){
		$(this).find(".ti div").delay(dl_time*i).animate({opacity:"1"},800);
		$(this).find(".tx div").delay(dl_time*(i+1)).animate({height:"100%",opacity:"1"},800);
	});
}
//팝업 닫자
function pop_close(){
	$(".main_popup").removeClass("open").hide();
}

