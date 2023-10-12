window.console = window.console || {
    log: function() {},
    info: function() {}
};

(function(core) {

    if (!window.jQuery) {
        throw new Error("Requires jQuery");
    }

    if (window && window.jQuery) {
        core(window, window.jQuery, window.document);
    }

})(function(global, $, document) {

    "use strict";

    $.params = (typeof $.params !== 'undefined') ? $.params : [];

    var _ua = (navigator.userAgent || navigator.vendor || window.opera);

    var _BASE = global.BASEkit ? Object.create(global.BASEkit) : undefined;

    var BASE = {

        $$html: document.getElementsByTagName('html')[0],
        $html: $('html'),
        $document: $(document),
        $window: $(window),
        $head: $('head'),
        $body: $('body'),

        setting: {
            console: true, // 콘솔창 출력 여부
            resize: true, // _onresize.js 실행 여부
            sticky: true // _sticky.js 실행 여부
        },

        selector: { // element selector
            inview: '.js-inview',
            inviewImg: 'img.js-inview[data-src]',
            parallax: '.js-parallax'
        },

        classNames: {
            body: (document.body.className) ? document.body.className : 'page-default',
            indicator: 'indicator-load8', // indicator
            domReady: 'is-dom-ready',
            onLoad: 'is-window-loaded',
            scrollDowned: 'is-scrollDowned',
            inView: 'is-inview-activated',
            overlay: 'is-overlay'
        },

        images: {
            blank: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
            indicator: '../img/module/indicator.gif',
            noimage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAMcAQMAAACl5F6MAAAABlBMVEW8vsDn6OnyCdevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbUlEQVR4AezBMQEAAADCoPVP7WsIoAcAAAAAAAAAAAAAAAAAAAAAAIydO0iOk4eCAGyVXNEuukF0FB1NHE1H0RG0ZEHRf5A99WYMk1T+Kvolw+vVjBf+CkMLoRCFWQkuqCquB3QOOQKrCpwBKJ1i6Jxk/EzTubaArgAHQOeyjhu8aMEafUrYolLjLRMfLrpw5cMYadeBnTLcrwN7ZXi+DhyuCi8GG/xy8Gyw3SRe7n7cLzfnajah5z87keFJ//lYf0WAAq+vv+rDX+fir+zpr2Xqr95qrle/ywr9OxX+/nF19fGRmR/yrzCJCudRqNHiNDHhIlquTBgCF2aX3V2BwYT9nUYdNoNojnqjiKJ56q0xiRaok4EsWqQO2EW0RJ3wQbTMvDc6iFaYswEvkx5Hnf8E0Tx1xhcfj3gh1lhOLHVWnx8vLvBq/FAnYpGBhwEElVfjhyETjVjj5bFanATpLrHIcpDkIstpJRdZLmRykaW63CLLMZKLLGeVXGS5jvlFluZKq8k1lnGMXGMZuck1lnsVu8ZydybXWOYj5BrLDIxcY5lz8mrML/JupPIC02osf3tyjeVqY9dYikys8QlTAUIsFovFYrFYLJaIP8hq8D4GG2ywwQYbbLDBBhtssMEGG2ywwQYb3N9+G/ePwQYbbLDBBhtssMEGG5yhA3ugqcARmFXgDKwqcAGgAsu+J1zYy94UXDjIRxosH+crwUm2euHCWX43Fy7YciUYI9N1YIeRavDpsMdIM9jgs+BOh4PBavA3ras6aMFRC06TEpyrLsy/H5emBKOrwvxZpsOsA3ssOk8SQQ9edZ4WI6DzfJwU4Ym/FCE7ofFXfQoJlnUugRsHdl9GTKBzlxRF6vzVW9kngr5eLTB5hT6MUhPgLfdDRhwQCQ79TQXe756tAWcp10XgIuMYF8aWxoedLtz5sB/wzIeDLrzw4QiRqHBSgOvnwLWFCrc7eCLCbnwrXFh2ZMdHKhEOyx3ciHBch8OHE2TtCZ0IZ0wCz1S4jhGTDhc0ecN9IcLja/qEVwIswqwC+/H3zfgMDw7j95cbPBFg+YEKnIaGWyoNzpvmcEujws0rwGX7LnCnwWOgDLhlZsFuaJEP+zFCC7yw4DCAhFtWFhwHl/lwwpeowRMJzlpw+QpXEgwl2O3gxoH9Du4cOOzgmQNHLTjt4OXF4byDVw5csAsHhhLssM/EgD32qQw4aMER+zQtuDPgpAVn7DMz4IJ9FgYMJdgdwSsB9jgKAQ5acDyEJy24ng8nLTgfwu18uBzC/XwYSrA7hmfCeyCHWU6Hw18Gr4R3fY5zOpy04PwEngj/KfYw9WwYSrB7BjfCW4qH6a8Kh2fwTHgF9jDLyXDSgvMzeKW8UX6Uk2Eowe45PL0m7J/D9VQ4aMG/isH/JwYbbLDBBhtssMEGG2ywtz3K/2tvDmQAAAAABvlbn+NbCSQWi8VisVgsFovFYrFYLBYvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHVJjR5bJLd8AAAAASUVORK5CYII='
        },

        delays: {
            domReady: 10,
            onLoad: 30,
            inview: 80 // inview 아이템 간 tranisition 간격 기본값
        },

        scrollTop: 0, // scroll top position

        is: {}, // status
        support: {}, // browser supports
        util: {}, // utilties
        components: {}, // components

        // set event handlers
        onBoot: {},
        onDomReady: {},
        onLoad: {},
        onAjaxLoad: {},
        onResize: {},
        onScroll: {},
        onClick: {},
        defer: {}, // 가장 마지막에 실행

        // global public function
        fn: {}

    };

    BASE.$html.attr('ua', _ua);

    /**
     * BASE.components.loadAjaxContents
     * BASE.ajax = {
     *    "onComplete": null,
     *    "contents": []
     * };
     */
    BASE.ajax = (typeof $.param.ajax !== 'undefined') ? $.param.ajax : {
        "onComplete": function(_param) {
            BASE.$window.trigger('ajaxloaded.base'); // trigger 작동, 삭제 금지, _bind.js 에 사용
        },
        "contents": [{
            selector: '#header', // 삽입할 대상 객체
            src: '../html/_header.html', // 호출 문서
            callback: function() { // 호출 완료시 실행될 콜백
                $.console('ajax header contents created');
            }
        }, {
            selector: '#aside',
            src: '../html/_aside.html',
            callback: function() {
                $.console('ajax aside contents created');
            }
        }, {
            selector: '#footer',
            src: '../html/_footer.html',
            callback: function() {
                $.console('ajax footer contents created');
            }
        }, {
            selector: '#skyscraper',
            src: '../html/_skyscraper.html',
            callback: function() {
                $.console('ajax skyscraper contents created');
            }
        }]
    };

    global.BASEkit = BASE;

    // alert('test: ' + global.BASEkit);

    return BASE;

});
