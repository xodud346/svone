(function(BASE) {

    "use strict";

    "version: 0.1";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    // set tooltip constructor
    var OffCanvas = function() {

        var $document = $(document), // dom cache
            $window = $(window),
            $html = $('html'),
            $container = null,
            $target = null,
            $closer = null;

        // base for return object
        var base = {
            $container: null,
            $el: null,
            $title: null,
            $close: null,
            $cancel: null,
            $submit: null
        };

        // _setting
        var _setting = {
            name: 'offcanvas',
            console: true, // active console
            wrapStart: '<div class="offcanvas-holder"><div class="offcanvas-inner"><h3 class="title">Filter</h3><div class="offcanvas-content">',
            wrapEnd: '</div></div>',
            containerEl: '#container',
            el: null,
            titleEl: 'h3.title',
            buttonClose: '.close',
            buttonCancel: '.cancel',
            buttonSubmit: '.submit',
            title: null,
            size: null,
            html: null,
            scrollTop: true,
            overlay: true,
            indicator: true,
            onOnit: function(base) {},
            onCancel: function(base) {},
            onSubmit: function(base) {}
        };

        var params,
            _opts;

        $container = $(_setting.container);

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
            getParam: function(_params) {

                var $anchor = null; // reset

                if (_params[0] !== null && typeof _params[0] == 'object') { // _params = event
                    $anchor = $(_params[0].target);
                    $anchor = common.returnAnchor($anchor);
                } else {
                    common.log('_params[0] is must be event object');
                }

                params = _params[1];
                _opts = $.extend({}, _setting, params);

            }
        };

        var model = {
            hander: function(_bool) {

                if (_bool === true) {
                    if (base.$close.length) {
                        base.$close.on('click.offcanvas', function() {
                            model.hide();
                        });
                    }
                    if (base.$cancel.length) {
                        base.$cancel.on('click.offcanvas', function() {
                            common.callFunc(_opts.onCancel);
                            model.hide();
                        });
                    }
                    if (base.$submit.length) {
                        base.$submit.on('click.offcanvas', function() {
                            common.callFunc(_opts.onSubmit);
                            model.hide();
                        });
                    }
                } else {
                    if (base.$close !== null) {
                        base.$close.off('.offcanvas');
                    }
                    if (base.$cancel.length) {
                        base.$cancel.off('.offcanvas');
                    }
                    if (base.$submit.length) {
                        base.$submit.off('.offcanvas');
                    }
                }

            },
            show: function() {

                $html.toggleClass('is-offcanvas', true);

                $.toggleOverlay(true);

                base.$el.toggleClass('in', true);

                model.hander(true);

                if (_opts.scrollTop === true) { // move to scroll top
                    $('html, body').animate({
                        'scrollTop': 0
                    }, 0);
                }

            },
            hide: function() {

                $html.toggleClass('is-offcanvas', false);

                $.toggleOverlay(false);

                $html.toggleClass('is-indicator', false);

                base.$el.toggleClass('in', false);

                model.hander(false);

            },
            toggle: function() {

                $html.toggleClass('is-offcanvas');

                if ($html.hasClass('is-offcanvas')) {
                    model.show();
                } else {
                    model.hide();
                }

            }
        };

        var build = {
            getHTML: function(_html, _boolWrap) {
                var _result = '',
                    _start = '',
                    _end = '';
                if (_boolWrap === true) {
                    _start = _opts.wrapStart;
                    _end = _opts.wrapEnd;
                }
                _result += _start;
                _result += _html;
                _result += _end;
                return _result;
            },
            getElements: function() {

                var _core = function(_selector) {
                    var $parent = base.$el;
                    var $el = $parent.find(_selector);
                    $el = (!$el.length) ? $(_selector) : $el;
                    return $el;
                }

                base.$el.toggleClass('offcanvas', true);

                // 닫기 버튼 추가
                if (!base.$el.find('a.close').length) {
                    base.$el.append('<a href="javascript:;" class="close"><i class="icon"><em>팝업 닫기</em></i></a>');
                }

                base.$close = _core(_opts.buttonClose);
                base.$title = _core(_opts.titleEl);
                base.$cancel = _core(_opts.buttonCancel);
                base.$submit = _core(_opts.buttonSubmit);

                if (_opts.title !== null) {
                    base.$title.text(_opts.title);
                }

            },
            toggle: function() { // 기본모드

                $.toggleOverlay(false);
                $html.toggleClass('is-indicator', true);

                base.$container = $(_opts.containerEl);
                base.$el = $(_opts.el);

                build.getElements();

                $html.toggleClass('is-indicator', false);

                model.toggle();

            },
            html: function() {

                $.toggleOverlay(true);
                $html.toggleClass('is-indicator', true);

                base.$container = $(_opts.containerEl);
                base.$el = $(_opts.el);

                if (!base.$el.length) {
                    var _id = _opts.el;
                    _id = _id.replace('#', '');
                    _id = _id.replace('.', '');
                    base.$el = $('<div id=' + _id + '></div>');
                    base.$el.insertBefore(base.$container);
                }

                var _html = build.getHTML(_opts.html.join(''), true);
                base.$el.html(_html);

                build.getElements();

                $html.toggleClass('is-indicator', false);

                model.toggle();


            },
            ajax: function() {

                $.toggleOverlay(true);
                $html.toggleClass('is-indicator', true);

                base.$container = $(_opts.containerEl);
                base.$el = $(_opts.el);

                if (!base.$el.length) {
                    var _id = _opts.el;
                    _id = _id.replace('#', '');
                    _id = _id.replace('.', '');
                    base.$el = $('<div id=' + _id + '></div>');
                    base.$el.insertBefore(base.$container);
                }

                var _src = _opts.html;

                $('<div></div>').load(_src, function(_data) {

                    var _html = build.getHTML(_data, true);
                    base.$el.html(_html, true);

                    build.getElements();

                    $html.toggleClass('is-indicator', false);

                    model.toggle();

                });



            }
        };

        var offcanvas = function(_arg, _type) {

            base.$el = null;

            util.getParam(_arg);

            switch (_type) {
                case 'html':
                    build.html();
                    break;
                case 'ajax':
                    build.ajax();
                    break;
                default:
                    build.toggle();
                    break;
            }
        };

        /**
         * public method
         */
        return {
            // close: function() {
            //     model.destroy();
            // },
            toggle: function() {
                offcanvas(arguments, 'toggle');
            },
            html: function() {
                offcanvas(arguments, 'html');
            },
            ajax: function() {
                offcanvas(arguments, 'ajax');
            }
        };
    };

    // make jquery object
    $.offcanvas = new OffCanvas();

    // offcanvas
    BASE.components.offcanvas = function() {

        var returnAnchor = function(_el) { // return anchor element
            var $el = (_el[0].tagName !== undefined && _el[0].tagName.toLowerCase() !== 'a') ? _el.closest('a') : _el;
            return $el;
        };

        // get inline custom data
        var getCustomData = function(e) {

            var _result = {};

            var _defaults = {};

            var $this = $(e.target);

            $this = returnAnchor($this); // return anchor element

            $.each(_defaults, function(key, val) { // get custom data
                var _key = (key.replace(/([a-z])([A-Z])/g, '$1-$2')).toLowerCase(), // buttonSubmit 을 button-submit 등으로 camelCase 를 hipen 구조로 변환
                    _data = $this.data(_key);
                if (_data !== undefined) {
                    _result[key] = _data;
                }
            });

            return _result;

        }

        // set handler
        var _handler = function(e) {

            var $this = returnAnchor($(e.target)), // return anchor element
                _class = $this.attr('class');

            var _preventDefault = function(e) { // prevent default
                e.preventDefault();
                e.stopPropagation();
            };

            if (_class !== undefined) {

                if (_class.match('js-offcanvas')) {
                    _preventDefault(e);
                    $.offcanvas.view(e, getCustomData(e));
                } else if (_class.match('js-offcanvas-html')) {
                    _preventDefault(e);
                    $.offcanvas.html(e, getCustomData(e));
                } else if (_class.match('js-offcanvas-ajax')) {
                    _preventDefault(e);
                    $.offcanvas.ajax(e, getCustomData(e));
                }

            }

        };

        $document.on('click', _handler); // set handler

    };

    // set handler
    BASE.onLoad.offcanvas = {
        name: 'offcanvas',
        render: BASE.components.offcanvas
    };

})(BASEkit || window);
