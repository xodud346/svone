/**
 * productSlidr v0.1
 * author: riix@epasscni.com
 */

(function(BASE) {

    'use strict';

    var _indicatorURL = BASE.images.indicator;

    /**
     * 슬라이더 네비게이션 포지션 반환
     * @param  {[type]} _el         활성화된 아이템
     * @param  {[type]} _wrapper    감싸는 요소
     * @param  {[type]} _totalWidth 아이템 묶음 전체 길이
     * var _pos = $.getActiveItemPos(base.$active, base.$wrap, base.itemsWidth);
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
    $.getActiveItemPos = function(_el, _wrapper, _totalWidth) {

        var _return = {
            left: 0, // slider nav left position
            indicatorLeft: 0, // underscore indicator left position
            itemWidth: _el.width() // element width
        };

        _wrapper = (_wrapper !== undefined) ? _wrapper : _el.parent().parent();
        _totalWidth = (_totalWidth !== undefined) ? _totalWidth : el.parent().width();

        var _itemWidthHalf = (_return.itemWidth / 2),
            _itemPosLeft = _el.position().left,
            _parentWidth = _wrapper.width(),
            _parentWidthHalf = (_parentWidth / 2);

        if (_totalWidth < _parentWidth) { // item width 가 wrapper width 보다 작을때

            _return.indicatorLeft = 0;
            _return.left = 0;

        } else if ((_totalWidth - _itemPosLeft - _itemWidthHalf) < _parentWidthHalf) { // 뒷단

            _return.indicatorLeft = _itemPosLeft - _totalWidth + _parentWidth;
            _return.left = 0 - (_totalWidth - _parentWidth);

        } else if (_itemPosLeft <= _parentWidthHalf) { // 앞단

            _return.indicatorLeft = _itemPosLeft;
            _return.left = 0;

        } else { // 기본

            _return.indicatorLeft = _parentWidthHalf - _itemWidthHalf;
            _return.left = _return.indicatorLeft - _itemPosLeft;

        }
        return _return;
    };


    /**
     * 상품상세 이미지 확대보기
     */
    $.fn.productViewr = function(options) {

        var base = [];

        var setting = {
            json: null,
            imgsLoad: true,
            small: '#small',
            middle: '#middle',
            large: '#large',
            largeNav: '#largeNav',
            largeClose: '.viewr-close',
            modal: '#modalLarge',
            classActive: 'active',
            indicatorURL: _indicatorURL,
            smallPadder: 5,
            smallNav: '#smallNav',
            onInit: null,
            onComplete: null,
            onFullsize: null
        };

        base.opts = $.extend(setting, options);

        base.$el = $(this);

        base.$small = null;
        base.$middle = null;
        base.$large = null;
        base.$modal = null; // large wrap modal
        base.$nav = null;
        base.$navItems = null;
        base.$zoomImg = null;
        base.$smallNav = null;

        base.idx = 0;

        // fire images loaded callback func
        var imgsLoaded = function(_el, _callback, _delay) {

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
        };

        // get list tab full width
        var getListTabWidth = function(_el, _padder) {

            var _result = 0,
                $items = _el.children();

            _el = (_el[0].tagName.toLowerCase() == 'li' || _el.hasClass('item')) ? _el.parent() : _el;

            if (!$items.length) return false;

            for (var i = 0, len = $items.length; i < len; i++) {
                _result += $items.eq(i).width() + _padder;
            }

            _result = _result - _padder;

            return _result;
        };

        // set list items
        var setListItems = function(_el, _data, _options) {

            var _html = '',
                _items = _data.items, // set json key
                $el = (typeof _el == 'string') ? $(_el) : _el;

            var _setting = {
                filter: function(_item, _idx) {
                    var _return = '';
                    // _return += '<li class="item ' + 'nth-child-' + (_idx + 1) + '"><a href="javascript:;"><img src="' + _item.small + returnCacheBuster() + '" alt="' + _item.alt + '" /></a></li>';
                    _return += '<li class="item ' + 'nth-child-' + (_idx + 1) + '"><a href="javascript:;"><img src="' + _item.small + '" alt="' + _item.alt + '" /></a></li>';
                    return _return;
                }
            };

            var opts = $.extend(_setting, _options);

            if ($el === undefined || !$el.length || _items === undefined) return false;

            for (var i = 0, len = _items.length; i < len; i++) {
                _html += opts.filter.call(null, _items[i], i);
            }

            $el.html(_html);
        };

        // get element index
        var getElemIdx = function(_el) {

            var $el = $(_el),
                _result = ($el.length) ? $el.index() : 0;

            if ($el.parent('li').length) {
                _result = $el.parent('li').index();
            }

            return _result;
        };

        var returnCacheBuster = function() {
            var _result = '?cacheBuster=' + Math.ceil(Math.random() * 1000);
            return _result;
        };

        // active current item
        var currentActive = function(_el, _className, _imgToggle) {

            var $this = _el,
                $parent = $this.parent('li'),
                $el = ($parent.length) ? $parent : $this;

            _className = _className || base.opts.classActive;

            $el.addClass(base.opts.classActive).siblings().removeClass(base.opts.classActive);
        };

        // return preload large img
        var _returnLargeImg = function() {

            var _result;

            if (base.opts.json !== null) {
                _result = $('<img src="' + base.opts.json.items[base.idx].large + '" alt="' + base.opts.json.items[base.idx].large + '" />');
            } else {
                var src = base.$small.children().eq(base.idx).find('a').attr('href');
                _result = $('<img src="' + src + '" alt="상품 썸네일" />');
            }

            return _result;
        };

        // setting up slide
        var _setSlide = function(_el, _width) {
            _el.css({
                'position': 'absolute',
                'width': _width
            }).parent().css({
                'position': 'relative',
                'overflow': 'hidden'
            });
        };

        // set large
        var _setLarge = function() {

            base.$modal = $(base.opts.modal);
            base.$nav = $(base.opts.largeNav, base.$modal);
            base.$large = $(base.opts.large, base.$modal).hide();

            _setSlide(base.$nav, '500%');

            if (base.opts.json !== null) {
                setListItems(base.$nav, base.opts.json);
            }

            base.$navItems = base.$nav.children();

        };

        // do slide
        var _doSlide = function(_el, _active, _width) {
            var _left = $.getActiveItemPos(_active, _el.parent(), _width).left;
            _el.stop().animate({
                'margin-left': _left
            });
        };

        // active middle
        var _activeMiddle = function() {

            var $smallActive = base.$small.children().eq(base.idx),
                $middleActive = base.$middle.children().eq(base.idx);

            currentActive($smallActive);
            currentActive($middleActive);
            _doSlide(base.$small, $smallActive, base.smallWidth);

            base.$zoomImg = _returnLargeImg();

        };

        // active large
        var _activeLarge = function() {

            var $navActive = base.$navItems.eq(base.idx);

            currentActive($navActive);
            _doSlide(base.$nav, $navActive, base.largeNavWidth);

            base.$zoomImg = _returnLargeImg();

            imgsLoaded(base.$zoomImg, function() {
                base.$large.find('a').off('.viewr');
                base.$large.empty().append(base.$zoomImg);
                base.$zoomImg.wrap('<a href="javascript:;">').parent().on('click.viewr', function(e) { // 닫기 기능 적용
                    e.preventDefault();
                    _deactiveLarge();
                });
                if (base.$large.is(':hidden')) {
                    base.$large.slideDown();
                }
            });

        };

        var _deactiveLarge = function() {
            base.$large.slideUp(function() {
                base.$modal.fadeOut();
                $('a', base.$navItems).off();
            });
        };

        // on active modal
        var _activeModal = function() {

            var _height = Math.max($(window).height(), $(document).height());

            var _core = function() {
                base.$modal.css('min-height', _height).fadeIn(function() {

                    base.largeNavWidth = getListTabWidth(base.$nav);

                    base.$nav.css({
                        'width': base.largeNavWidth
                    });

                    // 닫기
                    $(base.opts.largeClose, base.$modal).off().one('click.viewr', function(e) {
                        e.preventDefault();
                        _deactiveLarge();
                    });

                    // 네비게이션
                    $('a', base.$navItems).on('focusin', function(e) {
                        e.preventDefault();
                        var _idx = getElemIdx($(this));
                        if (_idx !== base.idx) {
                            base.idx = _idx;
                            _activeLarge();
                        }
                    }).eq(0).focus();

                    _activeLarge();

                });
            };

            $('html, body').animate({
                'scrollTop': 0
            }, 100, function() {
                _core();
            });

        };

        // on images loaded
        var _onImagesLoaded = function(_func) {

            var $indicator = $('<div class="indicator"><img src="' + base.opts.indicatorURL + '" alt="loading..." /></div>'),
                $percent = $('<p></p>');

            var _doCore = function() {
                _func.call(null, this); // _core();
            };

            var _setIndicator = function(_todo, _item, _total) {

                var reset = function() {
                        $indicator.insertAfter(base.$middle);
                        $indicator.append($percent);

                        base.$small.css({
                            'position': 'absolute',
                            'overflow': 'hidden',
                            'width': '3000px',
                            'margin-left': 0
                        }).find('li').eq(0).addClass('active');

                        base.$middle.find('li').eq(0).fadeIn(function() {
                            $(this).addClass('active').removeAttr('style');
                        })
                    },
                    count = function(_percentage) {
                        $percent.text(_percentage);
                    },
                    complete = function() {
                        base.$el.addClass('loaded');
                        $indicator.fadeOut(function() {
                            $indicator.remove();
                        });
                    };

                if (_todo === true) {
                    if (_item !== undefined && _total !== undefined) { // count
                        count(parseInt(_item * 100 / _total, 10) + '%');
                    } else { // reset
                        reset();
                    }
                } else { // complete
                    complete();
                }
            };

            var _imagesLoadedCore = function(imgLoad) {

                var _loaded = 0;

                _setIndicator(true);

                imgLoad.on('progress', function(instance, image) {
                    _loaded++;
                    _setIndicator(true, _loaded, imgLoad.images.length);
                }).on('done', function() {
                    setTimeout(function() {
                        _setIndicator(false);
                        _doCore();
                    }, 1300);
                }).on('fail', function() {
                    _setIndicator(false);
                    _doCore();
                });
            };

            if (typeof require === "function" && require.defined('imagesLoaded') && typeof(document.querySelectorAll) !== 'undefined') { // requireJs
                requirejs([
                    'imagesLoaded'
                ], function(imagesLoaded) {
                    _imagesLoadedCore(imagesLoaded(base.$el));
                });
            } else if (typeof imagesLoaded == 'function' && typeof(document.querySelectorAll) !== 'undefined') { // imagesLoaded
                _imagesLoadedCore(imagesLoaded(base.$el));
            } else {
                _setIndicator(true);
                base.$el.find('img').imgsLoaded(function() {
                    _setIndicator(false);
                    _doCore();
                });
            }

        };

        // core
        var _core = function() {

            base.smallWidth = getListTabWidth(base.$small, base.opts.smallPadder);

            _setSlide(base.$small, base.smallWidth);
            _activeMiddle();
            _setLarge();

            $('a', base.$middle).on('click', function(e) {
                e.preventDefault();
                base.idx = (base.$middle.data('idx')) ? base.$middle.data('idx') : 0;
                _activeModal();
            });

            $('a', base.$small).on('click', function(e) {
                e.preventDefault();
                var _idx = getElemIdx($(this));
                if (!$(this).parent().hasClass(base.opts.classActive)) {
                    base.idx = _idx;
                    base.$middle.data('idx', base.idx);
                    _activeMiddle();
                }
            });

            $('a', base.$smallNav).on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                if ($this.hasClass('prev')) {
                    base.idx = (base.idx >= 1) ? base.idx - 1 : base.idx;
                } else {
                    base.idx = (base.idx < base.$small.children().length - 1) ? base.idx + 1 : base.idx;
                }

                base.$smallNav.find('.prev').removeClass('on');
                base.$smallNav.find('.next').removeClass('on');
                if (base.idx > 0) {
                    base.$smallNav.find('.prev').addClass('on');
                }
                if (base.idx < base.$small.children().length - 1) {
                    base.$smallNav.find('.next').addClass('on');
                }
                base.$middle.data('idx', base.idx);
                _activeMiddle();
            }).eq(0).trigger('click');

        };

        var init = function() {
            base.$middle = $(base.opts.middle, base.$el);
            base.$small = $(base.opts.small, base.$el);
            base.$smallNav = $(base.opts.smallNav);

            if (base.opts.json !== null) {
                setListItems(base.$middle, base.opts.json, {
                    filter: function(_item, _idx) {
                        var _return = '';
                        // desc 임시 제거
                        // _return += '<li class="item ' + 'nth-child-' + (_idx + 1) + '"><a href="javascript:;"><img src="' + _item.middle + '" alt="' + _item.alt + '" /><p>' + _item.desc + '</p></a></li>';
                        _return += '<li class="item ' + 'nth-child-' + (_idx + 1) + '"><a href="javascript:;"><img src="' + _item.middle + '" alt="' + _item.alt + '" /></a></li>';
                        return _return;
                    }
                });
                setListItems(base.$small, base.opts.json);
            }

            if (base.opts.imgsLoad === true) {
                _onImagesLoaded(_core);
            } else {
                _core();
            }
        };

        return this.each(function() {
            init();
        });

    };

})(BASEkit);
