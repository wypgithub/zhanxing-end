jQuery(document).ready(function () {

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
	
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

    $(window).scroll(function() {	

        if (!onMobile)
            return;

		var scrollY = $(document).scrollTop();// ��ȡ��ֱ�����ľ��룬�������˶���
		if (scrollY > 200){ //�������������������أ�����ɾ��������
			$('#style-switcher').removeClass('showed');
			$('#style-switcher').addClass('hiddened');
		}
		else {
			$('#style-switcher').removeClass('hiddened');
			$('#style-switcher').addClass('showed');			
		}
	 });


});

