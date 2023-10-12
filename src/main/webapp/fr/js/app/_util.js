(function(BASE) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);

    /**
     * 썸네일 이미지 place holder
     * @param  {object} _el     대상객체
     * @param  {array} _options 옵션
     * img 를 썸네일 이미지 svg image 로 대체함, attribute 도 복제
     *
     * <img class="js-thumb thumb" style="width: 120px; height: 300px;" />
     * 
     * BASE.util.imgPlaceholder();
     * 
     */
    BASE.util.imgPlaceholder = function(_options) {

        var _noimage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAMcAQMAAACl5F6MAAAABlBMVEW8vsDn6OnyCdevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbUlEQVR4AezBMQEAAADCoPVP7WsIoAcAAAAAAAAAAAAAAAAAAAAAAIydO0iOk4eCAGyVXNEuukF0FB1NHE1H0RG0ZEHRf5A99WYMk1T+Kvolw+vVjBf+CkMLoRCFWQkuqCquB3QOOQKrCpwBKJ1i6Jxk/EzTubaArgAHQOeyjhu8aMEafUrYolLjLRMfLrpw5cMYadeBnTLcrwN7ZXi+DhyuCi8GG/xy8Gyw3SRe7n7cLzfnajah5z87keFJ//lYf0WAAq+vv+rDX+fir+zpr2Xqr95qrle/ywr9OxX+/nF19fGRmR/yrzCJCudRqNHiNDHhIlquTBgCF2aX3V2BwYT9nUYdNoNojnqjiKJ56q0xiRaok4EsWqQO2EW0RJ3wQbTMvDc6iFaYswEvkx5Hnf8E0Tx1xhcfj3gh1lhOLHVWnx8vLvBq/FAnYpGBhwEElVfjhyETjVjj5bFanATpLrHIcpDkIstpJRdZLmRykaW63CLLMZKLLGeVXGS5jvlFluZKq8k1lnGMXGMZuck1lnsVu8ZydybXWOYj5BrLDIxcY5lz8mrML/JupPIC02osf3tyjeVqY9dYikys8QlTAUIsFovFYrFYLJaIP8hq8D4GG2ywwQYbbLDBBhtssMEGG2ywwQYb3N9+G/ePwQYbbLDBBhtssMEGG5yhA3ugqcARmFXgDKwqcAGgAsu+J1zYy94UXDjIRxosH+crwUm2euHCWX43Fy7YciUYI9N1YIeRavDpsMdIM9jgs+BOh4PBavA3ras6aMFRC06TEpyrLsy/H5emBKOrwvxZpsOsA3ssOk8SQQ9edZ4WI6DzfJwU4Ym/FCE7ofFXfQoJlnUugRsHdl9GTKBzlxRF6vzVW9kngr5eLTB5hT6MUhPgLfdDRhwQCQ79TQXe756tAWcp10XgIuMYF8aWxoedLtz5sB/wzIeDLrzw4QiRqHBSgOvnwLWFCrc7eCLCbnwrXFh2ZMdHKhEOyx3ciHBch8OHE2TtCZ0IZ0wCz1S4jhGTDhc0ecN9IcLja/qEVwIswqwC+/H3zfgMDw7j95cbPBFg+YEKnIaGWyoNzpvmcEujws0rwGX7LnCnwWOgDLhlZsFuaJEP+zFCC7yw4DCAhFtWFhwHl/lwwpeowRMJzlpw+QpXEgwl2O3gxoH9Du4cOOzgmQNHLTjt4OXF4byDVw5csAsHhhLssM/EgD32qQw4aMER+zQtuDPgpAVn7DMz4IJ9FgYMJdgdwSsB9jgKAQ5acDyEJy24ng8nLTgfwu18uBzC/XwYSrA7hmfCeyCHWU6Hw18Gr4R3fY5zOpy04PwEngj/KfYw9WwYSrB7BjfCW4qH6a8Kh2fwTHgF9jDLyXDSgvMzeKW8UX6Uk2Eowe45PL0m7J/D9VQ4aMG/isH/JwYbbLDBBhtssMEGG2ywtz3K/2tvDmQAAAAABvlbn+NbCSQWi8VisVgsFovFYrFYLBYvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHVJjR5bJLd8AAAAASUVORK5CYII=';

        var _opts = $.extend({
            image: BASE.images.noimage || _noimage,
            selector: '.js-thumb'
        }, _options);

        var _html = '<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + _opts.image + '" x="0" y="0" width="100%" height="100%"></image></svg>';

        var $thumb = $(_opts.selector);

        var i = 0,
            _length = $thumb.length;

        if (!_length) return false;

        console.log($thumb.length);

        while (i < _length) {

            var $this = $thumb.eq(i),
                $replacement = $(_html),
                _attrs = null;

            if (!$this.length || $this.data('holder-done') === true) return false;

            _attrs = $this.prop('attributes');

            $.each(_attrs, function() {
                $replacement.attr(this.name, this.value);
            });

            $replacement.data('holder-done', true);
            $this.replaceWith($replacement);

            i++;
        }

    };

    BASE.util.str2json = function(str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                    // wrap keys without quote with valid double quote
                    .replace(/([\$\w]+)\s*:/g, function(_, $1) {
                        return '"' + $1 + '":';
                    })
                    // replacing single quote wrapped ones to double quote
                    .replace(/'([^']+)'/g, function(_, $1) {
                        return '"' + $1 + '"';
                    })
                );
            } else {
                return (new Function("", "var json = " + str +
                    "; return JSON.parse(JSON.stringify(json));"
                ))();
            }
        } catch (e) {
            return false;
        }
    };

    BASE.util.options = function(string) {

        if ($.type(string) != 'string') return string;

        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{' + string + '}';
        }

        var start = (string ? string.indexOf("{") : -1),
            options = {};

        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {

            }
        }

        return options;
    };

})(BASEkit);
