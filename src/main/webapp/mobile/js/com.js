/*com.js*/
$.mobile.pushStateEnabled = false;
$.mobile.ajaxEnabled = false;
var _html, _hd_fix, _ft_fix, _scroll_list, _btn_top, _btn_prev, _btn_zoom, _footer_nav;

$.com = $.com || {};
$.com.win_scrollList = false; //스크롤 리스트 체크할건지 안할건지
$.com.layout = $.com.layout || {
    skipnavi: function(idx) {
        document.getElementById(idx).tabIndex = -1;
        document.getElementById(idx).focus();
        return false;
    }, //skipnavi: function(){
    sc_ck: function() {
        /*
			$.com.win_w = 스크린 width
			$.com.win_h = 스크린 height
		*/
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
        //		console.log('[sc_ck]'+$.com.win_w+' / '+$.com.win_h);

    }, //sc_ck: function(){
    scroll_ck: function() {
        /*
			$.com.win_scroll = 스크롤 위치
			$.com.scroll_UD = 스크롤 방향 ↑ = true /  ↓ = false
		*/
        $.com.win_scroll = $(document).scrollTop();
        $.com.scroll_num = $.com.scroll_num || $.com.win_scroll;

        if ($.com.scroll_num >= $.com.win_scroll) $.com.scroll_UD = true;
        else $.com.scroll_UD = false;
        $.com.scroll_num = $.com.win_scroll;


        //고정되는 title
        _hd_fix = _hd_fix || $('._hd_fix');
        if (_hd_fix.length > 0) $.com.layout.hd_fix(_hd_fix);


        //스트롤 리스트
        _scroll_list = _scroll_list || $('._scroll_list_ck');
        if (_scroll_list.length > 0 && $.com.win_scrollList) $.com.util.scrollList(_scroll_list);

        //top버튼, prev버튼, zoom버튼
        _btn_top = _btn_top || $('.footer .btn_top');
        if ($.com.win_scroll >= $.com.win_h) _btn_top.not(':animated').fadeIn();
        else _btn_top.not(':animated').fadeOut();

        if ($.com.detail != undefined) {
            //상품상세에서만 좀다르게
            _btn_prev = _btn_prev || $('.footer .btn_prev');
            _btn_zoom = _btn_zoom || $('.footer .btn_zoom');

            if ($.com.win_scroll >= $.com.win_h) {
                _btn_prev.not(':animated').fadeIn();
                _btn_zoom.not(':animated').fadeIn();
            } else {
                _btn_prev.not(':animated').fadeOut();
                _btn_zoom.not(':animated').fadeOut();
            }
        }

        //상품상세 고정되는 장바구니
        _ft_fix = _ft_fix || $('.fixed_btnBox_b');
        //footer에 [홈,키핑백, 주문배송..]
        _footer_nav = _footer_nav || $('#footer_nav');
        if (_ft_fix.length > 0) {
            $.com.layout.ft_fix(_ft_fix, _footer_nav);
        } else {
            if ($.com.scroll_UD) _footer_nav.not(':animated').fadeIn();
            else _footer_nav.not(':animated').fadeOut();
        }
        if (!_footer_nav.data('one')) {
            _footer_nav.attr('data-one', true).find('.ico_more').on('click', function() {
                var _this = $(this),
                    _laymore = $('#laymore');
                if (_this.hasClass('open')) {
                    _this.removeClass('open');
                    _laymore.hide();
                } else {
                    _this.addClass('open');
                    _laymore.show();
                }
            });
        }
    }, //scroll_ck: function(){
    header: function() {
        //aside
        var _aside_l = $('#left_mn'),
            _mask = $('.ui-panel-dismiss');
        _html = $('html, body');
        _aside_l.on('panelbeforeclose', function(e, ui) {
            e.preventDefault();
            //console.log('[panelbeforeclose] ', e);

            _html.removeAttr('style');
            _aside_l.removeAttr('style');
            _mask.removeAttr('style');
        }).on('panelbeforeopen', function(e, ui) {
            e.preventDefault();
            //console.log('[panelbeforeopen] ', e);

            $.com.layout.sc_ck();
            _html.css({
                position: 'relative',
                width: $.com.win_w,
                height: $.com.win_h,
                overflow: 'hidden'
            });
            _mask.height($.com.win_h);
            _aside_l.height($.com.win_h).append($.com.win_h);
        });
		
		//zoom 사진확대페이지 기능되게
		$.com.pathname = $(location).attr('pathname');
		if($.com.pathname.indexOf('productSimpleView.do') != -1){
			var _viewport = $('html meta[name="viewport"]');			
			_viewport.attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=yes');
		}
    }, //header : function(){
    hd_fix: function(_hd_fix) {
        //갯수 많을때 위로 올라오는걸로
        var _fix = _hd_fix,
            _fix_lg = _fix.length;

        if (!$.com.hd_fix) {
            $.com.hd_fix = [];
            $.com.hd_fix_top = [];
            $.each(_fix, function(i) {
                var _this = $(this),
                    _this_h = _this.outerHeight(true);
                _this.wrap('<div class="_fix_gap_' + i + '" style="position:relative;width:100%;height:' + _this_h + 'px" />');
                $.com.hd_fix.push(_this);
                $.com.hd_fix_top.push(_this.offset().top);
            });
        }

        var _this_num = null;
        $.each($.com.hd_fix_top, function(i) {
            if ($.com.win_scroll > $.com.hd_fix_top[i]) {
                _this_num = i;
            }
        });

        if (_this_num != null) $.com.hd_fix[_this_num].addClass('_fix_top');
        $.each($.com.hd_fix, function(i) {
            if (i != _this_num) {
                $.com.hd_fix[i].removeClass('_fix_top');
            }
        });

    }, //hd_fix: function(_hd_fix){
    ft_fix: function(_ft_fix, _footer_nav) {
        var info_d = $('.pr_info_d');
        if (info_d.length > 0) {
            //상품상세
            var info_d_t = info_d.offset().top,
                info_d_h = info_d.outerHeight(true),

                info_start = (info_d_t + info_d_h),
                scroll_ck = ($.com.win_scroll + $.com.win_h);
            if (info_start <= scroll_ck) {
                _ft_fix.stop().animate({
                    bottom: 0
                }, 100);
                _footer_nav.stop().animate({
                    bottom: '-100%'
                }, 200);
            } else {
                _footer_nav.stop().animate({
                    bottom: 0
                }, 200);
                _ft_fix.stop().animate({
                    bottom: '-100%'
                }, 200);
            }
        } else {
            //나머지 페이지
            if ($.com.scroll_UD) _ft_fix.stop().animate({
                bottom: 0
            }, 100);
            else _ft_fix.stop().animate({
                bottom: '-100%'
            }, 200);

        }
    } //ft_fix: function(_ft_fix){
};

