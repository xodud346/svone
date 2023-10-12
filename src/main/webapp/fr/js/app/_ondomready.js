/**
 * ============================================================================
 *
 */
(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html');

    /**
     * DOM 객체 캐쉬
     */
    BASE.components.initElement = function() {

        BASE.$container = $('#container');
        BASE.$header = $('#header');
        BASE.$wrapper = $('#wrapper');
        BASE.$aside = $('#aside');
        BASE.$footer = $('#footer');

        BASE.$detectorSm = $('#detectorSm');
        BASE.$parallax = $(BASE.selector.parallax);
        BASE.$inview = $(BASE.selector.inview);

        // init inview element
        var initInview = (function() {

            var $el = BASE.$inview,
                _className = BASE.classNames.inView,
                _delayStart = BASE.delays.inview,
                _length = $el.length,
                i = 0;

            if (!_length) return false;

            while (i < _length) {

                var $this = $el.eq(i),
                    $$this = $this[0],
                    _delay = _delayStart,
                    _dataDelay = $$this.getAttribute('data-delay');

                if (_dataDelay !== undefined) {
                    _delay = _delay * _dataDelay + 'ms';
                    $$this.style.WebkitTransitionDelay = _delay;
                    $$this.style.transitionDelay = _delay;
                }

                if (i <= _length - 1) { // end
                    $.addClass($$html, _className);
                }

                i++;
            }
        })();

    };

    /**
     * ajax contents 호출, header, footer, skyscraper 등
     * BASE.ajaxContents = [{
     *     'selector': '#header', // 삽입할 대상 객체
     *     'src': '../html/_header.html', // 호출 문서
     *     'callback': function(){ // 호출 완료시 실행될 콜백
     *          $.console('set header completed');
     *      }
     * }];
     */
    BASE.components.loadAjaxContents = function() {

        if (BASE.ajax === undefined) return false;

        // get global vars.
        var _contents = BASE.ajax.contents,
            _onComplete = BASE.ajax.onComplete;

        var i = 0,
            _length = _contents.length;

        var _core = function(_el) {

            if (_el === undefined) { // on complete
                $.callFunc(_onComplete, null);
                return false;
            }

            var $target = $(_el.selector),
                _src = _el.src;

            i++;

            if (!$target.length) { // 대상이 없을 때

                console.log('ajax load target not exist: ' + _src);
                _core(_contents[i]);

            } else { // 대상이 있다면

                $('<div />').load(_src, function(_response, _status, _xhr) {
                    if (_status == 'error') {
                        console.log('ajax load error: ' + _src);
                    } else {
                        $target.append(_response);
                        $.addClass($target[0], 'is-ajaxloaded-element');
                        if (typeof _el.callback === 'function') {
                            _el.callback.call();
                        }
                    }
                    _core(_contents[i]);
                });

            }

        };

        _core(_contents[i]);

    };

    /**
     * 헬퍼 객체 생성
     */
    BASE.components.setHelperElements = function() {

        // 전역변수 호출
        var _classNameDomReady = BASE.classNames.domReady,
            _classNameIndicator = BASE.classNames.indicator,
            _delayDomReady = BASE.delays.domReady;

        var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
            $body = BASE.$body || $('body'),
            $container = BASE.$container || $('#container');

        var _html = {
            body: [
                '<div class="md-detector"><span id="detectorSm" class="detector-sm" aria-hidden="true"></span><span id="detectorLg" class="detector-lg" aria-hidden="true"></span></div>'
                ,'<div id="overlay" class="md-overlay"></div>'
                , '<div id="indicator" class="md-indicator"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
                // ,'<div id="pageUp"><a href="#top" class="js-top"><i class="icon"><em>TOP</em></i></a></div>', // page up
            ],
            container: [
                '<div id="trigerSticky" class="trigger-sticky" aria-hidden="true"></div>'
            ]
        };

        if ($.htmlHasClass(_classNameDomReady) === true) return false; // 중복실행 방지

        $.addClass($$html, _classNameIndicator); // set html class

        $body.append(_html.body.join('')); // append to body       

        $container.append(_html.container.join('')); // append to body

        var _timer = setTimeout(function() {

            $.addClass($$html, _classNameDomReady); // 중복실행 방지

        }, _delayDomReady);

    };

    /**
     * onDomReady 자동 실행을 위한 설정
     */
    BASE.onDomReady = {
        setHelperElements: { // 헬퍼 객체 생성
            name: 'setHelperElements',
            render: BASE.components.setHelperElements
        },
        initElement: { // DOM 객체 캐쉬
            name: 'initElement',
            render: BASE.components.initElement
        },
        loadAjaxContents: { // ajax contents load
            name: 'loadAjaxContents',
            render: BASE.components.loadAjaxContents
        }
    };

})(BASEkit);
