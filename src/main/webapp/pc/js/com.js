var win_w, win_h, ie8, ie, sc_t = 0;
var con_w, con_h, ie_vs; //팝업 사이즈 체크용

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
            var _tx_lg_w = 0;
            $.each(_this.children(), function() {
                var each_tx = $(this).text(),
                    re_tx = each_tx.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi, ''),
                    re_tx_lg = re_tx.length;
                if (_tx_lg_w < (re_tx_lg * 18)) _tx_lg_w = (re_tx_lg * 18);

            });

            var _optHtml = '',
                _id = _this.attr('id'),
                _width = _this.data('width') | null,
                _pl = _this.val() == '' ? _this.children().first().text() : _this.children('option[value="' + _this.val() + '"]').text(),
                _lg = _this.children().length,
                _sel_d = _width != 0 ? $('<div class="sel_d" data-id="' + _id + '" style="min-width:' + _width + 'px"></div>') : $('<div class="sel_d" data-id="' + _id + '" style="min-width:' + _tx_lg_w + 'px"></div>'),
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
        laypop: function(type, idx, objId, today, today_tx) {
            /*
				type = 'show', 'hide', 're'
				idx = #laypop안에 몇번째 laypop_con를 바라볼건지, 입력x = 0
				objId = $('#laypop') 말고 다른 id로 쓸때
				today = 하루동안 안뛰우기 팝업 true, false
				today_tx = today에 쓰일 구분자
			*/
            var laypop = objId == undefined ? $('#laypop') : $('#' + objId),
                _idx = (idx != undefined) ? idx : 0,
                lay_con = laypop.find('.laypop_con'),
                html = $('body'),

                v_today = (today == undefined) ? false : true,
                inp_today = laypop.find('#inp_today').is(':checked'), // input
                f_cookie_ck = function(name) {
                    var nameOfCookie = name + '=',
                        x = 0;

                    while (x <= document.cookie.length) {
                        var y = (x + nameOfCookie.length);
                        if (document.cookie.substring(x, y) == nameOfCookie) {
                            if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) endOfCookie = document.cookie.length;
                            return unescape(document.cookie.substring(y, endOfCookie));
                        }

                        x = document.cookie.indexOf(' ', x) + 1;
                        if (x == 0) break;
                    }
                    return '';
                },
                f_cookie_set = function(name, value, expiredays) {
                    var todayDate = new Date();
                    todayDate.setDate(todayDate.getDate() + expiredays);
                    // 유효시간이 1분인경우:  todayDate.setMinutes(todayDate.getMinutes() + expiredays);  
                    // 동일설정: todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000) );  
                    var cookie = name + '=' + escape(value) + '; path=/;';
                    if (typeof expiredays != undefined) {
                        cookie += '; expires=' + todayDate.toGMTString() + ';';
                    }

                    document.cookie = cookie;
                },
                f_cookie_del = function(name) {
                    var todayDate = new Date();
                    todayDate.setDate(todayDate.getDate() - 1); //과거 시간으로 바꾸기  
                    // 동일: todayDate.setTime(todayDate.getTime( - 1);   
                    var value = f_cookie_ck(name);
                    if (value != '') var cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
                };


            if ((lay_con.length - 1) < _idx) { // _idx잘못 넘기면 er
                alert('[err] com.laypop _idx잘못 넘기면 er');
                return false;
            }

            if (type == 'show') {
                //show
                if (v_today && f_cookie_ck(today_tx)) return false; //하루 안뛰우기 체크

                if (laypop.data('idx') != undefined) laypop.data('idx', _idx);
                else laypop.attr('data-idx', _idx);
                laypop.show();

                lay_con.eq(_idx).show().siblings().hide();
                var ti = lay_con.eq(_idx).children('.ti');
                ti.find('hr').width(ti.outerWidth(true));

                html.css({
                    'overflow-x': 'hidden',
                    'overflow-y': 'hidden'
                }).find('#container').css({
                    'z-index': 'auto'
                });
                com.laypop('re', idx, objId, today, today_tx);

                var _a = lay_con.eq(_idx).find('a'),
                    _a_F = _a.eq(0).addClass('fcs_tabS'),
                    _a_L = _a.eq(_a.length - 1).addClass('fcs_tabE');

                _a_F.on('keydown', function(evt) {
                    var e = event || evt;
                    var charCode = e.which || e.keyCode;

                    if (charCode === 9) {
                        if (e.shiftKey) {
                            _a_L.focus();
                            return false;
                        }
                    }
                }); //.focus();
                _a_L.on('keydown', function(evt) {
                    var e = event || evt;
                    var charCode = e.which || e.keyCode;

                    if (charCode === 9) {
                        if (!e.shiftKey) {
                            _a_F.focus();
                            return false;
                        }
                    }
                });
                lay_con.attr('tab-index', 0).focus();
            } else if (type == 're') {
                //리사이즈
                laypop.css({
                    'width': win_w,
                    'height': win_h
                });
                var data_idx = laypop.data('idx'),
                    lay_con = laypop.children('.laypop_con').eq(data_idx),
                    lay_con_h = lay_con.outerHeight(true),
                    css_t = (win_h - lay_con_h) / 2;

                if (css_t > parseInt(0)) lay_con.css('top', css_t);
                else lay_con.css('top', '10px');
            } else if (type == 'hide') {
                //하루 안뛰우기 체크
                if (v_today && inp_today) f_cookie_set(today_tx, 'done', 1);

                laypop.removeAttr('style').hide().children('.laypop_con').removeAttr('style').hide();
                html.css({
                    'overflow-x': '',
                    'overflow-y': ''
                }).find('#container').css({
                    'z-index': ''
                });
            }

        }, //laypop: function(){
        amount: function(idx) {
            var _idx = idx;
            $.each(_idx, function(i) {
                var _this = _idx.eq(i),
                    _inp = _this.children('input'),
                    _btn_u = _this.children('a').first();

                _btn_u.on('click', function() {
                    _inp.val(parseInt(_inp.val()) + 1);
                    return false;
                }).next().on('click', function() {
                    _val = parseInt(_inp.val()) - 1;
                    if (_val < 0) _val = 0;
                    _inp.val(parseInt(_val));
                    return false;
                });
            });

        }, //amount:function(){
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
            var _header = $('#header'),
                _sh_d = _header.find('.auto_keywords'),
                _inp_sh = _header.find('#inp_sh'),
                _best_key = _header.find('.best_key'),
                _best_list = _best_key.children('.best_list'),
                _mv_3ds = null; //3댑스누군지좀 할라고..

            //test 키워드입니다.
            //			var _key_db = ['냉장고','LG 냉장고','삼성 냉장고','양문형 냉장고','4도어 냉장고','냉장고 기획전'];

            var best_rl = setInterval(rl_start, 3000),
                set_num = 0;
            //키워드
            _best_key.on({
                mouseleave: function() {
                    _best_list.hide();
                    best_rl = setInterval(rl_start, 3000);
                },
                mouseenter: function() {
                    _best_list.show();
                    clearInterval(best_rl);
                }
            });
            _best_list.children('a').on('keydown', function(evt) {
                var e = event || evt,
                    charCode = e.which || e.keyCode,
                    a_lg = $(this).parents('.best_list').children().length,
                    a_idx = $(this).parent().index();

                if (charCode === 9) {
                    if ((e.shiftKey && a_idx == 0) || (!e.shiftKey && a_idx == (a_lg - 1))) _best_key.find('.best_list').hide();
                }
            });

            function rl_start() {
                set_num++;
                var _best = _best_key.children('.best_3'),
                    _best_lg = _best.find('li').length
                _css_top = (set_num % _best_lg) * -20;
                _best.children().animate({
                    marginTop: _css_top
                }, 200);
            }

            //검색 키워드
            _inp_sh.on('keydown', function() {
                if (_sh_d.css('display') == 'none') {
                    _sh_d.show();
                    $('label.inp_sh').css({
                        'border': '1px solid #fc1f28',
                        'border-width': '1px 1px 0 1px'
                    });
                }
            }).on('focusout', function() {
                if (_sh_d.css('display') == 'block') {
                    setTimeout(function() {
                        _sh_d.hide();
                        $('label.inp_sh').css('border', '0 none');
                    }, 500);
                }
            });

            /*_inp_sh.on('keydown', function(evt){
                if (_sh_d.css('display') == 'block') {
                    var e = event || evt,
						charCode = e.which || e.keyCode,
						this_val = $(this).val();
					
                    if(charCode === 9){
                        var _list_dd = _sh_d.find('dd'),
                            _a_lg = _list_dd.children().length,
                            _focus_lg = _list_dd.children('.focus').length,
                            _focus_a, _focus_tx = '';

                        if (e.shiftKey) { //shift+tab
                            if (_focus_lg != 0) {
                                var _focus_idx = _list_dd.children('.focus').index();
                                if (_focus_idx == 0) { //첫번째일때
                                    sh_dHide();
                                    return false;
                                }

                                _focus_a = _list_dd.children('.focus').prev(),
                                _focus_tx = _focus_a.text();
                                _focus_a.addClass('focus').siblings().removeClass('focus');
                            } else {
                                sh_dHide();
                                return;
                            }
                            _inp_sh.val(_focus_tx);
                            _inp_sh.focus();
                            return false;

                        } else { //tab
                            if (_focus_lg != 0) {
                                //포커스된거 있을때

                                //리스트에 마지막일때
                                var _focus_idx = _list_dd.children('.focus').index();
                                if (_a_lg == _focus_idx + 1) { //마지막꺼일때
                                    sh_dHide();
                                    return;
                                }

                                _focus_a = _list_dd.children('.focus').next(),
                                _focus_tx = _focus_a.text();
                                _focus_a.addClass('focus').siblings().removeClass('focus');
                            } else {
                                //포커스된거 없을때 
                                var _focus_a = _list_dd.children().first(),
                                    _focus_tx = _focus_a.text();
                                _focus_a.addClass('focus');
                            }
                            _inp_sh.val(_focus_tx);
                            _inp_sh.focus();
                            return false;
                        }
                    }
                }//if(_sh_d.css('display') == 'block') {
				
                function sh_dHide() {
                    _sh_d.hide();
                    _list_dd.children().removeClass('.focus');
                }
            }).on('keyup', function(evt){
				var e = event || evt,
					charCode = e.which || e.keyCode,
					this_val = $(this).val(), //검색한 키워드
					this_val_lg = this_val.length,//키워드 길이
					list_html = '';

				if(charCode == 9) return false;//tab들어오면 nono

				//리스트
				$.each(_key_db, function(i){
					list_html += '<a href="">';
					list_html += '	<span>'+_key_db[i]+'</span>';
					list_html += '</a>';
				});
				_sh_d.find('.list').html(list_html);

				//검사
				$.each(_sh_d.find('.list span'), function(){
					var _this = $(this),
						_tx = _this.text(),
						_tx_lg = _tx.length,
						_idx = _tx.indexOf(this_val);

					if(_idx != -1){
						if(_idx == 0){
							var _first_tx = _tx.substring(_idx, this_val_lg),
								_last_tx = _tx.substring(this_val_lg, _tx_lg);
							_this.html('<em>'+_first_tx+'</em>'+_last_tx);
						}else{
							var _first_tx = _tx.substring(0, (_idx-1)),
								_sub_tx = _tx.substring(_idx-1, (_idx+this_val_lg)),
								_last_tx = _tx.substring((_idx+this_val_lg), _tx_lg);
							_this.html(_first_tx+'<em>'+_sub_tx+'</em>'+_last_tx);
						}
					}
					
				});
			});*/

            //마이페이지
            $('.header .gnb .gnb_contents .myland').on('mouseenter', function() {
                var _this = $(this),
                    _sub_lay = _this.children('.sub_lay');
                _sub_lay.show().on('mouseleave', function() {
                    _sub_lay.hide();
                });
            });

            //전체 카테고리
            var _main_chk = $('body').hasClass('page-main'),
                _btn_navOpen = $('#btn_navOpen'),
                _gnb = _btn_navOpen.next('ul'),
                _mv_depth = [false, false]; //ds1,2
            _mv_depth2 = [false, false]; //ds2,3

            if (_main_chk) { //메인
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
            } else { //다른페이지
                _btn_navOpen.on({ //전체카테고리 버튼
                    click: function() {
                        if (_gnb.hasClass('open')) {
                            _gnb.removeClass('open');
                            _mv_depth[0] = false;
                            gnb_hide();
                        } else {
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
                        if (_last) _css_top = _this.position().top + (_a_h / 2) - 8; //맞춤견적일때

                        if (_gnb.data('one') == true) {
                            _dl.show().css({
                                left: '100%',
                                opacity: 1
                            }).find('dt i').css({
                                top: _css_top
                            });
                        } else {
                            if (_gnb.data('one')) _gnb.attr('data-one', true);
                            else _gnb.data('one', true);

                            _dl.show().animate({
                                left: '100%',
                                opacity: 1
                            }, 200).find('dt i').css({
                                top: _css_top
                            });
                        }
                    } //if(_dl.length){
                },
                mouseleave: function() {
                    var _this = $(this),
                        _dl = _this.children('dl');

                    if (_dl.length) {
                        _dl.css({
                            left: '95%',
                            opacity: 0
                        }).hide();
                    }
                }
            });
            /*.find('.mn').children('a').on({ //2댑스
                mouseenter: function() {
                    var _this = $(this),
                        _ds_3 = _this.next('.ds_3'),
                        _this_h = _this.height(),
                        _css_top = _this.position().top + (_this_h / 2) - 25; //a태그위로 -25px

                    if (_ds_3.length) {
                        _mv_depth2[0] = true;
                        _this.addClass('on');
                        _ds_3.css({
                            display: 'block',
                            top: _css_top
                        }).animate({
                            left: '219px',
                            opacity: 1
                        }, 200);

                        _this.siblings('.on').removeClass('on').next('.ds_3').removeAttr('style');
                    }
                },
                mouseleave: function() {
                    var _this = $(this),
                        _ds_3 = _this.next('.ds_3');

                    if (_ds_3.length) {
                        _mv_depth2[0] = false;
                        gnb_hide(_ds_3);
                    }
                }
            }).next('.ds_3').on({ //3댑스
                mouseenter: function() {
                    _mv_depth2[1] = true;
                },
                mouseleave: function() {
                    _mv_depth2[1] = false;
                    gnb_hide($(this));
                }
            });*/

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
                        _gnb.data('one', false);
                    }

                    if ($.inArray(true, _mv_depth) == -1 && $.inArray(true, _mv_depth2) == -1) {
                        _gnb.removeClass('open');
                        _gnb.animate({
                            left: '-10px',
                            opacity: 0
                        }, 200, function() {
                            $(this).hide();
                        }).find('dd .on').removeClass('on').next('.ds_3').removeAttr('style');
                        _gnb.data('one', false);
                    }
                }, 100);

            }

            //날씨
            var _btn_weather = $('#btn_weather, #weather_pr .btn_close'),
                _lay_weather = $('#weather_pr'),
                _slider = _lay_weather.find('.list_d dd'),
                _btn_wt_alert = $('#btn_area, #weather_alert .btn_close'),
                _lay_wt_alert = $('#weather_alert'),
                _opt = {
                    preloadImages: 'visible',
                    controls: true,
                    captions: true,
                    pager: false,
                    auto: false,
                    minSlides: 3,
                    maxSlides: 3,
                    slideWidth: 180,
                    slideMargin: 5,
                    infiniteLoop: false
                };

            _btn_weather.on('click', function() {
                if (_lay_weather.css('display') == 'block') _lay_weather.hide();
                else {
                    _lay_weather.show().find('a').first().focus();
                    $.each(_slider, function(i) {

                        var _this = $(this);
                        if (_this.data('one') != true) {
                            _this.attr('data-one', true);
                            var _slider = _this.find('.list > ul');

                            _slider.bxSlider(_opt);

                            if (_slider.children().length <= 3) _slider.parent().next('.bx-controls').hide();

                        }
                    });
                }
            });

            //위치정보 설정레이어
            _btn_wt_alert.on('click', function() {
                if (_lay_wt_alert.css('display') == 'block') {
                    _lay_wt_alert.children('.laypop_con').hide();
                    _lay_wt_alert.hide();
                } else {
                    _lay_wt_alert.children().first().show();
                    _lay_wt_alert.show().find('a').first().focus();
                }
            });

            //sky
            var sky = $('#skyscraperB');

            if (sky.length) {
                var doc = $(window),
                    foot_t = $('#footer').offset().top;

                sky.attr('data-top', 190);
                doc.on('scroll', function() {
                    var sc_t = doc.scrollTop();

                    var _this = sky,
                        _top = _this.data('top'),
                        _h = _this.height() + 10,
                        _css_t = (_top - sc_t),
                        _css_t = _css_t <= 0 ? 10 : _css_t,
                        _lap = (foot_t - sc_t),
                        _this_end = (_h - _lap);

                    if (_this_end >= 0) _this.css({
                        top: (_css_t - _this_end) - 5
                    });
                    else _this.css({
                        top: _css_t
                    });
                });
            }

        }, //header: function(){
        accordion: function(_idx, _type) {
            /*
				_idx = 클릭할곳
				_type = tr, li, dl, dt (table구조냐 li구조냐..)
			*/
            _idx.on('click', function(e) {
                e.preventDefault();

                var $this = $(this),
                    answer = $this.parents(_type).next();

                if (answer.hasClass('in open')) answer.removeClass('in open').hide();
                else answer.addClass('in open').show();
            });
        }, //accordion : function(_idx, _type){
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

        }, //tab: function(){
        gps: function() {
            if ('geolocation' in navigator) {
                var geo = navigator.geolocation;
                geo.getCurrentPosition(function(pos) {
                    var _pos = pos,
                        _coo = _pos.coords,
                        _lat = _coo.latitude, // 위도	
                        _lon = _coo.longitude, // 경도
                        _acc = _coo.accuracy; // 정확도	

                    var add_tx = add(_lat, _lon),
                        add_gu = add_tx.results[0].address_components[2].long_name,
                        add_si = add_tx.results[0].address_components[3].long_name;

                    $.ajax({
                        type: "POST",
                        async: false,
                        data: {
                            "LOC_INF_ADR": add_tx,
                            "CTY_SDO_NM": add_si,
                            "CTY_GGU_NM": add_gu
                        },
                        url: "/pc/common/commonIpInsertAjax.do",
                        dataType: "json",
                        success: function(json) {
                            if (json) {
                                $('.weather > i').attr('class', '');
                                $('#temperTxt').html(Number(json.info.CTY_WTH_CTM) + "<span>°</span>");
                                $('#locTxt').text(json.info.TODAY + ' ' + json.info.CTY_GGU_NM);
                            }
                        },
                        error: function() {
                            alert('ajax error');
                        }
                    });

                    function add(map_x, map_y) {
                        var data;
                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + map_x + "," + map_y + "&sensor=true_or_false",
                            dataType: "json",
                            success: function(json) {
                                data = json;
                            },
                            error: function() {
                                alert('ajax error');
                            }
                        });
                        return data;
                    }
                }, function(e) {
                    alert({
                        0: '위치 정보 검색에 문제가 있습니다.(msg:' + e.message + ')',
                        1: '현재 페이지에서 사용자가 위치 정보 검색을 거부했습니다.',
                        2: '브라우저가 위치정보를 검색하지 못했습니다.(msg:' + e.message + ')',
                        3: '브라우저의 위치 정보 검색 시간이 초과됐습니다.'
                    }[e.code]);
                });
            }
        }, //gps: fucntion(){

        pop_chk: function(_type) {
            //버전, 호환성 체크
            ie_vs = []; //[ie,etc / ie버전 / 호환성보기]
            var agt = navigator.userAgent.toLowerCase(),
                ck_1 = '';

            if (agt.indexOf('chrome') != -1) ck_1 = 'Chrome';
            else if (agt.indexOf('opera') != -1) ck_1 = 'Opera';
            else if (agt.indexOf('staroffice') != -1) ck_1 = 'Star Office';
            else if (agt.indexOf('webtv') != -1) ck_1 = 'WebTV';
            else if (agt.indexOf('beonex') != -1) ck_1 = 'Beonex';
            else if (agt.indexOf('chimera') != -1) ck_1 = 'Chimera';
            else if (agt.indexOf('netpositive') != -1) ck_1 = 'NetPositive';
            else if (agt.indexOf('phoenix') != -1) ck_1 = 'Phoenix';
            else if (agt.indexOf('firefox') != -1) ck_1 = 'Firefox';
            else if (agt.indexOf('safari') != -1) ck_1 = 'Safari';
            else if (agt.indexOf('skipstone') != -1) ck_1 = 'SkipStone';
            else if (agt.indexOf('msie') != -1) ck_1 = 'Internet Explorer';
            else if (agt.indexOf('netscape') != -1) ck_1 = 'Netscape';
            else if (agt.indexOf('mozilla/5.0') != -1) ck_1 = 'Mozilla';
            ie_vs[0] = ck_1;

            var rv = '-1',
                ua = navigator.userAgent,
                ie_Trident = 0; // 4 = ie8 , 5 = ie9 , 6 = ie10 , 7 = ie11 , 0 = 크롬,사파리,파폭
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
                if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);

                var ivs = ua.split('Trident/');
                ie_Trident = ivs[1].split('.');
                ie_Trident = ie_Trident[0];
            } else {
                //navigator.appName == Netscape
                var ivs = ua.split('Trident/');

                if (ivs[1] == 'undefined' || ivs[1] == null) {
                    ivs = 'ie_x';
                } else {
                    ie_Trident = ivs[1].split('.');
                    ie_Trident = ie_Trident[0];
                }
            }

            if (rv == '7') {
                if (ie_Trident == '4') {
                    ie_vs[1] = '8';
                    ie_vs[2] = true;
                } else if (ie_Trident == '5') {
                    ie_vs[1] = '9';
                    ie_vs[2] = true;
                } else if (ie_Trident == '6') {
                    ie_vs[1] = '10';
                    ie_vs[2] = true;
                } else {
                    ie_vs[1] = '7';
                    ie_vs[2] = false;
                }
            } else if (rv == '8') {
                ie_vs[1] = '8';
                ie_vs[2] = false;
            } else if (rv == '9') {
                ie_vs[1] = '9';
                ie_vs[2] = false;
            } else if (rv == '10') {
                ie_vs[1] = '10';
                ie_vs[2] = false;
            } else if (rv == '11') {
                ie_vs[1] = '11';
                ie_vs[2] = false;
            } else if (rv == '-1') {
                if (ie_Trident == '7') {
                    ie_vs[1] = '11';
                    ie_vs[2] = true;
                } else {
                    ie_vs[1] = '-1';
                    ie_vs[2] = false;
                }
            }
            com.pop_resize(_type);
        }, //pop_chk : function(){
        pop_resize: function(_type) {
            var type = _type == false ? false : true,
                _children = $('body').children().first();
            _children.css({
                display: 'inline-block'
            });
            con_w = _children.outerWidth(true),
            con_h = _children.outerHeight(true);

            //			console.log(con_w+' / '+con_h);
            if (ie_vs[0] == 'Internet Explorer') {
                if (ie_vs[1] == '10' || ie_vs[1] == '9') {
                    window.resizeTo(con_w + 16, con_h + 60); //ie10 +ie9
                    //					console.log('[1]');
                } else {
                    window.resizeTo(con_w + 10, con_h + 53); //ie8				
                    //					console.log('[2]');
                }
            } else {
                if (ie_vs[1] == '11' && ie_vs[2] == true) {
                    window.resizeTo(con_w + 16, con_h + 60); //ie11
                    //					console.log('[3]');
                } else if (ie_vs[0] == 'Safari') {
                    window.resizeTo(con_w + 16, con_h + 98); //Safari
                    //					console.log('[4]');
                } else if (ie_vs[0] == 'Firefox') {
                    window.resizeTo(con_w + 18, con_h + 65); //Firefox
                    //					console.log('[5]');
                } else {
                    window.resizeTo(con_w + 16, con_h + 65); //Chrome
                    //					console.log('[6]');
                }
            }
            if (_type) {
                $('body').css('overflow', 'hidden');
                //				console.log('[00]');
            } else {
                $('body').css({
                    overflow: 'hidden',
                    'overflow-y': 'auto'
                });
                //				console.log('[11]');
            }
        } //pop_resize : function(){	

    } // return {
}()); //com = (function(){

