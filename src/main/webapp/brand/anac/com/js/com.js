$.com = $.com || {};
$.com.layout = $.com.layout || {
	skipnavi: function(idx){
		document.getElementById(idx).tabIndex = -1;
		document.getElementById(idx).focus();
		return false;
	}, //skipnavi: function(){
	sc_ck: function() {
		/*
			$.com.win_w = 스크린 width
			$.com.win_h = 스크린 height
			$.com.ie = ie버전(크롬, 파폭 이런건 -1)
		*/
		$.com.ie = $.com.layout.ie8(); //버전체크
		 
		var win = window,
			doc = document;
		if (!win.innerWidth) {
			if (!(doc.documentElement.clientWidth == 0)) {
				$.com.win_w = doc.documentElement.clientWidth;
				$.com.win_h = doc.documentElement.clientHeight;
			} else {
				$.com.win_w = doc.body.clientWidth;
				$.com.win_h = doc.body.clientHeight;
			}
		} else {
			$.com.win_w = win.innerWidth;
			$.com.win_h = win.innerHeight;
		}
		//console.log('[sc_ck] w = '+$.com.win_w+' / h = '+$.com.win_h+' / $.com.ie = '+$.com.ie);
		
	}, //sc_ck: function(){        
	laypop: function(type, con_type, con_prdcd, sec){
		/*
			type = 'show', 'hide', 're'
			con_type = 'pr', 'mv' 상품이냐 동영상이냐
			con_prdcd = 클립한 팝업내용 정보 구분자
			sec = 섹션 (<, > 버튼 이랑 갯수 파악때문에)
		*/
		$.laypop = $('#laypop'),
		$.laypop.con_type = (con_type == 'pr') ? true : false,
		$.laypop.con_d = $.laypop.children('.laypop_con'),
		$.laypop.con = ($.laypop.con_type) ? $.laypop.find('.pr_con_d') : $.laypop.find('.mv_con_d');
		var _html = $('html');
		
		if(type == 'show'){
			//show
			if ($.laypop.data('con_type') != undefined) $.laypop.data('con_type', $.laypop.con_type);
			else $.laypop.attr('data-con_type', $.laypop.con_type);

			$.laypop.show();
			$.laypop.con.show().siblings().hide();
			_html.css({'overflow-x': 'hidden', 'overflow-y': 'hidden'});

			$.com.layout.laypop_con(con_type, con_prdcd, sec);//팝업 내용 바꺼요
			$.com.layout.laypop('re', con_type, con_prdcd);//팝업 정렬
			
			//키보드 이동 팝업창안에서 무한 빙글빙글
			var _a = $.laypop.con_d.find('a'),
				_a_F = _a.eq(0).addClass('fcs_tabS'),
				_a_L = _a.eq(_a.length - 1).addClass('fcs_tabE');

			_a_F.off('keydown').on('keydown', function(evt){
				var e = event || evt;
				var charCode = e.which || e.keyCode;

				if (charCode === 9) {
					if (e.shiftKey) {
						_a_L.focus();
						return false;
					}
				}
			}).focus();
			_a_L.off('keydown').on('keydown', function(evt){
				var e = event || evt;
				var charCode = e.which || e.keyCode;

				if (charCode === 9) {
					if (!e.shiftKey) {
						_a_F.focus();
						return false;
					}
				}
			});
		}else if(type == 're'){
			//팝업 위치 지정
			if($.com.win_w <= 860) $.laypop.addClass('sm_pop');
			else $.laypop.removeClass('sm_pop');
			
			$.laypop.css({'width': $.com.win_w, 'height': $.com.win_h});
			
			$.laypop.con_d.height = $.laypop.con_d.outerHeight(true);
			var _css_t = ($.com.win_h - $.laypop.con_d.height) / 2;

			if (_css_t > parseInt(0)) $.laypop.con_d.css('margin-top', _css_t);
			else $.laypop.con_d.css('margin-top', '10px');
		}else if(type == 'hide'){
			//팝업 닫아
			$.laypop.removeAttr('style');
			$.laypop.con.removeAttr('style');
			_html.css({'overflow-x': '', 'overflow-y': ''});
			$('.click_pop').removeClass('click_pop');
		}
	},//laypop: function(){
	laypop_con: function(con_type, con_prdcd, sec, btnPN){
		/*
			btnPN = .dd_btnPN 안에 버튼 눌러서 왔나안왔나 체크
		*/

		var _db = (con_type == 'pr') ? $.anac.pr_llist_db : '', //타입에따라 배열 선택
			_db_idx = $.com.layout.db_idx(con_prdcd, _db),// 배열에서 값 idx
			_this_db = _db[_db_idx];//정보
		
		//prev, next, mv_list
		var _list_d;
		if(sec == 3) _list_d = $.sec_03;
		else if(sec == 4) _list_d = $.sec_04.slider;
		else if(sec == 5 && con_type == 'mv') _list_d = $.sec_05.slider.find('.play_st');
		else if(sec == 5 && con_type == 'pr') _list_d = $.sec_05.slider.find('.real_st');

		if(con_type == 'pr'){//상품
			var _ico_html = '';
			if(_this_db.pr_ico_best) _ico_html += '<i class="ico_best"><span class="blind">best</span></i>';
			if(_this_db.pr_ico_new) _ico_html += '<i class="ico_new"><span class="blind">new</span></i>';
			$.laypop.con.find('.dd_ico').html(_ico_html);

			$.laypop.con.find('.tx_type').text(_this_db.pr_type);
			$.laypop.con.find('.img_pr img').attr('src', _this_db.pr_img);
			$.laypop.con.find('h4').html(_this_db.pr_name+'<br/>'+_this_db.pr_model);
			$.laypop.con.find('.sub_tx').text(_this_db.pr_ex);
			if(_this_db.pr_soldOut != ''){
				$.laypop.con.find('.tx_price').hide();
				$.laypop.con.find('.tx_selPrice').hide();
				$.laypop.con.find('.tx_soldout').show();
			}else{
				$.laypop.con.find('.tx_price').text(String(_this_db.pr_price).number_format()).show();
				$.laypop.con.find('.tx_selPrice').text(String(_this_db.pr_selPrice).number_format()).show();
				$.laypop.con.find('.tx_soldout').hide();
			}
			$.laypop.con.find('.tx_talk p').text(_this_db.pr_mdTalk);
			$.laypop.con.find('.btn_box .btn_buy').attr('href', 'http://www.etland.co.kr/pc/product/product.do?cateIdx=1001&prdMstCd='+_this_db.pr_prdCd);
			
						
			var btn_pn = $.laypop.con.find('.dd_btnPN'),
				tx_this = btn_pn.find('p .tx_this'),
				tx_end = btn_pn.find('p .tx_end'),
				_sec_lg = _list_d.children('li').length,
				_no_list = _list_d.children('.no_list').length,
				_sec_lg	= _sec_lg - _no_list,
				_click_idx = _list_d.find('.click_pop').parent().index();
			
			if(!btnPN){
				tx_this.text(_click_idx+1);
				tx_end.text(_sec_lg);
			}
			
			var tx_this_num = parseInt(tx_this.text());
			btn_pn.children('.btn_prev').off('click').on('click', function(){
				if(tx_this_num == 1) tx_this.text(_sec_lg);
				else tx_this.text(tx_this_num-1);

				con_chg();
			});
			btn_pn.children('.btn_next').off('click').on('click', function(){
				if(tx_this_num == _sec_lg) tx_this.text(1);
				else tx_this.text(tx_this_num+1);
				
				con_chg();
			});		
			
			function con_chg(){
				var _this_num = tx_this.text(),
					_this_prdcd = _list_d.find('li:eq('+(_this_num-1)+') a').data('prdcd');

				$.com.layout.laypop_con(con_type, _this_prdcd, sec, true);
			}

		}else if(con_type == 'mv'){//동영상
			// .img_mv
			$.laypop.con.find('iframe').attr('src', con_prdcd);
			var _list_html = '';
			$.each(_list_d.children('li'), function(i){
				var _this = $(this),
					_youtube = _this.children().data('youtube'),
					_img_mv_src = _this.find('.img_mv').attr('src');

				_list_html += '<a href="javascript:void(0)" data-youtube="'+_youtube+'">';
				_list_html +=	'<img src="./com/img/lay/pop_playm.png" class="ico_img">'; 
				_list_html +=	'<img src="'+_img_mv_src+'" alt="" class="img_mv" />'
				_list_html += '</a>';
			});
			$.laypop.con.find('.dd_list').html(_list_html).find('a').off('click').on('click', function(){
				$.com.layout.laypop_con(con_type, $(this).data('youtube'), sec, true);
			});
		}

	},//laypop_con: function(con_type, con_prdcd){
	ie8: function() {
		var rv = -1;
		if(navigator.appName == 'Microsoft Internet Explorer'){
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if(re.exec(ua) != null)
				rv = parseFloat(RegExp.$1);
			ie = rv;
		}else ie = -1;//크롬, 파폭이런거

		return ie;
	}, //ie8: function(){
	header: function(){
		$.header = $.header || $('#header'),
		$.hd_mn = $.hd_mn || $.header.children('.hd_mn'),
		$.logo = $.hd_mn.find('#logo'),
		$.nav = $.hd_mn.find('nav'),
		$.container = $.container || $('#container'),
		$.section = $.section || $.container.children('section');

		$.header.height($.header.height());
		$.nav.children().on('click', function(){
			var _this = $(this),
				_idx = _this.index();
			if(_idx != 0 && _idx != 6) $.com.layout.scrollOff($.section.eq(_idx), $.hd_mn.outerHeight(true));
		});

		$.logo.on('click', function(){
			$.com.layout.scrollOff($('#wrap'));
		});
		$.header.find('.btn_hd_nav').on('click', function(){
			if($.header.hasClass('open')){
				$.header.removeClass('open');
				$.nav.find('span').addClass('blind');
			}else{
				$.header.addClass('open');
				$.nav.find('.blind').removeClass('blind');
			}
		});

	},//header: function(){
	scroll_ck : function(){
		/*
			$.com.win_scroll = 스크롤 위치
			$.com.scroll_UD = 스크롤 방향 ↑ = true /  ↓ = false
		*/
        $.com.win_scroll = $(document).scrollTop();
        $.com.scroll_num = $.com.scroll_num || $.com.win_scroll;

        if($.com.scroll_num >= $.com.win_scroll) $.com.scroll_UD = true;
        else $.com.scroll_UD = false;
        $.com.scroll_num = $.com.win_scroll;
		//console.log('$.com.win_scroll = '+$.com.win_scroll+' / $.com.scroll_UD = '+$.com.scroll_UD);

		//header 고정
		$.header = $.header || $('#header'),
		$.hd_mn = $.hd_mn || $.header.children('.hd_mn'),
		$.hd_mn_top = $.hd_mn_top || $.hd_mn.offset().top;

		if($.com.win_scroll > $.hd_mn_top && $.hd_mn.hasClass('_fix') == false) $.hd_mn.addClass('_fix');
		else if($.com.win_scroll <= $.hd_mn_top && $.hd_mn.hasClass('_fix') == true) $.hd_mn.removeClass('_fix');
		
		//현제위치
		$.container = $.container || $('#container'),
		$.section = $.section || $.container.children('section'),
		$.section_chk = $.section_chk || -1;//현제 보고있는 섹션
		var sec_chk = 0;

		$.each($.section, function(i){
			_this = $(this),
			_this_t = _this.offset().top,
			_this_h = _this.outerHeight(true);

			if(($.com.win_scroll + ($.com.win_h+($.com.win_h/2)) ) >= (_this_t + _this_h)){
				sec_chk = i;
			}
		});
		if($.section_chk != sec_chk){
			$.section_chk = sec_chk;
			$.nav.children('a').eq($.section_chk).addClass('on').siblings().removeClass('on');
		}
	},//scroll_ck : function(){
	sel_chg: function(idx, type) {
		/*	
			com.sel_chg($(this), {chg, reset, ''})
			chg = 옵션값바꺼야 할때
			reset = 옵션 리셋
			'' = 셀렉트를 기본으로 만들어요
		*/
		var _select = idx == undefined ? $('.sel_chg') : idx;
		if (type == 'chg') {
			_select.next('.sel_d').remove();
			_select.after($.com.layout.sel_html(_select));
		}else if(type == 'reset') {
			$.each(_select, function(i) {
				var _dSel = $(_select[i]),
					_selectTx = _dSel.children().eq(0).text(),
					_btns = _dSel.next().children('button'),
					_inputs = _dSel.next().children('input');
				_btns.val(_selectTx).html(_selectTx);
				_inputs.val(_selectTx);
				_dSel.children().first().prop('selected', true).siblings().prop('selected', false);
				_dSel.trigger('click');
			});
		}else{
			_select.each(function(i) {
				$(this).hide().after($.com.layout.sel_html($(this)));
			});
		}
	}, //sel_chg: function(idx, type) {
	sel_html: function(_this) {
		/* 옵션
			data-width="100" //셀렉트 고정값
		*/
		var _optHtml = '',
			_id = _this.attr('id'),
			_width = _this.data('width') | null,
			_vals = _this.val() == '' ? _this.children().first().val() : _this.val(),
			_pl = _this.val() == '' ? _this.children().first().text() : _this.children('option[value="' + _this.val() + '"]').text(),
			_lg = _this.children().length,
			_sel_d = _width != 0 ? $('<div class="sel_d" data-id="' + _id + '" style="width:' + _width + 'px"></div>') : $('<div class="sel_d" data-id="' + _id + '"></div>'),
			_sel_opt = $('<ol class="a_list"></ol>'),
			_sel_stc = '<span class="ctrl"><span class="arrow"></span></span>';
		_sel_stc += '<input type="hidden" id="f_' + _id + '" name="f_' + _id + '" value="'+_vals+'">';
		_sel_stc += '<button type="button" class="my_value" id="" value="' + _pl + '">' + _pl + '</button>';
		_this.children().each(function(i) {
			_val = $(this).val(),
			_txt = $(this).text(),
			_last = (i == _lg - 1) ? 'last' : '';
			_optHtml += '<li class="' + _last + '"><a href="javascript:void(0);" code="' + _val + '">' + _txt + '</a></li>';
		});
		_sel_d.append(_sel_stc, _sel_opt.append(_optHtml));

		//event
		var _btn = _sel_d.children('button'),
			_inp = _sel_d.children('input');

		_btn.on('click', function() {
			//if(!_inp.val()) _sel_d.width(_sel_d.outerWidth(true));
			if (_sel_d.hasClass('open')) {
				_sel_d.removeClass('open').children('.a_list').hide();
				_sel_d.off('mouseleave');
			} else {
				_sel_d.addClass('open').children('.a_list').show();
				_sel_d.off('mouseleave').on('mouseleave', function() {
					_btn.trigger('click').focus();
				});
			}
		}).on('focus', function() {
			_this.next('.sel_d').removeClass('open').children('.a_list').hide();
		});
		_sel_opt.find('a').on('click', function() {
			var _a = $(this),
				_txt = _a.text(),
				_val = _a.attr('code'),
				_idx = _a.parent().index();
			_btn.val(_val).html(_txt);
			_inp.val(_val);
			_this.children().eq(_idx).prop('selected', true).siblings().prop('selected', false);
			_this.trigger('click');
			_btn.trigger('click').focus();

			$.com.layout.sel_re(_inp.attr('id'), _val);//select return
		});
		return _sel_d;
	},//sel_html: function(_this){
	sel_re: function(_id, _val){
		//store에 select 바꿀때 리스트 변경
		if(_id == 'f_sel_add') $.sec_06.list.html($.sec_06.listHtml(_val));
	},//sel_re: function(_id, _val){
	scrollOff: function(_idx, _px){
		/*
			_idx  = 스크롤 이동시킬 객체
			_px   = -px ㅎㅎ	
		*/
		var _this = _idx,
			_this_off_t = _this.offset().top,
			_plus = _px == undefined ? 0 : _px,
			_top = _this_off_t - _plus;

		$('html,body').animate({
			scrollTop: _top
		}, 200);
	},//scrollOff: function(_idx, _px){
	

	db_idx: function(_prdCd, _db){
		//배열 안에 prdCd 어디있나 확인
		var toReturn;		
		$.each(_db, function(i){
			if(String(_prdCd) == _db[i].pr_prdCd){
				toReturn = i
				return false;
			}
		});
		return toReturn;
	},//db_idx: function(_db, _prdCd){
};//$.com.layout = $.com.layout || {

