(function(BASE) {

    "use strict";

    "version: 0.1";

    var $html = BASE.$html,
        $window = BASE.$window,
        $document = BASE.$document;

    // set tooltip constructor
    var Tooltip = function() {

        // base for return object
        var base = {
            $el: null, // modal
            $inner: null, // modal inner
            $title: null // title
        };

        // _setting
        var _setting = {
            name: 'tooltip',
            console: true, // active console
            html: [
                '<div id="tooltip" class="md-tooltip"><div class="md-content">',
                '<h3 class="title">Modal Dialog</h3>',
                '<div id="tooltipInner" class="inner-wrapper"></div>',
                '<a href="javascript:;" class="md-close close"><span class="icon"><em>닫기</em></span></a>',
                '</div>',
                '</div>'
            ],
            className: null,
            fx: 'fx-10',
            title: null, // 제목
            text: null, // 내용
            size: null, // '200x500',
            split: false, // split for title
            overlay: false,
            absolute: false, // position absolute
            labelSubmit: null,
            onSubmit: null,
            onInit: function(base) {
                // 생성시 실행
                common.log('init');
            }
        };

        var params,
            _opts;

        var REGSIZE = /^(\d{1,4})x(\d{1,4})$/;

        var _delay = { // delay object
            second: 50, // 찰나
            anim: 300 // fx
        };

        var _timer = { // timer object
            tooltip: null
        };

        /**
         * common func.
         */
        var common = {
            // console log
            log: function(_obj) {
                if (_opts.console !== true || typeof console !== 'object' || typeof console.log !== 'function') return false;
                console.log(_opts.name + ':' + _obj);
            },
            // console info
            info: function(_obj) {
                if (_opts.console !== true || typeof console !== 'object' || typeof console.info !== 'function') return false;
                console.info(_opts.name + ':' + _obj);
            },
            // callback
            callFunc: function(_func, _bool, _param) {
                if (_bool !== undefined && _bool === false) return false;
                _func = (typeof _func == 'string') ? window[_func] : _func;
                _param = (_param === null) ? '' : _param;
                if (_func && $.isFunction(_func)) {
                    _func.call(null, base, _param);
                } else {
                    common.log('no exist function');
                }
            }
        };

        /**
         * utilities
         */
        var util = {
            getParam: function(_params) {
                _opts = $.extend({}, _setting, _params);
                // console.info(_opts);
                _opts.html = _opts.html.join('');
            },
            // set size
            setSize: function() {

                var $el = base.$el;

                var _width,
                    _height;

                if (_opts.size !== undefined && _opts.size !== null && REGSIZE.test(_opts.size)) { // set size
                    var _size = _opts.size.split('x');
                    _width = _size[0];
                    _height = _size[1];
                }

                if (_width > 0) {
                    $el.css('width', _width);
                }

                if (_height > 0) {
                    $el.css('height', _height);
                }

            },
            // toggle drag handler
            toggleHandler: function(_bool) {

                var $el = base.$el;

                if (_bool === true) {

                    $document.on('mousemove.tooltip-drag', function(e) {
                        e.preventDefault();
                        var _x = e.pageX + 30, // 정확한 좌표 탐지를 위한 보정 장치
                            _y = e.pageY - 60; // 위치조정, 위쪽으로 뜨게.
                        $el.offset({
                            left: _x, // 정확한 좌표 탐지를 위한 보정 장치
                            top: _y
                        });
                    });
                    $document.trigger('mousemove.tooltip-drag');

                } else {
                    $document.off('mousemove.tooltip-drag');
                }

            },
            getHtml: function() {

                var $inner = base.$inner,
                    $title = base.$title,
                    $anchor = base.$anchor;

                // title
                if (_opts.title !== null) {
                    $title.html(_opts.title + '<span class="sr-only"> 레이어</span>'); // set title
                } else {
                    $title.remove();
                }

                // contents
                if (_opts.text === null) {
                    if (base.$anchor.attr('title') !== undefined) {
                        _opts.text = $anchor.attr('title');
                    } else {
                        _opts.text = $anchor.html();
                    }
                }

                // split for title
                if (_opts.split === true && _opts.text.match('|')) {
                    _opts.text = _opts.text.split('|');
                    $inner.html('<div class="subject">' + _opts.text[0] + '</div><div>' + _opts.text[1] + '</div>');
                } else {
                    $inner.html(_opts.text);
                }

                // on submit
                if (_opts.onSubmit !== null) {

                    var _label = (_opts.labelSubmit !== null) ? _opts.labelSubmit : '확인';
                    var $buttonSubmit = $('<div class="buttons"><a href="javascript:;" class="button xsmall"><span>' + _label + '</span></a></div>');

                    $buttonSubmit.one('click', function(e) { // set handler
                        e.preventDefault();
                        common.callFunc(_opts.onSubmit);
                        model.destroy();
                    });

                    $inner.append($buttonSubmit);
                }

            }
        };

        /**
         * modeling
         */
        var model = {
            reset: function(_boolInit) {

                var _resetElement = function() { // reset element
                    base.$el = $(_opts.html);
                    if (_opts.className !== null) base.$el.addClass(_opts.className);
                    base.$el.prependTo('body');
                    base.$inner = base.$el.find('.inner-wrapper');
                    base.$title = base.$el.find('.title');
                    base.$close = base.$el.find('.md-close');
                };

                clearTimeout(_timer.tooltip);

                $('#tooltip').remove(); // reset model
                $html.toggleClass('is-tooltip', false); // turn off modal

                if (_boolInit === true) {

                    _resetElement(); // reset element

                    common.callFunc(_opts.onInit); // on init callback
                    // destroy
                    base.$close.one('click.tooltip', function(e) {
                        model.destroy();
                    });

                }

            },
            open: function() {

                if (base === null || base.$el === null) return false; // bulletproof

                var $el = base.$el;

                $el.addClass(_opts.fx);

                util.getHtml();
                util.setSize();

                if (_opts.absolute === true) { // click or pos absolute

                    $el.addClass('is-clicked');

                    var _offset = base.$anchor.offset();
                    var _x = _offset.left, // 정확한 좌표 탐지를 위한 보정 장치
                        _y = _offset.top; // 위치조정, 위쪽으로 뜨게.

                    _x = _x - $el.width() + (base.$anchor.width() / 2);
                    _y = _y - $el.height() + 15;

                    $el.offset({
                        left: _x, // 정확한 좌표 탐지를 위한 보정 장치
                        top: _y
                    });


                } else { // mouse move

                    util.toggleHandler(true); // handler

                }

                _timer.tooltip = setTimeout(function() {

                    $el.toggleClass('md-show', true);

                }, _delay.second);

                if (_opts.overlay === true) { // overlay
                    $.toggleOverlay(true);
                }

            },
            destroy: function() {

                if (base === null || base.$el === null) return false; // bulletproof

                util.toggleHandler(false); // handler

                base.$el.toggleClass('md-show', false);

                if (_opts.overlay === true) { // overlay
                    $.toggleOverlay(false);
                }

                _timer.tooltip = setTimeout(function() {

                    base.$el.remove();

                }, _delay.anim);

            }
        };

        /**
         * public method
         */
        return {
            off: function(_anchor) {
                base.$anchor = _anchor;
                // util.getParam(_arg); 필요 없음, 폐기
                model.reset(false);
                model.destroy();
            },
            on: function(_anchor, _arg) {
                base.$anchor = _anchor; // set anchor
                util.getParam(_arg);
                model.reset(true);
                model.open();
            },
            toggle: function(_anchor, _arg) {
                base.$anchor = _anchor; // set anchor
                util.getParam(_arg);
                model.reset(true);
                _opts.absolute = true;
                model.open();
            }
        };
    };

    // make jquery object
    $.tooltip = new Tooltip();

    // tooltip
    BASE.components.tooltip = function() {

        // get custom data
        var getCustomData = function(_el) {

            var _result = {},
                _defaults = {
                    html: null,
                    fx: null,
                    className: null,
                    title: null, // 제목
                    text: null, // 내용
                    size: null,
                    split: null, // split for title
                    absolute: false, // position absolute
                    overlay: null,
                    onInit: null,
                    labelSubmit: null,
                    onSubmit: null
                };

            $.each(_defaults, function(key, val) { // get custom data
                var _key = (key.replace(/([a-z])([A-Z])/g, '$1-$2')).toLowerCase(), // buttonSubmit 을 button-submit 등으로 camelCase 를 hipen 구조로 변환
                    _data = _el.data(_key);
                if (_data !== undefined) _result[key] = _data;
            });

            return _result;

        };

        // 타겟 지정
        var _returnAnchor = function(e) {
            var $result = $(e.target);

            if (!$result.is('a') || !$result.is('button')) {
                $result = $result.closest('.js-tooltip');
            }

            return $result;
        };

        // set handler
        var _handlerOn = function(e) {
            var $el = _returnAnchor(e);
            $.tooltip.on($el, getCustomData($el));
        };

        var _handlerOff = function(e) {
            var $el = _returnAnchor(e);
            $.tooltip.off($el);
        };

        var _handlerToggle = function(e) {
            var $el = _returnAnchor(e);
            $.tooltip.toggle($el, getCustomData($el));
        };

        // mouseleave
        $document.on('mouseleave', '.js-tooltip:not(".has-click")', _handlerOff);

        // hover
        $document.on('mouseover', '.js-tooltip:not(".has-click")', _handlerOn); // set handler

        // click
        $document.on('click', '.js-tooltip.has-click', _handlerToggle); // set handler click

    };

    // set handler
    BASE.onLoad.tooltip = {
        name: 'tooltip',
        timeConsole: 1,
        render: BASE.components.tooltip
    };


})(BASEkit);
