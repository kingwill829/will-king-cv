$(document).ready(function(){

	// Toggle visibility of skills module detail
	if (($(window).width() <= 767) ) {
		$('.cv-skills__item-heading').click(function() {
			$(this).siblings('.cv-skills__item-detail').slideToggle();
			$(this).find('.toggle-icon').toggleClass('toggle-icon--active');
		})
	}

	// fixed left elements
	var fixmeTop = $('.cv__left').offset().top;       // get initial position of the element

	$(window).scroll(function() {                  // assign scroll event listener
		if ($(window).width() >= 768) { 
		    var currentScroll = $(window).scrollTop(); // get current position

		    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
		        $('.cv__left').css({                      // scroll to that element or below it
		            position: 'fixed',
		            top: '8px',
		            left: '8px'
		        });
		    } else {                                   // apply position: static
		        $('.cv__left').css({                      // if you scroll above it
		            position: 'static'
		        });
	   		 }
		} else if (($(window).width() <= 767) ) {
		        $('.cv__left').css({                      // scroll to that element or below it
		            position: 'static'
		        });
		}
	});

});