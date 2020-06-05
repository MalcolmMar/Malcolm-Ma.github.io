;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "slide",

			easing: "swing",
			direction: "vertical",

			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	// $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// $(window).resize(function(){
	  	// 	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// });

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		sliderMain();
		testimonialCarousel();
	});


}());
(function ($) {
	// USE STRICT
	"use strict";

	// Scroll Bar
	try {
		var jscr1 = $('.js-scrollbar1');
		if(jscr1[0]) {
			const ps1 = new PerfectScrollbar('.js-scrollbar1');
		}

		var jscr2 = $('.js-scrollbar2');
		if (jscr2[0]) {
			const ps2 = new PerfectScrollbar('.js-scrollbar2');

		}

	} catch (error) {
		console.log(error);
	}

})(jQuery);

(function ($) {
	// USE STRICT
	"use strict";

	// Dropdown
	try {
		var menu = $('.js-item-menu');
		var sub_menu_is_showed = -1;

		for (var i = 0; i < menu.length; i++) {
			$(menu[i]).on('click', function (e) {
				e.preventDefault();
				$('.js-right-sidebar').removeClass("show-sidebar");
				if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
					$(this).toggleClass('show-dropdown');
					sub_menu_is_showed = -1;
				}
				else {
					for (var i = 0; i < menu.length; i++) {
						$(menu[i]).removeClass("show-dropdown");
					}
					$(this).toggleClass('show-dropdown');
					sub_menu_is_showed = jQuery.inArray(this, menu);
				}
			});
		}
		$(".js-item-menu, .js-dropdown").click(function (event) {
			event.stopPropagation();
		});

		$("body,html").on("click", function () {
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove("show-dropdown");
			}
			sub_menu_is_showed = -1;
		});

	} catch (error) {
		console.log(error);
	}

	var wW = $(window).width();
	// Right Sidebar
	var right_sidebar = $('.js-right-sidebar');
	var sidebar_btn = $('.js-sidebar-btn');

	sidebar_btn.on('click', function (e) {
		e.preventDefault();
		for (var i = 0; i < menu.length; i++) {
			menu[i].classList.remove("show-dropdown");
		}
		sub_menu_is_showed = -1;
		right_sidebar.toggleClass("show-sidebar");
	});

	$(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
		event.stopPropagation();
	});

	$("body,html").on("click", function () {
		right_sidebar.removeClass("show-sidebar");

	});


	// Sublist Sidebar
	try {
		var arrow = $('.js-arrow');
		arrow.each(function () {
			var that = $(this);
			that.on('click', function (e) {
				e.preventDefault();
				that.find(".arrow").toggleClass("up");
				that.toggleClass("open");
				that.parent().find('.js-sub-list').slideToggle("250");
			});
		});

	} catch (error) {
		console.log(error);
	}


	try {
		// Hamburger Menu
		$('.hamburger').on('click', function () {
			$(this).toggleClass('is-active');
			$('.navbar-mobile').slideToggle('500');
		});
		$('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
			var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
			$(this).toggleClass('active');
			$(dropdown).slideToggle('500');
			return false;
		});
	} catch (error) {
		console.log(error);
	}
})(jQuery);

function switch_dark(){
	var cc = document.body.className;
	if(cc.indexOf('darktheme') > -1) {
		document.body.className = cc.replace('darktheme','');
		localStorage.setItem("theme", "daytheme");
		console.log('daytheme switch');
	} else{
		document.body.className += "darktheme";
		localStorage.setItem("theme", "darktheme");
		console.log('darktheme switch');
	}
}
function ej_code_theme(){
	var cc = document.body.className;
	var theme = localStorage.getItem("theme");
	if(theme === "daytheme"){
		document.body.className = cc.replace('darktheme','');
		console.log('day theme');
	}else{
		document.body.className += "darktheme";
		console.log('dark theme');
	}
}

let searchData = null
$(document).ready(function () {
	$.ajax({
		url: '/data/search.json',
		async: false,
		success: function (data) {
			searchData = data;
		}
	});
});

const searchListContainer = document.getElementById('DATALIST')
const searchInput = document.getElementById('ej-search-input');
let onSearch = false

searchInput.oninput = function (e) {
	if (searchInput.value !== '' && !onSearch) {
		for (let key in searchData) {
			const text = document.createTextNode(key);
			const ele = document.createElement("option");//创建一个html标签
			ele.appendChild(text);//在标签内添加文字
			searchListContainer.appendChild(ele);//将标签添加到页面中
		}
		onSearch = true
	}
}
searchInput.onkeyup = function (e) {
	if (e.key === 'Enter') {
		handleSearch()
	}
}
searchInput.onblur = function (e) {
	onSearch = false
}

function handleSearch() {
	if (searchInput.value !== '') {
		for (let key in searchData) {
			console.log(key.search(searchInput.value))
			if (key.search(searchInput.value) !== -1) {
				let currentURL = window.location.href;
				if (currentURL.indexOf('courses') !== -1) {
					window.location.href = searchData[key]
				} else {
					window.location.href = `courses/${searchData[key]}`
				}
				searchInput.value = ''
				break
			}
		}
	}
}

function handleSearchClick() {
	handleSearch()
}