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
    if ($j(".js-filter").length > 0) {
      var top = $j(".js-filter").offset().top;
    }
    
    if (value >= top) {
      $j('.filter').addClass('is-fixed');
      $j('.filter').css('top',height-23);
    }
    else{
      $j('.filter').removeClass('is-fixed');
    }
  });


      $j(document).click(function() {
          $j(".js-select-list").hide();
          $j(".js-select").removeClass("is-active");
      });
      function select() {
          $j(".js-select").each(function(){
              var select_list = $j(this).find(".js-select-list");
              var text = select_list.find("li").first().text();
              $j(this).find(".js-select-text").text(text);
              $j(this).click(function(event){
                  if ($j(this).hasClass("is-active")) {
                      $j(this).removeClass("is-active");
                      select_list.slideUp("fast");
                  }
                  else {
                      $j(".js-select").removeClass("is-active");
                      $j(".js-select-list").hide();
                      select_list.slideDown("fast");
                      $j(this).addClass("is-active");
                  }
                  event.stopPropagation();
              });
              select_list.find("li").click(function(event) {
                  var id = $j(this).attr("data-id");
                  var text = $j(this).text();
                  $j(this).parent().parent().find(".js-select-text").text(text);
                  $j(this).parent().parent().find(".js-select-input").val(id);
                  $j(this).parent().hide();
                  $j(this).parents(".js-select").removeClass("is-active");
                  event.stopPropagation();
              });
          });
      }

      select();
      $j('.js-select').click(function(event){
          event.stopPropagation();
      })

      $j(".js-item-blocks").hide();
      $j(".js-basket-icon").click(function(){
        $j(this).parent().find(".js-item-text").toggle();
        $j(this).parent().find(".js-item-blocks").toggle();
        return false;
      });

      $j(".js-popup-prod-link").click(function(){
        $j(".js-popup-prod").show();
        $j(".js-overlay").show();
        return false;
      });
      $j(".popup__close").click(function(){
        $j(this).parent().parent().hide();
        $j(".js-overlay").hide();
        return false; 
      }); 
      $j(".popup-wrap").click(function(){
        $j(this).hide();
        $j(".js-overlay").hide();
        return false;  
      }); 

      $j('.popup').click(function(event){
          event.stopPropagation();
      })

      $j(".js-chosen-select").chosen({
        disable_search_threshold: 10,
        width: "100%",
        inherit_select_classes: true
      });

});		

