// independent script
(function(BASE){
    'use strict';

    var $document = $(document);

    $document.ready(function(){

        // main visual
        $('#visual').bxSlider({
            pagerCustom: '#visualPager',
            controls: false,
            auto: true,
            autoControls: true,
            onSliderLoad: function(currentIndex) {
                // var pager = $('#visualPager');
                // var _lenght = pager.children().length;
                // var w = pager.find('> a').width();
                // console.log(w);
                // pager.css({
                //     'width' : w * _lenght
                // });
            }
        });

        var sliderActive = false,
            slider;

        // today brand
        $('#todaySlidr').bxSlider({
            slideWidth: 510,
            minSlides: 2,
            maxSlides: 4,
            autoStart: true
        });

        // md's pick 
        $('#newSlidr').bxSlider({
            pager: false,
            slideWidth: 220,
            slideMargin: 50,
            minSlides: 7,
            maxSlides: 7,
            moveSlides: 1,
            auto: true,
            controls: false,
            responsive: false,
        });

        // 마켓플랜트 서비스
        $('.bxslider').bxSlider();

        // md's Pick
        $document.on('click', '#mdPick .tab-list a', function(e){
            e.preventDefault();
            var $this = $(this),
                $tabList = $this.parents('ul'),
                i = $this.closest('li').index();
            var $sildr = $('#mdAdvertising'),
                $mdpick = $('#mdPick .tab-content .grid'); 
            var config = {
                    pager: false
                    , mode: 'fade'
                };

            $tabList.children().eq(i).addClass('in').siblings().removeClass('in');

            var createSlilder = function() {
                slider = $sildr.bxSlider(config);
                return true;
            }

            $sildr.empty();

            $sildr.setJsonElement({
                json: $.mdSlidr,
                formatter: function($item, _idx) { // formmater
                    var _result = [
                        '<div class="item">',
                        '<a href="' + $item[_idx].src + '"><img src="' + $item[_idx].thumb + '" alt="' + $item[_idx].alt + '" /></a>',
                        '</div>'
                    ];
                    _result = _result.join('');
                    return _result;
                }, onComplete: function() {

                    if(sliderActive === true) {
                        slider.reloadSlider();
                    } 
                    else sliderActive = createSlilder();
                }
            }, i);

            $mdpick.empty().removeClass('in');

            $mdpick.setJsonElement({
                json: $.mdpick,
                formatter: function($item, _idx) { // formmater
                    var _result = [
                        '<div class="col nth-child-' + (_idx+1) + '">',
                        '<div class="module">',
                        '<a href="' + $item[_idx].src + '">',
                        '<span class="thumb"><img src="' + $item[_idx].thumb + '" alt="' + $item[_idx].alt + '" /></span>',
                        '<span class="brand">[' + $item[_idx].brand + ']</span>',
                        '<span class="name">' + $item[_idx].alt + '</span>',
                        '<span class="price-after">',
                            '<em>판매자가</em>',
                            '<span>' + $item[_idx].price + '</span>원',
                        '</span>',
                        '</a>',
                        '</div>',
                        '</div>'
                    ];
                    _result = _result.join('');
                    return _result;
                }, onComplete: function() {
                    setTimeout(function() {
                        $mdpick.addClass('in');
                    }, 200);
                }
            }, i);

            priceComma();

        });

        priceComma();

        $('#mdPick .tab-list li:eq(0) a').trigger('click');

        $('.category a').trigger('click');
    });

})(BASEkit || window);