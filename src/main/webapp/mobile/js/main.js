/*
	나중에 console.log는 주석 처리 해주세요
*/

$.com.main = $.com.main || {
	sec_st_ck: function(idx){
		//자구실행하면안되니까 한번만 처리하게
		if(idx.data('script') == true) return false;
		else idx.attr('data-script', true);		
	},
	sec_0_slider_h: function(_idx){
		var _h3_h = _idx.find('h3').first().height(),
			_list_h = _idx.find('.list:eq(0) li:eq(0)').height(),
			_list_li_bn = _idx.find('.li_bn'),
			_controls_a = _idx.parents('.main_trend').find('.bx-controls a');

		_controls_a.removeAttr('style').height(_h3_h);
		_list_li_bn.removeAttr('style').height(_list_h);
	},
	sec_0: function(){
		//홈
		var _sec_d = $('.main_con_box > div:eq(0)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;

		//메인 슬라이드
		var _idx = _sec_d.find('.main_slider .slider'),
			_idx_opt = {
				preloadImages: 'visible',
				pager: true,
				//controls: false,
				touchEnabled: false,
				captions: true,
				auto: true,
				autoControls: false,
				adaptiveHeight: true,
				nextText: '<span class="blind">다음 이벤트</sapn>',
				prevText: '<span class="blind">이전이벤트</sapn>'
			};
		if(_idx.children().length > 1 && !_idx.hasClass('_ck_slider')) _idx.addClass('_ck_slider').bxSlider(_idx_opt);
		
		//메인 JUST 1 DAY
		//$.com.timeSale.showtime('2016-04-18', '00:00:00', '#tx_time');

		//메인 트랜드이슈
		_idx = _sec_d.find('.main_trend .slider'),
		_idx_opt = {
				preloadImages: 'visible',
				pager: true,
				controls: false,
				captions: true,
				auto: false,
				adaptiveHeight: true,
				swipeThreshold: 100,
				//infiniteLoop: false,
				//hideControlOnEnd: true,
				//onSliderLoad: function(currentIndex){
				//	$.com.main.sec_0_slider_h(_idx);
				//}
			};

		if(_idx.children().length > 1 && !_idx.hasClass('_ck_slider')){
			_idx.addClass('_ck_slider').bxSlider(_idx_opt);
		}
		//$.com.main.sec_0_slider_h(_idx);

		//메인 md추천상품 리스트사이즈
		var _ul = _sec_d.find('.main_recommend ul'),
			_li_h = _ul.first().find('li:last-child').height();
		_ul.find('.li_title').removeAttr('style').height(_li_h);

		//gps버튼
		var _gps = _sec_d.find('.weather_d'),
			_msg = _gps.children('.msg'),
			_weather = _gps.children('.weather'),

			_btn_weather = _msg.children('.btn_weather'),
			_btn_gps = _weather.find('.btn_gps'),
			_btn_close = _weather.find('.btn_close');

		_btn_gps.off('click').on('click', $.com.main.gps);
		_btn_weather.off('click').on('click', function(){
			_weather.show();
			_msg.hide();
		});
		_btn_close.off('click').on('click', function(){
			_weather.hide();
			_msg.show();
		});

	},//sec_0: function(){
	sec_1: function(){
		var _sec_d = $('.main_con_box > div:eq(1)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;

	},//sec_1: function(){
	sec_2: function(){
		var _sec_d = $('.main_con_box > div:eq(2)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;

		//상단 슬라이드
		var _idx = _sec_d.find('.slider ul'),
			_idx_opt = {
				preloadImages: 'visible',
				pager: true,
				//controls: false,
				touchEnabled: false,
				captions: true,
				auto: true,
				autoControls: false,
				adaptiveHeight: true,
				nextText: '<span class="blind">다음 이벤트</sapn>',
				prevText: '<span class="blind">이전이벤트</sapn>'
			};
		if (_idx.children().length >1){
			if(!_idx.hasClass('_ck_slider')) _idx.addClass('_ck_slider').bxSlider(_idx_opt);
		}

	},//sec_2: function(){
	sec_3: function(){
		var _sec_d = $('.main_con_box > div:eq(3)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;

		//nav(전체, 라이프가이드....)
		_sec_d.find('nav a').on('click', function(){
			var _this = $(this),
				_this_tx = _this.text(),
				_idx = _this.index();

			_this.addClass('on').siblings().removeClass('on');
		});

	},//sec_3: function(){
	sec_4: function(){
		var _sec_d = $('.main_con_box > div:eq(4)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;
		
		//nav(전체, TV/음향기기.....)
		_sec_d.find('nav a').on('click', function(){
			var _this = $(this),
				_this_tx = _this.text(),
				_idx = _this.index();

			_this.addClass('on').siblings().removeClass('on');
		});

		//tab(온라인 베스트 / 오프라인 매장 베스트)
		$.com.util.tab(_sec_d.find('.tab_mn'), 0);

	},//sec_4: function(){
	sec_5: function(){
		var _sec_d = $('.main_con_box > div:eq(5)'),
			_start_ck = $.com.main.sec_st_ck(_sec_d);		
		if(_start_ck == false) return false;
	},//sec_5: function(){
	util_ond : function(){

		//해더 메뉴
		var _touch = false, //눌렀나 체크
			_mv_ch = false,//움직였는지 체크
			_mv_set,
			_idx = $('#hd_nav'),
			_idx_w = _idx.outerWidth(true),
			_ul = _idx.children(),
			_ul_w = 0,
			_li = _ul.children(),
			_li_w = 0,
			_s_clientX = 0,//시작점
			_this_translateX = 0,//현제 translateX값
			_mv_translateX = 0;//움직이면서 이동한 translateX값

		he_nav_h();

		_idx.on({
			vmousedown : function(e){
				e.preventDefault();
				_touch = true;
				_s_clientX = e.clientX;

				he_nav_h();
			},
			vmouseup : function(e){
				e.preventDefault();
				_touch = false;
				_this_translateX = _this_translateX + (e.clientX - _s_clientX);

				if(_this_translateX >= 0) _this_translateX = 0;
				if(_ul_w < (_idx_w - _this_translateX)) _this_translateX = (_idx_w - _ul_w);				

				$.com.main.hd_nav_xy('move', _this_translateX);
			},
			vmousemove : function(e){
				e.preventDefault();
				if(!_touch) return false;
				_mv_ch = true;

				var translateX = (e.clientX - _s_clientX);
				_mv_translateX = _this_translateX;
				_mv_translateX = (_mv_translateX+translateX);
				
				//홈 앞으로 안땡겨지게
				if(_mv_translateX >= 0){
					_mv_translateX = 0;
					translateX = 0;
				}
				//뒤로 못가게
				if(_ul_w < (_idx_w - _mv_translateX)) _mv_translateX = (_idx_w - _ul_w);

				$.com.main.hd_nav_xy('move', _mv_translateX);

				if(_mv_set) clearTimeout(_mv_set);
				_mv_set = setTimeout(function(){_mv_ch=false}, 300);
			},
			vclick : function(e){
				e.preventDefault();
				if(_mv_ch) return false;

				var _this = $(e.target),
					_li = _this.parents('li'),
					_idx = _li.index();

				$.com.main.hd_nav_xy('click', _idx);
				$.com.main.swip_xy(e, _idx);
			}
		});
		
		function he_nav_h(){
			//he_nav 넓이 체크
			_ul.css('width','');
			_li_w = 0;
			$.each(_li, function(){
				_li_w += $(this).outerWidth(true);
			});
			if(_idx_w <= _li_w){
				_ul.width(_li_w+2);
				_ul_w = _ul.outerWidth(true);
			}
		}

		$.com.main.hd_nav_xy = function(_type, _translateX){
			if(_type == 'click'){
				var _idx = _translateX,
					_this = _li.eq(_idx);

				_this.addClass('on').siblings().removeClass('on');				
				_ul.css('transform','');//_this_l 값체크하기위해 초기화
				
				var _trX = _this_translateX,
					_this_l = _this.offset().left,
					_this_w = _this.width(),
					_css_tr = (_this_l + (_this_w/2))-($.com.win_w / 2);

				if((_ul_w - $.com.win_w) < _css_tr) _css_tr = (_ul_w - $.com.win_w);//오른쪽 넘어가는거 차단				
				_css_tr = -(_css_tr);//음수로 변경
				if(_css_tr > 0) _css_tr = 0;//왼쪽으로 넘어가는거 차단
				
				_translateX = _css_tr;
			}
			
			_ul.css({'transform':'translateZ(0) translateX('+_translateX+'px)'});
			he_nav_h();
			var _copy = _ul.attr('style');
			$(window).scrollTop(0);
			_ul.css(_copy);
		}

		//섹션별 function 배열
		var _sec_function = [this.sec_0, this.sec_1, this.sec_2, this.sec_3, this.sec_4, this.sec_5];

		//swiper
		var _swip_box = $('#main_con_box'),
			_children = _swip_box.children('div'),
			_children_lg = _children.length;
			$.com.main.swip_num = 0;	//현제 swip위치	
		
		
		_swip_box.wrap('<div id="main_con_swip" />');
		var _main_con_swip = $('#main_con_swip');

		img_load($.com.main.swip_num);

		_main_con_swip.on({
			swiperight : function(e){
				$.com.main.swip_xy(e, 'R');
			},
			swipeleft : function(e){
				$.com.main.swip_xy(e, 'L');
			}
		});

		$.com.main.swip_xy = function(e, LR, type){
			var _bx_lg = $(e.target).parents('.bx-wrapper').length,
				_no_swip = $(e.target).parents('.no_swip').length;
			//console.log('_no_swip = '+_no_swip+' // _bx_lg = '+_bx_lg);
			if(_bx_lg & _no_swip == 0) return false;
			
			if(LR == 'L'){
				$.com.main.swip_num++;
				if($.com.main.swip_num > _children_lg-1){
					$.com.main.swip_num = _children_lg-1;
					return false;
				}				
			}else if(LR == 'R'){
				$.com.main.swip_num--;
				if($.com.main.swip_num < 0){
					$.com.main.swip_num = 0; 
					return false;
				}
			}else{
				/////////////
				//숫자로 넘어올때 //
				/////////////
				if(LR == undefined && LR == null) LR = 0;
				$.com.main.swip_num = LR;
			}

			$.com.main.hd_nav_xy('click', $.com.main.swip_num);
			//_li.eq($.com.main.swip_num).addClass('on').siblings().removeClass('on');
			if(type == true){
				_swip_box.css({'transition': 'all 0ms ease'});
				setTimeout(function(){
					_swip_box.css({'transition': ''});
				}, 300);
			}
			_swip_box.css({'transform':'translateZ(0) translateX('+ -($.com.win_w * $.com.main.swip_num)+'px)'});
			img_load($.com.main.swip_num);
		}
		
		function img_load(_idx){// 이미지 강제 로드
			var _this_children = _children.eq(_idx),
				_this_swip_img = _this_children.find('img');
			$.com.win_w = $('header').outerWidth(true);

			$.each(_this_swip_img, function(i){
				var _this = $(this);
					_original = _this.data('original');
				_this.attr('src', _original).removeAttr('data-original');
			});

			$.com.main.main_swip_h_chk();
			var _sec_start = _sec_function[_idx]();
		}
	},//util_ond : function(){
	main_swip_h_chk: function(){
		//메인swip하면 섹션별 높이 지정해줘야해서 로드하고나면 달라지니까
		var _swip_box = $('#main_con_box'),
			_children = _swip_box.children('div'),
			_this_children = _children.eq($.com.main.swip_num),
			_this_children_h = _this_children.height(),
			_children_lg = _children.length,
			_main_con_swip = $('#main_con_swip');

		//매번 높이값 바꿀수 없으니까 저번에 체크한거랑 같으면 넘김
		if($.com.main.swip_num_h == _this_children_h && $.com.win_w == _main_con_swip.width()) return false;
		else $.com.main.swip_num_h = _this_children_h;

		_children.removeAttr('style').css({width:$.com.win_w});
		_swip_box.css({width:'', height:''}).css({width: ($.com.win_w * _children_lg)});
		_main_con_swip.css({width:$.com.win_w, height:_this_children_h, overflow:'hidden'});


		//section별로 사이즈 지정된거 자시지정
		var _sec_d = $('.main_con_box > div:eq('+$.com.main.swip_num+')');
		if($.com.main.swip_num == 0){
			//메인 md추천상품 리스트사이즈
			var _ul = _sec_d.find('.main_recommend ul'),
				_li_h = _ul.first().find('li:last-child').height();
			_ul.find('.li_title').removeAttr('style').height(_li_h);

			//트랜드이슈
			$.com.main.sec_0_slider_h(_sec_d.find('.main_trend'));
		}
	},//main_swip_h_chk: function(){
	gps: function(){
		if('geolocation' in navigator){
			var geo = navigator.geolocation;
			geo.getCurrentPosition(function (pos) {
				var _pos = pos,
					_coo = _pos.coords,
					_lat = _coo.latitude,// 위도	
					_lon = _coo.longitude,// 경도
					_acc = _coo.accuracy;// 정확도	

				var add_tx = add(_lat, _lon),
				add_gu	= add_tx.results[0].address_components[2].long_name,
				add_si	= add_tx.results[0].address_components[3].long_name;
				
				//alert('위도 = '+_lat+' / 경도 = '+_lon+' / 정확도 = '+_acc+' / 주소 = '+add_tx);				
				
				$.ajax({
					type: "POST",
					async: false,
					data : {"LOC_INF_ADR" : add_tx, "CTY_SDO_NM" : add_si, "CTY_GGU_NM": add_gu},
					url: "/pc/common/commonIpInsertAjax.do",
					dataType: "json",
					success: function(json) {
						if(json){                            	
							//$('.weather > i').attr('class', '');		// 날시 이미지 
							$('#temperTxt').html(Number(json.info.CTY_WTH_CTM) + "°");
							$('#locTxt').text(json.info.TODAY + ' ' + json.info.CTY_GGU_NM);
						}
					},
					error: function() {
						alert('ajax error');
					}
				});	
				
				function add(map_x,map_y){
					var data;
					$.ajax({ 
						type:"GET"
						,async: false
						,url:"http://maps.googleapis.com/maps/api/geocode/json?latlng="+ map_x +","+ map_y +"&sensor=true_or_false"
						,dataType:"json"
						,success: function(json){
							data = json;
						}
						, error: function() {
							alert('ajax error');
						}
					});
					return data;
				}
			}, function (e) {
				alert({
					0: '위치 정보 검색에 문제가 있습니다.(msg:' + e.message + ')',
					1: '현재 위치 승인이 거부되어 위치정보를 찾을 수 없습니다. \n설정 > 위치정보 > 허용으로 변경해주세요',
					2: '브라우저가 위치정보를 검색하지 못했습니다.(msg:' + e.message + ')',
					3: '브라우저의 위치 정보 검색 시간이 초과됐습니다.'
				}[e.code]);
			});
		}
	},//gps: fucntion(){
	resize: function(){
		$.com.main.main_swip_h_chk();
	}//resize: function(){
};//$.com.main
//타임세일
$.com.timeSale = {
	showtime: function(_date, _time, _idx){
		//console.log(3);
		var arrDate = _date.split("-"),
			arrTime = _time.split(":"),
			arrMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),

			now = new Date(),
			nYear = now.getFullYear(),
			nMonth = now.getMonth(),
			nDay = now.getDate(),
			nHour = now.getHours(),
			nMin = now.getMinutes(),
			nSec = now.getSeconds(),

			strnow = arrMonth[nMonth] + " " + nDay + ", " + nYear + " " + nHour + ":" + nMin + ":" + nSec,
			strfuture = arrMonth[arrDate[1] - 1] + " " + arrDate[2] + ", " + arrDate[0] + " " + arrTime[0] + ":" + arrTime[1] + ":" + arrTime[2],
			d_date = Date.parse(strfuture) - Date.parse(strnow);

		d_day = Math.floor(d_date / 86400000);
		d_hour = Math.floor((d_date % 86400000) / 3600000);
		d_min = Math.floor(((d_date % 86400000) % 3600000) / 60000);
		d_sec = Math.floor((((d_date % 86400000) % 3600000) % 60000) / 1000);

		function html_chg(_num){
			var _nums = String(_num),
				_lg = _nums.length,
				_html = '';
			if(_lg == 1) _nums = '0'+_nums;
			
			var _split = _nums.split('');
			for ( var i in _split ){
				_html += '<strong>'+ _split[i] + '</strong>';
			}
			return _html;
		}

		var _html_d = '';
		if(d_day <= -1){
			//종료
			_html_d = '<span>00</span><i>:</i><span>00</span><i>:</i><span>00</span>';
			$(_idx).html(_html_d);
			//com.timeSale.stopclock();
			return false;
		}else{
			
			//진행중
			//일
			if(d_day > 0) _html_d += '<span class="d_day">'+d_day+'<em>DAY</em></span>';

			//시간
			if(d_hour > 0) _html_d += '<span>'+html_chg(d_hour)+'</span><i>:</i>';
			else _html_d += '<span>00</span><i>:</i>';
			
			//분
			if(d_min > 0) _html_d += '<span>'+html_chg(d_min)+'</span><i>:</i>';
			else _html_d += '<span>00</span><i>:</i>';
			
			//초
			if(d_sec > 0) _html_d += '<span>'+html_chg(d_sec)+'</span>';
			else _html_d += '<span>00</span>';
			
			$(_idx).html(_html_d);
		}		
		
		setTimeout("$.com.timeSale.showtime('"+_date+"','"+_time+"','"+_idx+"')", 1000);		
	}
}//$.com.timeSale = {

$(function(){
	$.com.main.util_ond();
});
$(window).resize($.com.main.resize)
$(document).on('scroll', function(){
	$.com.main.main_swip_h_chk();
});