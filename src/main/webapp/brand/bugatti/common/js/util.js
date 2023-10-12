//��������
var win_w = window.innerWidth;	//win_w
var win_h = window.innerHeight;	//win_h
var main_slider = null;			//���� �����̵�
var detail_slider = null;		//������ �����̵�
var faq_ck = false;				//faq������üũ
var btn_leftmenu = $("#btn_leftMenu");
var wrap_d = $("#wrap");
var content_d = $("#container");
var ie_vs = "7";	//ie���� üũ
var mobile_vs = ""	//����� üũ
var myScroll = null;//left menu iscroll

//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//document.addEventListener('click', function (e) { e.preventDefault(); }, false);

//�̹��� �ε��� ȿ��(������ ȭ�鸸ŭ�� �̹����� �ε�ó��)	   	 	 
$(function() {
	$(".lazy").lazyload({
		 thresold : 10,
		 placeholder : "../../images/progress_bar_layer3.gif"
		 ,effect:"fadeIn"
		 ,event : "sporty"
		 ,skip_invisible : false
    });
	
});

$(window).bind("load", function() {
	var timeout = setTimeout(function() {
		$(".lazy").trigger("sporty");
    }, 200);
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
	    $('*:last-child').addClass('last-child');
	}
});

$(document).bind( "pagebeforeload", function( event, data ){
	 data.deferred.resolve( data.absUrl, data.options, page );
});

$(document).ready(function(){	
	isIEVersion();//ie vs
	open_left_menu();//open left menu

	$(window).resize(function(){
		win_h = window.innerHeight;	//win_h
		
		left_menu_re();//���ʸ޴�
		
		if( win_w == window.innerWidth ) return false;
		
		win_w = window.innerWidth;	//win_w
		if(main_slider != null) main_slider_re(ie_vs);//main_slider_re
		if(detail_slider != null) detail_slider_re();//detail_slider 
		
		//faq���
		if(faq_ck != false && win_w <= 480 ){
			$(".faq_list_wrap .faq_board ul li").width($(".faq_list_wrap").width()/3);
		}else if(faq_ck != false && win_w > 480 ){
			$(".faq_list_wrap .faq_board ul li").removeAttr("style");
		}
		content_d.removeAttr("style");
	});
});


//main slider
function f_main(){
	    //main_slider.destroySlider();
		main_slider = $("#slides").bxSlider({
			mode: "fade",
			auto:true,
			autoHover: true
		}).ready(function(){
			main_slider_re(ie_vs);
		});
		
		if(win_w <= 750) $(".bx-controls-direction").hide();
		else $(".bx-controls-direction").show();
}
//main_slider_re
function main_slider_re(ie_vs){
	
	if(win_w <= 1280){
		if(win_w <= 750){
				$(".bx-controls-direction").hide();
				$("#main .roll_img,#main .bx-viewport").css({height:"auto",width:"auto"});
		}
		//메인 4개 수정
		if(win_w <= 1090 && win_w > 480){
			$(".main_bn_box img").each(function(i){
				
				if(i == 0){
					if(win_w/2 <= 521) $(this).width(win_w/2+"px");
					else $(this).width("521px");
				}else $(this).width(win_w/4+"px");
			}).height("auto");
		}else if(win_w <= 480) $(".main_bn_box img").removeAttr("style");
		
		if (mobile_vs == "" ){
			$("#main .roll_img,#main .bx-viewport").css({height:"auto",width:$("#main .bx-wrapper").width()+"px"});
			$("#main .rolling_group,#main .roll_img").css({paddingBottom:"54%"});

		}else{ 
			//mobile
			if(win_h > 330) $("#main .roll_img,#main .bx-viewport").css({height:( win_h /2 ),width:win_w}); 
			else $("#main .roll_img,#main .bx-viewport").css({height:( win_h ),width:win_w}); 
		}
	}else{
		$(".bx-controls-direction").show();
		$("#main .roll_img,#main .bx-viewport").css({width:$("#main .bx-wrapper").width()+"px",height:"630px",paddingBottom:"0"});
	}
	
	if(ie_vs=="8" && win_w <= 1280){
		$("#main .roll_img,#main .bx-viewport").css({height:"auto",width:win_w+"px"});
		$("#main .rolling_group,#main .roll_img").css({paddingBottom:"54%"});
	}else if(ie_vs=="8" && win_w > 1280)$("#main .roll_img,#main .bx-viewport").css({height:'630px',width:$("#main .bx-wrapper").width()+"px",paddingBottom:"0"});
}

