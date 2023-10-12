(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    /*****************************************************
     * BASE public functions
     */

    var _isClassList = ("classList" in document.createElement("_"));

    BASE.fn = {

        console: function(_msg, _bool) {
            if (BASE.setting.console !== true) return false;
            console.log('console: ' + _msg);
        },

        on: function(_el, _event, _callback) { // 간단한 이벤트 핸들러
            if (_el.addEventListener) {
                _el.addEventListener(_event, _callback, false);
            } else if (_el.attachEvent) {
                _el.attachEvent("on" + _event, _callback);
            }
        },

        off: function(_el, _event, _callback) {
            if (_el.removeEventListener) {
                _el.removeEventListener(_event, _callback, false);
            } else if (_el.detachEvent) {
                _el.detachEvent("on" + _event, _callback);
            }
        },

        returnEventTarget: function(e) {
            var $el = $(e.target),
                _tagName = $el[0].tagName.toLowerCase();
            $el = (_tagName != 'a' && _tagName != 'button') ? $el.closest('a') : $el;
            return $el;
        },

        hasClass: function(_el, _class) {
            var _bool = false;
            if (_el.classList) {
                _bool = (_el.classList.contains(_class));
            } else {
                _bool = (-1 < _el.className.indexOf(_class));
            }
            return _bool;
        },

        addClass: function(_el, _class) {
            if (_el.classList) {
                _el.classList.add(_class);
            } else {
                // if (this.hasClass(_el, _class) === true) return false;
                if ($.hasClass(_el, _class) === true) return false;
                var classes = _el.className.split(' ');
                classes.push(_class);
                _el.className = classes.join(' ');
            }
        },

        removeClass: function(_el, _class) {
            if (_el.classList) {
                _el.classList.remove(_class);
            } else {
                if (this.hasClass(_el, _class) !== true) return false;
                var classes = _el.className.split(" ");
                classes.splice(classes.indexOf(_class), 1);
                _el.className = classes.join(" ");
            }
        },

        toggleClass: function(_el, _class, _bool) {
            if (_bool === undefined) {
                _bool = (this.hasClass(_el, _class) !== true) ? true : false;
            }
            if (_bool === true) {
                this.addClass(_el, _class);
            } else {
                this.removeClass(_el, _class);
            }
        },

        htmlHasClass: function(_class) {
            return this.hasClass($$html, _class);
        },

        /**
         * 객체 커스텀 데이터로 부터 옵션 구하기
         * var _opts = $.getExtendedCustomData($('#foo'), {
         *     title: 'hello world',
         *     content: 'blah blah'
         * });
         */
        getExtendedCustomData: function(_el, _options) {

            var _result = $.extend({
                title: 'untitled'
            }, _options);

            $.each(_result, function(key, val) { // get custom data
                var _key = (key.replace(/([a-z])([A-Z])/g, '$1-$2')).toLowerCase(), // buttonSubmit 을 button-submit 등으로 camelCase 를 hipen 구조로 변환
                    _data = _el.data(_key);
                if (_data !== undefined) {
                    _result[key] = _data;
                }
            });

            return _result;
        },

        /**
         * 인덱스값 범위 내 반환
         * @param  {[type]} _idx 받아올 인덱스
         * @param  {[type]} _max 제한범위
         */
        getIdxProof: function(_idx, _max) {
            _idx = (_idx < 0) ? _max - 1 : _idx;
            _idx = (_idx < _max) ? _idx : 0;
            return _idx;
        },

        getUid: function(_prefix) {
            var _result = (_prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
            return _result;
        },

        /**
         * 배열에서 랜덤 값 추출하기
         * var _color = [1, 2, 3, 4];
         * var _timestamp = '?rand=' + getUidInArrayy(_color);
         */
        getUidInArray: function(_arr) {
            var _result = ['blue', 'red', 'green', 'orange', 'pink'];
            _result = (typeof _arr === 'object') ? _arr : _result;
            _result = _result[Math.floor(Math.random() * _result.length)];
            return _result;
        },

        callFunc: function(_callback, _el, _param) {
            _callback = (typeof _callback == 'string') ? window[_callback] : _callback;
            if (typeof _callback == 'function') {
                _el = (typeof _el == 'undefined') ? null : _el;
                _param = (_param === null) ? '' : _param;
                setTimeout(function() {
                    try {
                        _callback.call(_el, _param);
                    } catch (e) {
                        console.log('$.callFunc: error' + _callback);
                    }
                }, 1);
            } else {
                console.log('$.callFunc: no function' + _callback);
                return false;
            }
        },

        // 아이템 활성화
        activeCurrent: function(_el, _className, _isImgToggle) {
            var $li = _el.parent('li'),
                $siblings,
                $img;
            _className = _className || 'in';
            _el = ($li.length) ? $li : _el;
            $siblings = _el.siblings();
            $img = $('img', _el).eq(0);

            _el.addClass(_className).siblings().removeClass(_className);

            if ($img.length && _isImgToggle !== false) {
                this.imgToggle($img, '_on');
                this.imgToggle($siblings.find('img'), '_off');
            }
        },

        activeItem: function(_el, _bool) {

        },

        deactiveSiblingItems: function(_el, _bool) {

        },


        /**
         * 이미지 토글러
         * $.imgToggle($img, '_on');
         * $.imgToggle($img, '_off');
         * $.imgToggle($img, '_off','_on');
         */
        imgToggle: function(_el, _first, _second) {
            var _asIs = '_on',
                _toBe = '_off';
            if (_second !== undefined) {
                _asIs = _first;
                _toBe = _second;
            } else {
                if (_first === undefined || _first == '_on') {
                    _asIs = '_off';
                    _toBe = '_on';
                }
            }
            for (var i = 0, len = _el.length; i < len; i++) {
                var $el = _el.eq(i);
                if ($el[0].tagName.toLowerCase() !== 'img') {
                    $el = $el.find('img').eq(0);
                }
                $el.attr('src', $el.attr('src').replace(_asIs, _toBe));
            }
        },

        imgsLoaded: function(_el, _callback, _delay) {

            var _items = _el.filter('img'),
                _len = _items.length,
                _totalLen = 0,
                _timer = null,
                _blankImageSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

            _delay = _delay || 0;

            _items.one('load.imgloaded', function() {
                _totalLen = --_len;
                if (_totalLen <= 0 && this.src !== _blankImageSrc) {
                    _items.off('load.imgloaded');
                    if ($.isFunction(_callback)) {
                        _timer = setTimeout(function() {
                            _callback.call(_items, this);
                        }, _delay);
                    }
                }
            });

            _items.each(function() {
                if (this.complete || this.complete === undefined) {
                    var _src = this.src; // + '?time = ' + new Date().getTime();
                    this.src = _blankImageSrc;
                    this.src = _src;
                }
            });

            return this;
        },

        isInview: function(_el, _opts) {

            var $el = _el;
            var $window = $window || $(window);

            if (!$el.is(':visible')) return false;

            // 이전 버전
            // var _isInview = function(el) {
            //     var $this = $(el),
            //         _elHeight = parseInt($this.outerHeight() * 0.5, 10),
            //         _elTop = $this.offset().top,
            //         _scrollTop = document.documentElement.scrollTop ||
            //         document.body.scrollTop,
            //         _winHeight = $window.height(),
            //         _winInnerHeight = (window.innerHeight && window.innerHeight <
            //             _winHeight) ? window.innerHeight : _winHeight,
            //         _result = (_elTop + _elHeight) > _scrollTop && (
            //             _elHeight + _elTop) < (_scrollTop +
            //             _winInnerHeight);
            //     return _result;
            // };

            var _scrollTop = BASE.scrollTop || document.documentElement.scrollTop || document.body.scrollTop,
                _scrollLeft = BASE.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft;

            var _windowHeight = BASE.height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                _windowWidth = BASE.width || $window.width();

            var _offset = $el.offset(),
                _left = _offset.left,
                _top = _offset.top;

            _opts = $.extend({
                topOffset: 0,
                leftOffset: 0
            }, _opts);

            if (_top + $el.height() >= _scrollTop && _top - _opts.topOffset <= _scrollTop + _windowHeight && _left + $el.width() >= _scrollLeft && _left - _opts.leftOffset <= _scrollLeft + _windowWidth) {
                return true;
            } else {
                return false;
            }

        },

        toggleOverlay: function(_bool) {
            var _class = BASE.classNames.overlay || 'is-overlay';
            this.toggleClass($$html, _class, _bool);
        },

        getCookie: function(_name) {
            if (typeof $.cookie !== 'function') return false;
            var _val = $.cookie(_name);
            console.log('get cookie ' + _name + ' is ' + _val);
            return _val;
        },
        // set cookie
        // common.setCookie('test', true);
        setCookie: function(_name, _val) {
            if (typeof $.cookie !== 'function') return false;
            $.cookie(_name, _val, {
                expires: 7,
                path: '/'
            });
            console.log('set cookie ' + _name + ' is ' + _val);
        },
        // remove cookie
        removeCookie: function(_name) {
            if (typeof $.cookie !== 'function') return false;
            $.cookie(_name, {
                path: '/'
            });
            console.log('remove cookie ' + _name);
        }

    };

    $.fn.base = BASE.fn;

    $.on = BASE.fn.on;
    $.off = BASE.fn.off;
    $.console = BASE.fn.console;
    $.returnEventTarget = BASE.fn.returnEventTarget; // 이벤트 타겟 반환
    $.hasClass = BASE.fn.hasClass;
    $.addClass = BASE.fn.addClass;
    $.removeClass = BASE.fn.removeClass;
    $.toggleClass = BASE.fn.toggleClass;
    $.htmlHasClass = BASE.fn.htmlHasClass;
    $.getExtendedCustomData = BASE.fn.getExtendedCustomData;
    $.callFunc = BASE.fn.callFunc;
    $.imgToggle = BASE.fn.imgToggle;
    $.imgsLoaded = BASE.fn.imgsLoaded;
    $.isInview = BASE.fn.isInview;
    $.toggleOverlay = BASE.fn.toggleOverlay;

    /*****************************************************
     * jQuery global functions
     */

    /**
     * throttle
     * @param  function _func [callback]
     * @param  int _delay [delay]
     */
    $.throttle = (function() {
        var _timerThrottle;
        return function(_fn, _delay) {
            clearTimeout(_timerThrottle);
            _timerThrottle = setTimeout(_fn, _delay);
        };
    }());

    /**
     * extend jQuery animation easing
     */
    var _extendjQAnimationEasing = (function() {

        var easingNames = {};

        $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) {
            easingNames[name] = function(p) {
                return Math.pow(p, i + 2);
            };
        });

        $.each(easingNames, function(name, easeIn) {
            $.easing["easeInOut" + name] = function(p) {
                return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
            };
        });

        $.easing.def = 'easeInOutQuad';

    }());

    /*****************************************************
     * jQuery extentsions
     */

    /**
     * faster Each for
     * $('.foo').every(function(){
     * ...
     * });
     */
    $.fn.every = (function() {
        var $this = $([1]);
        return function(_func) {
            var i = -1,
                len = this.length,
                $el;
            try {
                while (++i < len && ($el = $this[0] = this[i]) && _func.call($this, i, $el) !== false);
            } catch (e) {
                delete $this[0];
                throw e;
            }
            delete $this[0];
            return this;
        };
    }());

    $.fn.eachQ = $.fn.every; // clone to eachQ

})(BASEkit);
