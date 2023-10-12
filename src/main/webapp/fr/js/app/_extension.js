/**
 * ============================================================================
 *
 */
(function(BASE, $) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    /**
     * html5 placeholder polyfill
     * @param { } [varname] [description]
     */
    $.fn.placeHolder = function(options) {

        var opts = $.extend({
            formCheck: false
        }, options);

        if (!("placeholder" in document.createElement("input"))) {
            this.each(function() {
                var $this = $(this);
                $this.on({
                    "focus": function() {
                        if ($this.val() == $this.attr('placeholder')) {
                            $this.val('').removeClass('placeholder');
                        }
                    },
                    "blur": function() {
                        if ($this.val() === '' || $this.val() == $this.attr('placeholder')) {
                            $this.addClass('placeholder').val($this.attr('placeholder'));
                        }
                    }
                });
                if (opts.formCheck === true) {
                    $this.parents('form').submit(function() {
                        $(this).find('input[placeholder]').each(function() {
                            var $input = $(this);
                            if ($input.val() == $input.attr('placeholder')) {
                                $input.val('');
                            }
                        });
                    });
                }
            });
            this.blur();
        }

    };

    /* placeholder */
    $('input[placeholder], textarea[placeholder]').placeHolder({
        formCheck: true
    });


    /**
     * json 배열값으로 객체를 생성함, 2016-10-07 추가, 박순길
     * json: json 배열 이름
     * formatter: 생성 포맷 
     * onComplete: 생성 완료시 호출
     */
    $.fn.setJsonElement = function(_options, _gid) {

        return this.each(function() {

            var $target = $(this);
            var $result = null;

            var _opts = $.extend({
                json: null, // json
                formatter: function($item, _idx) { // formmater
                    var _result = [
                        '<li class="item">',
                        '<div class="module">',
                        '<a href="' + $item[_idx].src + '"><img src="' + $item[_idx].thumb + '" alt="' + $item[_idx].alt + '" /></a>',
                        '</div>',
                        '</li>'
                    ];
                    _result = _result.join('');
                    return _result;
                },
                onComplete: null // callback
            }, _options || {});

            if (_opts.json === undefined || _opts.json === null) {

                $result = null;

            } else {
                if (_gid === undefined || _gid === null) _gid = 0;

                var _html = '',
                    _items = _opts.json.group[_gid].items, // json 구조 확인
                    _length = _items.length,
                    i = 0;

                if( _length === 0) _html = '<div class="no-result">내용이 없습니다</div>';

                if (!$target.length || _opts.json === undefined || _items === undefined) return false;

                while (i < _length) {
                    _html += _opts.formatter(_items, i); // opt formatter
                    i++;
                }

                $result = $(_html);

            }

            $target.prepend($result);

            // callback
            if (typeof _opts.onComplete === 'function') {
                _opts.onComplete.call(null, this);
            }

        });

    };

})(BASEkit, window.jQuery);
