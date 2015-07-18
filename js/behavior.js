var menuLeft = document.getElementById( 'menu' ),
				body = document.body,
				titleBar = document.getElementById('title-bar'),
				showLeftPush = document.getElementById( 'showLeftPush' );

			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'menu-push-right' );
				classie.toggle( titleBar, 'menu-push-right' );
				classie.toggle( menuLeft, 'menu-open' );
			};
			
			var mainTitle 	= new Shine(document.getElementById('h-text'));
			window.addEventListener('mousemove', function(event) {
				mainTitle.light.position.x = event.clientX;
				mainTitle.light.position.y = event.clientY;
				mainTitle.config.opacity = 0.2;
				mainTitle.draw();
			}, false);						
			
			var mainFadeBegin  = 50;
			var mainFadeFinish = 400;
			var navFadeBegin   = 100;
			var navFadeFinish  = 600;
			

			$(window).on('scroll', function(){			
				var offset = $(document).scrollTop(), opacity = 0; 
				
			console.log(offset);
				if( offset <= mainFadeBegin ){
					opacity = 1; 				
				} else if( offset <= mainFadeFinish ){
					opacity = 1 - offset / mainFadeFinish;
				}
				
				if(offset <= navFadeBegin){
					opacityBar =  0;
				} else if( offset <= navFadeFinish ){
					opacityBar = 1;
				}
					
				$('.header').stop().animate({opacity: opacity}, 200);
				$('.menu').stop().animate({opacity: opacityBar}, 200);
				
			});
            
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 120);
    }
}

$(window).on("hashchange", function () {
    offsetAnchor();
});
window.setTimeout(function() {
    offsetAnchor();
}, 1); 


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});