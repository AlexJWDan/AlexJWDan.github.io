var scrollTop;
var currentPage;
var cuurentPageClass;
var currentProjectClass;
var wW = $(window).width(); 
var count=0;
var X = (wW+17-40*2-72.5*2-10)/2;
var wH = $(window).height();

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("load",function(){
	$(".loader-wrapper").delay(1000).fadeOut("slow");
	// $(this).scrollTop(0);
	// $('body').addClass('showHello');
});

// if trouble with preambule check 338



//might want to move these from the document.ready...

$(document).ready(function(){

	window.scrollTo(0, 0);



	$('.navbar-toggle').click(function(){
		$('.menu-nav').toggleClass('active');
		$('body').toggleClass('menuOpen');
		return false;
	})
	$('.nav-sub').click(function(){
		$(this).siblings().removeClass('close');
		$(this).toggleClass('close');
		if ($('.nav-sub').hasClass('close')) {
			$('.menu-nav').toggleClass('go');
		}
		else {
			$('.menu-nav').removeClass('go');
		}
	})
	$('.nav-item').click(function(){
		$('.menu-nav').removeClass('active');
		$('body').removeClass('menuOpen');
	})











	initHome = function(){

		// console.log('Home Page initialised');
		// if($('body').hasClass('.page-home') && $(window.scrollY) < 10) {
		// 	$('body').addClass('showHello');
		// }

		$('body').addClass('showHello');
		// return false;
		

		///Animations preambule...
	};






	function initPage(pageClass){
		//shows red bar on active-> home

		$('.menu-nav .active').removeClass('active');
		$('.menu-nav li a.'+pageClass+'-link').addClass('active');

		//initCurrentPage;
		switch(pageClass) {
			case 'page-home':
		        initHome();
		        break;
		    // case 'page-projects':
		    //     initProjects();
		    //     break;
		    // case 'single-project':
			//     $('body').addClass('showProject');
		    //     initProject();
		    //     break;
		    // case 'page-careers':
		    //     initRecrutement();
		    //     break;
		    // case 'page-ideas':
		    // 	initIdeas();
		    //     break;
		    // case 'page-philo':
		    //     initPhilo();
		    //     break;
			// case 'single-annonce':
		    //     initAnnonce();
		    //     break;
		    default:
		        return;
		}



	};
	
	
	currentPage = $('main');
	var targetPageClass = currentPage.data('class');
	currentProjectColor = currentPage.data('color');
	$('body').addClass(targetPageClass).delay(800).queue(function(){

		initPage(targetPageClass);

	});
	


	window.addEventListener('scroll', () => {
		const scrollable = document.documentElement.scrollHeight - window.innerHeight;
		const scrolled = window.scrollY;
		var num = 1-$(window).scrollTop()/100 * 0.15;
		console.log(num);
		var nwW = $(window).width(); 

		// if (!$('body').hasClass('page-photo')) return;

		if(scrolled>=0 && num>=0.2) {
			$('.page-photo .intro .photo-intro .flag').css('transform', 'scale('+num+')');
			$('.page-photo .intro .photo-intro .flag').css('position', 'fixed');
			$('.page-photo .intro .photo-intro').removeClass('left');
			$('.page-code .intro .code-intro .flag').css('transform', 'scale('+num+')');
			$('.page-code .intro .code-intro .flag').css('position', 'fixed');
			$('.page-art .intro .art-intro .flag').css('transform', 'scale('+num+')');
			$('.page-art .intro .art-intro .flag').css('position', 'fixed');
			
			// $('.page-photo .intro .photo-bio').css('color', 'blue');

		}
		else if (num < 0.2) {
			$('.page-photo .intro .photo-intro .flag').css('transform', 'scale('+0.2+')');
			$('.page-photo .intro .photo-intro .flag').css('position', 'fixed');
			$('.page-photo .intro .photo-intro').addClass('left');
			$('.page-code .intro .code-intro .flag').css('transform', 'scale('+0.2+')');
			$('.page-code .intro .code-intro .flag').css('position', 'fixed');
			$('.page-art .intro .art-intro .flag').css('transform', 'scale('+0.2+')');
			$('.page-art .intro .art-intro .flag').css('position', 'fixed');
			
		}

		if (scrolled>=200) {
			$('.page-photo .intro .quick-list').css('visibility', 'hidden');
		}
		else {
			$('.page-photo .intro .quick-list').css('visibility', 'visible');
		}


		if (scrolled<=1000) {
			$('.page-photo .intro .quick-list').css('transform', 'scale('+ num +')');
			$('.page-code .intro .quick-list').css('transform', 'translateX('+ scrolled*3 +'px)');
			$('.page-art .intro .quick-list').css('transform', 'translateX('+ scrolled*1.2 +'px)');
		}
		else if (scrolled>1000) {
			// $('.page-photo .intro .quick-list').css('transform', 'translateX('+ -1000*3 +'px)');
			$('.page-code .intro .quick-list').css('transform', 'translateX('+ 1000*3 +'px)');
			$('.page-art .intro .quick-list').css('transform', 'translateX('+ 1000*1.2 +'px)');
		}

		// scrolled/wH used to keep fade constant at different dimension screens
		if ($("body").hasClass("page-art")) { 
			var wrapOneTop = $('.page-art .intro .art-bio .wrapper .one').offset().top + $('.page-art .intro .art-bio .wrapper .one').outerHeight()/2;
			var flagBot = $('.page-art .intro .art-intro .flag').offset().top + $('.page-art .intro .art-intro .flag').outerHeight();
			var wrapTwoTop = $('.page-art .intro .art-bio .wrapper .two').offset().top + $('.page-art .intro .art-bio .wrapper .two').outerHeight()/2 + 100;
			// console.log($('.page-art .intro .art-bio .wrapper .one').offset().top);
			console.log($('.page-art .intro .art-intro .flag').offset().top + $('.page-art .intro .art-intro .flag').height());

			if (wrapOneTop <= flagBot){
				$('.page-art .intro .art-bio .wrapper .one').addClass('go');
			}
			else if (wrapOneTop > flagBot) {
				$('.page-art .intro .art-bio .wrapper .one').removeClass('go');
			}
			
			if (wrapTwoTop <= flagBot) {
				$('.page-art .intro .art-bio .wrapper .two').addClass('go');
			}
			else if (wrapTwoTop > flagBot) {
				$('.page-art .intro .art-bio .wrapper .two').removeClass('go');
			}
		}

		// for appearance and color of scrollup arrow

		if ($("body").hasClass("page-home")) {
			const abouttop = $(".page-home #about-me").offset().top;
			const aboutbot = $(".page-home #about-me").offset().top + $(".page-home #about-me").innerHeight();
			const pptop = $(".page-home #pp").offset().top;
			const ppbot = $(".page-home #pp").offset().top + $("#pp").innerHeight();
			var scrollpos = scrolled-60+wH;

			if (scrolled <10) {
				$('header.header span.scrollup').removeClass('show');
			}
			else {
				$('header.header span.scrollup').addClass('show');
			}

			if ((scrollpos >= abouttop && scrollpos <= aboutbot) || (scrollpos >= pptop && scrollpos <= ppbot)) {
				$('header.header span.scrollup').addClass('color');
			}
			else {
				$('header.header span.scrollup').removeClass('color');
			}
		console.log(abouttop);
		console.log(scrollpos);
		console.log(aboutbot);
		console.log($("#about-me").innerHeight());
		}
		if ($("body").hasClass("page-art") || $("body").hasClass("page-photo")) {
			// const abouttop = $(".page-home #about-me").offset().top;
			// const aboutbot = $(".page-home #about-me").offset().top + $(".page-home #about-me").innerHeight();
			// const pptop = $(".page-home #pp").offset().top;
			// const ppbot = $(".page-home #pp").offset().top + $("#pp").innerHeight();
			// var scrollpos = scrolled-60+wH;

			if (scrolled <10) {
				$('header.header span.scrollup').removeClass('show');
			}
			else {
				$('header.header span.scrollup').addClass('show');
			}

		// 	if ((scrollpos >= abouttop && scrollpos <= aboutbot) || (scrollpos >= pptop && scrollpos <= ppbot)) {
		// 		$('header.header span.scrollup').addClass('color');
		// 	}
		// 	else {
		// 		$('header.header span.scrollup').removeClass('color');
		// 	}
		// console.log(abouttop);
		// console.log(scrollpos);
		// console.log(aboutbot);
		// console.log($("#about-me").innerHeight());
		}

		if ($("body").hasClass("page-code")) { 
			if (scrolled <30 && nwW > 767) {
				$('.inner').addClass('hover')
			}
			else {
				$('.inner').removeClass('hover');
			}
		}

		// if ($(".lazyload-wrapper").isInViewport()) {
		// 	$(".lazyload-wrapper").addClass('loaded');
		// 	$(".lazyload-wrapper").addClass('animate--init');
		// }
		$('.lazyload-wrapper').each(function(i, el){

			if ($(this).isInViewport()) {
				$(this).addClass('loaded');
				$(this).addClass('animate--init');
				// console.log($(this).isInViewport());
				
			} 
		})
		$('.animate--me').each(function(i, el){

			if ($(this).isInViewport()) {
				$(this).addClass('loaded');
				$(this).addClass('animate--init');
				
			} 
		})


		

		console.log(scrolled);
		// console.log($(".header .scrollUp").offset());
		
		// console.log(scrolled/wH);
		// console.log(wH);
		// console.log(window.scrollY);
		// console.log(scrolled)

		// if (scrolled >= scrollable) {
		// 	alert('You\'ve reached the bottom!');
		// }

	});

	if ($("body").hasClass("page-code")) { 
		if (wW > 767) {
			$('.inner').addClass('hover')
		}
		else {
			$('.inner').removeClass('hover');
		}
	}

	window.addEventListener('scroll', () => {
		const scrolled = window.scrollY;
		var top = 1 - $(window).scrollTop()/900;
		
		// console.log($(window).scrollTop());

		if (!$('body').hasClass('page-home')) return;
		// scrollAmount = $(window).scrollTop();

		//animation Preambule
		if (scrolled > 10 && $('body').hasClass('showHello') ) {
			$('body').removeClass('showHello');
			// return false;
		}
		else if (scrolled <= 10 && !$('body').hasClass('showHello')){
				$('body').addClass('showHello');
			// return false;
		}

		// if (!$('body').hasClass('page-home') || wW < 768 ) {
		// 	return;
		// }
		if (!$('body').hasClass('showHello') && count<2) {
			setTimeout(function() {
				Portfolio.typeAnimation()} ,1500);
			count= count+1;
			console.log(count);
		}
		if(scrolled> 9 && scrolled< 1412) {
			$('.page-home section.preambule .preambule-scrolldown svg').css('transform', 'scale('+top+')');
			console.log(top);
			var X = (wW+17-40*2-72.5*2-20)/2;
			// console.log(scrolled);
			
			// console.log(wH);
			// console.log(TransY);
		}
		

		TransY = (2500-scrolled)/1200 * 100;
		$('.page-home #aim .logo-fox .pic').css('transform','translateY('+TransY+'px)')


	});
	// 1007 is 1024-17
	if(wW > 1013) {
			$('.page-home #about-me .profile-photo .pic').css('width',''+X+'px');
	}


	window.addEventListener('resize', () => {
		var wA = $(window).width(); 
		var Y = (wA+17-40*2-72.5*2-20)/2;

		if(wA >1013 ) {
			$('.page-home #about-me .profile-photo .pic').css('width',''+Y+'px');
		}
		else {
			$('.page-home #about-me .profile-photo .pic').css('width',''+327+'px');
		}
		
	});

	// window.addEventListener('click', function() {
	// 	$('.page-photo .intro .photo-intro .flag').css('transform', 'scale('+0.2+')');
	// 	$('.page-photo .intro .photo-intro .flag').css('position', 'fixed');
	// }, false);

	//Above doesnt work to decrease flag when skip to clicked as click in not defined
	
	$('.page-photo .intro .quick-list ul li span').click(function() {
		$('.page-photo .intro .photo-intro .flag').css('transform', 'scale('+0.2+')');
		$('.page-photo .intro .photo-intro .flag').css('position', 'fixed');

	});

	$('.page-photo .intro .photo-intro .flag').click(function() {
		window.scrollTo(0, 0);
		
	});

	$('.page-code .intro .quick-list ul li span').click(function() {
		$('.page-code .intro .code-intro .flag').css('transform', 'scale('+0.2+')');
		$('.page-code .intro .code-intro .flag').css('position', 'fixed');

	});

	$('.page-code .intro .code-intro .flag').click(function() {
		window.scrollTo(0, 0);
		
	});

	$('.page-art .intro .quick-list ul li span').click(function() {
		$('.page-art .intro .art-intro .flag').css('transform', 'scale('+0.2+')');
		$('.page-art .intro .art-intro .flag').css('position', 'fixed');

	});

	$('.page-art .intro .art-intro .flag').click(function() {
		window.scrollTo(0, 0);
		
	});


	//failed attempt of animation transition between interests and home

	// $('.page-home #pp .wrapper .pp-list .wrapper-mask').click(function() {
	// 	$(this).css('transform', 'scale('+1000+')');
	// 	$('.page-home #pp .wrapper .pp-list .wrapper-mask:hover .photo-wrapper').css('opacity', '0');
	// });












	



})


const Portfolio = function(){
	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"trying to learn to code.", "learning to use CAD.", "a fan of technology.", "a fan of art.", "making a website!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#FF7F50"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		// displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}
}();

// Portfolio.displayWordCloud();
// Portfolio.typeAnimation();

// if (!$('body').hasClass('showHello')) {
// 	Portfolio.typeAnimation();
// 	count= count+1;
// 	console.log(count);
// }