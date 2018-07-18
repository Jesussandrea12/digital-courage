// scrollify
$(function() {
  $.scrollify({
		section:".panel",
    interstitialSection : ".footer",
    scrollbars:false,
    before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".pagination a.active").removeClass("active");
      $(".pagination a[href=#" + ref + "]").addClass("active");
    },

    after:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      for(var j = 0;j < panels.length;j++) {
        if(j>i) {
        }
      }
    },
	});

  $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
  });
});

// slick slider
var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#FFFFFF" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>',
    nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

$('.single-item').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: 'ease-in-out',
  prevArrow: prevButton,
  nextArrow: nextButton
});

$('.quote-container').mousedown(function(){
  $('.single-item').addClass('dragging');
});
$('.quote-container').mouseup(function(){
  $('.single-item').removeClass('dragging');
});

// smoth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// menu
$(window).on('load', function() {
  $window = $(window);
  // $window = window.scrollTop() = 0;

	$window.scroll(function() {
    if ( $window.scrollTop() >= 1 ) {
      $('#nav-btn').addClass('scroll');
    } else {
    	$('#nav-btn').removeClass('scroll');
    };
	});

	$('#nav .content .container-prLink ul .link-projects span').html($('#nav .content .container-contentLink .wrapper-el .el-projects ul li').length);
	$('#nav-mobile .wrapper .container-linkPr ul li span').html($('#nav .content .container-contentLink .wrapper-el .el-projects ul li').length);
})

$('#nav-btn').click(function(){
	if (!$('#nav-btn').hasClass('disable')) {
		$('#nav-btn').addClass('disable');
		if ($('#nav-btn').hasClass('active')) {
			$('#nav-btn').removeClass('active');
			$('#nav').removeClass('show');
			$('#nav .content').removeClass('active');
			setTimeout(function() {
				$('#nav-btn').removeClass('disable');
				$('#nav').removeClass('displayBlock');

			}, 500);
		} else {
			$('#nav-btn').addClass('active');
			$('#nav').addClass('displayBlock').outerWidth();
			$('#nav').addClass('show');
			$('#nav .content').addClass('active');
			setTimeout(function() {
				$('#nav-btn').removeClass('disable');
			}, 1000);
		}
	}
})

// remove menu when click on item
$('#nav .content .container-prLink ul li a').on('click', function() {
  $('.content').removeClass('active')
	$('#nav').removeClass('show')
  $('#nav-btn').removeClass('active')
})

$('#nav .content .container-prLink ul li a').mouseenter(function(){
	if (window.matchMedia("(min-width: 1000px)").matches) {
		$('#nav .content .container-contentLink .wrapper-el .el').removeClass('displayBlock show');
		$('#nav .content .container-contentLink .wrapper-el .' + $(this).data('content')).addClass('displayBlock').outerWidth();
		$('#nav .content .container-contentLink .wrapper-el .' + $(this).data('content')).addClass('show').outerWidth();
	}
})

$('#nav-btn-mobile').click(function(){
	if ($('#nav-btn-mobile').hasClass('active')) {
		$('#nav-btn-mobile').removeClass('active');
		$('#nav-mobile').removeClass('show');
	}else {
		$('#nav-btn-mobile').addClass('active');
		$('#nav-mobile').addClass('show');
	}
})

$('#nav-mobile .wrapper .container-linkPr ul li .link-delay').click(function(){
	$('#nav-mobile .wrapper .container-linkPr').removeClass('show').addClass('hide-left');
	$('#nav-mobile .wrapper .container-projects').removeClass('hide-right').addClass('show');
})

$('#nav-mobile .wrapper .container-projects .back').click(function(){
	$('#nav-mobile .wrapper .container-linkPr').removeClass('hide-left').addClass('show');
	$('#nav-mobile .wrapper .container-projects').removeClass('show').addClass('hide-right');
})

// animaciones
window.sr = ScrollReveal();
// hero wrapper
sr.reveal(".hero-wrapper__text--title", {
  delay:500,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".hero-wrapper__img", {
  delay:500,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".hero-wrapper__text--subtitle", {
  delay:1000,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// about
sr.reveal(".about__text--title", {
  delay:500,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".about__text--subtitle", {
  delay:1000,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".about__img", {
  delay:1000,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// work
sr.reveal(".work__text--title", {
  delay:1000,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".work__text--subtitle", {
  delay:1500,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// branding
sr.reveal(".brands__text", {
  delay:1000,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// icons
sr.reveal(".brands__images--lyft", {
  delay:500,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".brands__images--spotify", {
  delay:1200,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".brands__images--coinbase", {
  delay:1700,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".brands__images--dropbox", {
  delay:2400,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".brands__images--slack", {
  delay:3100,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
sr.reveal(".brands__images--stripe", {
  delay:3800,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// contact
sr.reveal(".contact__box h2", {
  delay:300,
  easing:"ease",
  origin:'bottom',
  scale:'1',
  duration:2000
});
// footer
sr.reveal(".icon__box a", {
  delay:300,
  easing:"ease",
  origin:'top',
  distance: '-30px',
  scale:'1',
  duration:2000
});
