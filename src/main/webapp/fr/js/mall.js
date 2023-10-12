(function(BASE, $) {

    "use strict";

    var $html = BASE.$html || $('html'),
        $window = BASE.$window || $(window),
        $document = BASE.$document || $(document);


    // ajax load
    // $.params = (typeof $.params !== 'undefined') ? $.params : [];
    BASE.ajax = (typeof $.param.ajax !== 'undefined') ? $.param.ajax : {
        "onComplete": function(_param) {
            console.log('ajax load done');
        },
        "contents": [{
            selector: '#header', // 삽입할 대상 객체
            src: '../html_mall/_header.html', // 호출 문서
        }, {
            selector: '#aside',
            src: '../html_mall/_aside.html'
        }, {
            selector: '#footer',
            src: '../html_mall/_footer.html'
        }, {
            selector: '#skyscraper',
            src: '../html_mall/_skyscraper.html'
        }]
    };

    /*
     * AutoComplete
     */
    BASE.components.autoComplete = function () {

        var $autosearch = $('.autocomplete');

        var nhlTeams = ['Anaheim Ducks', 'Atlanta Thrashers', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton OIlers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New Rork Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Phoenix Coyotes', 'Pittsburgh Penguins', 'Saint Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Washington Capitals'];
        var nbaTeams = ['Atlanta Hawks', 'Boston Celtics', 'Charlotte Bobcats', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'LA Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Jersey Nets', 'New Orleans Hornets', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia Sixers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
        var nhl = $.map(nhlTeams, function (team) { return { value: team, data: { category: 'NHL' }}; });
        var nba = $.map(nbaTeams, function (team) { return { value: team, data: { category: 'NBA' } }; });
        var teams = nhl.concat(nba);

        $autosearch.autocomplete({
            lookup: teams,
            // appendTo: '#search',
            onSearchStart: function () {
               $.addClass($('#search')[0], 'in');
            },
            onSelect: function(suggestion) {
                $.removeClass($('#search')[0], 'in');
            }
        });

        var _handlerOff = function() {
            $.removeClass($('#search')[0], 'in');
        }


        // handler
        $document.on('focusout', '.autocomplete', _handlerOff);

    };

    // set Handler
    BASE.onLoad.autoComplete = {
        name: 'autoComplete',
        render: BASE.components.autoComplete
    };

    BASE.components.smallAd = function() {

        var $smallAd = $('#smallAd');

        $smallAd.setJsonElement({
            json: $.smallAd,
            formatter: function($item, _idx) { // formmater
                var _result = [
                    '<div class="item">',
                    '<div class="module">',
                    '<a href="' + $item[_idx].src + '">',
                    '<span class="thumb"><img src="' + $item[_idx].thumb + '" alt="' + $item[_idx].alt + '" /></span>',
                    '<span class="name">' + $item[_idx].alt + '</span>',
                    '<span class="price-after">',
                    '<em>판매가</em>',
                    '<strong>' + $item[_idx].price + '</strong>원',
                    '</span>',
                    '</a>',
                    '</div>',
                    '</div>'
                ];
                _result = _result.join('');
                return _result;
            }, onComplete: function() {

                $smallAd.bxSlider({
                    controls: true
                });
            }
        });
    }

    BASE.onLoad.smallAd = {
        name: 'smallAd',
        render: BASE.components.smallAd
    };

    // skyscraper toggle
    BASE.components.skyscraperToggle = function() {

        var $skyscraper = $('#skyscraper'),
            $view = $('#skyView');

        var $item = $skyscraper.find('.item');
        var $tab = $skyscraper.find('.tab-list li');
        var $core = $skyscraper.find('.core');

        var skyscraperView = function(i) {

            $view.empty();

            $view.setJsonElement({
                json: $.skyscraperView,
                formatter: function($item, _idx) { // formmater
                    var _result = [
                        '<div class="col">',
                        '<div class="module">',
                        '<a href="' + $item[_idx].src + '">',
                        '<span class="thumb">',
                        '<img src="' + $item[_idx].thumb + '" alt="' + $item[_idx].alt + '" />',
                        '</span>',
                        '<span class="name">' + $item[_idx].alt + '</span>',
                        '<span class="price">' + $item[_idx].price + '원</span>',
                        '</a>',
                        '</div>',
                        '</div>'
                    ];
                    _result = _result.join('');
                    return _result;
                }, 
                onComplete: function() {
                    if($core.is(':hidden')) $core.addClass('in');
                    $item.removeClass('in').eq(i).addClass('in');
                    $tab.removeClass('in').eq(i).addClass('in');
                }
            }, i);
        }
        var closeSkyView = function() {
            $core.removeClass('in');
            $item.removeClass('in');
            $tab.removeClass('in');
        }

        $document.on('click', '#skyscraper .tab-list a, #skyscraper .item a', function(e){
            
            var _idx = $(this).parent().index();
            if (_idx < $tab.length) {
                e.preventDefault();
                skyscraperView(_idx);
                $core.removeAttr('class').addClass('core in child-'+_idx);
            } 
            else closeSkyView();

        });

        $document.on('click', '#scraperToggle .close', function(e){
            closeSkyView();
        });
    }

    // set Handler
    BASE.onLoad.skyscraperToggle = {
        name: 'skyscraperToggle',
        render: BASE.components.skyscraperToggle
    }

    // js-thumb 
    BASE.util.imgPlaceholder();

})(BASEkit, window.jQuery);


function numberComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function priceComma() {
    $('.price-after span, .price-after strong').every(function(){
        this.text(numberComma(this.text()));
    });
}


$(function() {

    

});