//2015.05.08 all.js
var win_w, win_h, scroll_y, sc_n2_ok = 0;
var body = null;
var dl_time = 300;



//디바이스 체크

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
alert("x : "+(isiPad && ((screenWidth <= 970 && screenHeight < screenWidth)||(screenWidth <= 601 && screenHeight > screenWidth))));
*/

if(check2 == false){
	if(!isiPad && ((screenWidth <= 970 && screenHeight < screenWidth)||(screenWidth <= 601 && screenHeight > screenWidth))){
		//$("html").addClass("tablet2");
		//alert("1234567 Tablet");
	}else{
		if(window.location.href.indexOf("/m/") > -1){
			if(window.location.href.indexOf("/sub/") > -1){
				window.location.href = window.location.href.replace("etland/cado/m/sub/","etland/cado/");
			}else{
				window.location.href = window.location.href.replace("etland/cado/m/","etland/cado/");
			}
		}
	};
}else{
	if(isiPad && ((screenWidth <= 970 && screenHeight < screenWidth)||(screenWidth <= 601 && screenHeight > screenWidth))){
		if(window.location.href.indexOf("/m/") > -1){
			window.location.href = window.location.href.replace("etland/cado/m/","etland/cado/");
		}
	}
};
//디바이스 체크




$(window).load(function(){
	$("#pg_lod").fadeOut("slow");
	document_ready();
});
$(window).resize(resize());
$(window).scroll(scroll_ck);
function mac_ck(){
	var mobileKeyWords = new Array('iPhone', 'iPod');
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}
	return device_name
}
function document_ready(){
	resize();
	body = $("body");
	if(this_pg == "main"){
		$(".main_pg .bg_bxslider ul").bxSlider({
			mode: 'vertical',
			pause: 7000,
			auto: true,
			pager: true,
			controls: false,
			preventDefaultSwipeX: false,
			preventDefaultSwipeY: true,
			onSliderLoad:function(currentIndex){
				setTimeout(function(){
					if(mac_ck() == ""){
						$(".main_pg .bg_bxslider .img_"+(currentIndex+1)+" .ti_box").find("div").addClass("go");
					}else{
						$(".main_pg .bg_bxslider .img_"+(currentIndex+1)+" .ti_box").find("div").animate({opacity:"1"},1000);
					}
				},dl_time);
			},
			onSlideBefore:function($slideElement, oldIndex, newIndex){
				setTimeout(function(){
					if(mac_ck() == ""){
						$(".main_pg .bg_bxslider .img_"+(oldIndex+1)+" .ti_box").find("div").removeClass("go");
						$(".main_pg .bg_bxslider .img_"+(newIndex+1)+" .ti_box").find("div").addClass("go");
					}else{
						$(".main_pg .bg_bxslider .img_"+(oldIndex+1)+" .ti_box").find("div").animate({opacity:"0"},1000);
						$(".main_pg .bg_bxslider .img_"+(newIndex+1)+" .ti_box").find("div").animate({opacity:"1"},1000);
					}
				},dl_time);
			}
		});
	}
	else{
		//sub
		

		//타이틀
		$("#ti_an span").each(function(i){
			$(this).delay(i*200).fadeIn();
		});

		if(this_pg.indexOf("product") > -1){
			//product all
			$(".pr_pg .pr_info_box ol").bxSlider({
				mode: 'horizontal',
				pause: 5000,
				//auto: true,
				pager: true,
				controls: false
			});
			//사진바꾸기
			po_img = $(".pr_pg .pr_img_d dl dt img");
			po_img_lg = po_img.length;
			
			if(po_img_lg > 1){
				$(".pr_pg .pr_img_d dt .img_box").bxSlider({
					mode: 'fade',
					pause: 3000,
					speed: 1000,
					preventDefaultSwipeX: false,
					auto: true,
					pager: false,
					controls: false
				});
			}
		}
		//air
		if(this_pg == "air"){
				var ar_an = function(){				
					$(".air_pg .ar_box i").each(function(i){
						setTimeout(function(){
							$(".air_pg .ar_box i").removeAttr("class").eq(i).addClass("on");
							if(i == 2) setTimeout(ar_an,500);
						},500*i);
					});
				}
				ar_an();
		}
		//about
		if(this_pg == "about"){
			$(".tx_person dt img").each(function(i){
				img_h = $(this).height();
				$(this).parents(".tx_person").css("paddingBottom",(img_h+20)+"px");
			});
		}
		//store
		if(this_pg == "store"){
			$("#search input[type='search']").on('keypress', function(e) {
				if (e.which == 13) {//enter
					this_key = $(this).val();
					list_lg = $(".store_list dl").length;
					//reset
					$(".store_list ol,.store_list dl,.store_list li").removeAttr("style")
					$(".store_list dl").attr("tabindex","0").removeAttr("class").each(function(i){
						if( $(this).find("dt,p,a").text().indexOf(this_key) == -1 ) $(this).fadeOut().addClass("hide");
						else $(this).fadeIn().addClass("show");

						if(i == (list_lg-1)){
							li_lg = $(".store_list li").length;
							$(".store_list li").each(function(j){
								if($(this).hasClass("ti")) return;
								this_show_lg = $(this).find(".show").length
								if(this_show_lg == 0) $(this).hide();
								
								if(j == (li_lg-1)){
									$(".store_list ol").each(function(){
										if( $(this).find("li:visible").length == 1) $(this).hide();
									})
								}
							});

							$(".store_list dl.show").first().focus();
						}
					});
				}
			});
		}

	}
}
function scroll_ck(){
	scroll_y = $(window).scrollTop();
	sc_n2_ok = (win_h/2)+scroll_y;// 화면과 스크롤 가운대 위치 값
	
	//air
	if(this_pg == "air"){
		sec_d = $(".flt_3");
		sec_Top = sec_d.offset().top;
		pg_h = $("#wrap").height();
		//console.log("sec_Top = "+sec_Top+" / pg_h = "+pg_h+" / win_h = "+win_h+" / / "+(win_h+scroll_y)+" >= "+(pg_h-20))
		if(sec_Top <= scroll_y || (win_h+scroll_y) >= (pg_h-100)) sec_d.find(".air_box i").addClass("go");
		else sec_d.find(".air_box i").removeClass("go");
	}
}

//resize 사이즈체크
function resize(){
	win_h = $(window).height();
	win_w = $(window).width();
}

function hd_nav(){
	var touchScroll = function( event ) {
		event.preventDefault();
	};
		
	$("#btn_nav").on("click", function(){
		if($("body").hasClass("open_nav")){
			$("body").removeClass("open_nav").find(".sub_pg header nav").animate({top:"-370px"},300,function(){
				$(this).hide();
				$("body").unbind("touchmove", touchScroll);
			});
		}else{
			$("body").addClass("open_nav").find(".sub_pg header nav").show().animate({top:"50px"},300,function(){
				$("body").bind("touchmove", touchScroll);
			});
		}	
	});

	$.stellar({
			horizontalScrolling: false,
			verticalOffset: 150
		});
}