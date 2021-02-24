/*-----------------------------------------------------------------------------------

 	Script - All Custom frontend jQuery scripts & functions
 
-----------------------------------------------------------------------------------*/
(function(){
'use strict';

function smallHeader(){if(jQuery(window).scrollTop()>40){var e=!1,a=!1;jQuery("nav#main-nav > ul > li.mega-menu").on({mouseenter:function(){jQuery(window).width()>1023&&!jQuery("header").hasClass("header-style-vertical")&&(jQuery("header").hasClass("sub-dark")?(jQuery("header").hasClass("header-dark")||(e=!0,jQuery("header").addClass("header-dark")),jQuery("header").hasClass("transparent-light")||(a=!0,jQuery("header").addClass("transparent-light"))):(jQuery("header").hasClass("header-dark")||jQuery("header").hasClass("transparent-light"))&&jQuery("header").addClass("mega-hover"))},mouseleave:function(){jQuery(window).width()>1023&&!jQuery("header").hasClass("header-style-vertical")&&(jQuery("header").removeClass("mega-hover"),e&&jQuery("header").removeClass("header-dark"),a&&jQuery("header").removeClass("transparent-light"))}}),jQuery("header").addClass("small-header")}else jQuery("header").removeClass("small-header")}function showFixedItems(){jQuery(window).scrollTop()>jQuery(window).height()?jQuery("#backtotop, #share.share-fixed").addClass("visible"):jQuery("#backtotop, #share.share-fixed").removeClass("visible")}function adaptHeight(){var e=".column";if(jQuery(window).width()<960&&(e=".one-half, .one-third, .two-third"),jQuery(".column-section.adapt-height").each(function(){var a=jQuery(this);if(jQuery(a).children(".column").css("minHeight","inherit"),jQuery(a).children(".column").find(".col-content").css("marginTop","0"),jQuery(window).width()>767){var r=0,t="";jQuery(a).children(e).each(function(){var e=jQuery(this).outerHeight(),a=parseInt(jQuery(this).css("border-top-width"),10)+parseInt(jQuery(this).css("border-bottom-width"),10);e+a>r&&(r=e+a+1,t=jQuery(this))}),r&&(jQuery(a).children(".column").css("minHeight",r+"px"),jQuery(t).addClass("tallest")),jQuery(a).hasClass("vertical-center")&&jQuery(a).children(".column:not(.tallest)").each(function(){if(jQuery(this).find(".col-content").length>0&&!jQuery(this).find(".col-content").is(":empty")){var e=jQuery(this).find(".col-content"),a=r-(parseInt(jQuery(this).css("paddingTop"),10)+parseInt(jQuery(this).css("paddingBottom"),10)),t=jQuery(e).height();if(a>t){var i=(a-t)/2;jQuery(e).css("marginTop",i+"px")}}})}}),jQuery(".fullwidth-section.fullheight").length>0&&jQuery(".fullwidth-section.fullheight").each(function(){var e=jQuery(this).find(".fullwidth-content"),a=jQuery(e).height(),r=parseInt(jQuery(e).css("paddingTop"))+parseInt(jQuery(e).css("paddingBottom"),10);if(a+r<jQuery(this).height()){var t=(jQuery(this).height()-(a+r))/2;jQuery(e).css("transform","translateY("+t+"px)")}}),jQuery(".hero-full #page-title").length>0||jQuery(".hero-big #page-title").length>0){var a=jQuery("#hero #page-title").outerHeight()+parseInt(jQuery("#hero #page-title").css("marginTop"),10);jQuery("header").hasClass("header-style-vertical")&&(headerHeight=0);var r=0;a+2*headerHeight>jQuery("#hero").outerHeight()&&parseInt(jQuery("#hero #page-title").css("marginTop"),10)<1?(jQuery("#hero #page-title").addClass("title-adapt"),r=parseInt(jQuery("#hero #page-title").css("top"),10)):jQuery("#hero #page-title").removeClass("title-adapt"),a+r>jQuery("#hero").outerHeight()?jQuery("#hero").css("height",a+r-2+"px"):jQuery("#hero").css("height","auto")}}function animateOnScroll(){jQuery(".has-animation").each(function(){var e=jQuery(this);if(jQuery(window).width()>1024){var a=e.visible(!0),r=e.attr("data-delay");r||(r=0),e.hasClass("animated")||a&&e.delay(r).queue(function(){e.addClass("animated")})}else e.addClass("animated")}),jQuery(".counter-value").each(function(){var e=jQuery(this);jQuery(window).width()>767&&e.visible(!0)&&(e.addClass("animated"),e.find(".counter-animator").each(function(){var e=jQuery(this),a=10*e.data("value");e.find("ul").css({transform:"translateY(-"+a+"%)","-webkit-transform":"translateY(-"+a+"%)","-moz-transform":"translateY(-"+a+"%)","-ms-transform":"translateY(-"+a+"%)","-o-transform":"translateY(-"+a+"%)"})}))}),jQuery(".progress-bar-item").each(function(){var e=jQuery(this),a=e.visible(!0),r=e.find(".progress-bar .progress-active ").attr("data-perc");if(e.hasClass("anim"));else if(a){var t=Math.floor(251*Math.random())+50;e.addClass("anim"),e.find(".progress-bar .progress-active ").animate({width:r+"%"},2e3,"easeInOutQuart",function(){jQuery(this).find(".tooltip").delay(t).animate({opacity:1},500)}).css("overflow","visible")}})}function reorganizeIsotope(){jQuery('.isotope-grid[class*="style-modern"]').each(function(){var e=jQuery(this),a=e.find(".grid-sizer").width(),r=e.data("heightratio");r||(r=.8);var t=0;(e.hasClass("isotope-spaced")||e.hasClass("isotope-spaced-mini"))&&(t=parseInt(e.find(".isotope-item").css("marginRight"),10));var i=parseInt(a*r,10);e.children(".isotope-item").css({height:i+"px"}),e.children(".isotope-item.tall, .isotope-item.wide-tall").css({height:2*i+t+"px"}),e.isotope("reLayout"),e.children(".isotope-item").each(function(){var e=jQuery(this).find("img").height(),a=jQuery(this).find("img").width(),r=a/e,t=jQuery(this).height(),i=jQuery(this).width(),s=i/t,n="";s>r?(n="wide-img",jQuery(this).find("img").removeClass("tall-img")):(n="tall-img",jQuery(this).find("img").removeClass("wide-img")),jQuery(this).find("img").addClass(n)})})}var headerHeight=!1;jQuery(window).load(function(){jQuery("body").addClass("page-is-loaded"),headerHeight=jQuery("header").height(),jQuery("header").hasClass("header-transparent")||jQuery("header").hasClass("header-style-floating")||jQuery("header").hasClass("header-style-vertical")||jQuery("body").append('<div id="pseudo-header" style="height:'+headerHeight+'px;position:absolute;z-index:-1;"></div>'),jQuery(".column-section.adapt-height").each(function(){jQuery(this).children(".column").each(function(){$.trim(jQuery(this).html())?jQuery(this).children(".col-content").length<1&&jQuery(this).wrapInner('<div class="col-content"></div>'):jQuery(this).addClass("empty-content")})}),jQuery("#show-search").on("click",function(){return jQuery(".header-search-content").addClass("search-visible"),!1}),jQuery(".header-search-content .search-outer").on("click",function(){return jQuery(".header-search-content").removeClass("search-visible"),!1}),jQuery("#close-search").on("click",function(){return jQuery(".header-search-content").removeClass("search-visible"),!1}),jQuery().isotope&&(jQuery(".isotope-grid").each(function(){var e=jQuery(this);jQuery(this).prepend('<div class="grid-sizer"></div>'),e.hasClass("fitrows")?e.imagesLoaded(function(){e.isotope({layoutMode:"fitRows",itemSelector:".isotope-item",masonry:{columnWidth:".grid-sizer"}})}):e.imagesLoaded(function(){e.isotope({layoutMode:"masonry",itemSelector:".isotope-item",masonry:{columnWidth:".grid-sizer"}})})}),jQuery(".filter").on("click","li a",function(){var e=jQuery(this),a=e.parents("ul.filter").data("related-grid");if(a){e.parents("ul.filter").find("li").removeClass("active"),e.parent("li").addClass("active");var r=e.attr("data-filter");jQuery("#"+a).isotope({filter:r},function(){})}else alert("Please specify the dala-related-grid");return!1}),reorganizeIsotope());var e=!1,a=!1;jQuery("nav#main-nav > ul > li.mega-menu").on({mouseenter:function(){jQuery(window).width()>1023&&!jQuery("header").hasClass("header-style-vertical")&&(jQuery("header").hasClass("sub-dark")?(jQuery("header").hasClass("header-dark")||(e=!0,jQuery("header").addClass("header-dark")),jQuery("header").hasClass("transparent-light")||(a=!0,jQuery("header").addClass("transparent-light"))):(jQuery("header").hasClass("header-dark")||jQuery("header").hasClass("transparent-light"))&&jQuery("header").addClass("mega-hover"))},mouseleave:function(){jQuery(window).width()>1023&&!jQuery("header").hasClass("header-style-vertical")&&(jQuery("header").removeClass("mega-hover"),e&&jQuery("header").removeClass("header-dark"),a&&jQuery("header").removeClass("transparent-light"))}}),jQuery("nav#main-nav > ul > li:last-child").prev("li").andSelf().each(function(){if(jQuery(this).children("ul.submenu").length>0){var e=parseInt(jQuery(window).width()-(jQuery("#page-content").offset().left+jQuery("#page-content").outerWidth()),10),a=parseInt(jQuery(window).width()-(jQuery(this).offset().left+jQuery(this).outerWidth())-e,10);150>a&&jQuery(this).children("ul.submenu").addClass("add-gap")}}),jQuery("header").on("click",".responsive-nav-toggle",function(){return jQuery("#menu").toggleClass("menu-is-open"),!1}),jQuery("#main-nav").on("click","li > a",function(){var e=jQuery(this),a=jQuery(this).parent("li");return e.siblings("ul").length>0&&"none"===e.siblings("ul").css("display")?(e.siblings("ul").slideDown(400),a.siblings("li").children("ul").slideUp(400),a.siblings("li").find(".mega-menu-content").slideUp(400),a.siblings("li").find(".mega-menu-content ul li > ul").slideUp(400),!1):e.siblings(".mega-menu-content").length>0&&"none"===e.siblings(".mega-menu-content").css("display")?(e.siblings(".mega-menu-content").slideDown(400),a.siblings("li").find(".mega-menu-content").slideUp(400),a.siblings("li").find(".mega-menu-content ul li > ul").slideUp(400),a.siblings("li").children("ul").slideUp(400),!1):void 0}),jQuery("header").on("click",".show-language",function(){return jQuery("#header-language > .header-language-content").toggleClass("show"),!1}),jQuery().revolution&&(jQuery("#hero .revolution-slider").revolution({sliderType:"standard",sliderLayout:"fullscreen",fullScreenAutoWidth:"on",fullScreenOffsetContainer:"#pseudo-header",delay:9e3,disableProgressBar:"on",navigation:{arrows:{enable:!0,style:"sudo-nav",left:{h_offset:0},right:{h_offset:0}},bullets:{enable:!1,style:"sudo-bullets",h_align:"center",v_align:"bottom",h_offset:0,v_offset:20,space:8},touch:{touchenabled:"on",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"}},responsiveLevels:[2048,1024,778,480],gridwidth:[1024,778,480,400],gridheight:[700,550,550,450],lazyType:"smart"}),jQuery("#hero .revolution-slider").bind("revolution.slide.onchange",function(e,a){a.currentslide.hasClass("text-light")?(jQuery("header").hasClass("header-transparent")&&jQuery("header").addClass("transparent-light").removeClass("transparent-dark"),jQuery("#hero #scroll-down").length>0&&jQuery("#hero #scroll-down").addClass("text-light"),jQuery("#hero .revolution-slider .sudo-bullets").addClass("sudo-light").removeClass("sudo-dark")):(jQuery("header").hasClass("header-transparent")&&jQuery("header").addClass("transparent-dark").removeClass("transparent-light"),jQuery("#hero #scroll-down").length>0&&jQuery("#hero #scroll-down").removeClass("text-light"),jQuery("#hero .revolution-slider .sudo-bullets").addClass("sudo-dark").removeClass("sudo-light"))})),jQuery("body").on("click","#backtotop,#scroll-down,.scroll-to",function(){var e=0;if("scroll-down"===jQuery(this).attr("id")&&(e=jQuery("#page-body").offset().top),jQuery(this).hasClass("scroll-to")){var a=jQuery(this).attr("href"),r=jQuery(this).attr("data-target");"#"===a.charAt(0)&&(r=a),e=jQuery(r).offset().top}return jQuery("html,body").animate({scrollTop:e},1e3,"easeInOutQuart"),!1}),jQuery().parallax&&jQuery(".parallax-section").parallax(),jQuery("body").on("click",".inline-video",function(){var e=jQuery(this),a=e.data("type"),r=e.data("videoid");if("youtube"===a)var t='<iframe src="http://www.youtube.com/embed/'+r+'?autoplay=1" width="100%" height="100%" frameborder="0" allowfullscreen ></iframe>';else if("vimeo"===a)var t='<iframe src="https://player.vimeo.com/video/'+r+'?autoplay=1" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';return e.append('<div class="inline-iframe-container"></div>'),e.find(".inline-iframe-container").html(t+'<div class="close-inline-video"></div>'),setTimeout(function(){e.addClass("active")},1e3),!1}),jQuery("body").on("click",".close-inline-video",function(){var e=jQuery(this);return e.parents(".inline-video").removeClass("active"),e.parent(".inline-iframe-container").remove(),!1}),jQuery().lightcase&&jQuery("a[data-rel^=lightcase]").lightcase({showSequenceInfo:!1,swipe:!0,showCaption:!1,overlayOpacity:.95,maxWidth:1300,maxHeight:1100,shrinkFactor:1,video:{width:780,height:420}}),jQuery().fitVids&&jQuery("body").fitVids(),jQuery().owlCarousel&&(jQuery(".owl-slider").owlCarousel({items:1,stopOnHover:!0,nav:!1,navText:!1,dots:!0,smartSpeed:600,singleItem:!0,autoHeight:!0,loop:!1,autoplay:!1,navRewind:!1}),jQuery(".owl-carousel").owlCarousel({items:4,itemsDesktop:!1,responsive:{480:{items:1},768:{items:2}},autoplay:!1,autoHeight:!0,nav:!0,navText:!1,dots:!0,loop:!1})),jQuery(".counter-value").each(function(){var e=jQuery(this),a=e.text(),r=a.toString().replace(/(\d)/g,'<span class="digit"><span class="digit-value">$1</span></span>');e.html(r+'<div class="main">'+a+"</span>"),e.find(".digit").each(function(){var e=jQuery(this),a=e.find(".digit-value").text();e.append('<div class="counter-animator" data-value="'+a+'"><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></div>')})}),jQuery(".tabs").each(function(){var e=jQuery(this);e.find(".tab-content").removeClass("active");var a=e.find(".active a").attr("href");e.find("."+a).addClass("active")}),jQuery(".tab-nav").on("click","a",function(){var e=jQuery(this),a=e.parents("li").parent("ul").parent("div"),r=e.attr("href");return jQuery(a).find(".tab-nav li").removeClass("active"),e.parents("li").addClass("active"),jQuery(a).find(".tab-container .tab-content").hide().removeClass("active"),jQuery(a).find(".tab-container ."+r).fadeIn(500).addClass("active"),!1}),jQuery(".toggle-item").each(function(){jQuery(this).find(".toggle-active").siblings(".toggle-inner").slideDown(300)}),jQuery(".toggle-item").on("click",".toggle-title",function(){var e=jQuery(this),a=e.parent("div").parent("div"),r=e.parent("div").find(".toggle-inner").css("display");return"accordion"===jQuery(a).attr("class")?"none"!==r?(jQuery(a).find(".toggle-item .toggle-inner").slideUp(300),e.toggleClass("toggle-active")):(jQuery(a).find(".toggle-item .toggle-inner").slideUp(300),jQuery(a).find(".toggle-item .toggle-title").removeClass("toggle-active"),e.toggleClass("toggle-active"),e.siblings(".toggle-inner").slideDown(300)):(e.toggleClass("toggle-active"),e.siblings(".toggle-inner").slideToggle(300)),!1}),jQuery().mediaelementplayer&&jQuery("audio,video").mediaelementplayer(),jQuery().bgVideo&&jQuery(".videobg-section").bgVideo(),adaptHeight(),smallHeader(),showFixedItems(),animateOnScroll()}),jQuery(window).scroll(function(){smallHeader(),showFixedItems(),animateOnScroll()}),jQuery(window).resize(function(){adaptHeight(),jQuery().isotope&&reorganizeIsotope(),jQuery(window).width()>1023&&jQuery("#menu").removeClass("menu-is-open")}),jQuery(document).ready(function(){jQuery(".instagram-widget").length>0&&jQuery().spectragram&&(jQuery.fn.spectragram.accessData={accessToken:"36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b",clientID:"b9e559ec7c284375bf41e9a9fb72ae01"},jQuery(".instagram-widget").each(function(){var e=jQuery(this),a=e.data("type"),r=e.data("user"),t=e.data("tag"),i=e.data("count");"user"===a?e.spectragram("getUserFeed",{query:r,max:Number(i),size:"medium",wrapEachWith:"<div></div>"}):"tag"===a&&e.spectragram("getRecentTagged",{query:t,max:Number(i),size:"medium",wrapEachWith:"<div></div>"})})),jQuery(".flickr-widget").length>0&&jQuery().jflickrfeed&&jQuery(".flickr-widget").each(function(e){var a=jQuery(this),r=a.data("id"),t=a.data("count");a.jflickrfeed({limit:Number(t),qstrings:{id:r},itemTemplate:'<div><a href="{{image_b}}" data-rel="lightcase:flickr'+e+'"><img src="{{image_s}}" alt="{{title}}"/></a></div>'})}),jQuery(".dribbble-widget").length>0&&jQuery(".dribbble-widget").each(function(){var e=jQuery(this),a=e.data("user"),r=e.data("count");jQuery.jribbble.setToken("YOURACESSTOKEN"),jQuery.jribbble.users(a).shots({per_page:Number(r)}).then(function(a){var r=[];a.forEach(function(e){r.push('<div class="shot">'),r.push('<a href="'+e.html_url+'" target="_blank">'),r.push('<img src="'+e.images.normal+'">'),r.push("</a></div>")}),e.html(r.join(""))})})});

jQuery("head").append("<link rel='stylesheet' href='../assets/demo.css' type='text/css'>");
jQuery("body").append('');
	
	jQuery('#sr-demo-options').on("click", "a.open-demo-option", function() { 
		jQuery('#sr-demo-options').toggleClass("active");
		return false;
	});
	
	jQuery('#sr-demo-options').on("click", "a.demo-layout", function() {
		jQuery(this).addClass("active"); 
		jQuery(this).siblings("a.demo-layout").removeClass("active"); 
		var layout = jQuery(this).attr("href");
		if (layout === 'boxed') { jQuery('body').addClass("page-boxed"); } else { jQuery('body').removeClass("page-boxed"); }
		setTimeout(function() {
			if( jQuery().isotope ) { 
				jQuery('.isotope-grid').each(function(){
				var $container = jQuery(this);
				jQuery(this).prepend('<div class="grid-sizer"></div>');
				if (!$container.hasClass("fitrows")) { 
					$container.imagesLoaded( function(){
						$container.isotope({
							layoutMode: 'masonry',
							itemSelector : '.isotope-item',
							masonry: { columnWidth: '.grid-sizer' }
						});	
					});
				} else {
					$container.imagesLoaded( function(){
						$container.isotope({
							layoutMode: 'fitRows',
							itemSelector : '.isotope-item',
							masonry: { columnWidth: '.grid-sizer' }
						});	
					});
				}
			});
			reorganizeIsotope();
			adaptHeight(); 
			
			}
		}, 100);
		return false;
	});
	
	var startHeader = jQuery('header').attr("class");
	if (startHeader == "header-style-vertical") { jQuery("a.demo-header").removeClass("active"); jQuery("a.demo-header[href='vertical']").addClass("active"); }
	jQuery('#sr-demo-options').on("click", "a.demo-header", function() {
		jQuery('header').attr("class",startHeader);
		smallHeader();
		jQuery(this).addClass("active"); 
		jQuery(this).siblings("a.demo-header").removeClass("active"); 
		var option = jQuery(this).attr("href");
		if (option === 'not-sticky') { jQuery('header').addClass("not-sticky"); } else { jQuery('header').removeClass("not-sticky"); }
		if (option === 'floating') { jQuery('header').addClass("header-style-floating"); } else { jQuery('header').removeClass("header-style-floating"); }
		if (option === 'vertical') { 
			var dark = "";
			if (jQuery('header').hasClass("header-dark")) { dark = "header-dark"; } 
			jQuery('header').attr("class","header-style-vertical "+dark);  
			} 
		else { jQuery('header').removeClass("header-style-vertical"); }
		
		setTimeout(function() {
			if( jQuery().isotope ) { 
				jQuery('.isotope-grid').each(function(){
					var $container = jQuery(this);
					jQuery(this).prepend('<div class="grid-sizer"></div>');
					if (!$container.hasClass("fitrows")) { 
						$container.imagesLoaded( function(){
							$container.isotope({
								layoutMode: 'masonry',
								itemSelector : '.isotope-item',
								masonry: { columnWidth: '.grid-sizer' }
							});	
						});
					} else {
						$container.imagesLoaded( function(){
							$container.isotope({
								layoutMode: 'fitRows',
								itemSelector : '.isotope-item',
								masonry: { columnWidth: '.grid-sizer' }
							});	
						});
					}
				});
				reorganizeIsotope(); 
				adaptHeight();
			}
		}, 100);
		
		return false;
	});

})(jQuery);
