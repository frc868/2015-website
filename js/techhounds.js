$(document).ready(function() {
	$('.navbar').affix({
		offset: {
			top: $('.navbar').offset().top
		}
	});

	var url = window.location;

	$('.nav ul li a').filter(function() {
		return this.href == url;
	}).parent().append('<div class="active"></div>');

	$(function() {
		if ( document.location.href.indexOf('photos') > -1 ) {
			$('.nav a[href="http://www.techhounds.com/photos/"]').parent().append('<div class="active"></div>');
			$('.nav a[href="http://www.techhounds.com/photos/"]').parent().parent().parent().append('<div class="active"></div>');
		}
	});

	$('.dropdown > .dropdownMenu > li > .active').parent().parent().parent().append('<div class="active"></div>');
});

$('.navbar').on('affix.bs.affix', function () {
    var navHeight = $('.navbar').outerHeight(true);
    
    $('.navbar + .bodyContainer').css('margin-top', navHeight);
});
$('.navbar').on('affix-top.bs.affix', function () {
    $('.navbar + .bodyContainer').css('margin-top', 0);
});

$('.dropdown').click(function(){
	$(this).children('.dropdownMenu').toggle()
});

$(window).on("load",function() {
    function fade() {
        $('.clearfix').each(function() {

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
			var offset = 175;

			//console.log(objectBottom - offset);
			//console.log(windowBottom);
            
            /* If the object is completely visible in the window, fade it in */
            if ((objectBottom - offset)< windowBottom) {
				//console.log("fade");
				//object comes into view (scrolling down)
                if ($(this).hasClass("shadow")) {
					console.log("fade");
					$(this).addClass("front-fade");
					$(this).children().fadeTo(500,1);
				}
                if ($(this).css('opacity')==0) {
					console.log("fade2");
					$(this).fadeTo(500,1);
				}
			}
            /*else { //object goes out of view (scrolling up)
              if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
              }*/
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {fade();}); //Fade in elements during scroll
});

$('#show').click(function(){
	$('.nav').toggleClass('mobileDisplay');
});
