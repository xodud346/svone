/**
 * ============================================================================
 *
 */
(function(BASE, $) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    /**
     * 브라우저 종류 탐지
     */
    BASE.components.detectBrowser = function() {

        var _ua = (navigator.userAgent || navigator.vendor || window.opera);
        var _vendorNames = {
            "android": "mobile android",
            "windows phone": "mobile windows",
            "iphone": "mobile iphone",
            "ipad": "mobile iphone ipad",
            "ipod": "mobile iphone ipod",
            "msie 6": "ie ie6 lt-ie7 lt-ie8 lt-ie9 lt-ie10 oldie",
            "msie 7": "ie ie7 lt-ie8 lt-ie9 lt-ie10 oldie ",
            "msie 8": "ie ie8 lt-ie9 lt-ie10 oldie ",
            "msie 9": "ie ie9 lt-ie10",
            "msie 10": "ie ie10",
            "msie 11": "ie ie11",
            "chrome": "chrome",
            "webkit": "webkit",
            "safari": "safari",
            "firefox": "firefox"
        };
        var _device = ((/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(_ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_ua.substr(0, 4)))) ? 'mobile' : 'classic',
            _browser;

        $.addClass($$html, _device);

        if (_ua.indexOf("Win") != -1) {
            $.addClass($$html, 'windows');
        }

        if ('behavior' in document.documentElement.style && '-ms-user-select' in document.documentElement.style) {
            _ua = 'msie 10';
        } else if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
            _ua = 'msie 11';
        } else if (!!window.chrome) {
            _ua = 'chrome';
        }

        $.each(_vendorNames, function(key, value) {
            if (_ua.toLowerCase().match(key)) {
                _browser = _vendorNames[key];
                $.addClass($$html, _browser);
            }
        });

        // if (_ua.match('shv-e250k') && _ua.match('safari') && !_ua.match('chrome')) {
        //     $html.addClass('no-modern');
        // }
    };

    /**
     * 브라우저가 지원하는 기능 탐지
     * @return {array} Base.is, Base.support
     */
    BASE.components.getBrowserSupports = function() {

        // 개발 화면 (로컬에서 조회) 인지 반환
        var _isLocalView = function() {
            var _location = window.location,
                _result = (_location.origin == 'file://' || _location.hostname.match('192') || _location.port !== '') ? true : false;
            return _result;
        };

        BASE.is = {
            localView: _isLocalView(), // 개발화면 (로컬에서 조회) 인지 확인
            oldIE: $.htmlHasClass('lt-ie9'), // old IE
            lteIE10: !!window.ActiveXObject, // IE, lte 10
            gteIE10: (!!window.navigator.msPointerEnabled), // IE, gte 10
            mobile: Modernizr.touch, // mobile
            touch: Modernizr.touch // mobile
        };

        BASE.support = {
            transitions: Modernizr.csstransitions,
            transforms: Modernizr.csstransforms,
            transforms3d: Modernizr.csstransforms3d,
            animations: Modernizr.cssanimations,
            opacity: Modernizr.opacity,
            rgba: Modernizr.rgba,
            inputTypes: Modernizr.inputtypes,
            placeHolder: Modernizr.placeholder,
            video: Modernizr.video
        };

        // 개발화면 (로컬에서 조회) 인지 확인
        var _class = (BASE.is.localView) ? 'is-local-view' : 'is-server-view';

        $.addClass($$html, _class);

    };

    /**
     * 호환성, 뷰포트 관련 메타태그를 재생성
     */
    BASE.components.replaceMeta = function() {

        var _isMobile = BASE.is.mobile; // 모바일 기기인지 판단

        var $$head = document.getElementsByTagName('head')[0],
            $head = $('head'),
            $equiv = $('meta[http-equiv="X-UA-Compatible"]', $head),
            $viewport = $('meta[name="viewport"]', $head),
            $$viewport = null,
            $$equiv = null;

        if (!$viewport.length) { // 모바일 기기 이며 메타 뷰포트가 없을때
            if (_isMobile !== true) { // 모바일 기기일때만 
                $$viewport = document.createElement('meta');
                $$viewport.setAttribute('name', 'viewport');
                $$viewport.setAttribute('content', 'width=device-width, initial-scale=1, user-scalable=no');
                $$head.insertBefore($$viewport, $$head.firstChild);
            }
        }

        if (!$equiv.length) { // 메타 equiv 가 없을때
            $$equiv = document.createElement('meta');
            $$equiv.setAttribute('http-equiv', 'X-UA-Compatible');
            $$equiv.setAttribute('content', 'IE=edge');
            $$head.insertBefore($$equiv, $$head.firstChild);
        }

    };

    /**
     * onBoot 자동 실행을 위한 설정
     */
    BASE.onBoot = {
        detectBrowser: {
            name: 'detectBrowser',
            render: BASE.components.detectBrowser
        },
        getBrowserSupports: {
            name: 'getBrowserSupports',
            render: BASE.components.getBrowserSupports
        },
        replaceMeta: {
            name: 'replaceMeta',
            render: BASE.components.replaceMeta
        }
    };

})(BASEkit, window.jQuery);
