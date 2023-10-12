/**
 * ============================================================================
 *
 */
(function(BASE, $) {

    "use strict";

    var $window = BASE.$window || $(window);

    // ajaxloaded callback
    BASE.components.ajaxloaded = function() {

        if (typeof $.initSwing == 'function') {
            $.initSwing();
        }

    };

    BASE.onAjaxLoad = {
        ajaxLoaded: { // scroll downed 상태인지 탐지
            name: 'ajaxLoaded',
            render: BASE.components.ajaxloaded
        }
    }

})(BASEkit, window.jQuery);