var theme = (function() {
    return {
        pkg_list_h: function() {
            /*
				옵션 추가되면 리스트 높이 맞쳐줘요
			*/
            var _pr_list = $('.package_con .pr_list');
            $.each(_pr_list, function() {
                var _this = $(this),
                    _h = 0;
                if (_this.css('display') == 'block') {
                    $.each(_this.find('li'), function() {
                        var _this = $(this);
                        _this.css('height', '');
                        var _this_h = _this.height();
                        if (_h < _this_h) _h = _this_h;
                    });
                    _this.find('li').height(_h);
                }
            });

        }, //pkg_list_h : function(){	
        pr_ck: function(_label) {
            var all_pr = 0,
                pk_pr = 0,
                _pr_d = $('.wedding_d .package_con .total_price .prc')
            tx_all_pr = _pr_d.find('.all .money'),
            tx_pk_pr = _pr_d.find('.pk .money'),
            tx_save_pr = _pr_d.find('.save strong');

            $.each(_label, function(i) {
                var _this = $(this);
                if (_this.hasClass('on')) {

                    var _next = _this.next();
                    all_pr += parseInt(_next.find('.pr_m strong').text().replace(/,/gi, '')),
                    pk_pr += parseInt(_next.find('.sel_m strong').text().replace(/,/gi, ''));
                }
            });
            String.prototype.number_format = function() {
                return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            };
            tx_all_pr.text(String(all_pr).number_format());
            tx_pk_pr.text(String(pk_pr).number_format());
            tx_save_pr.text(String(all_pr - pk_pr).number_format());
        }, //pr_ck: function(_label){

        pr_ck2: function(_label) {
            var _label = $(_label);
            var all_pr = 0,
                pk_pr = 0,
                _pr_d = $('.wedding_d .package_con .total_price .prc')
            tx_all_pr = _pr_d.find('.all .money'),
            tx_pk_pr = _pr_d.find('.pk .money'),
            tx_save_pr = _pr_d.find('.save strong');

            $.each(_label, function(i) {
                var _this = $(this);
                if (_this.hasClass('on')) {

                    var _next = _this.next();
                    all_pr += parseInt(_next.find('.pr_m strong').text().replace(/,/gi, '')),
                    pk_pr += parseInt(_next.find('.sel_m strong').text().replace(/,/gi, ''));
                }
            });
            String.prototype.number_format = function() {
                return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            };
            tx_all_pr.text(String(all_pr).number_format());
            tx_pk_pr.text(String(pk_pr).number_format());
            tx_save_pr.text(String(all_pr - pk_pr).number_format());
        } //pr_ck2: function(_label){
    } // return {
}()); //theme = (function() {


