var win_w, win_h, ie8, ie, sc_t = 0;

var com = (function() {
    return {
        skipnavi: function(idx) {
            document.getElementById(idx).tabIndex = -1;
            document.getElementById(idx).focus();
            return false;
        }, //skipnavi: function(){
        sc_ck: function() {
            ie8 = com.ie8(); //버전체크
            var win = window,
                doc = document;
            laypop = $('#laypop');
            if (!win.innerWidth) {
                if (!(doc.documentElement.clientWidth == 0)) {
                    win_w = doc.documentElement.clientWidth;
                    win_h = doc.documentElement.clientHeight;
                } else {
                    win_w = doc.body.clientWidth;
                    win_h = doc.body.clientHeight;
                }
            } else {
                win_w = win.innerWidth;
                win_h = win.innerHeight;
            }
            //			console.log(win_w+' / '+win_h);

            if (laypop.length != 0 && laypop.css('display') == 'block') com.laypop('re');

        }, //sc_ck: function(){
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
                _select.after(com.sel_html(_select));
            } else if (type == 'reset') {
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
            } else {
                _select.each(function(i) {
                    $(this).hide().after(com.sel_html($(this)));
                });
            }
        }, //sel_chg: function(){
        sel_html: function(_this) {
            /* 옵션
				data-width="100" //셀렉트 고정값
			*/
            var _optHtml = '',
                _id = _this.attr('id'),
                _width = _this.data('width') | null,
                _pl = _this.val() == '' ? _this.children().first().text() : _this.children('option[value="' + _this.val() + '"]').text(),
                _lg = _this.children().length,
                _sel_d = _width != 0 ? $('<div class="sel_d" data-id="' + _id + '" style="min-width:' + _width + 'px"></div>') : $('<div class="sel_d" data-id="' + _id + '"></div>'),
                _sel_opt = $('<ol class="a_list"></ol>'),
                _sel_stc = '<span class="ctrl"><span class="arrow"></span></span>';
            _sel_stc += '<input type="hidden" id="f_' + _id + '" name="f_' + _id + '" value="">';
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
            });
            return _sel_d;
        }, //sel_html: function(_this){
        
        ie8: function() {
            var ie8_chk = true;
            if (document.all && !document.querySelector) ie8_chk = true; //ie8이하
            else ie8_chk = false; //ie8이상

            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);
                ie = rv;
            } else ie = -1;

            return ie8_chk;
        }, //ie8: function(){
        header: function() {
           /* var _header = $('#header'),
                _sh_d = _header.find('.auto_keywords'),
                _inp_sh = _header.find('#inp_sh'),
				_best_key = _header.find('.best_key'),
				_best_list = _best_key.children('.best_list'),
                _mv_3ds = null; //3댑스누군지좀 할라고..
			      

            //전체 카테고리
            var _main_chk = $('body').hasClass('page-main'),
				_btn_navOpen = $('#btn_navOpen'),
                _gnb = _btn_navOpen.next('ul'),
                _mv_depth = [false, false]; //ds1,2
            _mv_depth2 = [false, false]; //ds2,3
			
			if(_main_chk){//메인
				_btn_navOpen.on({ //전체카테고리 버튼
					mouseenter: function() {
						_gnb.show().animate({
							left: 0,
							opacity: 1
						}, 200);
						_mv_depth[0] = true;
					},
					mouseleave: function() {
						_mv_depth[0] = false;
						gnb_hide();
					}
				});
			}else{//다른페이지
				_btn_navOpen.on({ //전체카테고리 버튼
					click: function() {
						if(_gnb.hasClass('open')){
							_gnb.removeClass('open');
							_mv_depth[0] = false;
							gnb_hide();
						}else{
							_gnb.addClass('open').show().animate({
								left: 0,
								opacity: 1
							}, 200);
							_mv_depth[0] = true;
						}
						
					},
					mouseleave: function() {
						_mv_depth[0] = false;
						gnb_hide();
					}
				});
			}

            _gnb.on({
                mouseenter: function() {
                    _mv_depth[1] = true;
                },
                mouseleave: function() {
                    _mv_depth[1] = false;
                    gnb_hide();
                }
            }).children('li').on({ //1댑스
                mouseenter: function() {
                    var _this = $(this),
                        _last = _this.hasClass('l'),
                        _dl = _this.children('dl'),
                        _a = _this.children(),
                        _a_h = _a.outerHeight(true),
                        _css_top = _a.position().top + (_a_h / 2) - 8; //8은 icon높이 반
                    if (_dl.length) {
                        //맞춤견적일때
                        if (_last) _css_top = _this.position().top + (_a_h / 2) - 8;
                        _dl.show().animate({
                            left: '100%',
                            opacity: 1
                        }, 200).find('dt i').css({
                            top: _css_top
                        });
                    }
                },
                mouseleave: function() {
                    var _this = $(this),
                        _dl = _this.children('dl');

                    if (_dl.length) _dl.animate({
                        left: '95%',
                        opacity: 0
                    }, 200, function() {
                        _dl.hide();
                    });
                }
            });

            function gnb_hide(_ds_33) {
                _mv_3ds = _ds_33;
                setTimeout(function() {

                    if ($.inArray(true, _mv_depth2) == -1 && _mv_3ds != undefined) {
                        _mv_3ds.prev('a').removeClass('on');
                        _mv_3ds.animate({
                            left: '210px',
                            opacity: 0
                        }, 200, function() {
                            $(this).removeAttr('style');
                        });
                    }

                    if ($.inArray(true, _mv_depth) == -1 && $.inArray(true, _mv_depth2) == -1) {
						_gnb.removeClass('open');
                        _gnb.animate({
                            left: '-10px',
                            opacity: 0
                        }, 200, function() {
                            $(this).hide();
                        }).find('dd .on').removeClass('on').next('.ds_3').removeAttr('style');
                    }
                }, 100);

            }*/
			var hd_li = $('#header .downer .tab > li'),
				hd_sub = hd_li.children('ul'),
				hd_bg = $('#header .downer .bg_sub'),
				mv_ck = [false, false],
				hd_close = function(){
					if($.inArray(true, mv_ck) == -1){
						hd_sub.hide();
						hd_bg.hide();
					}else{
						hd_sub.show();
						hd_bg.show();
					}
				};

			hd_li.on({
				mouseenter : function(){
					mv_ck[0] = true;
					hd_sub.show();
					hd_bg.show();
				},
				mouseleave: function(){
					mv_ck[0] = false;
					hd_close();
					clearTimeout(hd_close);
					setTimeout(hd_close, 300);
				}
			});
			hd_bg.on({
				mouseenter : function(){
					mv_ck[1] = true;
					hd_close();
				},
				mouseleave: function(){
					mv_ck[1] = false;
					hd_close();
					clearTimeout(hd_close);
					setTimeout(hd_close, 300);
				}
			});


        } //header: function(){
        
    } // return {
}()); //com = (function(){

