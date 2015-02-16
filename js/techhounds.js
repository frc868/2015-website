$(document).ready(function() {
	$('.navbar').affix(
		{offset: { top: $('.navbar').offset().top }
		});
});
$('.navbar').on('affix.bs.affix', function () {
    var navHeight = $('.navbar').outerHeight(true);
    
    $('.navbar + .bodyContainer').css('margin-top', navHeight);
});
$('.navbar').on('affix-top.bs.affix', function () {
    $('.navbar + .bodyContainer').css('margin-top', 0);
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
					$(this).addClass("fade");
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
blueimp.Gallery(
	document.getElementById('links').getElementsByTagName('a'),
	{
		container: '#home-carousel',
		carousel: true,
		startSlideshow: true,
		slideshowInterval: 7000,
		onslide: function (index, slide) {

			var text = this.list[index].getAttribute('data-description'),
			node = this.container.find('.description');
			var link = this.list[index].getAttribute('data-href'),
			node = this.container.find('.description');
			node.empty();
			if (text) {
				node[0].appendChild(document.createTextNode(text));
			}
			node[0].href = link;
		}
	});
var url = window.location;

// Will only work if string in href matches with location

//$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// Will also work for relative and absolute hrefs

$('.nav ul li a').filter(function() {

    return this.href == url;

}).parent().append('<div class="active"></div>');

//$('ul li a[href="http://techhounds.com/"]').parent().append("<div>foo</div>");

$(function() {
    if ( document.location.href.indexOf('photos') > -1 ) {
		$('.nav a[href="http://www.techhounds.com/photos/"]').parent().append('<div class="active"></div>');
		$('.nav a[href="http://www.techhounds.com/photos/"]').parent().parent().parent().append('<div class="active"></div>');
    }
});

$('.dropdown > .dropdownMenu > li > .active').parent().parent().parent().append('<div class="active"></div>');

/*$('.dropdown > .dropdownMenu > li > a').find(function(){
  $(this).find('.active').parent().parent().parent().append('<div class="active"></div>');
  });*/

$('#show').click(function(){
	$('.nav').toggleClass('mobileDisplay');
});