$.com.util = $.com.util || {
    layPop: function(_type, _popup, _full) {
        /* 
			_type = open, close
			_popup = 팝업내용으로 쓸거$('#adasd')
			_full = 전체 창으로 쓸건지 (body 스크롤x, dd_con_dd에 스크롤)
		*/
        var _layPopup = (_popup == undefined) ? $('#layPopup') : _popup,
            _opt = {},
            _size = (_full == undefined) ? false : _full;

        if (_type == 'open') { //open
            _opt = {
                rel: 'popup',
                role: 'button',
                inline: true,
                corners: true,
                shadow: true,
                iconshadow: true,
                wrapperels: 'span',
                theme: 'c',
                position: 'window',
                transition: 'slideup'
            };
        } else { //close				
            _opt = {
                rel: 'back',
                role: 'button',
                theme: 'a',
                icon: 'delete',
                iconpos: 'notext'
            };
        }
        _layPopup.popup(_type, _opt);

        //full
        if (_size == true) {
            var _layD = _layPopup.parent();

            if (_type == 'open') {
                var _con_d = _layD.find('.dd_con_d'),
                    _con_dt_h = _layD.find('.ui-content > dt').height(),
                    _css_max_h = $.com.win_h;//($.com.win_h - 20);
                _layD.css({
                    //top: $.com.win_scroll,//($.com.win_scroll + 10),
                    position:'fixed',
                    top:0,
                    maxWidth: '100%',
                    height: '100%',
                    width: '100%',
                    left: '0px',//'17px'
                    backgroundColor: '#fff',
                    overflow:'hidden',
                    overflowY:'auto'
                });
                if(_layPopup.attr('id') == 'layZipcode'){
                    _layD.css('maxHeight', 'none');
                    _con_d.css('maxHeight', 'none');
                }else{
                    console.log('else');
                    _layD.css('maxHeight', _css_max_h);
                    _con_d.css({
                        maxHeight: (_css_max_h - _con_dt_h)
                    }).attr('data-height', _css_max_h - _con_dt_h);
    				_html.css({overflow:'hidden'});

                }

            } else { //close
                _layD.find('.dd_con_d').removeAttr('style');
				_html.css({overflow:''});
            }
        }

    }, //popup: function(type){
    pgLink: function() {
        /* 페이지 전환 링크 효과 */
        /* $.each($('._pg_link'), function() {
            $(this).attr({                
                'data-transition': 'slide'
            }).on('click', function(){
				$.mobile.ajaxEnabled=true;
			});
			var _this = $(this);
				_href = _this.attr('href');

			_this.on('click', function(){
				$.mobile.ajaxEnabled = true;
				$.mobile.changePage( _href, {
					//dataUrl : _href,
					transition: 'slide',
					type: 'get',
					data: {test:[1,2,3], test2:[7,8,9]}
//					reverse: false,
//					changeHash: false
				});
			});
			
        });*/
        //이미지 나중에 로드
        $('img').lazyload({
            failure_limit: 10,
            effect: 'fadeIn',
            skip_invisible: false
        });
    }, //pgLink: function(){
    scrollList: function(idx) {
        var _this = idx,
            _return_num = _this.data('returnNum') || 0,
            _offsetTop = _this.offset().top,
            _this_h = _this.outerHeight(true);
        _scrin_h = ($.com.win_scroll + $.com.win_h),
        _this_all_h = (_offsetTop + _this_h);

        //console.log('_return_num = '+_return_num+' / _offsetTop = '+_offsetTop+' / _this_h = '+_this_h+' / _scrin_h = '+_scrin_h+' / _this_all_h = '+_this_all_h);
        if (_return_num == 0) _this.data('returnNum', 0);
        if (_scrin_h >= _this_all_h) {
            _return_scrollList(_this, _return_num);
            _this.data('returnNum', (_return_num + 1));
        }
    }, //scrollList: function(){
    amounyt: function() {
        //수량올리기 input, a:first(-), a:last(+) 
        $.each($('._amounyt_ck'), function() {
            var _this = $(this),
                _tx_num = _this.find('.tx_num'),
                _select = _this.find('select'),
                _btn_d = _this.find('a').first(),
                _btn_u = _this.find('a').last();

            _btn_u.on('click', function() {
                _tx_num.text(parseInt(_tx_num.text()) + 1);
                _select.val(parseInt(_tx_num.text()) + 1);
                return false;
            });
            _btn_d.on('click', function() {
                _val = parseInt(_tx_num.text()) - 1;
                if (_val < 0) _val = 0;
                _tx_num.text(parseInt(_val));
                _select.val(parseInt(_val));
                return false;
            });
            _select.on('change', function(e) {
                var _val = $(this).val();
                _tx_num.text(_val);
            });
        });
    }, //amounyt: function(){
    tab: function(_tab_mn, _openNum, _return) {
        /* 
			_tab_mn = 탭메뉴 a태그를 감싸고 있는 바로윗단 $('ㅁㅁ')
			_open   = 처음에 열릴 tab(기본 0)
			_return = [true,false] 리턴값 받을건지 안받을건지
					  _return_tab() 이거 만들어서 받으면됨요
		*/
        if (_openNum == undefined) _openNum = 0;
        $.each(_tab_mn, function(i) {
            var _this = $(this),
                _a = _this.find('a'),
                _datas = [];

            $.each(_a, function() {
                _datas.push($(this).data('tabcon'));
            });

            _a.attr('data-tabcondb', _datas).on('click', function() {
                var _this = $(this),
                    _idx = _this.index(),
                    _tab_con = _this.data('tabcon'),
                    _tabcondb = _this.data('tabcondb'),
                    _data_sp = _tabcondb.replace(_tab_con, '').split(',');

                _this.addClass('on').siblings().removeClass('on');
                $('#' + _tab_con).show();

                $.each(_data_sp, function(i) {
                    if (_data_sp[i] == '') return;
                    if ($('#' + _data_sp[i])) $('#' + _data_sp[i]).hide();
                });

                if (_return) _return_tab(_this, _idx);
            });

            //
            _a.eq(_openNum).trigger('click');
        });

    } //tab: function(){
}; //$.com.util = {


