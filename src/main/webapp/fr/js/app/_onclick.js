/**
 * ============================================================================
 *
 */
(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    // 클릭 이벤트 객체 반환
    var _returnEventTarget = $.returnEventTarget || function(e) {
        var $el = $(e.target),
            _tagName = $el[0].tagName.toLowerCase();
        $el = (_tagName != 'a' && _tagName != 'button') ? $el.closest('a') : $el;
        return $el;
    };

    /**
     * 샘플
     */
    BASE.components.toTheTop = function() {

        $.addClass($$html, 'is-animating');

        $('html, body').animate({

            'scrollTop': 0

        }, 200, function() {

            $.removeClass($$html, 'is-animating');

        });

    };

    /**
     * onClick 자동 실행을 위한 설정
     */
    BASE.onClick = {
        click: {
            name: 'test',
            trigger: '.js-top',
            console: 0,
            render: BASE.components.toTheTop
        }
    };

    /**
     * BASE.onClick
     * 클릭 장치를 위한 이벤트 핸들러 등록
     * 보강 필요
     */
    $.each(BASE.onClick, function(i, _array) {

        $document.on('click.base', _array.trigger, function(e) {
            var _text = 'BASE.onClick' + '.' + _array.name;
            $.console(_text);
            _array.render.call();
        });

    });

})(BASEkit);
