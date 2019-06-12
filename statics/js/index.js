 var onMobile = false;

jQuery(document).ready(function () {
  
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    
    jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
    jQuery('body').waitForImages(function() {
        jQuery(".page-mask").delay(1200).fadeOut('slow');
        jQuery('body').css('overflowY','auto');
    });
    


/*-------------------------------------------------*/
/* =  Animated content
/*-------------------------------------------------*/
	
    
    if (!onMobile){
		wow = new WOW(
			{
				animateClass: 'animated',
				offset:       100
			}
		);

		wow.init();
	};
/*==========================*/
/* Sticky Navigation
/*==========================*/
     
    //jQuery("#navigation").sticky({topSpacing:0});

    


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */  

    $('.nav-toggle').hover(function() {
        'use strict';
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
        }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
     });



 
/*----------------------------------------------------*/
/*  Scroll To Top Section
/*----------------------------------------------------*/
    jQuery(document).ready(function () {
    
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });
    
        jQuery('.scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
    });



/*----------------------------------------------------*/
/*  Carousel Section
/*----------------------------------------------------*/

    
    jQuery('#testimonials-carousel').carousel({interval: 5000, pause: "hover"});

    jQuery('#team-carousel').carousel({interval: 5000, pause: "hover"});
    
    jQuery('.testimonials-carousel-widget').carousel({interval: 5000, pause: "hover"});

});



/*----------------------------------------------------*/
/*  BxSlider
/*----------------------------------------------------*/


jQuery(document).ready(function(){
    /*
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
 
    jQuery('.fullwidth-slider').bxSlider({
        mode: "fade",
        speed: 4000,
        pager: false,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>', 
        auto:true,
        
        onSlideBefore: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
            ($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
        },
        onSlideAfter: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
        },
        
    });
    
    jQuery('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');

    jQuery('.text-slide').bxSlider({
        controls: false,
        adaptiveHeight: true, 
        pager: false,       
        auto:true,
        mode:'fade',
        pause: 3000,
    });
    */

    $('.slider-container').flexslider({
        animation: "slide",
        touch:true,        
        slideshow:true,
        directionNav:true,
        slideshowSpeed:5000,
        prevText: "", //String: 上一项的文字
        nextText: "", //String: 下一项的文字
        pauseText: 'Pause', //String: 暂停文字
        playText: 'Play', //String: 播放文字
        start: function($slideElement){
            //(slider).find('.slide-caption').textEffect('fade');            
        },
        before: function($slideElement){
            ($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, duration: 550});
            ($slideElement).find('.slide-caption').hide().animate({top:'-100px'});    
        },
        after: function($slideElement){
            ($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, duration: 450});
        },
    });

    jQuery('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');

});  



/*----------------------------------------------------*/
/*  Contact Form Section
/*----------------------------------------------------*/
    $("#contact").submit(function (e) {
        e.preventDefault();
        var nick = $("#gb_nick").val();
        var contact = $("#gb_contact").val();
        var title = $("#gb_title").val();
        var content = $("#gb_content").val();
        var dataString = 'data[nick]=' + nick + '&data[contact]=' + contact + '&data[title]=' + title + '&data[content]=' + content;       
        
        /*
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        */

        if ((contact.length > 2) && (content.length > 4) && (nick.length > 1)) {
            $.ajax({
                type: "POST",
                url: "/index.php?c=form_gbook",
                data: dataString,
                async: true, 
                success: function () {
                    $('.success').fadeIn(1000).delay(3000).fadeOut(1000);
                    $('#contact')[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000).delay(5000).fadeOut(1000);

        }

        return false;
    });



 /* ==============================================
Firefox anchor fix
=============================================== */
    $(document).ready(function(){        
        if ( /firefox/.test(navigator.userAgent.toLowerCase()) ) {
        var h = window.location.hash;
        if (h) {
            var headerH = $('#navigationMenu').outerHeight();
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

                event.preventDefault();
        }

    }
    });

    $(document).ready(function() {
        $('#testimonials').flexslider({
            animation: "slider",
            touch:true,
            directionNav:false,
            slideshow:true,
            slideshowSpeed:5000
        });
    });
    
     $(window).scroll(function() {       

        if (!onMobile)
            return;

		var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
		if (scrollY > 200){ //如果滚动距离大于则隐藏，否则删除隐藏类
			$('#style-switcher').removeClass('showed');
			$('#style-switcher').addClass('hiddened');
		}
		else {
			$('#style-switcher').removeClass('hiddened');
			$('#style-switcher').addClass('showed');			
		}
	 });