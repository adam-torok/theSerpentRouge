
	$(window).load(function() {
		
		//$(".se-pre-con").fadeOut("slow");;
		
	});

window.addEventListener('scroll', function(event) {
    const topDistance = this.pageYOffset; 
    const layers = document.querySelectorAll("[data-type='parallax']");
    
    for (let layer of Array.from(layers)) {
      const depth = layer.getAttribute('data-depth');
      const movement = -(topDistance * depth);
      const translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });



  
 (function($) { 
	/*
	 * Plugin defaults 
	 */
	var defaults = {
			images : [,
			'images/sparks.png'],
			total : 100,
			ofTop: 0,
			ofLeft: 0,
			on:'document.body',
			twinkle: 0.5
	};
	$.firefly = function(settings) {

			$.firefly.settings = $.extend({}, defaults, settings);
			$.firefly.eleHeight = $($.firefly.settings.on).height();
			$.firefly.eleWidth = $($.firefly.settings.on).width();
			if($.firefly.settings.on!=='document.body'){
				var off = $($.firefly.settings.on).offset();
				$.firefly.offsetTop = off.top;
				$.firefly.offsetLeft = off.left;
				$.firefly.eleHeight = $($.firefly.settings.on).height();
				$.firefly.eleWidth = $($.firefly.settings.on).width();
			}
			else{
				$.firefly.offsetTop = 0;
				$.firefly.offsetLeft = 0;
				$.firefly.eleHeight = $(document.body).height();
				$.firefly.eleWidth = $(document.body).width();

			}

			
		
			if($.firefly.preloadImages()){
			for (i = 0; i < $.firefly.settings.total; i++){
				 $.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)]));
			}
			}
			return;
	};
	
	/*
	 * Public Functions
	 */

	 $.firefly.create = function(img){
					spark = $('<img>').attr({'src' : img}).hide();
					if($.firefly.settings.on === 'document.body')
					 $(document.body).append(spark);
					 else
					 $($.firefly.settings.on).append(spark);
							return spark.css({
								            'position':'absolute',
												
										    'z-index': -1*$.firefly.random(20), //under all the stuff
											top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight-50)),	//offsets
											left:  $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth-50)) //offsets
											}).show();		
	 }
    


$.firefly.fly = function(sp) {
	
  $(sp).animate({
	  top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight-50)),	//offsets
	  left: $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth-50)),
	  opacity: $.firefly.opacity($.firefly.settings.twinkle)
  }, (($.firefly.random(10) + 5) * 2000),function(){  $.firefly.fly(sp) } );
};

$.firefly.stop = function(sp) {
  $(sp).stop();
};


$.firefly.preloadImages = function() {
	var preloads = new Object();
	for (i = 0; i < ($.firefly.settings.images).length; i++){  
			preloads[i] = new Image(); preloads[i].src =  $.firefly.settings.images[i];
        }
	return true;
}

$.firefly.random = function(max) {
	return Math.ceil(Math.random() * max) - 1;
}
// set twinkle.
$.firefly.opacity = function(min)
{
        op= Math.random();
        if(op < min)
                return 0;
        else
                return 1;
}		
})(jQuery);






$(document).ready(function() {
   $.firefly({
     images : [
        "images/sparks.png"
     ], //You can change images
     total : 100, // You can edit the number of flies
     on: '#firefly' // id of div
  });
});

  
  