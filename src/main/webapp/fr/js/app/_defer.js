(function(BASE, $) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    // 클릭 이벤트 객체 반환
    var _returnEventTarget = $.returnEventTarget || function(e) {
        var $el = $(e.target),
            _tagName = $el[0].tagName.toLowerCase();
        $el = (_tagName != 'a' && _tagName != 'button') ? $el.closest('a') : $el;
        return $el;
    };

    // displays
    BASE.components.displays = function() {

        // set viewport height unit
        var _setVhUnit = function() {

            var _windowHeight = BASE.height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            var $this = $(this),
                $$this = $this[0],
                _floatHeight = (_windowHeight * 0.01);

            var _setStyle = function(_el, _data) {
                var _result = ($$this.getAttribute('data-' + _data)) ? parseInt(_floatHeight * parseInt($$this.getAttribute('data-' + _data), 10), 10) : null;
                if (typeof _result !== 'number') return false;
                $this.css(_data, _result);
            };

            _setStyle($this, 'height');
            _setStyle($this, 'max-height');

        };

        $('.js-unit-vh').every(_setVhUnit);

        // preload images
        var _preloadImages = (function() {

            var $images = $('img[src*="_off "]'),
                $temp;

            var _array = [];

            var _style = {
                'position': 'absolute',
                'visibility': 'hidden',
                'top': '-1000px',
                'margin-top': '-1px',
                'width': 0,
                'height': 0,
                'z-index': -1
            };

            var _html = '<img class="preload hidden" aria-hidden="true" alt="Temporary Image" />';

            $images.each(function() {
                var $this = $(this);
                var _src = $this.attr('src'),
                    _filename = common.getFileName(_src);
                if ($.inArray(_filename, _array) < 0) { // 중복 방지
                    $temp = $(_html);
                    $temp.attr('src', _src.replace('_off', '_on')).css(_style).appendTo($body);
                    _array.push(_filename);
                }
            });

        })();

    };

    // toggleElements 모음
    BASE.components.toggleElements = function() {

        // display show
        $document.on('click', '.js-toggle-class', function(e) {

            e.preventDefault();

            var $this = _returnEventTarget(e);
            $this.toggleClass('active');

        });

        // display show
        $document.on('click', '.js-show', function(e) {

            e.preventDefault();

            var $this = _returnEventTarget(e),
                $target = $($this.attr('href'));

            if ($target.length) {
                $target.addClass('in');
                $this.addClass('active');
            } else {
                console.log('there is no target');
            }

        });

        // display hide
        $document.on('click', '.js-hide', function(e) {

            e.preventDefault();

            var $this = _returnEventTarget(e),
                $target = $($this.attr('href'));
                console.log($target);

            if ($target.length) {
                $target.removeClass('in');
                $this.removeClass('active');
            } else {
                console.log('there is no target');
            }

        });

        // 토글
        $document.on('click', '.js-toggle', function(e) {

            e.preventDefault();

            var $this = _returnEventTarget(e),
                $target = $($this.attr('href'));

            if ($target.length) {
                $target.toggleClass('in');
                $this.toggleClass('active');
            } else {
                console.log('there is no target');
            }

        });

        // dropdown
        $document.on('click', '.js-dropdown', function(e) {
            
            e.preventDefault();

            var $this = $(e.target),
                _target = $this.parent(),
                _semantic = $this.find('em');

            $this = ($this[0].tagName.toLowerCase() !== 'a') ? $this.closest('a') : $this;

            if (_target.parent().hasClass('in')) {
                _target.removeClass('active');
                _target.parent().removeClass('in');
                if(_semantic.text() === '닫기') {
                    _semantic.text('열기');    
                } 
            } else {
                _target.parent().addClass('in');
                _target.addClass('active');
                if(_semantic.text() === '열기') {
                    _semantic.text('닫기');
                }
            }
            
        });

        // 팝업 열기
        $document.on('click', '.js-popup', function(e) {

            e.preventDefault();

            var $this = $(this);

            if ($this.data('isClicked') === true && $this.data('size') === undefined) return false;

            $this.data('isClicked', true);

            var _timerPopup = null;
            var _href = ($this.attr('href') !== undefined) ? $this.attr('href') : 'http://google.com';
            var _scroll = ($this.data('scroll') === true) ? 'yes' : 'no';
            var _size = $this.data('size').split('x'),
                _width = _size[0],
                _height = _size[1];

            var _openPopup = function(_href, _width, _height, _scroll) {
                if (!_scroll) _scroll = 'no';
                var _left = parseInt((screen.width - _width) / 2, 10),
                    _top = parseInt((screen.height - _height) / 2, 10) - 100;
                var _name = 'popup' + _left;
                var modalWin = window.open(_href, _name, 'top=' + _top + ', left=' + _left + ', width=' + _width + ', height=' + _height + ', scrollbars=' + _scroll + ', toolbar=no, menubar=no, location=no, resizable=false, status=yes');
                modalWin.focus();
            };

            _openPopup(_href, _width, _height, _scroll);

            _timerPopup = setTimeout(function() {
                $this.removeData('isClicked');
            }, 1000);

        });
    
    };

    // formElements
    BASE.components.formElements = function() {

        $.fn.spinnr = function() {

            this.each(function() {
                var $this = $(this),
                    $spinnr = $('<span class="spinnr"></span>'),
                    $plus = $('<a href="#!" class="plus"><span class="icon amount-plus"><em>증가</em></span></a>'),
                    $minus = $('<a href="#!" class="minus"><span class="icon amount-minus"><em>감소</em></span></a>');

                var _max = $this.attr('max'),
                    _min = $this.attr('min'),
                    _val = null;

                // $this.wrap($spinnr).after($minus).after($plus);

                $this.before($minus).after($plus);

                var core = function(_todo) {
                    _val = parseInt($this.val(), 10);
                    _val = (_todo == 'plus') ? _val + 1 : _val;
                    _val = (_todo == 'minus') ? _val - 1 : _val;
                    // _val = (_val < _min) ? _min : _val;
                    if (_val > _max) {
                        alert('최대 수량은 ' + _max + ' 입니다.');
                        _val = _max;
                    } else if (_val < _min) {
                        alert('최소 수량은 ' + _min + ' 입니다.');
                        _val = _min;
                    }
                    $this.val(_val);
                };
                core();

                $this.on('focusout', function(e) {
                    core();
                });

                $plus.on('click', function(e) {
                    e.preventDefault();
                    core('plus');
                });

                $minus.on('click', function(e) {
                    e.preventDefault();
                    core('minus');
                });

            });

        };

        $('.js-number').spinnr(); // 수량 스피너

        $.fn.jsCheckAll = function() {

            this.each(function() {
                var $this = $(this),
                    $wapper = ($this.data('wrap') !== undefined) ? $($this.data('wrap')) : $this.parents('div'),
                    $others = $wapper.find('input').not($this);

                $others.on('click', function(e) {
                    if ($others.filter(':checked').length == $others.length) {
                        $this.prop('checked', true);
                    } else {
                        $this.prop('checked', false);
                    }
                });

                $this.on('click', function(e) {
                    if ($this.is(':checked')) {
                        $others.prop('checked', true);
                    } else {
                        $others.prop('checked', false);
                    }
                });

            });

        };

        // check all
        $('input.js-checkAll').jsCheckAll();

    };

    // else
    BASE.components.elseDefer = function() {

        // #! 를 가진 a 태그의 속성을 치환
        $('a[href="#!"]').attr('href', 'javascript:;');

    };

    // on resize
    BASE.defer = {
        displays: {
            name: 'displays',
            render: BASE.components.displays
        },
        toggleElements: {
            name: 'toggleElements',
            render: BASE.components.toggleElements
        },
        formElements: {
            name: 'formElements',
            render: BASE.components.formElements
        },
        elseDefer: {
            name: 'elseDefer',
            render: BASE.components.elseDefer
        }
    };

})(BASEkit, window.jQuery);