com.sc_ck();
$(window).resize(com.sc_ck);
$(document).ready(function(){
    com.sel_chg(); //select변경
    com.header(); //header

    // radio
    $.handlerRadio = function(e) {
        var $this = $(this),
            _name = $this.children('input').attr('name'),
            _siblings = $this.parents().find('input[name="' + _name + '"]');

        _siblings.attr('checked', false).parent().removeClass('on');
        $this.addClass('on').children('input').prop('checked', true).trigger("change");
    };
    $('.js-radio').on('click', $.handlerRadio);

    // checkbox
    $.handlerCheckbox = function(e) {
        var $this = $(this);

        if ($this.hasClass('on')) {
            $this.removeClass('on').children('input').prop('checked', false).trigger("change");
        } else {
            $this.addClass('on').children('input').prop('checked', true).trigger("change");
        }
        return false;
    };
    $('.js-checkbox').on('click', $.handlerCheckbox);
	
	$.fn.dateTerm = function() {
        return this.each(function() {
            var $this = $(this);
            $this.on('click', function(e) {
                e.preventDefault();

                var $start = $($this.data('start')),
                    $end = $($this.data('end')),
                    _term = $this.data('term'),
                    _dateStart = new Date(),
                    _dateEnd = new Date();

                var formatDate = function(date) {
                    var _month = date.getMonth() + 1,
                        _weekDay = date.getDate(),
                        _result = (date.getFullYear() + "-" + ((_month < 10) ? "0" : "") + _month + "-" + ((_weekDay < 10) ? "0" : "") + _weekDay);
                    return _result;
                };

                if (!$start.length || !$end.length || _term === undefined) alert('error');

                if (_term === 0) {
                    $start.val("");
                    $end.val("");
                } else if (_term == 1) {
                    $start.val(formatDate(_dateStart));
                    $end.val(formatDate(_dateEnd));
                } else {
                    _dateStart.setDate(_dateStart.getDate() + _term);
                    _dateEnd.setDate(_dateEnd.getDate());
                    $start.val(formatDate(_dateStart));
                    $end.val(formatDate(_dateEnd));
                }

                return false;
            });
        });
    };
    // 시작날짜 마감날짜 값 입력
    $('.js-dateTerm').dateTerm();
    /**
     * scroll, resize throttle
     * @param { } [varname] [description]
     */
    $.throttle = (function() {
        var _timerThrottle;
        return function(fn, delay) {
            clearTimeout(_timerThrottle);
            _timerThrottle = setTimeout(fn, delay);
        };
    })();
});