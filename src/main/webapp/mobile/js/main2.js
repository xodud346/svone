/*
	나중에 console.log는 주석 처리 해주세요
*/
$.com.main = $.com.main || {
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
		var _sec_d = $.flick.p.find('.home_sec');

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
		$.com.timeSale.showtime('2016-04-18', '00:00:00', '#tx_time');

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
		var _sec_d = $.flick.p;

	},//sec_1: function(){
	sec_2: function(){
		var _sec_d = $.flick.p.find('.main_event');

		//상단 슬라이드
		var _idx = _sec_d.find('.slider ul'),
			_idx_opt = {
				preloadImages: 'visible',
				pager: true,
				controls: true,
				touchEnabled: false,
				captions: true,
				auto: true,
				autoControls: false,
				adaptiveHeight: true,
				nextText: '<span class="blind">다음 이벤트</sapn>',
				prevText: '<span class="blind">이전이벤트</sapn>'
			};
		if (_idx.children().length >1){
			if(!_idx.hasClass('_ck_slider')){
				_idx.addClass('_ck_slider').bxSlider(_idx_opt);
				return false;
			}
		};
	},//sec_2: function(){
	sec_3: function(){
		var _sec_d = $.flick.p.find('.main_ezin');

		//nav(전체, 라이프가이드....)
		_sec_d.find('nav a').on('click', function(){
			var _this = $(this),
				_this_tx = _this.text(),
				_idx = _this.index();

			_this.addClass('on').siblings().removeClass('on');
			return false;
		});

	},//sec_3: function(){
	sec_4: function(){
		var _sec_d = $.flick.p;
		
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
		var _sec_d = $.flick.p;
	},//sec_5: function(){
	util_ond : function(){
		
		//해더 메뉴
		var _touch = false, //눌렀나 체크
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

				if(_this_translateX > 0) _this_translateX = 0;
				if(_ul_w < (_idx_w - _this_translateX)) _this_translateX = (_idx_w - _ul_w);

				hd_nav_xy('move', _this_translateX);
			},
			vmousemove : function(e){
				e.preventDefault();
				if(!_touch) return false;

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
				hd_nav_xy('move', _mv_translateX);
			},
			vclick : function(e){
				e.preventDefault();

				var _this = $(e.target),
					_li = _this.parents('li'),
					_idx = _li.index(),
					_all_ck = false;//전체바꺼?

				hd_nav_xy('click', _idx);
				
				//현제페이지 클릭하면 return
				if($.flick.idx == _idx) return false;

				//전체 다바꺼야 하는지 체크
				if(Math.abs($.flick.idx - _idx) >= 2) _all_ck = true;

				//현제 -> 초기화 + 클릭
				var _chk_num = (-($.flick.idx % 3) + _idx) % 3,
					_num_ck = -1;
				
				/*
					0 = 지금 그대로 페이지 불러와
					1 = 오른쪽으로
					2 = 왼쪽으로
				*/
				if(_chk_num < 0){
					switch(Math.abs(_chk_num)){
						case 2 : _num_ck = false;
								 break;
						case 1 : _num_ck = true;
								 break;
					}
				}else{
					switch(_chk_num){
						case 1 : _num_ck = false;
								 break;
						case 2 : _num_ck = true;
								 break;
					}
				}
				$.flick.idx = _idx;
				$.flick.con.end('click', _num_ck);				
				
				if(!_all_ck) _idx = _idx+1;
				$.flick.con.append(_idx, _num_ck, _all_ck);
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
		function hd_nav_xy(_type, _translateX){
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
		
		///여기부터

		//섹션별 function 배열
		var _sec_function = [this.sec_0, this.sec_1, this.sec_2, this.sec_3, this.sec_4, this.sec_5];

		$.flick = $('#main_con_d'),//내용별 height만 조절
		$.flick.idx = 0,//현제 보고 있는 섹션
		$.flick.touch = false,// $.flick.d에서 터치했는지확인
		$.flick.d = $.flick.children('#flick_d'),//pointer-events: none; transform: translate3d(여기만변경, 0px, 0px);
		$.flick.p = $.flick.d.children('.flick_p'),
		$.flick.p.first_h = 0,//지금 보이는 화면 높이
		/*
			first		 //현제내용 ==>	transform: translate3d(100%, 0px, 0px); z-index: 10; 
			first.next() //이전내용 ==>	transform: translate3d(0%, 0px, 0px); z-index: 1;
			last		 //다음내용 ==>	transform: translate3d(200%, 0px, 0px); z-index:1;
		*/
		$.flick.num = _li.length,//메뉴 몇개인가
		$.flick.con = $('#main_con_box > div');// 내용
		$.flick.css_tt = function(){//내용 위치잡아주는거
			$.flick.p = $.flick.d.children('.flick_p');
			$.each($.flick.p, function(i){
				var _this = $(this),
					css_tt = '0%',
					css_z = 1;
				
				switch(i){
					case 0 : css_tt = '100%',
							 css_z = 3;

							 //현제보여지는 화면 높이 반영
							 var _ch_h = 0;
							 $.flick.heightCk();
							 break;
					case 2 : css_tt = '200%';
							 break;
				}
				_this.css({'transform':'translate3d('+css_tt+', 0px, 0px)', 'z-index':css_z});
				
			});//$.each($.flick.p, function(i){
		};//$.flick.css_tt = function(){
		$.flick.heightCk = function(){//컨텐츠 높이 체크
			$(document).on('scroll', function(){
				
				var _first_h = $.flick.p.first().children().outerHeight(true);
				if($.flick.p.first_h != _first_h){
					$.flick.css('height', 'auto');
					_first_h = $.flick.p.first().children().outerHeight(true);

					$.flick.p.first_h = _first_h;
					$.flick.css('height', $.flick.p.first_h);					
					
					if($.flick.idx == 0){//홈
						//트랜드이슈						
						var _ul = $.flick.p.first().children().find('.main_trend ul'),
							_li_h = _ul.first().find('li:last-child').height();
						_ul.find('.li_bn').removeAttr('style').height(_li_h);
						
						//md`s pick
						_ul = $.flick.p.first().children().find('.main_recommend ul'),
						_li_h = _ul.first().find('li:last-child').height();
						_ul.find('.li_title').removeAttr('style').height(_li_h);
					}
				}
			});
		};
		$.flick.con.append = function(_num, _idx, _all){// 내용 너어줘요
			/*
				_num = 내용 몇번째꺼너어야 하는지
				_idx = 어디에다가 너어야하는지(true ==> 이전내용 / false ==> 다음내용 / -1 ==> 현제창에)
				_all = 화면 여러개 바꺼야할때(true // _idx을 기준으로 현제창을 기준으로 +1 -1 해서 모두 바꿔요)
			*/	
			//console.log('[$.flick.con.append = function(_num, _idx, _all)] _num = '+_num+' / _idx = '+_idx +' / _all = '+_all);	
			if(_all == true){
				//여러개
				$.flick.con.append(_num , -1);//현제
				$.flick.con.append((_num-1) , true);//이전
				$.flick.con.append((_num+1) , false);//다음									
			}else{
				//한개만
				var _con_html = $.flick.con.eq(_num).html(),
					_eq = 0;
				
				if(_idx == -1) _eq = 0;
				else if(_idx == true) _eq = 1;
				else _eq = 2;
				
				$.flick.p.eq(_eq).html(_con_html);				
				$.com.main.swip_num = _num;
				img_load(_eq , _num);
			}			
		};

		//초기에 내용 넣기
		$.flick.con.append(0 , -1, true);
		$.flick.css_tt();
		
		//화면 con swip제어
		$.flick.p.on({
			touchstart : function(e){
				$.flick.touch = true;

				var th = e.originalEvent.touches[0];
				$.flick.thS_x = th.screenX;
				$.flick.thS_y = th.screenY;
			},
			touchend : function(e){
				$.flick.touch = false;
				var num_ck = $.flick.mv > 0 ? true : false, // 왼쪽이냐 오른쪽이냐 true ==> 왼쪽 , false ==> 오른쪽
					chg_ck = Math.abs($.flick.mv) > ($.com.win_w/2) ? true : false; //화면에 반 넘었나
				
				
				if(chg_ck){
					$.flick.idxChg(num_ck);
					$.flick.con.end('touch', num_ck);
				}
				$.flick.d.animate({ border: 'transparent' }, {
					step: function(now, fx) {
						$(this).css({transform: 'translate3d(0px, 0px, 0px)', pointerEvents: ''});
					},
					duration : 'slow'
				}, 'linear');
				$.flick.mv = undefined;
			},
			touchmove : function(e){
				if(!$.flick.touch) return false;

				var th = e.originalEvent.touches[0];
				$.flick.thM_x = th.screenX;
				$.flick.thM_y = th.screenY;
				$.flick.mv = $.flick.thM_x - $.flick.thS_x;
				$.flick.d.css({transform: 'translate3d('+$.flick.mv+'px, 0px, 0px)', pointerEvents: 'none'});
			}
		});
		
		//현제위치 잡아준다[swip했을때만 써요]
		$.flick.idxChg = function(num_ck){
			switch(num_ck){
				case -1 :	 $.flick.idx = $.flick.idx;									
							 break;
				case true :  $.flick.idx = $.flick.idx - 1;							
							 break;
				case false : $.flick.idx = $.flick.idx + 1;
							 break;
			}

			if($.flick.idx < 0) $.flick.idx = ($.flick.num-1);
			else if($.flick.idx > ($.flick.num-1)) $.flick.idx = 0;			
		};//$.flick.idxChg(num_ck);

		//마지막단계(공간 이동, 내용넣기)
		$.flick.con.end = function(type, num_ck){
			/*
				type = touch, click
				num_ck = true ==> 왼쪽 , false ==> 오른쪽, -1 ==> 그냥
			*/
			var con_num = 0;
			switch(num_ck){
				case -1 :	 con_num = $.flick.idx - 1;
							 break;
				case true :  $.flick.p.last().after($.flick.p.first());
							 con_num = $.flick.idx - 1;
							 break;
				case false : $.flick.p.first().before($.flick.p.last());
							 con_num = $.flick.idx + 1;
							 break;
			}

			if($.flick.idx < 0) con_num = $.flick.idx - 1
			else if($.flick.idx > ($.flick.num-1)) con_num = $.flick.idx + 1;			

			if(con_num < 0) con_num = ($.flick.num-1);
			else if(con_num > ($.flick.num-1)) con_num = 0;
			
			if(num_ck) num_ck = false;
			else  num_ck = true;
			
			if(type == 'touch') $.flick.con.append(con_num , num_ck);
			$.flick.css_tt();
			hd_nav_xy('click', $.flick.idx);
		};

		//이미지 강제 로드
		function img_load(_eq, _idx){
			if(_idx < 0) _idx = ($.flick.num-1);
			else if(_idx > ($.flick.num-1)) _idx = 0;

			var _this_children = $.flick.p.eq(_eq),
				_this_swip_img = _this_children.find('img');
			$.com.win_w = $('header').outerWidth(true);

			$.each(_this_swip_img, function(i){
				var _this = $(this);
					_original = _this.data('original');
				_this.attr('src', _original).removeAttr('data-original');
			});

			var _sec_start = _sec_function[_idx]();
		}
	},//util_ond : function(){
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
		//$.com.main.main_swip_h_chk();
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
/*$(window).resize($.com.main.resize)
$(document).on('scroll', function(){
	$.com.main.main_swip_h_chk();
});*/