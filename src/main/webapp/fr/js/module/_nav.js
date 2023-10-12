(function(BASE, $) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);


    BASE.components.navigation = function() {

        var _detactMenu = function () {
            $('li.d1').removeClass('in');
        };


        // set handler
        var _handlerOn = function(e) {

            e.preventDefault();
            e.stopPropagation();

            $.addClass($(this)[0], 'in');

        };

        var _handlerOff = function(e) {

            e.stopPropagation();

            _detactMenu();

        };

        $document.on('mouseenter focusin', 'li.d1', _handlerOn);

        
        $document.on('mouseleave', 'li.d1', _handlerOff); // mouseleave focusout

    };

    // set handler
    BASE.onLoad.navigation = {
        name: 'navigation',
        render: BASE.components.navigation
    };

})(BASEkit, window.jQuery);