//open left menu
function open_left_menu(){
	btn_leftmenu = $("#btn_leftMenu");
	wrap_d = $("#wrap");
	content_d = $("#container");
	btn_leftmenu.on("click", function(){
		if( wrap_d.hasClass("open") ){
			wrap_d.prop("class","");
			$("#container").unbind('touchmove');
			$("body").removeAttr("style");
			if(win_w <= 390 ) $("header h1").removeAttr("style");
			// iscroll ����
			if( win_h < $("#gnb1 > div").height() ){
				myScroll.destroy();
				myScroll = null;
			}
		}else{
			wrap_d.prop("class","open");
			$("#container").bind('touchmove', false);
			$("body").css("overflow","hidden");
			content_d.width(win_w-17);
			if(win_w <= 390 ) $("header h1").css({left:"57px",marginLeft:"0"});
			//iscroll ����
			if( win_h < $("#gnb1 > div").height() ){
				myScroll = new IScroll('#wrap .gnb', { 
					scrollbars: true,
					mouseWheel: true,
					interactiveScrollbars: true,
					shrinkScrollbars: 'custom',
					click: true
				});
			}
		}
	});
	$("#bg_nav").on("click",function(){
		wrap_d.prop("class","");
		$("#container").unbind('touchmove');
		$("body").removeAttr("style");
		if(win_w <= 390 ) $("header h1").removeAttr("style");
		// iscroll ����
		if( win_h < $("#gnb1 > div").height() ){
			myScroll.destroy();
			myScroll = null;
		}
	});
	left_menu_re();
}
//left menu re
function left_menu_re(){
	//���������� ������¡ �ϸ� ����
	
	if( wrap_d.hasClass("open") ){
		wrap_d.prop("class","");
		$("#container").unbind('touchmove');
		$("body").removeAttr("style");
		if(win_w <= 390 ) $("header h1").removeAttr("style");
		// iscroll ����
		if( win_h < $("#gnb1 > div").height() ){
			myScroll.destroy();
			myScroll = null;
		}
	}
}

//ie8 open left menu
function ie8_open_left_menu(types){
	var wrap = $("#wrap");
	if(types){
		wrap.css({paddingLeft:"200px"})
		wrap.find(".gnb").css({left:"0",boxShadow:"1px 1px 2px rgba(0,0,0,.5)"});
		wrap.find("header").css({left:"200px"});
		wrap.find(".bg_nav").css({left:"200px",right:"0"});
	}else{
		wrap.css({paddingLeft:"0"})
		wrap.find(".gnb").css({left:"-200px",boxShadow:"none"});
		wrap.find("header").css({left:"0"});
		wrap.find(".bg_nav").removeAttr("style").css({left:"-100%"});
	}
}

//faq swipe tab
function f_faq(choiceNum){
	faq_ck = true;
	if( win_w <= 480 ) {
		$(".faq_list_wrap .faq_board ul li").width($(".faq_list_wrap").width()/3);
	}else{
		$(".faq_list_wrap .faq_board ul li").removeAttr("style");
	}
	$.faqNav = $('.swiper-nav').swiper({
		slidesPerView: 'auto',
		freeMode:true,
		freeModeFluid:true,
		onSlideClick: function(nav){
			$.faqNav.swipeTo(nav.clickedSlideIndex);
		}
	});
	$.faqNav.swipeTo(choiceNum);
	
	$(".faq_list_wrap #btn_left").on("click",function(){
		$.faqNav.swipePrev();
	});
	$(".faq_list_wrap #btn_right").on("click",function(){
		$.faqNav.swipeNext();
	});
}
//ie version
function isIEVersion(){
	var IEIndex = navigator.appVersion.indexOf("MSIE");         // MSIE�� ã�� �ε����� ����
	var IE8Over = navigator.userAgent.indexOf("Trident");      // MS IE 8�̻� ���� üũ
	if( IEIndex > 0 || IE8Over > 0 )  {
		var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
		if (trident != null){
			switch (trident[1]) {
				case "7.0" :
					ie_vs = "11";
					break;

				case "6.0" :
					ie_vs = "10";
					break;

				case "5.0" :
					ie_vs = "9";
					break;

				case "4.0" :
					ie_vs = "8";
					break;

				default :
					ie_vs = "8";
					break;
			}
		}
	}else if( IEIndex == -1 || IE8Over == -1 ){
		ie_vs = "99";
		var ua = window.navigator.userAgent.toLowerCase();
		if ( /ipad/.test(ua) ) mobile_vs = "ipad";
		if ( /iphone/.test(ua) ) mobile_vs = "iphone";
		if ( /android/.test(ua) ) mobile_vs = "android";
		if ( /opera/.test(ua) ) mobile_vs = "opera";
		if ( /bada/.test(ua) ) mobile_vs = "bada";
	}
}

//detail slider
function f_detail(){
	detail_slider = $("#rolling_group1").bxSlider({
		auto:true
	});
}
function detail_slider_re(){
	var slid_w = $(".dt_group1 .dt_rolling").width();
	$(".dt_group1 .bx-viewport,.dt_group1 .dt_pro_list > div").height(slid_w*0.995+"px").width(slid_w*0.995+"px");
}


