(function(BASE, $) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    // on document ready
    var _onDocumentReady = function(_func) {
        if (document.readyState != 'loading') {
            _func();
        } else {
            document.addEventListener('DOMContentLoaded', _func);
        }
    };

    /**
     * BASE.XXX functions 를 실행하는 유틸리티
     * 아래와 같은 형태로 운용
     * BASE.onBoot = {
     *   getBrowserSupports: {
     *       name: 'getBrowserSupports',
     *       repeat: true, // 반복 실행, false 시 한 번만 실행
     *       repeatConsole: true, // 콘솔 로그 반복 유무
     *       render: BASE.components.getBrowserSupports
     *   },
     *   detectBrowser: {
     *       name: 'detectBrowser',
     *       render: BASE.components.detectBrowser
     *   },
     *   replaceMeta: {
     *       name: 'replaceMeta',
     *       render: BASE.components.replaceMeta
     *   }
     * };
     */
    var _bindComponent = function(_obj, _str, _isWatch) {

        $.each(_obj, function(i, _item) {

            var _text,
                _repeat,
                _console;

            if (typeof _item.render !== 'function') return false;

            _text = 'BASE.' + _str + '.' + _item.name;

            _item.console = (_item.console !== undefined) ? _item.console : 0;

            if (_item.complete === true) return false; // 실행완료했으면

            if (_item.logged === undefined) { // 콘솔 출력했는지
                if (_item.console >= 1) { // 콘솔 출력이 필요하면
                    $.console(_text + ' called');
                    _item.logged = (_item.console < 2) ? true : undefined; // 콘솔 출력했음
                }
            }

            // 한번만 실행할지
            _item.complete = (_isWatch === undefined || _isWatch < 1) ? true : undefined;

            // 실행
            _item.render.call();

        });

    };

    // get window sizes
    var _getWindowSizes = function() {
        BASE.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        BASE.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    // get scroll positions
    var _getScrollPositions = function() {
        BASE.scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // scroll posiiton 계산
        BASE.scrollLeft = BASE.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft;
    };

    /**
     * BASE.onBoot
     * 최우선 순서로 부팅시 실행하는 유틸리티
     */
    _bindComponent(BASE.onBoot, 'onBoot', 0);

    /**
     * BASE.onDomReady
     * Dom Ready 시 실행하는 유틸리티
     */
    // $document.ready(function() {
    //     _bindComponent(BASE.onDomReady, 'onDomReady');
    // });

    _onDocumentReady(function() {
        _bindComponent(BASE.onDomReady, 'onDomReady', 0);
    });

    /**
     * BASE.onLoad
     * BASE.onResize
     * BASE.onScroll
     * load, resize, scroll 등 일반 이벤트 발생시 실행 핸들러 등록
     * BASE.onAjaxLoad
     * ajax contents load 완료 시 실행
     */
    $window.on({
        'load.base': function() {

            _bindComponent(BASE.onLoad, 'onLoad', 0); // on load

        },
        'load.base resize.base': function() {

            if (BASE.setting.resize !== true) return false;

            _getWindowSizes(); // set window size
            _bindComponent(BASE.onResize, 'onResize', 1); // on resize

        },
        'load.base scroll.base': function() {

            // set scroll position            
            _getScrollPositions(); // set scroll positions
            _bindComponent(BASE.onScroll, 'onScroll', 1); // on scroll

        },
        'ajaxloaded.base': function() { // on ajax load completed

            _bindComponent(BASE.onAjaxLoad, 'onAjaxLoaded', 0);
            
        }
    });

    /**
     * BASE.defer
     */
    $window.on({
        'load.base': function() {
            _bindComponent(BASE.defer, 'defer', 0);
        }
    });

})(BASEkit, window.jQuery);
