(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html');

    var _prevScrollTop = 0; // previous scroll top
    var _timerIsScrolling = null; // timer is scrolling

    /**
     * scroll downed 상태인지 탐지
     * 2016-11-18
     * 스크롤 상태, 방향 탐지 기능 추가
     * BASE.fn class 조작 기능 활용 추가
     */
    BASE.components.isScrollDowned = function() {

        // classname
        var _class = {
            downed: BASE.classNames.scrollDowned,
            up: 'is-scrolling-up',
            down: 'is-scrolling-down'
        };

        // scroll  top 계산
        var _scrollTop = BASE.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

        var _isScrolling = function() { // 스크롤 상태, 방향을 탐지

            clearTimeout(_timerIsScrolling); // timer 해제

            if (_scrollTop < _prevScrollTop) {
                $.removeClass($$html, _class.down);
                $.addClass($$html, _class.up);
            } else if (_scrollTop > _prevScrollTop) {
                $.removeClass($$html, _class.up);
                $.addClass($$html, _class.down);
            }

            _timerIsScrolling = setTimeout(function() { // timer 등록
                $.removeClass($$html, _class.up);
                $.removeClass($$html, _class.down);
            }, 1000);

        };

        _isScrolling();

        _prevScrollTop = _scrollTop; // set previous scroll posiiton

        $.toggleClass($$html, _class.downed, (_scrollTop >= 10));

    };

    /**
     * scroll downed 상태인지 탐지
     * 2016-11-18 코드 최적화
     * data-delay
     * data-once
     */
    BASE.components.inView = function(_el) {

        var $el = _el || BASE.$inview || $(BASE.selector.inview),
            _isMobile = BASE.is.mobile,
            _length = $el.length;

        if (!_length || _isMobile === true) return false;

        var i = 0;

        while (i < _length) {

            var $this = $el.eq(i),
                $$this = $this[0],
                _dataOnce = $this.data('once'),
                _bool = ($.isInview($this) === true) ? true : false;

            if (_dataOnce === true) {
                if (_bool === true) {
                    $.addClass($$this, 'in');
                }
            } else {
                $.toggleClass($$this, 'in', _bool);
            }

            i++;

        };

    };

    /**
     * scroll downed 상태인지 탐지
     * 2016-11-18, 코드 최적화
     */
    BASE.components.parallax = function() {

        var $el = BASE.$parallax || $(BASE.selector.parallax),
            _isMobile = BASE.is.mobile,
            _length = $el.length;

        if (!_length || _isMobile === true) return false;

        var _offsetRatio = 8, // 비율
            i = 0;

        var _scrollTop = BASE.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

        var _core = function(_el) {

            var _pos = _scrollTop - _el.offset().top,
                _posY = Math.abs(_pos) / _offsetRatio;

            _posY = (_pos > 0) ? 0 - _posY : _posY;
            _el[0].style.backgroundPosition = '50% ' + _posY + 'px';

        };

        while (i < _length) {

            var $current = $el.eq(i);

            if ($.isInview($current) === true) {
                _core($current);
            }

            i++;

        }

    };

    /**
     * onScroll 자동 실행을 위한 설정
     */
    BASE.onScroll = {
        isScrollDowned: { // scroll downed 상태인지 탐지
            name: 'isScrollDowned',
            console: 1,
            render: BASE.components.isScrollDowned
        },
        parallax: {
            name: 'parallax',
            console: 1,
            render: BASE.components.parallax
        },
        inView: {
            name: 'inView',
            console: 1,
            render: BASE.components.inView
        }
    };

})(BASEkit);
