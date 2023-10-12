var win_w, win_h, ie8, ie;
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
                doc = document,
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
            var _select = (idx == undefined) ? $('.sel_chg') : idx;
				
            if (type == 'chg') {
				var _over = _select.data('over') ? false : true;
                _select.next('.sel_d').remove();
                _select.after(com.sel_html(_select, _over));
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
					var _over = $(this).data('over') ? true : false;
                    $(this).hide().after(com.sel_html($(this), _over));
                });
            }
        }, //sel_chg: function(){
        sel_html: function(_this, _over) {
            /* 옵션
				data-width="100" //셀렉트 고정값
			*/

            var _overClass = _over ? 'sel_over' : '',
				_optHtml = '',
                _id = _this.attr('id'),
                _width = _this.data('width') | null,
                _pl = _this.val() == '' ? _this.children().first().text() : _this.children('option[value="' + _this.val() + '"]').text(),
                _lg = _this.children().length,
                _sel_d = _width != 0 ? $('<div class="sel_d" data-id="' + _id + '" style="width:' + _width + 'px"></div>') : $('<div class="sel_d" data-id="' + _id + '"></div>'),
                _sel_opt = $('<ol class="a_list '+_overClass+'"></ol>'),
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
        } //accordion : function(_idx, _type){
    }
}()); //com = (function(){
com.sc_ck();
$(window).resize(com.sc_ck);
$(document).ready(function() {
    com.sel_chg(); //select변경
});