com.sc_ck();
$(window).resize(com.sc_ck);
$(document).ready(function() {
    if (ie8) {
        $('#container').find('hr').each(function() {
            var _this = $(this),
                _parent_w = _this.parent().width();
            _this.width(_parent_w);
        });
    }
    com.sel_chg(); //select변경
    com.header(); //header

    // 툴팁
    $.handlerTooltipOpen = function(e) {
        e.preventDefault();
        var $this = $(this),
            _href = $(this.hash),
            _size = $this.data('size').split('x'),
            _width = parseInt(_size[0], 10),
            _height = parseInt(_size[1], 10),
            _top = $this.offset().top + 30,
            // _top = $this.offset().top + $this.outerHeight() + 15,
            _left = $this.offset().left - _width + $this.width() + 30;
        // _left = _left - 520 - (_width / 2);
        // _left = _left * (1020 - _width) / 1020 + 30;
        // 
        _href.addClass('in').css({
            width: _width,
            // height: _height,
            top: _top,
            left: _left
        });
    };

    $.handlerTooltipClose = function(e) {
        e.preventDefault();
        var $this = $(this),
            _href = $(this.hash);

        _href.removeClass('in').removeAttr('style');
    };
    $('.js-tooltip').on('click', function(e) {
        e.preventDefault();
    });
    $('.js-tooltip').on('mouseenter', $.handlerTooltipOpen).on('mouseleave', $.handlerTooltipClose);

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

    // skyscraper
    var skyscraper = function() {

        var $html = $('html'),
            $skyscraperA = $('#skyscraperA'),
            $skyscraperB = $('#skyscraperB'),
            $keeping = $skyscraperB.children('.keeping-wrap');

        // skyscraper A
        $skyscraperA.find('.slider').bxSlider({
            controls: false,
            auto: true
        });

        // skyscraper B
        $skyscraperB.find('.slider').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            mode: 'vertical',
            pager: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 240,
            nextText: '<span class="blind">최근 본 상품 다음 슬라이드</span>',
            prevText: '<span class="blind">최근 본 상품 이전 슬라이드</span>'
        });

        $skyscraperB.children('.keeping-toggle').on('click', function(e) {
            e.preventDefault();

            $keeping.toggleClass('in');
        });

        $keeping.children('.close').on('click', function(e) {
            e.preventDefault();

            $keeping.removeClass('in');
        });

        $keeping.find('.tab-a a').on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                li = $this.parent(),
                _hash = $(this.hash);

            if (li.hasClass !== 'active') {

                li.addClass('active').siblings().removeClass('active');
                _hash.addClass('in').siblings('.toggler').removeClass('in');
            }
        });

        $skyscraperB.children('.top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            });
        });

        $skyscraperB.children('.down').on('click', function(e) {
            e.preventDefault();

            var _htmlHeight = $html.height();

            $('html, body').animate({
                scrollTop: '+=' + _htmlHeight
            });
        });
    };

    // skyscraper
    if ($('.skyscraper').length) {
        skyscraper();
    }

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

    // 주문서 플로팅
    $.fn.floatPanel = function() {

        var $this = $(this),
            $window = $(window),
            $box = $('.payment-box'),
            $payment = $('#paymentTotal');
        var _marginTop = 0;

        var returnTop = function() {
            var _offsetTop = $box.offset().top,
                _h = $box.height(),
                _offsetFoot = (_offsetTop + _h) - $window.innerHeight(),
                _scrollTop = $window.scrollTop(),
                _fixedTop = _h - $payment.height();

            _marginTop = _scrollTop - _offsetTop;


            console.log('scroll:' + _scrollTop, ', footTop : ' + $payment.height());
            if (_marginTop >= 0) {
                _marginTop = (_offsetFoot < _scrollTop) ? _fixedTop : _marginTop;
            } else {
                _marginTop = 0;
            }
        };
        $window.on('scroll', function() {
            $.throttle(function() {
                returnTop();
                $this.stop().animate({
                    'margin-top': _marginTop - 1
                });
            }, 100);
        });

    };
    // 주문서 플로팅
    if ($('.order-sheet').length) {
        $('#paymentTotal').floatPanel();
    }

    // lnb
    $('.page-customer #lnb a.d1').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            d1 = $this.parent();

        if (d1.hasClass !== 'active') {
            d1.addClass('active').siblings().removeClass('active');
        }
    });

    // 주문 옵션 변경
    com.accordion($('.js-option-change'), 'tr');

    // my page 견적 toggle
    $('.estimate-toggler .more').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            article = $this.parents('.estimate-toggler');

        article.toggleClass('in');

        if (article.hasClass('in')) {
            $this.children().text('MD 견적 내역 테이블 닫기');
        } else {
            $this.children().text('MD 견적 내역 테이블 열기');
        }
    });

    // coupon
    $('.coupon-search .more').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            article = $this.parents('.coupon-search');

        article.toggleClass('in');
    });

    // magazine qna
    com.accordion($('.magazine-view .bbs-list a.question'), 'tr');

    // 맞춤견적
    $('.estimate-sheet .clause a.more').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            wrap = $this.parent().parent();

        $this.toggleClass('active');

        if (wrap.hasClass('in')) {
            $this.find('em').text('닫기');
            wrap.removeClass('in');
        } else {
            $this.find('em').text('열기');
            wrap.addClass('in');
        }
    });

    // 전자랜드 소개 지점, 직원 검색
    // $('.cheer-search-hd .search-form input.text').on('keyup', function(e) {
    //     e.preventDefault();
    //     var wrap = $(this).parent().next('.search-list-wrap');

    //     wrap.show();
    // })

    $('.cheer-search-hd .search-form input.text').on('focusout', function(e) {
        e.preventDefault();
        var wrap = $(this).parent().next('.search-list-wrap');

        if (wrap.css('display') == 'block') {
            setTimeout(function() {
                wrap.hide();
            }, 200);
        }
    });
});