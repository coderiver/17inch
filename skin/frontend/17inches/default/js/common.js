$(document).ready(function() {

    $('.js-cycle').each(function(){
        var cycle_prev = $(this).parent().find(".js-cycle-prev");
        var cycle_next = $(this).parent().find(".js-cycle-next");
        $(this).cycle({
            speed: 200,
            fx: "carousel",
            timeout: 0,
            prev: cycle_prev,
            next: cycle_next
        });
    });

    function init_cycle() {
        if ($(".js-slider-gallery").length > 0) {

            $(".js-slider-gallery").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_1.cycle();
                slider_2.cycle();
                var slideshows = $(this).find('.js-slider-cycle').on('cycle-next cycle-prev', function(e, opts) {
                    // advance the other slideshow
                    slideshows.not(this).cycle('goto', opts.currSlide);
                });

                slider_2.find(".cycle-slide").click(function(){
                    var index = slider_2.data('cycle.API').getSlideIndex(this);
                    slideshows.cycle('goto', index);
                });
            });
        }
    }
    init_cycle();

}); 