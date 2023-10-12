(function(BASE) {

    "use strict";

    var $$html = BASE.$$html || document.getElementsByTagName('html')[0],
        $html = BASE.$html || $('html');

    /**
     * html classname 'is-window-loaded '부여 처리
     */
    BASE.components.setLoadedClassName = function() {

        // 전역 변수 호출
        var _classNameOnLoad = BASE.classNames.onLoad, // is-window-loaded
            _delayOnLoad = BASE.delays.onLoad; // 30

        var _timerSetClassName = setTimeout(function() {
            $.addClass($$html, _classNameOnLoad); // is-window-loaded
        }, _delayOnLoad);

    };

    /**
     * Ghost 객체 생성
     */
    BASE.components.setGhost = function() {

        var $$ghostHeader = document.getElementById('ghostHeader'),
            $$header = document.getElementById('header');

        if ($$ghostHeader === null && $$header !== null) { // ghost header 생성
            $$header.insertAdjacentHTML('afterend', '<div id="ghostHeader" aria-hidden="true"></div>');
        }

    };

    /**
     * onLoad 자동 실행을 위한 설정
     */
    BASE.onLoad = {
        setLoadedClassName: { // html classname 'is-window-loaded '부여 처리
            name: 'setLoadedClassName',
            render: BASE.components.setLoadedClassName
        },
        setGhost: { // Ghost 객체 생성
            name: 'setGhost',
            render: BASE.components.setGhost
        }
    };

})(BASEkit);
