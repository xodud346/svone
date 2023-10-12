/**
 * tabSlidr v0.1
 * author: riix@epasscni.com
 */

(function(BASE) {

    'use strict';

    var _indicatorURL = BASE.images.indicator; // set indicator

    //  전시 상품 슬라이더
    $.fn.tabSlidr = function(options) {

        var $window = $(window),
            $document = $(document),
            $html = $('html');

        var setting = {
            json: null, // json 으로 아이템 생성시 사용
            formatter: function($item, _idx) {}, // json 호출후 html 포맷팅
            indicatorURL: _indicatorURL,
            navNext: '.next', // 다음 버튼
            navPrev: '.prev', // 이전 버튼
            tabEl: '.slidr-header', // 탭 셀렉터 
            counter: '.slidr-counter', // 카운터 셀렉터
            pager: '.slidr-pager', // 페이저 셀렉터
            wrapEl: '.itemwrap', // 래퍼 셀렉터
            visibleLength: 5, // 노출 갯수
            slideLength: 0, // 한 번에 이동하는 아이템 갯수, 0일대 visibleLength 값
            tabsTop: 0, // 탭 y축 위치
            delay: 3500, // auto play delay
            duration: 600, // animation duration
            autoPlay: false, // 자동 실행
            tabDelay: 0, // 탭 지연
            tabsSemantic: true, // boolean 값에 따라 탭에 'text' : 'icon' 적용
            imagesLoaded: true, // imagesLoaded 를 활용한 인디케이터 생성
            pauseOnHover: true, // 마우스 오버시 일시 정지
            randomActive: true, // 탭 활성화 랜덤 적용
            tabsPosition: 'left', // 탭 정렬 기준
            sliderHeight: 'auto', // 슬라이더 높이
            onInit: null, // 최초 생성 시 실행되는 콜백
            onComplete: null, // 생성 완료시 실행되는 콜백
            onActiveTab: null, // 탭 활성화시 실행
            onSlideStart: null, // 슬라이드 시작시
            onSlideEnd: function(base) {}, // 슬라이드 완료시
            resizable: false, // 일시정지 대응, 보강 필요
            infinite: true, // 무한 슬라이딩, 보강 필요
            stopWhenShortage: true, // 노출 개수 보다 적을때 멈춤, 보강 필요
            vertical: false // 세로 모드, 보강 필요
        };

        setting.formatter = function($item, _idx) {
            var _html = [
                '<li class="item">',
                '<div class="module">',
                '<img src="' + $item.thumb + '" alt="' + $item.alt + '">',
                '<p>',
                '<a href="' + $item.src + '" class="subject" target="' + $item.target + '"><span>' + $item.subject + '</span></a>',
                '</p>',
                '</div>',
                '</li>'
            ];
            _html = _html.join('');
        };

        var opts = $.extend(setting, options);

        // duration 최소값 제한
        opts.duration = (opts.duration < 5) ? 5 : opts.duration;

        var base = [],
            slide = [],
            page = [];

        var _supportTransforms = (Modernizr !== undefined && Modernizr.csstransforms3d) ? true : false;

        // 2016-07-19 handler 수정
        var _isMobile = $('html').hasClass('mobile');
        var _handerFocusIn = (_isMobile === true) ? 'touchstart.slide' : 'focusin.slide';

        // polyfills windows safari
        if ($html.hasClass('windows') && $html.hasClass('safari')) {
            _supportTransforms = false;
            opts.autoPlay = false;
        }

        var _isVertical = opts.vertical,
            _isInfinite = opts.infinite,
            _visibleLength = opts.visibleLength,
            _slideLength = opts.slideLength,
            _isAuto = opts.autoPlay;

        var _isHover = false,
            _isAnimating = false,
            _delayAutoPlay = 0,
            _timerAutoPlay = null;

        var _getClosetEl = function(_selector, _parent) {
            var _result = $(_selector, _parent);
            _result = (!_result.length) ? $(_selector) : _result;
            return _result;
        };

        base.$el = $(this);
        base.$navPrev = _getClosetEl(opts.navPrev, base.$el);
        base.$navNext = _getClosetEl(opts.navNext, base.$el);
        base.$pager = _getClosetEl(opts.pager, base.$el);
        base.$counter = _getClosetEl(opts.counter, base.$el);

        base.isPause = (_isAuto !== true) ? true : false;

        var _itemHeight = (opts.sliderHeight !== 'auto' && typeof opts.sliderHeight === 'string') ? parseInt(opts.sliderHeight, 10) : base.$el.height();

        _slideLength = (_slideLength === 0 || _slideLength > _visibleLength) ? _visibleLength : _slideLength; // bulletProof


        // preloader
        base.$preloader = $('<div class="slidr-preloader preloader"><img src="' + opts.indicatorURL + '" alt="loading..." /><p>0%</p></div>').css({
            'position': 'absolute',
            'z-index': '1',
            'left': '50%',
            'top': '50%',
            'margin': '-23px 0 0 -16px',
            'text-align': 'center'
        });

        var transitEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        };

        var animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        };

        var NAMESPACE = '.motionend';
        var animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + NAMESPACE;
        var transitEndEventName = transitEndEventNames[Modernizr.prefixed('transition')] + NAMESPACE;

        $.fn.cssCallback = function(callback, pullback) {
            var $this = $(this);
            var _core = function() {
                $this.off(animEndEventName + ' ' + transitEndEventName);
                if (typeof callback !== 'undefined') {
                    callback(this);
                }
            };
            $this.one(animEndEventName + ' ' + transitEndEventName, function() {
                _core();
            });
            if (!Modernizr.csstransitions && typeof pullback !== 'undefined') {
                pullback(this);
            }
        };


        /** common method *******************************************************************************************/

        // call callback function
        // callFunc(opts.onSlideEnd);
        var callFunc = function(_callback, _param, _delay) {
            _callback = (typeof _callback == 'string') ? window[_callback] : _callback;
            if ($.isFunction(_callback)) {
                _param = (_param === null) ? '' : _param;
                _delay = _delay || 50;
                setTimeout(function() {
                    _callback.call(null, base, _param);
                }, _delay);
            } else {
                return false;
            }
        };

        // throttle
        var throttle = (function() {
            var _timerThrottle;
            return function(_fn, _delay) {
                clearTimeout(_timerThrottle);
                _timerThrottle = setTimeout(_fn, _delay);
            };
        }());

        // do pull up own's height half
        var doPullUp = function(_el) {
            if (_el === null || !_el.length) return false;
            $.each(_el, function() {
                var $this = $(this),
                    marginTop = -($this.outerHeight() / 2);
                $this.css({
                    'margin-top': marginTop
                });
            });
        };

        // 동일한 패턴의 엘리먼트 집합 인덱스를 구함
        // alert(indexType($this, '.subject'));
        var indexType = function(_el, _selector) {
            var $this = _el,
                result;
            if (_selector === undefined) {
                if ($this.attr('class') !== undefined) { // class
                    _selector = '.' + $this.attr('class').split(' ')[0];
                } else { // tagname
                    _selector = $this.get(0).tagName.toLowerCase();
                }
            }
            result = $this.parent().children(_selector).index($this);
            return result;
        };

        // set absolute tabs position
        // setAbsoluteTapPosition(_el, opts.tabsPosition); // set tabs position
        var setAbsoluteTapPosition = function(_el, _pos) {
            if (_el === null || !_el.length) return false;
            var i, len;
            var marginTop = _el.eq(0).outerHeight(),
                $tab = null,
                to = 0;
            var returnCenterPos = function(_items, _parent) {
                var $last = _items.last();
                var _result = (_parent.width() / 2);
                _result = _result - ((parseInt($last.css('left'), 10) + $last.outerWidth()) / 2);
                return _result;
            };
            var _do = function(_prop) {

                    $tab = _el.eq(i);

                    $tab.css(_prop, to).addClass('nth-child-' + (i + 1));

                    if (_prop == 'margin-top') {
                        to += $tab.outerHeight();
                    } else {
                        to += $tab.outerWidth();
                    }

                },
                toLeft = function() {
                    for (i = 0, len = _el.length; i < len; i++) {
                        _do('left');
                    }
                    _el.css('margin-top', (0 - marginTop));
                    _el.css('top', 0);
                },
                toCenter = function() {
                    for (i = 0, len = _el.length; i < len; i++) {
                        _do('left');
                    }
                    _el.css('margin-top', (0 - marginTop));
                    _el.css('top', 0);
                    _el.css('margin-left', returnCenterPos(_el, base.$el));
                },
                toRight = function() {
                    for (i = _el.length; i >= 0; i--) {
                        _do('right');
                    }
                    _el.css('margin-top', (0 - marginTop));
                    _el.css('top', 0);
                },
                toVertical = function() {
                    for (i = 0, len = _el.length; i < len; i++) {
                        _do('margin-top');
                    }
                    _el.addClass('vertical');
                };
            var _core = toRight;
            _core = (_pos == 'left') ? toLeft : _core;
            _core = (_pos == 'center') ? toCenter : _core;
            _core = (_pos == 'vertical') ? toVertical : _core;
            _core();
            _el.css('top', opts.tabsTop);

        };

        // set base element class
        var baseClass = function(_remove, _add) {
            var el = base.$el;
            if (_remove !== null) el.removeClass(_remove);
            if (_add !== undefined) el.addClass(_add);
        };

        // set item class
        // setClassSlide($inner, _visibleLength, first, last);
        var setClassSlide = function(_parent, _visibleLength, _first, _last) {
            var items = null;
            if (_first === undefined && _parent.find('in').length) {
                _first = _parent.find('in').index();
            } else {
                _first = _first || 0;
            }
            _last = _last || _visibleLength - 1;
            items = _parent.children();
            items.removeClass('first last in visible');
            items.eq(_first).addClass('first in').eq(_last).addClass('last');
            items.slice(_first, _last + 1).addClass('visible');
        };

        // move children items
        // moveChildItems('prepend', $inner, $items, _slideLength, _itemsLength);
        var moveChildItems = function(_dir, _el, _items, _slideLength, _itemsLength) {
            var i,
                len;
            var prepend = function() { // core
                    _items.eq((_itemsLength - i) - 1).clone().remove().end().prependTo(_el);
                },
                append = function() {
                    _items.eq(i).clone().remove().end().appendTo(_el);
                },
                _core = (_dir == 'prepend') ? prepend : append;
            for (i = 0, len = _slideLength; i < len; i++) {
                _core();
            }
        };

        var cloneChildItems = function(_dir, _el, _items, _length) {
            var i,
                len;
            var prepend = function() { // core
                    _items.eq(-(i + 1)).clone().prependTo(_el);
                },
                append = function() {
                    _items.eq(i).clone().appendTo(_el);
                },
                _core = (_dir == 'prepend') ? prepend : append;
            for (i = 0, len = _length; i < len; i++) {
                _core();
            }
        };

        var removeChildItems = function(_dir, _el, _items, _length) {
            var i,
                len;
            var prepend = function() { // core
                    _items.eq(-(i + 1)).remove();
                },
                append = function() {
                    _items.eq(i).remove();
                },
                _core = (_dir == 'prepend') ? prepend : append;
            for (i = 0, len = _length; i < len; i++) {
                _core();
            }
        };


        // return loop paging
        // page.current = returnLoopPaging(page.current - 1, page.total);
        var returnLoopPaging = function(_num, _max) {
            if (_num <= 0) {
                _num = _max + _num;
            } else if (_num > _max) {
                _num = Math.abs(_max - _num, 10);
            }
            return _num;
        };

        // return random in scope
        var returnRandom = function(_scope) {
            var result = Math.floor(Math.random() * _scope);
            return result;
        };

        var toggleElClass = function(_el, _todo, _class) {
            if (_el === null || _el.length < 1) return false;
            if (_todo == 'remove') {
                _el.removeClass(_class);
            } else {
                _el.addClass(_class);
            }
        };

        /** private method *******************************************************************************************/

        /* jquery transform 선언 리터럴 배열값 반환 */
        var _translate3d = function(_x, _y, _duration) {
            var _result = [];
            _x = (_x === null) ? 0 : _x;
            _y = (_y === null) ? 0 : _y;
            _result = {
                'transition': 'transform ' + _duration + 'ms ease-in-out 0s',
                'transform': 'translate3d(' + _x + 'px, ' + _y + 'px, 0)'
            };
            return _result;
        };

        // do pager (slideActive, slideEnd)
        var _doPager = function(_el, _pageIdx) {
            if (_el === null || !_el.length) return false;
            var $active = _el.find('.in');
            if (_pageIdx === undefined) {
                _pageIdx = ($active.length) ? $active.index() + 1 : 1;
            }
            _el.find('.nth-child-' + _pageIdx).addClass('in').siblings().removeClass('in');
        };

        // do page counter
        var _doPageCounter = function(_el, _current, _total) {
            if (_el === null || !_el.length) return false;
            _el.empty().append('<strong>' + _current + '</strong>/<span>' + _total + '</span>');
        };

        var _toggleNav = function(_el, _idx, _max) { // do toggle navigation
            var classPrevOut = 'prevOut',
                classNextOut = 'nextOut';
            if (_isInfinite === true) return false;
            _el.removeClass(classPrevOut + ' ' + classNextOut);
            if (_idx <= 1) _el.addClass(classPrevOut);
            if (_idx >= _max) _el.addClass(classNextOut);
        };

        // do navigation
        var doNavigation = function(_current, _total) {
            base.current = _current; // set base current

            if (slide.active === true) {
                toggleElClass(base.$counter, 'add', 'in');
                toggleElClass(base.$pager, 'add', 'in');
            } else { // 아이템 갯수가 부족할때
                toggleElClass(base.$counter, 'remove', 'in');
                toggleElClass(base.$pager, 'remove', 'in');
            }


            _doPager(base.$pager, _current); // do pager
            _doPageCounter(base.$counter, _current, _total);
            _toggleNav(base.$el, _current, _total);
        };

        // set current page index
        var setCurrentPageIdx = function() {
            var _activeIdx = (slide.$active !== null && slide.$active.length) ? slide.$active.index() : 0,
                _current = Math.ceil((_activeIdx + _visibleLength) / _visibleLength);
            if (_isInfinite === true) {
                _current = page.current;
                slide.$el.data('page', page.current);
            } else {
                page.current = _current;
            }
            page.activeIdx = _activeIdx;
        };

        /** reset slide *******************************************************************************************/

        // fit slides width when slide on active, on resize
        var fitSlidesWidth = function() {
            var $el = base.$el;
            var itemWidth = Math.floor($el.width() / _visibleLength),
                // innerWidth = (itemWidth * slide.itemsLength);
                innerWidth = (itemWidth * (slide.itemsLength * 2)); // for infinite

            if (_isVertical === true) { // for vertical mode
                innerWidth = (itemWidth * _visibleLength);
                if (_itemHeight !== 'auto') slide.$items.css('height', _itemHeight);
            }

            slide.$inner.width(innerWidth);
            slide.$items.width(itemWidth);
            slide.itemWidth = itemWidth;
        };

        // resize slide
        var resetSlide = function(_el, _when) {

            slide.$el = _el;
            slide.$tab = slide.$el.prev();
            slide.$inner = _el.children();
            slide.$items = slide.$inner.children();
            slide.$active = slide.$inner.find('.in') || slide.$inner.eq(0);

            slide.itemsLength = slide.$items.length; // get items length
            slide.active = true;

            page.current = slide.$el.data('page') || 1; // load page current

            /*
            var addGhostItems = function() {

                var core = function() {
                    if (slide.itemsLength - _visibleLength < _slideLength) {
                        slide.$items.clone().appendTo(slide.$inner);
                        slide.$items = slide.$inner.children();
                        slide.itemsLength = slide.$items.length; // fix items length
                    }
                };
                if (_isInfinite === true) {
                    if (opts.stopWhenShortage === true) { // 아이템 갯수가 부족할때 슬라이더 정지
                        if (slide.itemsLength <= _visibleLength) {
                            slide.active = false;
                        } else {
                            core();
                        }
                    } else {
                        core();
                    }
                }
            };
            addGhostItems();
            */

            if (slide.itemsLength <= _slideLength) {
                slide.active = false;
            }

            if (slide.active === true) {
                toggleElClass(base.$navPrev, 'add', 'in');
                toggleElClass(base.$navNext, 'add', 'in');
            } else { // 아이템 갯수가 부족할때
                toggleElClass(base.$navPrev, 'remove', 'in');
                toggleElClass(base.$navNext, 'remove', 'in');
                _isAuto = false;
            }

            page.total = Math.ceil(slide.itemsLength / _visibleLength);

            slide.$el.css('overflow', 'hidden').fadeIn(opts.tabDelay);
            slide.$tab.addClass('in').siblings(opts.tabEl).removeClass('in');

            fitSlidesWidth();

            // set pager (slideActive, slideEnd)
            var _setPager = (function(_el, _itemsLength) {
                if (_el === null || !_el.length) return false;
                _el.empty();
                var pageNum, pageItemIdx, className;
                var page = Math.ceil(_itemsLength / _visibleLength);

                if (page < 2) return false; // 2016-07-19 페이지가 1이하일때

                for (var i = 0; i < page; i++) {
                    pageNum = (i + 1);
                    pageItemIdx = (pageNum * _visibleLength) - _visibleLength + 1;
                    className = 'nth-child-' + pageNum;

                    $('<a href="#' + pageItemIdx + '" data-page="' + pageNum + '" data-idx="' + pageItemIdx + '" class="' + className + '"><i><em>' + pageNum + '번째 슬라이드</em></i></a>').appendTo(_el);

                }
            })(base.$pager, slide.itemsLength);

            doNavigation(page.current, page.total); // do navigation

        };

        // core do slide
        var _coreDoSlide = function(_todo, _idx, _page, $inner, _itemWidth, _itemsLength) {

            if (_isAnimating === true || $inner === null) return false;

            var first = 0,
                last = 0;

            // on slide start
            var _onSlideStart = function() {
                _isAnimating = true;
                callFunc(opts.onSlideStart);
            };

            // on slide end
            var _onSlideEnd = function(_el) {
                _isAnimating = false;
                slide.$active = slide.$inner.find('.active') || slide.$inner.eq(0);
                setCurrentPageIdx(); // set current page index
                callFunc(opts.onSlideEnd);
            };

            /**
             * 아이템 래퍼 위치를 옮기는 장치 , CSS 대응
             * @param  {[type]} _el       inner
             * @param  {[type]} _start    시작 전 위치
             * @param  {[type]} _anim     애니메이트 대상 위치
             * @param  {[type]} _end      정리할 위치
             * @param  {[type]} _callback 실행할 동작
             */
            var _timerMotion = null; // 중복 실행 방지

            var _moveItems = function(_el, start, anim, end, _callback) {
                var _duration = opts.duration,
                    _start = start, // 시작 전 위
                    _anim = anim, // 애니메이트 대상 위
                    _end = end; // 정리할 위치
                clearTimeout(_timerMotion);
                if (_supportTransforms === true) {
                    _start = _translate3d(_start, 0, 0);
                    _anim = _translate3d(_anim, 0, _duration);
                    _end = _translate3d(_end, 0, 0);
                    if (start !== null) $inner.css(_start); // no infinite 처리
                    _timerMotion = setTimeout(function() {
                        $inner.cssCallback(function() {
                            if (end !== null) $inner.stop().css(_end); // no infinite 처리
                            _callback.call();
                        });
                        $inner.css(_anim);
                    }, 20); // 지연 방지 시간
                } else {
                    $inner.stop(true, true);
                    if (start !== null) $inner.css('margin-left', _start); // no infinite 처리
                    $inner.animate({
                        'margin-left': _anim
                    }, _duration, function() {
                        if (end !== null) $inner.stop().css('margin-left', _end); // no infinite 처리
                        _callback.call();
                    });
                }
            };


            if (_isInfinite === true) { // infinite mode

                var $items = $inner.children(),
                    pageMargin = 0,
                    posInfinite = 0,
                    _prev,
                    _next;

                if (_isVertical === true) { // 세로모드 보강 필요

                    posInfinite = -_itemHeight;

                    // prev
                    _prev = function(_count) {
                        _onSlideStart();
                        moveChildItems('prepend', $inner, $items, (_slideLength * _count), _itemsLength);
                        $inner.stop(true, true).css('margin-top', -(_itemHeight * _count)).animate({
                            'margin-top': 0
                        }, opts.duration, function() {
                            setClassSlide($inner, _visibleLength);
                            _onSlideEnd($inner);
                        });
                    };

                    // next
                    _next = function(_count) {
                        _onSlideStart();
                        $inner.stop(true, true).animate({
                            'margin-top': -(_itemHeight * _count)
                        }, opts.duration, function() {
                            moveChildItems('append', $inner, $items, (_slideLength * _count), _itemsLength);
                            $inner.stop().css('margin-top', 0);
                            setClassSlide($inner, _visibleLength);
                            _onSlideEnd($inner);
                        });
                    };

                } else {

                    posInfinite = 0 - (_slideLength * slide.itemWidth);

                    // prev
                    _prev = function(_count) {

                        _onSlideStart();

                        cloneChildItems('prepend', $inner, $items, (_slideLength * _count));

                        _moveItems($inner, posInfinite * _count, 0, 0, function() {
                            removeChildItems('prepend', $inner, $items, (_slideLength * _count));
                            setClassSlide($inner, _visibleLength);
                            _onSlideEnd($inner);
                        });

                    };


                    // next
                    _next = function(_count) {

                        _onSlideStart();

                        cloneChildItems('append', $inner, $items, (_slideLength * _count));

                        _moveItems($inner, 0, posInfinite * _count, 0, function() {
                            removeChildItems('append', $inner, $items, (_slideLength * _count));
                            setClassSlide($inner, _visibleLength);
                            _onSlideEnd($inner);
                        });

                    };

                }

                // set page margin
                if (_todo == 'prev') {
                    pageMargin = -1;
                } else if (_todo == 'next') {
                    pageMargin = 1;
                } else {
                    pageMargin = _page - page.current;
                }

                // do
                if (pageMargin < 0) {
                    pageMargin = Math.abs(pageMargin);
                    page.current = returnLoopPaging(page.current - pageMargin, page.total);
                    _prev(pageMargin); // 1...
                } else if (pageMargin > 0) {
                    page.current = returnLoopPaging(page.current + pageMargin, page.total);
                    _next(pageMargin); // 1...
                }

                doNavigation(page.current, page.total);

            } else { // no infinite mode

                var posNoInfinte = 0,
                    current = 0,
                    beforeIdx = $inner.find('.active').index(); // get before item index

                var _doGo = function(_idx) {

                    first = (_idx < 0 || _idx === undefined) ? 0 : parseInt(_idx, 10);
                    first = (first >= _itemsLength) ? (_itemsLength) : first;
                    first = (first >= _itemsLength - _visibleLength) ? _itemsLength - _visibleLength : first;
                    last = first + (_visibleLength - 1);

                    posNoInfinte = -(first * _itemWidth);

                    current = (Math.ceil((first + _visibleLength) / _visibleLength));

                    if (_isVertical === true) {

                        posNoInfinte = -((current - 1) * _itemHeight);

                        _onSlideStart();

                        // do animate
                        $inner.stop(true, false).animate({
                            'margin-top': posNoInfinte
                        }, opts.duration, function() {
                            setClassSlide($inner, _visibleLength, first, last);
                            _onSlideEnd($inner);
                        });

                    } else { // horizen

                        _onSlideStart();

                        // do animate

                        // $inner.stop(true, false).animate({
                        //     'margin-left': posNoInfinte
                        // }, opts.duration, function() {
                        //     setClassSlide($inner, _visibleLength, first, last);
                        //     _onSlideEnd($inner);
                        // });

                        _moveItems($inner, null, posNoInfinte, null, function() {
                            setClassSlide($inner, _visibleLength, first, last);
                            _onSlideEnd($inner);
                        });

                    }

                    doNavigation(current, page.total);

                };

                if (_todo == 'prev') {
                    _doGo(beforeIdx - _slideLength);
                } else if (_todo == 'next') {
                    _doGo(beforeIdx + _slideLength);
                } else {
                    _doGo(parseInt(_idx, 10) - 1);
                }

            }
        };

        /** public method *******************************************************************************************/

        // do slide
        var doSlide = function(_todo, _idx, _page) {

            base.slide = _todo; // set base dir

            _coreDoSlide(
                _todo,
                _idx,
                _page,
                slide.$inner,
                slide.itemWidth,
                slide.itemsLength);
        };

        base.prev = function() {
            doSlide('prev');
        };

        base.next = function() {
            doSlide('next');
        };

        // on images loaded
        var onImgsLoaded = function(_el, _callback) {

            var _doCallback = function(_param, _delay) {
                _callback = (typeof _callback == 'string') ? window[_callback] : _callback;
                if ($.isFunction(_callback)) {
                    _param = (_param === null) ? '' : _param;
                    _delay = _delay || 300;
                    setTimeout(function() {
                        _callback.call(null, null, _param);
                    }, _delay);
                }
            };

            // do preloader
            var _preloader = function(_count, _total) {
                var percent;
                if (_count === undefined || _count <= 0) {
                    base.$preloader.hide().prependTo(_el).fadeIn();
                } else {
                    percent = (_count * 100 / _total);
                    base.$preloader.find('p').text(parseInt(percent, 10) + '%');
                }
            };

            // imagesLoaded Core
            var _core = function(imgLoad) {
                var loaded = 0;
                _preloader();
                imgLoad.on('progress', function(instance, image) {
                    loaded++;
                    _preloader(loaded, imgLoad.images.length);
                }).on('done', function() {
                    baseClass(null, 'is-loaded items-' + loaded);
                    _doCallback();
                }).on('fail', function() {
                    baseClass(null, 'is-loaded items-' + loaded);
                    _doCallback();
                });
            };

            if (opts.imagesLoaded && typeof require === "function" && require.defined('imagesLoaded') && typeof(document.querySelectorAll) !== 'undefined') { // requireJs
                requirejs([
                    'imagesLoaded'
                ], function(imagesLoaded) {
                    _core(imagesLoaded(_el));
                });
            } else if (opts.imagesLoaded && typeof imagesLoaded == 'function' && typeof(document.querySelectorAll) !== 'undefined') { // imagesLoaded
                _core(imagesLoaded(_el));
            } else {
                _doCallback();
            }

        };

        // activate slide
        var activateSlide = function(_idx) {

            var $before = slide.$el,
                $after = null,
                start = 0;

            // active slide
            var activeSlide = function(_el) {
                resetSlide(_el);
                setClassSlide(_el.children(), opts.visibleLength);
                if (!_el.hasClass('is-loaded')) {
                    _el.addClass('is-loaded');
                    var _doEach = function(i) {
                        $(this).addClass('nth-child-' + (i + 1));
                    };
                    slide.$inner.children().each(_doEach);
                }
            };

            // deactive slide
            var deactiveSlide = function() {
                if ($before === null) $before = $('<div />');
                $before.find('.in').removeClass('in'); // reset
                $before.hide().children().css('margin', 0); // reset
            };

            start = (opts.randomActive === true) ? returnRandom(base.$wraps.length) : start; // for random actve
            _idx = (_idx === undefined || _idx === null) ? start : _idx;

            $after = base.$wraps.eq(_idx);

            if (base.$pager !== null && base.$pager.length) {
                base.$pager.fadeOut(base.tabDelay, function() {
                    base.$pager.fadeIn(base.tabDelay);
                    deactiveSlide();
                    activeSlide($after);
                    base.tabDelay = opts.tabDelay;
                });
            } else {
                deactiveSlide();
                activeSlide($after);
            }

            callFunc(opts.onActiveTab);

            autoPlay();

        };

        // auto play
        var autoPlay = function() {
            clearTimeout(_timerAutoPlay);
            _delayAutoPlay = (_delayAutoPlay < opts.delay) ? opts.delay + returnRandom(1500) : _delayAutoPlay; // at first
            if (_isAuto === true) {
                _timerAutoPlay = setTimeout(function() {
                    // console.log(_isHover);
                    if (_isHover !== true && base.isPause !== true && _isAnimating !== true) {
                        if (_isInfinite !== true && page.current >= page.total) {
                            doSlide('goto', 1); // or activateSlide(); // random
                        } else {
                            doSlide('next');
                        }
                    }
                    _delayAutoPlay = opts.delay;
                    autoPlay();
                }, _delayAutoPlay);
            }
        };

        // destroy
        var destroy = function() {
            $([
                base.$el,
                base.$tabs,
                base.$wraps,
                base.$navPrev,
                base.$navNext,
                base.$pager,
                base.$counter
            ]).each(function() {
                $(this).off('.slide');
            });
            base = null;
            // console.log('destroyed');
        };

        // set display
        var setDisplay = function() {

            var setElDisplay = (function(_el) {
                if (opts.sliderHeight !== 'auto') _el.css('height', _itemHeight);
            })(base.$el);

            var setWrapDisplay = (function(_el) {
                if (opts.sliderHeight !== 'auto') _el.css('height', _itemHeight);
                _el.hide();
            })(base.$wraps);

            var setNavigation = (function(_el) {
                doPullUp(_el);
            })([
                base.$navPrev,
                base.$navNext
            ]);

            var setTapPosition = (function(_el) {
                setAbsoluteTapPosition(_el, opts.tabsPosition); // set tabs position
            })(base.$tabs);

        };

        // set handler
        var setHandler = function() {

            // external bind
            //  onSlideStart: function(base){
            //      $slideBestB.trigger('slide.slide', [base.slide, base.current]);
            //  }
            base.$el.on('slide.slide', function(e, _todo, _idx) {
                if (_todo == 'prev') {
                    doSlide('prev');
                } else if (_todo == 'next') {
                    doSlide('next');
                } else {
                    doSlide('goto', _idx, _idx);
                }
            });

            base.$tabs.on(_handerFocusIn, function(e) {
                var $this = $(e.target);
                $this = ($this.is(opts.tabEl)) ? $this : $this.closest(opts.tabEl);
                activateSlide(indexType($this), opts.tabEl);
            });

            if (base.$pager !== null && base.$pager.length) {
                base.$pager.on('click.slide', function(e) {
                    e.preventDefault();
                    var $this = $(e.target);
                    $this = ($this.get(0).tagName.toLowerCase() == 'a') ? $this : $this.closest('a');
                    doSlide('goto', $this.data('idx'), $this.data('page'));
                });
            }
            if (base.$navNext !== null && base.$navNext.length) {
                base.$navPrev.off('.slide').on('click.slide', function(e) {
                    e.preventDefault();
                    doSlide('prev');
                });
                base.$navNext.off('.slide').on('click.slide', function(e) {
                    e.preventDefault();
                    doSlide('next');
                });
            }
            base.$el.hover(function() {
                _isHover = (opts.pauseOnHover === true) ? true : false;
            }, function() {
                _isHover = false;
                autoPlay();
            });
        };

        // core
        var _core = function() {

            callFunc(opts.onInit);
            setDisplay(); // set display
            setHandler(); // set base handler
            onImgsLoaded(base.$el, function() {
                activateSlide();
                callFunc(opts.onComplete);
            });

            // on resized
            if (opts.resizable === true && slide.$inner !== null) {
                $(window).on('resize.slide orientationchange', function() {
                    throttle(function() {
                        fitSlidesWidth();
                        if (_isInfinite !== true) {
                            _isAnimating = false; // force slide
                            doSlide('goto', page.activeIdx + 1);
                        }
                    }, 0);
                });
            }

        };

        // add json items
        var addJsonItems = function(_el, _data, _options) {
            var _html = '',
                _className = '',
                _link = '#!',
                $group,
                $item;
            if (!_el.length) return false;

            _className = (opts.tabsSemantic === true) ? 'text' : 'icon'; // 탭에 class 적용

            for (var i = 0, len = _data.group.length; i < len; i++) {
                $group = _data.group[i];

                if (len > 1) { // 탭이 한개 이상일때만 추가
                    _link = ($group.link !== undefined) ? $group.link : _link;
                    _html += '<h4 class="' + opts.tabEl.replace('.', '') + '"><a href="' + _link + '"><span class="' + _className + '"><em>' + $group.subject + '</em></span></a></h4>';
                }

                _html += '<div class="itemwrap"><ul class="tab">';
                for (var j = 0, lenj = $group.items.length; j < lenj; j++) {
                    $item = $group.items[j];
                    _html += opts.formatter.call(null, $group.items[j], j);
                }
                _html += '</ul></div>';
            }
            _el.append($(_html));

        };

        // init
        var init = function() {

            if (opts.json !== null) {
                addJsonItems(base.$el, opts.json);
            }

            base.$tabs = $(opts.tabEl, base.$el);
            base.$wraps = $(opts.wrapEl, base.$el);

            base.isMulti = true;
            base.tabDelay = 0;

            slide.$tab = null;
            slide.$el = null;
            slide.$inner = null;
            slide.$items = null;
            slide.$active = null;
            slide.itemsLength = 0;
            slide.itemWidth = 0;
            slide.itemHeight = 0;

            baseClass(null, 'tabslidr multi no-infinite nav pager counter horizon');

            if (base.$navNext === null || !base.$navNext.length) baseClass('pager', 'no-nav');
            if (base.$pager === null || !base.$pager.length) baseClass('pager', 'no-pager');
            if (base.$counter === null || !base.$counter.length) baseClass('pager', 'no-counter');
            if (_isVertical === true) baseClass('horizon', 'vertical');
            if (_isInfinite === true) baseClass('no-infinite', 'infinite');

            if (base.$tabs.length < 2) {
                baseClass('multi', 'single');
                base.isMulti = false;
            }

            for (var key in base) {
                if (typeof base[key] !== 'object' && key !== 'prev' && key !== 'next') {
                    base.$el.addClass(key + '-' + base[key]);
                }
            }

            _core();

        };

        return this.each(function() {
            init();
        });

    };

})(BASEkit);

// })(jQuery, window, document, navigator.userAgent || navigator.vendor || window.opera);
