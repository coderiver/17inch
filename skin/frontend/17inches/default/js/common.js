var $j = jQuery.noConflict();	
$j(document).ready(function(){
  function slider() {
  	var slider = $j('.js-slider');
  	if (slider.length > 0) {
  		slider.each(function(){
  			el_next = $j(this).find('.slider__nav_next');
  			el_prev = $j(this).find('.slider__nav_prev');
  			el_item = $j(this).find('.slider__item');
  			el_in = $j(this).find('.slider');
  			el_in.cycle({
  				fx: 'carousel',
  			  timeout: 0,
  			  prev: el_prev,
  			  next: el_next,
  			  slides: el_item
  			});
  		})
  	};		  	
  }
  slider();
  $j(window).scroll(function(){
	  var value = $j(window).scrollTop();
	  if (value > 23) {
	  	$j('.wrap').addClass('wrap_top-fixed');
	  }
	  else{
	    $j('.wrap').removeClass('wrap_top-fixed');
	  }
  });
  $j(window).scroll(function(){
    var height = $j(".top").outerHeight();
    var value = $j(window).scrollTop() + height;
    var top = $j(".js-filter").offset().top;
    if (value >= top) {
      $j('.filter').addClass('is-fixed');
      $j('.filter').css('top',height-23);
    }
    else{
      $j('.filter').removeClass('is-fixed');
    }
  });
});		