$.anac = $.anac || {
	re_sec: function(){
		//리사이즈될때 해야할것들
		
		//popup
		$.laypop = $.laypop || $('#laypop');
		if($.laypop.css('display') == 'block'){
			$.com.layout.laypop('re');
		}
		
		//sec_01
		var $list = $('.con_sec_01 .list'),
			$list_w = $list.width(),
			$chg_f = function(){
				var list_3 = $list.children('.li_st3'),
					list_3_class = list_3.attr('class'),
					list_3_on = list_3.attr('data-on'),
					list_3_off = list_3.attr('data-off'),
					list_3_html = list_3.html(),
					list_4 = $list.children('.li_st4'),
					list_4_class = list_4.attr('class'),
					list_4_on = list_4.attr('data-on'),
					list_4_off = list_4.attr('data-off'),
					list_4_html = list_4.html();
				list_3.attr({'class': list_4_class, 'data-on': list_4_on, 'data-off': list_4_off}).css({background:'url(http://www.etland.co.kr/etland/'+list_4_off+') left top no-repeat', backgroundSize: 'auto 100%'}).html(list_4_html);
				list_4.attr({'class': list_3_class, 'data-on': list_3_on, 'data-off': list_3_off}).css({background:'url(http://www.etland.co.kr/etland/'+list_3_off+') left top no-repeat', backgroundSize: 'auto 100%'}).html(list_3_html);
			};
		if($.com.win_w <= 850){
			$.each($list.children('li'), function(){
				var _this = $(this),
					_w540_on = _this.data('w540_on');
				if( _w540_on ) _this.css({background: 'url(http://www.etland.co.kr/etland/'+_w540_on+') left top no-repeat', backgroundSize: 'cover'});
			});
		}else{
			$.each($list.children('li'), function(){
				var _this = $(this),
					_on = _this.data('on'),
					_w540_on = _this.data('w540_on');
				if( _w540_on ) _this.css({background: 'url(http://www.etland.co.kr/etland/'+_on+') left top no-repeat', backgroundSize: 'cover'});
			});
		}
		if($.com.win_w <= 850 && $.anac.sec_01.w850 == true){
			$.anac.sec_01.w850 = false;
			$chg_f();
		}else if($.com.win_w > 850 && $.anac.sec_01.w850 == false){
			$.anac.sec_01.w850 = true;
			$chg_f();
		}
		
		if($.com.win_w >= 1135 && $.header.hasClass('open')) $.header.removeClass('open');

		//sec_04		
		var sec_04_lg = $('.con_sec_04 .items_slider .bx-pager a').length;
		if(sec_04_lg > 0){
			$.sec_04.slider.lg = sec_04_lg;
			$.sec_04.bar.slider('option','max', $.sec_04.slider.lg);
			$.sec_04.bar.find('.end_num span').text($.sec_04.slider.lg);
		}

	},//re_sec: function(){
	sec_01: function(){
		//section1정렬
		$.anac.sec_01.w850 = true;//기준이 pc

		var $list = $('.con_sec_01 .list');
		$.each($list.children('li'), function(){
			var _this = $(this),
				_on = _this.attr('data-on'),
				_off = _this.attr('data-off'),
				_w540_on = _this.attr('data-w540_on'),
				_w540_off = _this.attr('data-w540_off');
			if($.com.win_w <= 850 && _w540_on){
				_on = _w540_on;
				_off = _w540_off;
			}

			_this.css({background:'url(http://www.etland.co.kr/etland/'+_off+') left top no-repeat', backgroundSize: 'cover'}).on({
				mouseenter: function(){
					if($.com.win_w <= 850 && _w540_on) _this.css({background: 'url(http://www.etland.co.kr/etland/'+_w540_on+') left top no-repeat', backgroundSize: 'cover'});
					else _this.css({background: 'url(http://www.etland.co.kr/etland/'+_on+') left top no-repeat', backgroundSize: 'cover'});
				},
				mouseleave: function(){	
					if($.com.win_w <= 850 && _w540_off) _this.css({background: 'url(http://www.etland.co.kr/etland/'+_w540_off+') left top no-repeat', backgroundSize: 'cover'});
					else _this.css({background: 'url(http://www.etland.co.kr/etland/'+_off+') left top no-repeat', backgroundSize: 'cover'});
				}
			});
		});
		$list.masonry({
			itemSelector: '.item',
			columnWidth: 10,
			isAnimated: true,
			animationOptions: {
				duration: 200,
				easing: 'linear',
				queue: false
			}
		});
		$.anac.re_sec();
		
		//click 이동
		$list.find('li a').on('click', function(){
			var _this = $(this),
				_sec = _this.data('sec'),
				_slide = _this.data('slide');

			$.com.layout.scrollOff($.section.eq(_sec-1), $.hd_mn.outerHeight(true));
			if(_slide){
				var _mnd;
				if(_sec == 4) _mnd = $.sec_04.mn;
				else if(_sec == 5) _mnd = $.sec_05.mn;

				$.each(_mnd.find('a'), function(i){
					var _this = $(this);
					if( _slide == _this.text() ){
						_this.trigger('click');
						return false;
					}
				});
			} 
		});
	},//sec_01: function(){
	sec_03: function(){
		$.sec_03 = $.sec_03 || $('.con_sec_03 .list');

		$.sec_03.find('a').on('click', function(){
			$(this).addClass('click_pop');
			$.com.layout.laypop('show', 'pr', $(this).data('prdcd'), 3);
		});
		
		$.sec_03.masonry({
			itemSelector: '.item',
			columnWidth: 10,
			isAnimated: true,
			isFitWidth: true,
			animationOptions: {
				duration: 200,
				easing: 'linear',
				queue: false
			}
		});
	},//sec_03: function(){
	sec_04: function(){
		$.sec_04 = $.sec_04 || $('.con_sec_04'),
		$.sec_04.mn = $.sec_04.find('#items_mn'),
		$.sec_04.slider = $.sec_04.find('.slider_d > ul'),
		$.sec_04.slider.list = '',//리스트 html
		$.sec_04.bar = $.sec_04.find('#items_bar'),
		list_mv();
		
		//리스트좀 만들게요
		$.each($.anac.pr_llist_db, function(i){
			var _this_pr_db = $.anac.pr_llist_db[i];
//			console.log(_this_pr_db);

			var _html = '<li data-tab="'+_this_pr_db.pr_type.toLowerCase()+'">';
				_html += '<a href="javascript:void(0)" data-prdcd="'+_this_pr_db.pr_prdCd+'">';

			//icon(best, new)
			if(_this_pr_db.pr_ico_best)	_html += '	<i class="ico_msk ico_best"><span class="ir">best</span></i>';
			if(_this_pr_db.pr_ico_new) _html += '	<i class="ico_msk ico_new"><span class="ir">new</span></i>';			
				_html += '	<img src="'+_this_pr_db.pr_img+'" alt="상품사진" />';
				_html += '	<span>';
				_html += '		<span>'+_this_pr_db.pr_name+'<br/>'+_this_pr_db.pr_model+'</span>';

			//가격,SOLD OUT
			if(_this_pr_db.pr_soldOut == '')	_html += '		<strong>'+String(_this_pr_db.pr_selPrice).number_format()+'</strong>';
			else	_html += '		<strong class="tx_soldout">SOLD OUT</strong>';

				_html += '	</span>';
				_html += '</a>';
				_html += '</li>';
			$.sec_04.slider.list += _html;
		});
		$.sec_04.slider.html($.sec_04.slider.list);
		list_mv();
		$.sec_04.slider.find('a').on('click', function(){
			$(this).addClass('click_pop');
			$.com.layout.laypop('show', 'pr', $(this).data('prdcd'), 4);
		});		

		//items 슬라이드
		$.sec_04.slider.bxSlider({
			touchEnabled: true,
			infiniteLoop: false,
			hideControlOnEnd: true, 
			captions: true,
			nextText: '<span class="blind">다음으로</span>',
			prevText: '<span class="blind">이전으로</span>',
			minSlides: 2,
			maxSlides: 8,
			slideWidth: 245,
			slideMargin: 10,
			onSlideBefore:function($slideElement, oldIndex, newIndex){
				$.sec_04.bar.slider('value', (newIndex+1));
			}
		});
		
		//막대 슬라이드
		$.sec_04.slider.lg = $.sec_04.find('.bx-pager a').length;
		$.sec_04.bar.slider({
			range: 'min',
			min: 1,
			max: $.sec_04.slider.lg,
			animate: 'fast',
			create: function(event, ui){
				$.sec_04.bar.find('.ui-slider-handle').append('<span id="stick_num" class="stick_num">1</span>');
				$.sec_04.bar.find('.end_num span').text($.sec_04.slider.lg);
			},
			slide: function (event, ui){
				$.sec_04.bar.find('#stick_num').text(ui.value);
				$.sec_04.slider.goToSlide(ui.value-1);
			},
			change: function (event, ui){
				$.sec_04.bar.find('#stick_num').text(ui.value);
			}
		});

		//메뉴
		$.sec_04.mn.find('a').on('click', function(){
			var _this = $(this),
				_this_tx = _this.text(),
				_this_off_l = _this.offset().left,	
				_mn_off_l = $.sec_04.mn.children('.mn_con').offset().left,
				_css_l = (_this_off_l - _mn_off_l);
			
			_this.addClass('on').siblings().removeClass('on');
			$.sec_04.mn.find('.ico_mn').animate({left: _css_l},200);
			$.sec_04.slider.html($.sec_04.slider.list);
			$.sec_04.slider.find('a').on('click', function(){
				$(this).addClass('click_pop');
				$.com.layout.laypop('show', 'pr', $(this).data('prdcd'), 4);
			});	
			list_mv();
			if(_this_tx != 'all'){
				$.each($.sec_04.slider.find('li'), function(){
					var _this = $(this);
					if(_this.data('tab') == _this_tx) _this.show();
					else _this.remove();
				});
			}			
			$.sec_04.slider.reloadSlider();
			$.sec_04.bar.slider('value', 0);
			$.anac.re_sec();
		});
		
		function list_mv(){
			$.sec_04.slider.children().on({
				mouseenter:function(){
					$(this).find('a > span').stop().animate({bottom: 0}, 200);
				},
				mouseleave: function(){
					$(this).find('a > span').stop().animate({bottom: '-30%'}, 200);
				}
			});
		}
	},//sec_04: function(){
	sec_05: function(){
		$.sec_05 = $.sec_05 || $('.con_sec_05'),
		$.sec_05.mn = $.sec_05.find('.sec05_nav nav'),
		$.sec_05.bar = $.sec_05.mn.find('.bar_d'),
		$.sec_05.slider = $.sec_05.find('.sec05_con .slid'),
		$.sec_05.bar.mn = 0;//bar위치
		
		$.sec_05.slider.find('.real_st .link_pr').on('click', function(){
			$(this).addClass('click_pop');
			$.com.layout.laypop('show', 'pr', $(this).data('prdcd'), 5);
		});
		$.sec_05.slider.find('.play_st a').on('click', function(){
			$(this).addClass('click_pop');
			$.com.layout.laypop('show', 'mv', $(this).data('youtube'), 5);
		});	

		//items 슬라이드
		$.sec_05.slider.bxSlider({
			touchEnabled: true,
			infiniteLoop: false,
			pager:false,
			hideControlOnEnd: true, 
			captions: true,
			nextText: '<span class="blind">다음으로</span>',
			prevText: '<span class="blind">이전으로</span>',
			onSliderLoad:function(currentIndex){
				$.sec_05.mn.children().first().addClass('on');
				$.sec_05.addClass('sldSec_0');
			},
			onSlideBefore:function($slideElement, oldIndex, newIndex){
				var _mn = $.sec_05.slider.children().eq(newIndex).data('mn');

				if($.sec_05.bar.mn == _mn) return false;
				$.sec_05.bar.mn = _mn;

				var _mn_offset = $.sec_05.mn.offset().left,
					_mn_a_offset = $.sec_05.mn.children().removeClass('on').eq(_mn).addClass('on').offset().left;
				$.sec_05.bar.children('.ico').animate({left: (_mn_a_offset - _mn_offset)}, 200);

				$.sec_05.removeAttr('class').addClass('con_sec_05 sldSec_'+_mn);
			}
		});
		//mn click
		$.sec_05.mn.children().on('click', function(){
			var _this = $(this),
				_idx = _this.index();
			$.each($.sec_05.slider.children(), function(i){
				if(_idx == $(this).data('mn')){
					$.sec_05.slider.goToSlide(i);
					return false;
				}
			});
		});
	},//sec_05: function(){
	sec_06: function(){
		$.sec_06 = $.sec_06 || $('.con_sec_06'),
		$.sec_06.list = $.sec_06.find('.store_list'),
		$.sec_06.listHtml = function(_st_add_f){
			var _list_html = '';
			$.each($.anac.st_llist_db, function(i){
				var db_this = $.anac.st_llist_db[i],
					db_st_add_f = db_this.st_add_f,
					_st_tx = '',
					_ico_class = '';
				
				/*
					조건 추가 합니다.
					 "백화점", "쿡앤킹" 삭제
				*/
				
				if(parseInt(db_this.st_type) != 5 && db_this.st_name.indexOf('백화점') == -1){
					if(_st_add_f == db_st_add_f){
						switch(parseInt(db_this.st_type)){
						case 1 : _st_tx = '직영매장',
								 _ico_class = 'ico_b';
								 break;
						case 2 : _st_tx = 'DS샵',
								 _ico_class = 'ico_r';
								 break;
						case 3 : _st_tx = 'IN샵',
								 _ico_class = 'ico_g';
								 break;
						case 4 : _st_tx = '프라이스킹',
								 _ico_class = 'ico_r';
								 break;
						case 5 : _st_tx = '쿡앤킹',
								 _ico_class = 'ico_y';
								 break;
						case 6 : _st_tx = '까사부가티',
								 _ico_class = 'ico_r';
								 break;
						default : _st_tx = '직영매장',
								 _ico_class = 'ico_b';
								 break;
						}

						_list_html += '<li>';
						_list_html += '	<a href="javascript:$.sec_06.codeLatLng(\''+db_this.st_lat+', '+db_this.st_lng+'\',\''+db_this.st_name+'\', \''+db_this.st_add_l+'\', true)">';
						_list_html += '		<i class="ico_point"></i>';
						_list_html += '		<strong class="tx_ti">'+db_this.st_name+'</strong>';
						_list_html += '		<i class="ico_w '+_ico_class+'"><span class="blind">'+_st_tx+'</span></i>';
						_list_html += '		<span class="tx_tel">'+db_this.st_tell+'</span>';
						_list_html += '		<span class="tx_add">'+db_this.st_add_l+'</span>';
						_list_html += '	</a>';
						_list_html += '</li>';
					}
				}
			});
			return _list_html;
		};
		$.sec_06.list.html($.sec_06.listHtml(10));		

		var geocoder, map, marker, ck_one = false;
		var infowindow = new google.maps.InfoWindow();
		function initialize(){
		  geocoder = new google.maps.Geocoder();
		  var latlng = new google.maps.LatLng(37.564894, 126.981752);
		  var mapOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: 'roadmap',
			scrollwheel: false
		  }
		  map = new google.maps.Map(document.getElementById('map_d'), mapOptions);
		  if(!ck_one){
			ck_one = true;
			$.sec_06.codeLatLng('37.565262, 126.981305','롯데백화점 / 본점', '서울시 용산구 한강로3가 16-9');
		  }
		}

		$.sec_06.codeLatLng = function(val, ti_tx, add_l, click_ck){
			var input = val,
				latlngStr = input.split(',', 2),
				lat = parseFloat(latlngStr[0]),
				lng = parseFloat(latlngStr[1]);	
			
			var f_marker = function(latlng){
				if(marker != undefined) marker.setMap(null);
				geocoder.geocode({'latLng': latlng}, function(results, status){
					if(status == google.maps.GeocoderStatus.OK){
						if(results[1]){
							map.setZoom(15);
							marker = new google.maps.Marker({
								position: latlng,
								map: map
							});
							var latLng = marker.getPosition(); // returns LatLng object
							map.setCenter(latLng);

							infowindow.setContent("<strong>"+ti_tx+"</strong><br>"+results[1].formatted_address);
							infowindow.open(map, marker);
						}else{
							console.log('No results found');
						}
					
					}else{
						console.log('Geocoder failed due to: ' + status);
					}
				});//geocoder.geocode({'latLng': latlng}, function(results, status){
			};

			if(isNaN(lng) || isNaN(lat)){
				//좌표 이상할때
				$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+add_l+'&sensor=false', null, function (data) {
					var p = data.results[0].geometry.location;
					latlng = new google.maps.LatLng(p.lat, p.lng);
					f_marker(latlng);
				});			
			}else{
				//좌표 멀쩡할때
				latlng = new google.maps.LatLng(lat, lng);
				f_marker(latlng);
			}
		
			if(click_ck && $.com.win_w <= 850) $.com.layout.scrollOff($('#map_d'));			
			
		}//$.sec_06.codeLatLng = function(val, ti_tx, add_l){
		google.maps.event.addDomListener(window, 'load', initialize);
		
	},//sec_06: function(){
	pr_ajax: function(){
		$.ajax({ 
			type:'GET'
			,url:'./com/js/pr_db'
			,dataType:'text'
			,success: function(json){
				if(typeof json != 'undefined' && json != null && json != ''){
					// 리턴된 text -> json Object 변환
					var data = $.trim(json);//$.trim : 리턴된 문자열 앞 뒤 공백제거
					data =  $.parseJSON(data);
					
					$.anac.pr_llist_db = data;// 상품리스트 데이터
					$.anac.start();
					//console.log(json);
				}
			}
			,error: function() {
				console.log('ajax error');
			}
		});
	},//pr_ajax: function(){
	st_ajax: function(){
		$.ajax({ 
			type:'GET'
			,url:'./com/js/st_db'
			,dataType:'text'
			,success: function(json){
				if(typeof json != 'undefined' && json != null && json != ''){
					// 리턴된 text -> json Object 변환
					var data = $.trim(json);//$.trim : 리턴된 문자열 앞 뒤 공백제거
					data =  $.parseJSON(data);
					
					$.anac.st_llist_db = data;// 상품리스트 데이터
					$.anac.sec_06();
				}
			}
			,error: function() {
				console.log('ajax error');
			}
		});
	},//st_ajax: function(){
	start: function(){
		$(window).resize(function(){
			$.com.layout.sc_ck();
			$.anac.re_sec();
		});
		$(document).ready(function() {
			$.com.layout.sel_chg();
			$.com.layout.header();
			$.anac.sec_01();
			$.anac.sec_03();
			$.anac.sec_04();
			$.anac.sec_05();
		}).on('scroll', $.com.layout.scroll_ck);
	}
};//$.anac = $.anac || {
String.prototype.number_format = function() { return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); };

$.anac.pr_ajax();
$.anac.st_ajax();
$.com.layout.sc_ck(); //화면사이즈체크