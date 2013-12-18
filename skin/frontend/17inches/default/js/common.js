document.observe('dom:loaded', function(){

  //header fixed
  Event.observe(window, "scroll", function() {
    var value = $$('html')[0].scrollTop;
    if (value > 23)
      $$('.wrap')[0].addClassName('wrap_top-fixed');
    else
      $$('.wrap')[0].removeClassName('wrap_top-fixed');
  });

  //sliders
  var sliders = $$('.js-prototype-slider');
  for(var i=0; i<sliders.length; i++){
    //alert(sliders[i]);
	  new Carousel(sliders[i].down('.slider-main'), sliders[i].down('.slider').select('.slider__item'), sliders[i].select('a'), {
	    duration: 0.5,
	    wheel: false,
	    visibleSlides: 5,
	    circular: true
	  });
  }

});