$.com.layout.sc_ck(); //화면사이즈체크
$(window).resize($.com.layout.sc_ck);
$(document).ready(function() {
    $.com.layout.header();
    $.com.util.pgLink();
}).on('scroll', $.com.layout.scroll_ck);

$(function() {

    /**
     * js toggler
     * @param  {arr} _options 옵션
     */
    $.fn.toggler = function(_options) {
        var _opts = $.extend({
            classname: 'toggle',
            onAfter: null
        }, _options);
        this.each(function() {
            var base = [];
            base.$this = $(this);
            base.$target = $(this.hash);
            base.$this.on('click', function(e) {
                e.preventDefault();

                base.$target.toggleClass('in');
                base.$this.toggleClass('active');
                if (base.$this.hasClass('active')) {

                    base.$this.find('em').text('닫기');
                } else {
                    base.$this.find('em').text('열기');
                }
            });
        });
    };

    // js toggler
    $('.js-toggler').toggler();
    // 배송지
    $('.apply a').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            field = $(this.hash);

        $this.addClass('active').siblings().removeClass('active');

        if ($this.hasClass('address-view')) {
            field.addClass('in').siblings('.address-info').removeClass('in');

            var dd = $this.parents('.dd_con_d');
            if (dd.length && dd.data('height') <= dd.children('.ship-address').height()) {
                $this.parents('.ui-popup-container').animate({
                    top: ($(document).scrollTop() + 10)
                });
            }
        } else {
            $('.address-info').removeClass('in');
        }
    });

    // 쿠폰등록, 마일리지전환
    $('.search-register .register').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            wrap = $this.parents('.search-register');

        $this.addClass('active').siblings().removeClass('active');

        if ($this.hasClass('primary')) {
            $this.removeClass('primary').addClass('warning');
            wrap.addClass('in');
            if (wrap.hasClass('coupon')) {
                $this.children().html('<em class="blind">제휴쿠폰 등록하기</em>닫기');
            } else {
                $this.children().html('<em class="blind">마일리지로 전환</em>닫기');
            }
        } else {
            $this.removeClass('warning').addClass('primary');
            wrap.removeClass('in');

            if (wrap.hasClass('coupon')) {
                $this.children().html('제휴쿠폰 등록하기<em class="blind">열기</em>');
            } else {
                $this.children().html('마일리지로 전환<em class="blind">열기</em>');
            }
        }
    });

    // 이매거진 질문 목록
    $('.thema_vw .bbs-list .subject').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            _answer = $this.parents('tr').next();

        if (_answer.hasClass('answer')) {
            _answer.toggleClass('in');
        }
    });

});