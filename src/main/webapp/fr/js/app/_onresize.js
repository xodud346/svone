(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html');

    var _detectOld = null;
    var _detectNew = null;

    /**
     * 반응형 탐지 기능 생성
     */
    BASE.components.responsive = function() {

        var $detectorSm = BASE.$detectorSm || $('#detectorSm');

        var _isOldIE = BASE.is.oldIE;

        if (_isOldIE !== true) {

            if (_detectOld === null) {
                _detectOld = ($.hasClass($$html, 'is-sm') === true) ? 'is-sm' : 'is-lg';
            }

            _detectOld = _detectNew;
            _detectNew = ($detectorSm.is(':visible')) ? 'is-sm' : 'is-lg';

            if (_detectOld !== _detectNew) {
                $.removeClass($$html, 'is-sm');
                $.removeClass($$html, 'is-lg');
                $.addClass($$html, _detectNew);
            }

        } else { // for old ie

            $.removeClass($$html, 'is-sm');
            $.addClass($$html, 'is-lg');

        }

    };

    /**
     * onResize 자동 실행을 위한 설정
     */
    BASE.onResize = {
        responsive: {
            name: 'responsive',
            render: BASE.components.responsive
        }
    };

})(BASEkit);
