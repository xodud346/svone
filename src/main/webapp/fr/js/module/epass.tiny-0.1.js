(function($, window, document, ua) {

    'use strict';

    var Tiny = function() {

        var $window = $(window),
            $document = $(document),
            $gnb = $('#gnb');

        var throttle = (function() { // throttle
            var _timerThrottle;
            return function(_fn, _delay) {
                clearTimeout(_timerThrottle);
                _timerThrottle = setTimeout(_fn, _delay);
            };
        }());

        var util = {

            /**
             * activeSubNav 등 네비게이션 활성 아이템을 화면 중앙으로 위치시키는 기능에 필요한 수치를 계산해 반환해주는
             * 모듈
             */

            getPosition: function(_options) {

                var _setting = { // setting
                    mode: 'position', // 단순 position 모드, overflow scroll 모드
                    activeEl: $('#gnb .in'),
                    innerEl: $('#gnb .inner'),
                    holderEl: $('#gnb .wrap')
                };

                var _opts = $.extend(_setting, _options); // set opts

                var $activeEl = _opts.activeEl,
                    $innerEl = _opts.innerEl,
                    $holderEl = _opts.holderEl;

                var base = {
                    activeWidth: $activeEl.width(),
                    innerWidth: $innerEl.width(),
                    holderWidth: $holderEl.width(),
                    activePos: 0,
                    left: 0, // slider nav left position
                    indicatorLeft: 0, // underscore indicator left position
                    isPrev: true, // is exist prev-item
                    isNext: true
                        // is exist next-item
                };

                var _core = function() { // core

                    base.activePos = (base.activeWidth / 2) + $activeEl.position().left; // get active item
                    // position
                    base.left = (base.holderWidth / 2) - base.activePos; // 기본
                    // 값구하기

                    if (base.left < (base.holderWidth - base.innerWidth)) { // 보정하기,
                        // holder
                        // 너비보다
                        // 작을
                        // 경우
                        base.left = base.holderWidth - base.innerWidth;
                        base.isNext = false; // 다음 아이템 없음
                    }

                    if (base.left > 0) { // 보정하기, 가려지는 이전 아이템이 없을 경우
                        base.left = 0;
                        base.isPrev = false; // 이전 아이템 없음
                    }

                    base.indicatorLeft = base.activePos - (base.activeWidth / 2); // // indicator 위치 구하기,
                    // scroll mode 일때

                    if (_opts.mode == 'position') { // position mode 일때 = +
                        // base.left;
                        base.indicatorLeft = base.indicatorLeft + base.left;
                    }

                    if (_opts.mode == 'scroll') { // scroll 모드일때 음수를 양수로 반환
                        base.left = 0 - base.left;
                    }

                };

                var _setStyle = function() { // 기본 스타일 설정하기
                    if ($holderEl.hasClass('tiny-nav') === true)
                        return false;

                    $holderEl.toggleClass('tiny-nav', true);
                    $holderEl.css('position', 'relative');
                    $innerEl.css('position', 'absolute');
                    $holderEl.toggleClass('tiny-nav-scroll-mode',
                        (_opts.mode == 'scroll'));
                };

                _setStyle();
                _core();

                return base;
            }

        };

        /**
         * 네비게이션 활성 아이템을 화면 중앙으로 위치시킴 util.getPosition 의존
         * 
         * _startIdx 는 초기값 <div class="wrap"> <div class="inner">
         * <ul class="tab">
         * <li><a href="javascript:;"><span>홈</span></a></li>
         * <li><a href="javascript:;"><span>웨딩홀</span></a></li>
         * <li><a href="javascript:;"><span>웨딩상품</span></a></li>
         * <li><a href="javascript:;"><span>혼수상품</span></a></li>
         * <li><a href="javascript:;"><span>기타상품</span></a></li>
         * <li><a href="javascript:;"><span>허니문 여행</span></a></li>
         * <li><a href="javascript:;"><span>홈</span></a></li>
         * <li><a href="javascript:;"><span>웨딩홀</span></a></li>
         * <li><a href="javascript:;"><span>웨딩상품</span></a></li>
         * <li><a href="javascript:;"><span>혼수상품</span></a></li>
         * </ul>
         * </div> <span class="underbar"></span> </div> $(function() {
         * $.tiny.activeNav($.params.nav[0]); // epass.tiny.js, 네비게이션 활성 아이템을 화면
         * 중앙으로 위치시킴 });
         */

        var activeNav = function(_startIdx) {

            var _setting = { // setting
                mode: 'scroll', // position 모드, scroll 모드
                itemsEl: $('#gnb li'),
                activeEl: $('#gnb li').eq(0),
                innerEl: $('#gnb .inner'),
                holderEl: $('#gnb .wrap'),
                // 이하 local setting
                indicatorEl: $('#gnb .underbar'), // underbar indicator
                navEl: $('#gnb .tiny-nav-util'), // prev, next nav el
                duration: 180
                    // animate duration
            };

            var $items = _setting.itemsEl;

            // 이동 또는 스크롤하는 객체 선정, position mode or scroll mode
            var $target = (_setting.mode == 'position') ? _setting.innerEl : _setting.holderEl;

            var _resetInnerWidth = function() { // set inner width
                _setting.innerEl.removeAttr('style');
                // console.log('remove style attr');
                var i = 0,
                    _length = $items.length,
                    _width = 0;
                while (i < _length) {
                    _width = _width + $items.eq(i).width();
                    i++;
                }
                _setting.innerEl.width(_width);
            };

            var _active = function(_index) {

                // _index 가 없을 경우 현재 활성화 객체
                var _currentActive = $('#gnb li.in').index(),
                    _idx = (_index !== undefined) ? _index : _currentActive;

                _setting.activeEl = $('#gnb li').eq(_idx); // set active

                var _result = util.getPosition(_setting); // get position

                var _core = (function() { // core

                    var _todo = {
                        'left': _result.left
                    };

                    if (_setting.mode == 'scroll') { // scroll mode
                        _todo = {
                            'scrollLeft': _result.left
                        };
                    }

                    $target.stop().animate(_todo, _setting.duration,
                        function() {

                            _setting.indicatorEl.stop().animate({
                                'width': _result.activeWidth,
                                'left': _result.indicatorLeft,
                            }, _setting.duration);

                        });

                    // toggle class, 이전 다음 아이템 표시
                    _setting.navEl.toggleClass('is-prev', _result.isPrev);
                    _setting.navEl.toggleClass('is-next', _result.isNext);
                    $items.eq(_idx).addClass('in').siblings().removeClass('in');

                })(_idx);

            };

            var _setHandler = function() { // set handler

                $window.off('.tiny-nav'); // reset
                $document.off('.tiny-nav');

                $document.on('click.tiny-nav', '#gnb li a', function(e) { // default
                    e.preventDefault();
                    var _idx = $(this).parent().index();
                    _active(_idx);
                });

                $document.on('click.tiny-nav', '.tiny-nav-util a.prev',
                    function(e) { // prev
                        _active(0);
                    });

                $document
                    .on('click.tiny-nav', '.tiny-nav-util a.next',
                        function(e) { // next
                            var _length = _setting.activeEl.parent()
                                .children().length;
                            _active(_length - 1);
                        });

                $window.on('resize.tiny-nav', function() {
                    throttle(function() {
                        _resetInnerWidth();
                        _active();
                    }, 100);
                });

                _active(_startIdx); // render

            };

            _resetInnerWidth();
            _setHandler();
        };

        return {

            // 서브 네비게이션에 활성화된 아이템을 화면 중앙으로 이동시켜주는 모듈
            activeNav: function(_startIdx) {

                // activeNav 차단
                // activeNav(_startIdx);

                if (typeof _startIdx !== 'number' || _startIdx < 0) {
                    return false;
                }

                // activeNav 기능 대체
                $('#gnb li').eq(_startIdx).toggleClass('in', true);


            }
        };

    };

    $.tiny = new Tiny();

})(jQuery, window, document, navigator.userAgent || navigator.vendor || window.opera);
