/**
 * ============================================================================ *
 * prepros : concatenate javascript files
 * 전처리기에서 js 파일을 병합합니다.
 * 파일병합: // + @prepros-prepend plugins.j
 */

// 플러그인 파일
//@prepros-prepend './plugin/imagesloaded.js'
//@prepros-prepend './plugin/alertify.custom-0.3.11.js'
//@prepros-prepend './plugin/jquery.autocomplete.js'
//@prepros-prepend './plugin/jquery.bxslider.js'

//@prepros-prepend './plugin/ion.rangeSlider.js'

//!@prepros-prepend './plugin/jRespond.js'
//!@prepros-prepend './plugin/jquery.backstretch.js'
//!@prepros-prepend './plugin/bideo.js'
//!@prepros-prepend './plugin/jquery.dotdotdot.js'
//!@prepros-prepend './plugin/jquery.fittext.js'
//!@prepros-prepend './plugin/jquery.bxslider.js'
//!@prepros-prepend './plugin/jquery.rwdImageMaps.js'
//!@prepros-prepend './plugin/modaal.js'
//!@prepros-prepend './plugin/swipe.js'
//!@prepros-prepend './plugin/jquery.menu-aim.js'

$.params = (typeof $.params !== 'undefined') ? $.params : []; // 전역 변수 선언

$.params.plugins = {
    // jRespond: (typeof jRespond !== 'undefined') ? true : false,
    // backstretch: (typeof $.fn.backstretch !== 'undefined') ? true : false,
    // bideo: (typeof Bideo !== 'undefined') ? true : false,
    // dotdotdot: (typeof $.fn.dotdotdot !== 'undefined') ? true : false,
    // fittext: (typeof $.fn.fitText !== 'undefined') ? true : false,
    // bxslider: (typeof $.fn.bxSlider !== 'undefined') ? true : false,
    // rwdImageMaps: (typeof $.fn.rwdImageMaps !== 'undefined') ? true : false,
    // modaal: (typeof $.fn.modaal !== 'undefined') ? true : false,
    // swipe: (typeof $.fn.Swipe !== 'undefined') ? true : false,
    // menuaim: (typeof $.fn.menuAim !== 'undefined') ? true : false,
    // rangeSlider: (typeof $.fn.rangeSlider !== 'undefined') ? true : false,
    alertify: (typeof alertify !== 'undefined') ? true : false,
    imagesLoaded: (typeof imagesLoaded !== 'undefined') ? true : false,
    autocomplete: (typeof $.fn.autocomplete !== 'undefined') ? true : false
};

console.info($.params.plugins);
