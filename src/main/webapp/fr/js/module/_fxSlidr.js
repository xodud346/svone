/**
 * fxSlidr
 * author: riix@epasscni.com
 * version: 0.5
 */

(function(BASE) {

    'use strict';

    var _indicatorURL = BASE.images.indicator;

    $.fn.fxSlidr = function(_options) {

        /*! vars *************************************************************************/

        var $document = $document || $(document),
            $window = $window || $(window),
            $html = $html || $('html');

        var base = [];

        var setting = {
            animEndEventNames: 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
            css3animation: true,
            autoPlay: true,
            fx: 'random',
            prev: null,
            next: null,
            pager: null,
            pagerWizard: true,
            nav: null,
            hover: true,
            infinite: true,
            reverse: false,
            mouse: true,
            mousewheel: false,
            imagesLoaded: false,
            width: '100%',
            height: '100%',
            fitWidthEl: ['.itemwrap', '.item'],
            fitHeightEl: ['.itemwrap', '.item', '.bg'],
            indicatorURL: _indicatorURL,
            baseZindex: 10,
            delay: 3000,
            duration: 300,
            mode: null,
            onAfter: function() {},
            onResize: function() {},
            onSlide: function() {
                // console.log('done');
            },
            kenBurns: true, // ken burns bg effect
            typho: {
                el: '.typho',
                delay: 0,
                duration: '.7s',
                transformFrom: 'translate3d(0, 0, 0) scale(1, 1) rotate(0deg)',
                transformTo: 'translate3d(-20px, 0, 0) scale(1, 1) rotate(0deg)'
            }
        };

        // set opts
        var options = $.extend(setting, _options);

        // global Var
        base.$el = $(this);

        // detect support css3 transfom
        // isSupport3d(options.css3animation);
        var isSupport3d = function(_is) {
            var _result = false;
            if ($html.hasClass('css3transforms')) return true;
            if (_is === undefined || _is === true) {
                _result = (document.body && document.body.style.perspective !== undefined) ? true : _result;
                var _tempDiv = document.createElement("div"),
                    style = _tempDiv.style,
                    a = ["Webkit", "Moz", "O", "Ms", "ms"],
                    i = a.length;
                _result = (_tempDiv.style.perspective !== undefined) ? true : _result;
                while (--i > -1) {
                    _result = (style[a[i] + "Perspective"] !== undefined) ? true : _result;
                }
            }
            return _result;
        };

        // fix css 3d transform animation
        options.css3animation = (isSupport3d(options.css3animation)) ? options.css3animation : false;

        // polyfills windows safari
        if ($.htmlHasClass('windows') && $.htmlHasClass('safari')) {
            options.css3animation = false;
            options.autoplay = false;
        }

        base.$beforeItem = null;
        base.$afterItem = null;
        base.itemsLength = 0;
        base.beforeIdx = 0;
        base.afterIdx = 0;
        base.isAnimating = false;
        base.fxCountAnim = 0;

        var _supportTouch = ('ontouchstart' in document.documentElement);

        var _CLASS_ITEMWRAP = 'itemwrap',
            _CLASS_ITEM = 'item',
            _CLASS_ANIMATING = 'animating',
            _CLASS_ANIMATED = 'animated',
            _CLASS_NO_ANIMATION = 'no-animation',
            _CLASS_ACTIVE = 'in';

        var _timerAutoPlay = null,
            _timerDuration = null,
            _timerOnResize = null,
            _timerTypho = null,
            _timerHandler = null,
            _throttleResize = 30,
            _isHover = false,
            _isPause = false,
            _isFirst = true,
            _dir;

        var _arrFx = [
            'fxCrossFade',
            'fxSoftScale', // Full Width
            'fxPressAway',
            'fxSideSwing',
            'fxFortuneWheel',
            'fxSwipe',
            'fxPushReveal',
            'fxSnapIn',
            'fxLetMeIn',
            'fxStickIt',
            'fxArchiveMe',
            'fxVGrowth',
            'fxSlideBehind',
            'fxSoftPulse',
            'fxEarthquake',
            'fxCliffDiving',
            'fxSlideForward', // Transparent
            'fxTableDrop',
            'fxSlideIt',
            'fxBottleKick',
            'fxShelf',
            'fxCorner', // Small Component
            'fxVScale',
            'fxFall',
            'fxFPulse',
            'fxRPulse',
            'fxHearbeat',
            'fxCoverflow',
            'fxRotateSoftly',
            'fxDeal',
            'fxFerris',
            'fxShinkansen',
            'fxSnake',
            'fxShuffle',
            'fxPhotoBrowse',
            'fxSlideBehind',
            'fxVacuum',
            'fxHurl'
        ];

        // preloader
        var $preloader = $('<div class="js-fxSlidr-preloader"><img src="' + options.indicatorURL + '" alt="loading..." /><p>0%</p></div>').css({
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'margin': '-23px 0 0 -16px',
            'text-align': 'center'
        });

        /*! common method *************************************************************************/

        // run callback func
        var callFunc = function(_callback, _param, _delay) {
            _callback = (typeof _callback == 'string') ? window[_callback] : _callback;
            if ($.isFunction(_callback)) {
                _param = (_param === null) ? '' : _param;
                _delay = _delay || 50;
                setTimeout(function() {
                    // _callback.call(null, base, _param);
                    _callback.call(null, base, _param);
                }, _delay);
            } else {
                return false;
            }
        };

        /**
         * class, img 활성화
         * $foo.currentActive();
         */
        var currentActive = function(_el, _className, _imgToggle) {
            var $li = _el.parent('li'),
                $siblings,
                $img;
            _className = _className || 'in';
            _el = ($li.length) ? $li : _el;
            $siblings = _el.siblings();
            $img = $('img', _el).eq(0);
            _el.addClass(_className).siblings().removeClass(_className);
            if ($img.length && _imgToggle !== false) {
                imgToggle($img, '_on');
                imgToggle($siblings.find('img'), '_off');
            }
        };

        /**
         * 이미지 토글러
         * imgToggle($img, '_on');
         * imgToggle($img, '_off');
         * imgToggle($img, '_off','_on');
         */
        var imgToggle = $.imgToggle || function(_el, _first, _second) {
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
        };

        /**
         * 배열에서 랜덤 값 추출하기
         * var _color = [1, 2, 3, 4];
         * var _timestamp = '?rand=' + getRandInArray(_color);
         */
        var getRandInArray = function(_arr) {
            var _result = ['blue', 'red', 'green', 'orange', 'pink'];
            _result = (typeof _arr === 'object') ? _arr : _result;
            _result = _result[Math.floor(Math.random() * _result.length)];
            return _result;
        };

        /**
         * 인덱스값 범위 내 반환
         * @param  {[type]} _idx 받아올 인덱스
         * @param  {[type]} _max 제한범위
         */
        var idxProof = function(_idx, _max) {
            _idx = (_idx < 0) ? _max - 1 : _idx;
            _idx = (_idx < _max) ? _idx : 0;
            return _idx;
        };

        /**
         * 페이징 등 객체의 인덱스 순서 추출
         * @param  {[type]} _el 추출할 객체
         */
        var getElemIdx = function(_el) {
            var $el = $(_el),
                $li = $el.parent('li'),
                _result;
            $el = ($li.length) ? $li : $el;
            _result = ($el.length) ? $el.index() : 0;
            return _result;
        };

        /**
         * 페이징등, 인덱싱된 앵커를 찾는 함수
         * @param  {[type]} _parent 탐지 대상
         * @param  {[type]} _idx    생략시 전체 반환
         * var $anchor = getIndexedAnchor($pager);
         * var $currentAnchor = getIndexedAnchor($pager, 0);
         */
        var getIndexedAnchor = function(_parent, _idx) {
            var $parent = _parent,
                $el = $parent.find('a');
            if ($el.eq(0).parent('li').length) {
                $el = $parent.find('li');
                $el = (_idx === undefined) ? $el.find('a') : $el.eq(
                    _idx).find('a');
            } else if (_idx !== undefined) {
                $el = $el.eq(_idx);
            }
            return $el;
        };

        // set z-index
        // setElementZindex([
        //     base.$el,
        //     base.$pager,
        //     base.$prev,
        //     base.$next
        // ], options.baseZindex);
        var setElementZindex = function(_arrEl, _base) {
            $.each(_arrEl, function(i, _el) {
                i = (_base !== undefined) ? i + _base : i;
                _el.css('z-index', i);
            });
        };

        /**
         * do typho element css transition effect
         * @param {el} _el      target el
         * @param {str} _todo    'from' : 'to'
         * @param {arr} _options options
         * doTyphoTransit('from', $item, options.typho); // typho effect
         * doTyphoTransit('to', $item, options.typho); // typho effect
         */
        var doTyphoTransit = function(_el, _todo, _options) {
            var _setting = {
                el: '.typho',
                duration: '.7s',
                transformFrom: 'translate3d(0, 0, 0) scale(1,1) rotate(0deg)',
                transformTo: 'translate3d(-20px, 0, 0) scale(1, 1) rotate(0deg)'
            };
            var _opts = $.extend(_setting, _options);
            var $item = _el.find(_opts.el);
            if (!$item.length) return false;
            if (_todo === 'from') {
                $item.css({
                    'opacity': '1',
                    'transform': _opts.transformFrom
                });
            } else {
                for (var i = 0, _len = $item.length; i < _len; i++) {
                    var $this = $item.eq(i),
                        _index = $this.data('index') || i,
                        _delay = (_index * 2) / 10 + 's';
                    $this.css({
                        'opacity': '0',
                        'transform': _opts.transformTo,
                        'transition-duration': _opts.duration,
                        'transition-delay': _delay
                    });
                }
            }
        };

        /**
         * kenBurns Effect - 보강필요
         */
        var doKenBurns = function(_el, _todo, _isKenBurns) {
            if (_isKenBurns !== true) return false;
            var _opts = {
                'from': 'kenBurnsOut',
                'to': 'kenBurnsIn'
            };
            if (_todo == 'from') {
                _el.removeClass(_opts.to).addClass(_opts.from);
            } else {
                _el.removeClass(_opts.from).addClass(_opts.to);
            }
        };

        /**
         * do paginate
         * doPaginate(base.afterIdx, base.itemsLength, {
         *     infinite: options.infinite,
         *     pager: base.$pager,
         *     prev: base.$prev,
         *     next: base.$next
         * });
         */
        var doPaginate = function(_idx, _max, _options) {
            var _setting = {
                infinite: true,
                pager: null,
                prev: null,
                next: null
            };
            var _opts = $.extend(_setting, _options);
            // pager
            if (_opts.pager.length) {
                currentActive(getIndexedAnchor(_opts.pager, _idx));
            }
            // nav
            if (_opts.prev.length && _opts.next.length) {
                var _showPrev = true,
                    _showNext = true;
                if (_opts.infinite !== true) { // toggle when not infinite
                    _showPrev = (_idx <= 0) ? false : true;
                    _showNext = (_idx >= (_max - 1)) ? false : true;
                    _opts.next.addClass('fade');
                    _opts.prev.addClass('fade');
                }
                if (_showPrev === true) { // display prev
                    _opts.prev.addClass('in');
                } else {
                    _opts.prev.removeClass('in');
                }
                if (_showNext === true) { // display next
                    _opts.next.addClass('in');
                } else {
                    _opts.next.removeClass('in');
                }
            }
        };

        // do non css 3d slide
        var classicSlide = function(_options) {

            var _setting = {
                wrap: null,
                inner: null,
                before: null,
                after: null,
                beforeIdx: -1,
                afterIdx: 0,
                duration: 500,
                callback: null
            };

            var _opts = $.extend(_setting, _options);

            _opts.after.show();

            var _innerWidth = _opts.inner.width();

            var _slideCore = function() {
                _opts.wrap.css('left', 0);
                currentActive(_opts.after);
                _opts.before.hide();
                callFunc(_opts.callback, null, 0);
            };

            if (_opts.beforeIdx >= _opts.afterIdx) {
                _opts.wrap.css('left', -_innerWidth).animate({
                    'left': 0
                }, _opts.duration, _slideCore);
            } else {
                _opts.wrap.animate({
                    'left': -_innerWidth
                }, _opts.duration, _slideCore);
            }
        };

        /*! private method *************************************************************************/

        // on animation end current item
        var _onEndAnimCurrentItem = function(_el, _animEndNames, _func) {
            _el.off().one(_animEndNames, function() {
                base.fxCountAnim++;
                base.isAnimating = (base.fxCountAnim >= 2) ? false : true;
                callFunc(_func);
            });
        };

        // on animation end next item
        var _onEndAnimNextItem = function(_el, _animEndNames, _func) {
            _el.off().one(_animEndNames, function() {
                base.fxCountAnim++;
                base.isAnimating = (base.fxCountAnim >= 2) ? false : true;
                callFunc(_func);
                // console.log(base.fxCountAnim + '/' + base.isAnimating);
            });
        };

        // autoplay
        var _autoPlay = function() {
            clearTimeout(_timerAutoPlay);
            if (options.autoPlay === true) {
                _timerAutoPlay = setTimeout(function() {
                    if (_isHover !== true) {
                        base.navigate('next', true);
                    }
                }, options.delay);
            }
        };

        // set slide size
        var _setSlideSize = function(_parent, _options, _func) {

            var _setting = {
                widthEl: null,
                heightEl: null,
                width: '100%',
                height: '100%'
            };

            var _opts = $.extend(_setting, _options);

            _parent.width(_opts.width);
            _parent.height(_opts.height);

            $.each(_opts.widthEl, function(i, _el) {
                $(_el, _parent).width(_opts.width);
            });
            $.each(_opts.heightEl, function(i, _el) {
                $(_el, _parent).height(_opts.height);
            });

        };

        /*! public method *************************************************************************/

        // on resize
        base.onResize = function() {

            var _doFit = function() {

                _setSlideSize(base.$el, {
                    widthEl: options.fitWidthEl,
                    heightEl: options.fitHeightEl,
                    width: options.width,
                    height: options.height
                });

                if (options.css3animation !== true) { // set animation class

                    var _elWidth = base.$el.width();

                    base.$wrap.css('width', _elWidth * 2);
                    base.$items.css({
                        'overflow': 'hidden',
                        'opacity': 1,
                        'width': _elWidth
                    });
                }
            };

            if (_isFirst === true) {
                _doFit();
                base.$el.delay(50).promise().done(function() {
                    base.$el.show();
                });
            } else {
                _doFit();
            }

            callFunc(options.onResize); // on Resize
        };

        // toggle page
        base.togglePage = function(_idx) {

            if (base.isAnimating === true) return false;

            // set options to vars
            var _animEndNames = options.animEndEventNames,
                _isReverse = options.reverse,
                _isKenBurns = options.kenBurns;

            // reset
            base.isAnimating = true;
            base.fxCountAnim = (_isFirst === true) ? 1 : 0;
            base.$el.removeClass(_CLASS_ANIMATED).addClass(_CLASS_ANIMATING);

            // setup
            base.beforeIdx = base.afterIdx;
            base.afterIdx = idxProof(_idx, base.itemsLength);
            base.$beforeItem = (_isFirst === true) ? $('<div />') : base.$items.eq(base.beforeIdx);
            base.$afterItem = base.$items.eq(base.afterIdx);

            if (options.css3animation === true) { // css3 지원시

                var _fxClassIn = (!_isReverse) ? 'navInNext' : 'navInPrev',
                    _fxClassOut = (!_isReverse) ? 'navOutNext' : 'navOutPrev';

                if (base.beforeIdx >= base.afterIdx) {
                    _fxClassIn = (!_isReverse) ? 'navInPrev' : 'navInNext';
                    _fxClassOut = (!_isReverse) ? 'navOutPrev' : 'navOutNext';
                }

                doTyphoTransit(base.$afterItem, 'to', options.typho); // typho effect
                doKenBurns(base.$afterItem, 'to', options.kenBurns); // ken burns effect

                // force fx
                if (options.typho.delay !== undefined && options.typho
                    .delay > 0) {
                    _timerTypho = setTimeout(function() {
                        clearTimeout(_timerTypho);
                        doTyphoTransit(base.$afterItem,
                            'from', options.typho); // typho effect
                    }, options.typho.delay);
                }

                // on animation end current item
                _onEndAnimCurrentItem(base.$beforeItem,
                    _animEndNames,
                    function() {
                        base.$beforeItem.removeClass(
                            _fxClassOut).removeClass(
                            _CLASS_ACTIVE).off(
                            _animEndNames);
                    });

                // on animation end next item
                _onEndAnimNextItem(base.$afterItem, _animEndNames,
                    function() {

                        base.$afterItem.removeClass(_fxClassIn)
                            .addClass(_CLASS_ACTIVE).off(
                                _animEndNames);

                        (function() {
                            _isFirst = false;

                            base.$el.removeClass(_CLASS_ANIMATING).addClass(_CLASS_ANIMATED);

                            base.$beforeItem.css('pointer-events', 'none');
                            base.$afterItem.css('pointer-events', 'auto');

                            doTyphoTransit(base.$afterItem, 'from', options.typho); // typho effect on end
                            doKenBurns(base.$afterItem, 'from', options.kenBurns); // ken burns effect

                            callFunc(options.onSlide); // on Slide
                        }());

                    });

                base.$beforeItem.addClass(_fxClassOut);
                base.$afterItem.addClass(_fxClassIn);

            } else { // css3 미지원시

                if (_isFirst === true) {

                    _isFirst = false;
                    base.isAnimating = false;
                    base.$afterItem.show();

                } else {

                    classicSlide({
                        wrap: base.$wrap,
                        inner: base.$el,
                        before: base.$beforeItem,
                        after: base.$afterItem,
                        beforeIdx: base.beforeIdx,
                        afterIdx: base.afterIdx,
                        duration: options.duration,
                        callback: function() {
                            base.isAnimating = false;
                            base.$el.removeClass(_CLASS_ANIMATING).addClass(_CLASS_ANIMATED);
                            callFunc(options.onSlide); // on Slide
                        }
                    });

                }
            }

            // paginate
            doPaginate(base.afterIdx, base.itemsLength, {
                infinite: options.infinite,
                pager: base.$pager,
                prev: base.$prev,
                next: base.$next
            });

            // init autoplay
            _autoPlay();

        };

        // navigate
        base.navigate = function(_dir, _isAutoplay) {

            if (base.isAnimating === true) return false;

            var _idx = base.afterIdx;

            if (_dir.match('prev')) {
                _idx--;
            } else {
                _idx++;
            }
            if (options.infinite !== true && _isAutoplay === undefined) {
                if (_idx == base.itemsLength || _idx < 0) {
                    return false;
                }
            }
            base.togglePage(_idx);
        };

        // set handler
        base.setHandler = function() {

            base.$el.hover(function() {
                _isHover = options.hover; // true : false
            }, function() {
                _isHover = false;
                _autoPlay();
            });

            $document.on('click.slide', options.prev, function(e) {
                e.preventDefault();
                clearTimeout(_timerHandler);
                if (base.isAnimating === true) return false;
                _timerHandler = setTimeout(function() {
                    base.navigate('prev');
                }, 100);
            });

            $document.on('click.slide', options.next, function(e) {
                e.preventDefault();
                clearTimeout(_timerHandler);
                if (base.isAnimating === true) return false;
                _timerHandler = setTimeout(function() {
                    base.navigate('next');
                }, 100);
            });

            base.$pager.on('click.slide', 'a', function(e) {
                e.preventDefault();
                var $this = $(this),
                    _idx = getElemIdx($this);
                clearTimeout(_timerHandler);
                if (base.isAnimating === true || $this.parent()
                    .hasClass('in') || $this.hasClass('in') || _idx == base.afterId) return false;
                _timerHandler = setTimeout(function() {
                    base.$items.removeClass(
                        'navOutNext navInNext navOutPrev navInPrev'
                    );
                    base.isAnimating = false;
                    base.togglePage(_idx);
                }, 100);

            });

            if (_supportTouch !== true) { // no touchable device

                if (options.mouse === true) {

                    base.$items.on('drag.slide', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (e.direction == 1) {
                            base.navigate('prev');
                        } else if (e.direction == -1) {
                            base.navigate('next');
                        }
                    }).on('dragstart', function(e) {
                        return false;
                    });

                    base.$items.css({
                        'user-select': 'none',
                        'user-drag': 'none'
                    });
                }

                if (options.mousewheel === true) {
                    base.$el.on('mousewheel.slide', function(e) {
                        e.preventDefault();
                        if (e.deltaY > 0) {
                            base.navigate('prev');
                        } else if (e.deltaY < 0) {
                            base.navigate('next');
                        }
                    });
                }

            } else if (_supportTouch === true) { // touchable device

                base.$items.on('flick.slide', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.orientation == 'horizontal') {
                        if (e.direction == 1) {
                            base.navigate('prev');
                        } else if (e.direction == -1) {
                            base.navigate('next');
                        }
                    }
                }).trigger('flickr.slide');

            }

            $window.on('resize orientationchange', function() {
                clearTimeout(_timerOnResize);
                _timerOnResize = setTimeout(base.onResize, _throttleResize);
            });

        };

        // set model
        base.setModel = function() {

            setElementZindex([ // set z index
                base.$el,
                base.$pager,
                base.$prev,
                base.$next
            ], options.baseZindex);

            if (options.css3animation === true) { // set styles

                options.fx = (options.fx == 'random') ?
                    getRandInArray(_arrFx) : options.fx;
                base.$el.addClass(options.fx);

                base.$items.removeClass(_CLASS_ACTIVE).css('animation-duration', parseInt(options.duration, 10) + 'ms');

                // 추가, 첫 슬라이드 활성화, 보강 필요
                base.$items.eq(0).css('animation-duration', '0ms');

                setTimeout(function() {
                    base.$items.eq(0).css(
                        'animation-duration', parseInt(
                            options.duration, 10) +
                        'ms');
                }, 300);

            } else {

                base.$el.addClass(_CLASS_NO_ANIMATION);
                base.$wrap.css({
                    'position': 'absolute',
                    'max-width': 'none'
                });
                base.$items.css({
                    'position': 'static',
                    'float': 'left'
                });

            }

            // set paginate, 개수가 다르면 자동 생성
            var _setPaginate = (function() {
                if (options.pager && base.itemsLength !==
                    getIndexedAnchor(base.$pager).length) {
                    var $el = getIndexedAnchor(base.$pager, 0),
                        $pagerParent;
                    $el = ($el.parents('li').length) ? $el.parent('li') : $el;
                    $pagerParent = $el.parent().empty();
                    for (var i = 0; i < base.itemsLength; i++) {
                        var $clone = $el.clone();
                        $clone.find('span').text(i + 1);
                        $clone.appendTo($pagerParent);
                    }
                }
                base.$pager.addClass('in');
            }());

        };

        // on after
        base.onAfter = function() {

            base.$el.addClass('is-loaded');
            $preloader.remove();
            base.togglePage(0);

            // on after
            callFunc(options.onAfter);

        };

        // on images load
        base.onImgsLoaded = function(_func) {

            // do preloader
            var _doPreloader = function(_count, _total) {
                var _percent;
                if (_count === undefined || _count <= 0) {
                    $preloader.hide().appendTo(base.$el).fadeIn();
                } else {
                    _percent = (_count * 100 / _total);
                    $preloader.find('p').text(parseInt(_percent, 10) + '%');
                }
            };

            // imagesLoaded Core
            var _imgsLoadCore = function(imgLoad) {

                var _loaded = 0;

                _doPreloader();

                imgLoad.on('progress', function(instance, image) {

                    _loaded++;
                    _doPreloader(_loaded, imgLoad.images.length);

                }).on('done', function() {
                    callFunc(_func);
                }).on('fail', function() {
                    callFunc(_func);
                });
            };

            if (options.imagesLoaded && typeof require === "function" && require.defined('imagesLoaded') && typeof(document.querySelectorAll) !== 'undefined') { // requireJs
                requirejs([
                    'imagesLoaded'
                ], function(imagesLoaded) {
                    _imgsLoadCore(imagesLoaded(base.$el));
                });
            } else if (options.imagesLoaded && typeof imagesLoaded == 'function' && typeof(document.querySelectorAll) !== 'undefined') { // imagesLoaded
                _imgsLoadCore(imagesLoaded(base.$el));
            } else {
                callFunc(_func);
            }

        };

        // core
        var _core = function() {

            base.onResize(); // set scaffold size
            base.setModel(); // set model
            base.setHandler(); // set handler
            base.onImgsLoaded(base.onAfter); // on imgsLoaded

        };

        // init
        return this.each(function() {

            // sel elements
            base.$wrap = $('.' + _CLASS_ITEMWRAP, base.$el);
            // base.$items = $('.' + _CLASS_ITEM, base.$wrap),
            base.$items = base.$wrap.children('.' + _CLASS_ITEM);
            base.$pager = $(options.pager);
            base.$prev = $(options.prev);
            base.$next = $(options.next);

            // set custom data
            base.$el.data('slider', base);

            // set vars.
            base.itemsLength = base.$items.length;

            // do core
            _core();

        });

    };

})(BASEkit);
