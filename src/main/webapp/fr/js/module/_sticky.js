(function(BASE) {

    "use strict";

    "version: 0.1";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html,
        $window = BASE.$window,
        $document = BASE.$document;

    var $skyscraper = $('#skyscraper'),
        $footer = $('#footer');

    var $startEl = $('.js-sticky-top').eq(0) || $('#content'); // sticky top 위치 지정, 없을때는 inner

    /**
     * [stickyOnLoad description]
     * Floating 되어 특정 개체 위치를 따라다니는 기능을 합니다.
     * 상/하단 모두 탐지할 수 있습니다.
     * container, footer 등의 최고, 최저 높이를 설정할 수 있습니다.
     */
    BASE.components.stickyOnLoad = function() {

    };

    BASE.components.stickyOnScroll = function() {

        if (BASE.is.mobile === true || BASE.setting.sticky !== true) return false;

        var _sticky = function(_el, _options) {

            if ($.htmlHasClass('is-animation')) return false; // scrollTop 을 이용한 강제 스크롤 시 animating

            var _opts = $.extend({
                always: false, // 항상 탐지할지 여부
                startEl: null, // 탐지 대상
                endEl: null, // 하단 탐지 대상
                targetEl: null, // class 적용 객체
                position: ['absolute', 'fixed', 'absolute'], // 포지션 값
                marginY: [0, 0, 0],
                classDone: 'is-sticky-loaded',
                classNames: ['is-sticky-upper', 'is-sticky-current', 'is-sticky-downer']
            }, _options);

            var $this = _el,
                $target = _opts.targetEl,
                $startEl = _opts.startEl,
                $endEl = _opts.endEl;

            if (!$this.length) return false;

            $target = $target || $this;

            var $$this = $this[0],
                $$target = $target[0];

            var _scrollTop = BASE.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

            var _height = parseInt($this.height(), 10), // 객체 높이
                _startElTop = parseInt($$this.getAttribute('data-start'), 10),
                _endElTop = parseInt($$this.getAttribute('data-end'), 10);

            var module = {
                init: function() { // 최초 실행

                    if ($.hasClass($$this, _opts.classDone)) return false;

                    $.addClass($$this, _opts.classDone);
                    module.detect(true);

                },
                detect: function(_boolAlways) { // 디텍팅


                    // get value
                    if (_boolAlways !== true && _startElTop !== undefined && _endElTop !== undefined) return false;

                    var _bodyHeight = document.body.clientHeight || document.documentElement.clientHeight || document.documentElement.scrollHeight;

                    _startElTop = $startEl.offset().top; // 탐지 대상 offset top
                    _endElTop = ($endEl !== null && $endEl.length) ? $endEl.offset().top : _bodyHeight; //

                    $$this.setAttribute('data-start', parseInt(_startElTop, 10));
                    $$this.setAttribute('data-end', parseInt(_endElTop, 10));

                },
                reset: function() { // reset
                    $target.removeClass(_opts.classNames[0] + ' ' + _opts.classNames[1] + ' ' + _opts.classNames[2]);

                    $$this.style.top = '123123'; // $this.css('top', '');

                },
                render: function() {

                    module.init();

                    module.detect(_opts.always);
                    module.reset();

                    var _case = 0,
                        _marginTop = 0,
                        _top = 0;

                    // 하단에 걸리도록
                    if (_scrollTop > _endElTop - _height - (_opts.marginY[1]) - (_opts.marginY[2])) {

                        _case = 2;
                        _top = _scrollTop - (_scrollTop - _endElTop + _height + (_opts.marginY[2] * 2));
                        _marginTop = _opts.marginY[2];

                        // 중단
                    } else if (_scrollTop >= _startElTop - _opts.marginY[1]) {

                        _case = 1;
                        _marginTop = _opts.marginY[1];

                        // 상단
                    } else if (_scrollTop < _startElTop - _opts.marginY[1]) {

                        _case = 0;

                        if (_opts.position[0] === 'absolute') {
                            _marginTop = _opts.marginY[0] + _startElTop;
                        } else {
                            _marginTop = _opts.marginY[0];
                        }

                    }

                    $.addClass($$target, _opts.classNames[_case]);

                    var _css = {
                        'position': _opts.position[_case],
                        'marginTop': _marginTop,
                        'top': parseInt(_top, 10)
                    };

                    // $this.css(_css);
                    $$this.style.position = _opts.position[_case];
                    $$this.style.marginTop = _marginTop.toString() + 'px';
                    $$this.style.top = parseInt(_top, 10).toString() + 'px';

                }
            };

            module.render();

        };

        // mall main 일때
        if($.hasClass($('body')[0], 'page-main')) $startEl = $('#todayBrand .wrapper');

        $startEl = ($startEl.length) ? $startEl : $('#content');

        _sticky($skyscraper, {
            always: true, // 항상 탐지 대상 객체의 위치를 측정하고 계산할지 설정, Bool 값
            startEl: $startEl, // 상단 탐지 대상
            endEl: $footer, // 하단 탐지 대상
            position: ['absolute', 'fixed', 'absolute'], // 상단 0, 중단, 하단 일때 변하는 position 속성
            marginY: [20, 183, 0], // 상단, 중단, 하단일때 적용되는 y축 마진 값 설정
        });

    };

    // set handler
    BASE.onLoad.sticky = {
        name: 'sticky',
        repeat: true,
        timeConsole: 1,
        render: BASE.components.stickyOnLoad
    };

    // set handler
    BASE.onScroll.sticky = {
        name: 'sticky',
        repeat: true,
        timeConsole: 0,
        render: BASE.components.stickyOnScroll
    };

})(BASEkit);
