/**
 * pushr
 * author: riix@epasscni.com
 * version: 0.3
 */

(function($, window, document, ua) {

    'use strict';

    // var isOpend = false; // 중복 방지 해제

    var Pushr = function() {

        var $document = $(document), // dom cache
            $window = $(window),
            $html = $('html');

        // base for return object
        var base = {
            $container: null,
            $wrapper: null,
            $inner: null,
            $active: null,
            length: 0,
            idx: 0
        };

        // setting
        var _setting = {
            container: '#container',
            wrapper: '#wrapper',
            elements: ['#aside'],
            // elements: ['#nav'], // 마이메뉴 기능 해제
            // classes: ['pushr-nav', 'pushr-mymenu2'],
            classes: ['pushr-nav'],
            setMinHeight: true,
            setScroll: false, // 스크롤 강제
            console: false
        };

        var _opts;

        _opts = $.extend({}, _setting);

        var _is = { // detect object
            cssanimations: !$html.hasClass('no-cssanimations'),
            active: false,
            animating: false
        };

        /**
         * common func.
         */
        var common = {
            // console log
            log: function(_obj) {
                if (_setting.console !== true || typeof console !== 'object' || typeof console.log !== 'function') return false;
                console.log(_setting.name + ':' + _obj);
            },
            // console info
            info: function(_obj) {
                if (_setting.console !== true || typeof console !== 'object' || typeof console.info !== 'function') return false;
                console.info(_setting.name + ':' + _obj);
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
            },
            returnAnchor: function(_el) {
                var $el = (_el[0].tagName !== undefined && _el[0].tagName.toLowerCase() !== 'a') ? _el.closest('a') : _el;
                return $el;
            }
        };

        /**
         * utilities
         */
        var util = {
            toggle: function(_idx, _boolToggle) {

                var _class = _opts.classes[_idx],
                    _classActive = 'is-active-' + _class;

                var i = 0;

                var _timer = null;

                base.$active = $(_opts.elements[_idx]);
                base.length = _opts.elements.length;

                if (_boolToggle === true) { // toggle
                    $html.toggleClass('is-pushr');
                } else { // open
                    $html.toggleClass('is-pushr', true);
                }

                if ($html.hasClass('is-pushr')) { // open
                    base.$active.show();
                    _timer = setTimeout(function() {
                        $html.toggleClass(_classActive, true);
                    }, 10);
                } else { // close
                    $html.toggleClass(_classActive, false);
                    _timer = setTimeout(function() {
                        base.$active.hide();
                    }, 700);
                }

                while (base.length > i) {
                    if (i !== _idx) {
                        $html.removeClass('is-active-' + _opts.classes[i]);
                    }
                    i++;
                }

                // if active
                if ($html.hasClass(_classActive)) {
                    $html.addClass('is-active-pushr');
                } else {
                    $html.removeClass('is-active-pushr');
                }

                if (_opts.setScroll === true) { // 스크롤 강제
                    if ($html.hasClass(_classActive)) {
                        var _height = $window.height();
                        base.$active.css({
                            'height': _height
                        });
                        base.$wrapper.css({
                            'height': _height
                        });
                    } else {
                        base.$active.css({
                            'height': 'auto'
                        });
                        base.$wrapper.css({
                            'height': 'auto'
                        });
                    }
                }

                // reset
                pushr.reset();

                // refresh jindo Scroll
                // $window.trigger('refresh.jindoScroll');

                // set trigger, 외부 트리거 - 개발 쪽 요청
                $window.trigger('toggle-aside');
            }
        };

        /**
         * modeling
         */
        var pushr = {

            resize: function() {
                console.log('pushr-resize');
            },

            // do reset modal
            init: function() {

                $document.off('.pushr'); // reset

                var _resetElement = function() { // reset element;
                    base.$container = $(_opts.container);
                    base.$wrapper = $(_opts.wrapper);
                    base.$inner = base.$wrapper.wrapInner('<div class="pushr-inner" />').children();
                    base.$container.addClass('pushr-container');
                    base.$wrapper.addClass('pushr-wrap');

                    base.length = _opts.elements.length;

                    var i = 0;

                    while (base.length > i) {
                        var $el = $(_opts.elements[i]);
                        $el.addClass('pushr-aside');
                        $el.addClass(_opts.classes[i]);
                        i++;
                    }

                    // set overlay
                    // base.$wrapper.append('<div id="pushrOverlay" class="md-pushr-overlay" aria-hidden="true" />');

                };

                _resetElement(); // reset element

                // overlay click
                $document.on('click.pushr', '#pushrOverlay', function(e) {
                    e.preventDefault();
                    pushr.close();
                });

                // orientationchange
                $window.on('orientationchange.push', function() {
                    pushr.resize();
                });

                // pushr no animation
                $html.removeClass('pushr-no-anim pushr-anim'); // html class
                $html.addClass('pushr-anim');

                // init jindo Scroll
                // if (typeof $.jindoScroll !== 'object') {
                //     console.log('jindoScroll failure');
                // } else {
                //     $.jindoScroll.init();
                // }

            },
            reset: function(_arg) {
                // set min height
                if (_opts.setMinHeight === true && $html.hasClass('is-active-pushr') && base.$active !== null && base.$active.length) {
                    var _height = Math.max(base.$wrapper.height(), base.$active.height());
                    base.$inner.css('min-height', _height);
                } else {
                    base.$inner.removeAttr('style');
                }
            },
            // do open
            open: function(_arg) {

                util.toggle(_arg[0], false);

            },
            toggle: function(_arg) {

                util.toggle(_arg[0], true);

            },
            close: function(_arg) {

                base.length = _opts.elements.length;

                var i = 0;
                while (base.length > i) {
                    $html.removeClass('is-active-' + _opts.classes[i]);
                    i++;
                }

                $html.removeClass('is-pushr is-active-pushr');

                // reset
                pushr.reset();
            }
        };

        /**
         * public method
         */
        return {
            init: function() {
                pushr.init(arguments);
            },
            reset: function() {
                pushr.reset(arguments);
            },
            toggle: function() {
                pushr.toggle(arguments);
            },
            open: function() {
                pushr.open(arguments);
            },
            close: function() {
                pushr.close(arguments);
            }
        };
    };

    // make jquery object
    $.pushr = new Pushr();

})(jQuery, window, document, navigator.userAgent || navigator.vendor || window.opera);

$(function() {

    var $document = $(document);

    // 임시 차단
    if (!$('.pushr-container').length) return false;

    $.pushr.init(); // 실행

    $document.on('touchend.pushr click.pushr', '#togglePushrNav', function(e) {
        e.preventDefault();
        $.pushr.toggle(0); // 0 은 n번째 aside
    });

    $document.on('touchend.pushr click.pushr', '#closePushrNav', function(e) {
        e.preventDefault();
        $.pushr.toggle(0); // 0 은 n번째 aside
    });

    // 2016-06-14 quick
    // $document.on('click.pushr', '#viewPushrNav', function(e) {
    //     e.preventDefault();
    //     $.pushr.toggle(0); // 0 은 n번째 aside
    //     $document.scrollTop(0);
    // });

    // $document.on('click.pushr', '#togglePushrMymenu', function(e) {
    //     e.preventDefault();
    //     $.pushr.toggle(1);
    // });

    // nav영역 가로값이 100%라 생기는 내부 콘텐츠 움직임 방지
    // window.addEventListener("orientationchange", function() {
    //     $('#nav').width($(document).width());
    // });
});
