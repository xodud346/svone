$(function() {

    "use strict";

    var initSwipeSlider = function(_options) {

        var _result; // return value

        var base = []; // return element

        var _settings = $.extend({ // extend setting by option

            // custom options
            id: null,
            autoHeight: false,
            onBefore: function() {},
            onInit: function() {},
            onSlide: function() {},
            onTransitionEnd: function() {},

            // swipe default options
            startSlide: 0,
            speed: 400,
            auto: 0,
            continuous: true,
            disableScroll: false,
            stopPropagation: true

        }, _options);

        base.this = document.getElementById(_settings.id);
        base.$this = $(base.this);
        base.$inner = base.$this.children();
        base.$items = base.$inner.children();
        base.$current = base.$items.eq(0);
        base.length = base.$items.length;
        base.idx = 0;

        // throttle
        var throttle = (function() {
            var _timerThrottle;
            return function(_fn, _delay) {
                clearTimeout(_timerThrottle);
                _timerThrottle = setTimeout(_fn, _delay);
            };
        }());

        var callFunc = function(_callback, _el, _param, _delay) {
            _callback = (typeof _callback == 'string') ? window[_callback] : _callback;
            if ($.isFunction(_callback)) {
                _el = (typeof _el == 'undefined') ? null : _el;
                _param = (_param === null) ? '' : _param;
                _delay = _delay || 50;
                setTimeout(function() {
                    _callback.call(null, _el, _param);
                }, _delay);
            } else {
                return false;
            }
        };

        var _optsSwipe = $.extend({
            callback: function(idx, el) {
                base.idx = idx;
                base.$current = el;
                callFunc(_settings.onSlide, base);
            },
            transitionEnd: function(idx, el) {
                base.$this.trigger('slided');
                callFunc(_settings.onTransitionEnd, base);
            }
        }, _settings);

        var _setModel = function() {
            var _padderHeight = $('#wrapper').scrollTop() + $('#footer').height();

            base.$this.css({
                'visibility': 'hidden',
                'position': 'relative'
            });
            base.$inner.css({
                'overflow': 'hidden',
                'position': 'relative',
                'transition': 'all .1s ease-in-out'
            });
            base.$items.css({
                'position': 'relative',
                'float': 'left',
                'width': '100%'
                    // 'min-height': 'calc(100vh - ' + _padderHeight + 'px)' // min-height
            });
        };

        var _resetHeight = function(_idx, _el) {
            var $el = (_el !== undefined) ? $(_el) : base.$inner.children().eq(0);
            $el.css('height', 'auto');
            base.$inner.height($el.outerHeight());
        };

        var _setHandler = function() {
            base.$this.off('.swipe').on('slided.swipe', function() {
                if (_settings.autoHeight === true) {
                    _resetHeight(base.idx, base.$current);
                }
            });
            if (_settings.autoHeight === true) {
                _resetHeight(base.idx, base.$current);
            }
        };

        _setModel();

        callFunc(_settings.onBefore, base);
        _result = Swipe(base.this, _optsSwipe); // window.swipeStage = $('#swipeStage').Swipe().data('Swipe');

        throttle(function() {
            _setHandler();
            callFunc(_settings.onInit, base);
        }, 500);

        return _result;

    };



    /**
     * 슬라이더 네비게이션 포지션 반환
     * @param  {[type]} _el         활성화된 아이템
     * @param  {[type]} _wrapper    감싸는 요소
     * @param  {[type]} _totalWidth 아이템 묶음 전체 길이
     * var _pos = $.swingItemPos(base.$active, base.$wrap, base.itemsWidth);
     * base.$el.stop().animate({
     *     'margin-left': _pos.left
     * });
     * if (_isIndicator === true) {
     *     base.$indicator.stop().animate({
     *         'width': _pos.itemWidth,
     *         'margin-left': _pos.indicatorLeft
     *     });
     * }
     */
    $.swing = function(_idx, _options) {

        var _opts = $.extend({ // setting
            scrollerEl: '#nav',
            innerEl: '.inner',
            itemEl: '.item'
        }, _options);

        _idx = parseInt(_idx, 10); // to number

        var _item = {},
            _scroller = {};

        var $window = $(window), // window
            $scroller = $(_opts.scrollerEl), // scroller
            $nav = $scroller.find(_opts.innerEl), // navigation,
            $links = $scroller.find(_opts.itemEl), // links
            $current = $links.eq(_idx); // current links

        var _windowWidth = BASE.width || $window.width();

        if (!$scroller.length) return false;

        var _scrollerWidth = Math.min($scroller.width(), _windowWidth),
            _width = 0, // prev items width
            i = 0,
            _length = parseInt(_idx, 10) + 1, // item length
            _scrollTo = 0; // result

        $current.addClass('in').siblings().removeClass('in'); // activate

        while (i < _length) { // calcurate prev items width
            _width = _width + $links.eq(i).width();
            i++;
        }

        var _getPosition = function() { // get position
            _item = {
                start: _width - $current.width(), // 아이템 처음 + 앞 요소 전체 너비
                center: _width - ($current.width() / 2), // 아이템 중앙 + 앞 요소 전체 너비
                end: _width // 아이템 마지막 + 앞 요소 전체 너비
            }
            _scroller = {
                width: _scrollerWidth,
                widthHalf: parseInt(_scrollerWidth / 2, 10)
            }
        };

        var _setPosition = function() { // set position
            var _result = 0;
            if (_item.center < _scroller.widthHalf) {
                _scrollTo = 0;
            } else {
                _scrollTo = _item.center - _scroller.widthHalf;
            }
            _result = parseInt(_scrollTo, 10);
            return _result;
        };

        var _doScroll = function(_goto) {
            $scroller.animate({
                'scrollLeft': _goto
            }, 100);
        };

        _getPosition(); // get position
        _scrollTo = _setPosition(); // set scroll position
        _doScroll(_scrollTo); // do scroll

    };

    $.initSwing = function() {

        var getUriVars = function() { // get uri parameter
            var vars = {},
                parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                    vars[key] = value;
                });
            return vars;
        };

        var _slideIdx = getUriVars().slide;

        _slideIdx = (_slideIdx !== undefined) ? _slideIdx : 0;

        $(document).on('click', '#nav a.d1', function(e) {
            e.preventDefault();
            var _idx = $(e.target).closest('.item').index();
            swipeStage.slide(_idx, 400);
        });


        // $underbar.appendTo($gnb);

        // doUnderBar($underbar, _slideIdx);

        window.swipeStage = initSwipeSlider({
            startSlide: _slideIdx,
            speed: 400,
            auto: 0,
            continuous: false,
            disableScroll: false,
            stopPropagation: false,
            id: 'sliderMainWrap',
            autoHeight: true,
            onInit: function(base) {
                base.$this.addClass('loaded');
                var _timer = setTimeout(function() {
                    $.swing(_slideIdx);
                }, 500);
            },
            onSlide: function(base) {
                $.swing(base.idx);
            }
        });



        $(document).on('click', '.test a', function(e) {
            e.preventDefault();
            var _idx = $(e.target).closest('.cell').index();
            $.swing(_idx, {
                scrollerEl: '#foo',
                innerEl: '.slider-inner',
                itemEl: '.cell'
            });
        });

        $(document).on('touchstart', '#foo a', function(e) {
            $('html').addClass('is-focus');
        });

        $(document).on('touchend', '#foo a', function(e) {
            $('html').removeClass('is-focus');
        });


        // $(document).on('touchstart', '#foo p', function(e) {
        //     alert('1232');
        // });

        // $(document).on('touchstart', '#foo p', function(e) {
        //     alert('1232');
        // });


    };



});

(function(BASE, $) {



})(BASEkit, window.jQuery);
