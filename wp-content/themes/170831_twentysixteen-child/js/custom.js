( function( $ ) {

// MOBILE MENU

$(document).ready(function() {
	$('.m-nav-open').click(function () {
		$('#m-menu').css({
			'left': 0,
			'background-color': 'rgba(74,74,74,1)'
		});
	});

	$('.m-nav-close').click(function () {
		$('#m-menu').css({
			'left': '-100vw',
			'background-color': 'rgba(74,74,74,0)'
		});
	});



// DESKTOP FOOTER ICON HOVER
	$('.img-download-android').mouseenter(function (){
		$('.desktop-android-hover').css({'opacity': 1, 'height': '18px'})
	});
	$('.img-download-android').mouseleave(function (){
		$('.desktop-android-hover').css({'opacity': 0, 'height': '0px'})
	});
	$('.fa-youtube-play').mouseenter(function (){
		$('.desktop-youtube-hover').css({'opacity': 1, 'height': '18px'})
	});
	$('.fa-youtube-play').mouseleave(function (){
		$('.desktop-youtube-hover').css({'opacity': 0, 'height': '0px'})
	});
	$('.fa-facebook-square').mouseenter(function (){
		$('.desktop-facebook-hover').css({'opacity': 1, 'height': '18px'})
	});
	$('.fa-facebook-square').mouseleave(function (){
		$('.desktop-facebook-hover').css({'opacity': 0, 'height': '0px'})
	});
	$('.fa-envelope').mouseenter(function (){
		$('.desktop-envelope-hover').css({'opacity': 1, 'height': '18px'})
	});
	$('.fa-envelope').mouseleave(function (){
		$('.desktop-envelope-hover').css({'opacity': 0, 'height': '0px'})
	});


// DESKTOP HEADER CLICK EVENT
	$('#click-terms').click(function () {
		$('#desktop-terms-and-conditions').removeClass("desktop-pop-up-hide");
		$('#desktop-terms-and-conditions').addClass("desktop-pop-up-show");
	});

	$('#click-privacy').click(function () {
		$('#desktop-privacy-policy').removeClass("desktop-pop-up-hide");
		$('#desktop-privacy-policy').addClass("desktop-pop-up-show");
	});

	$('#desktop-terms-close').click(function () {
		$('#desktop-terms-and-conditions').removeClass("desktop-pop-up-show");
		$('#desktop-terms-and-conditions').addClass("desktop-pop-up-hide");
	});

	$('#desktop-privacy-close').click(function () {
		$('#desktop-privacy-policy').removeClass("desktop-pop-up-show");
		$('#desktop-privacy-policy').addClass("desktop-pop-up-hide");
	});

// MOBILE LEGAL TAP EVENT
	$('.m-footer-legal-terms-kor').click(function () {
		$('.m-footer-legal-terms-kor-text').removeClass("mobile-pop-up-hide");
		$('.m-footer-legal-terms-kor-text').addClass("mobile-pop-up-show");
	});

	$('.mobile-pop-up-btn-close-terms-kor').click(function () {
		$('.m-footer-legal-terms-kor-text').removeClass("mobile-pop-up-show");
		$('.m-footer-legal-terms-kor-text').addClass("mobile-pop-up-hide");
	});

	$('.m-footer-legal-privacy-kor').click(function () {
		$('.m-footer-legal-privacy-kor-text').removeClass("mobile-pop-up-hide");
		$('.m-footer-legal-privacy-kor-text').addClass("mobile-pop-up-show");
	});

	$('.mobile-pop-up-btn-close-privacy-kor').click(function () {
		$('.m-footer-legal-privacy-kor-text').removeClass("mobile-pop-up-show");
		$('.m-footer-legal-privacy-kor-text').addClass("mobile-pop-up-hide");
	});

	$('.m-footer-legal-terms-eng').click(function () {
		$('.m-footer-legal-terms-eng-text').removeClass("mobile-pop-up-hide");
		$('.m-footer-legal-terms-eng-text').addClass("mobile-pop-up-show");
	});

	$('.mobile-pop-up-btn-close-terms-eng').click(function () {
		$('.m-footer-legal-terms-eng-text').removeClass("mobile-pop-up-show");
		$('.m-footer-legal-terms-eng-text').addClass("mobile-pop-up-hide");
	});

	$('.m-footer-legal-privacy-eng').click(function () {
		$('.m-footer-legal-privacy-eng-text').removeClass("mobile-pop-up-hide");
		$('.m-footer-legal-privacy-eng-text').addClass("mobile-pop-up-show");
	});

	$('.mobile-pop-up-btn-close-privacy-eng').click(function () {
		$('.m-footer-legal-privacy-eng-text').removeClass("mobile-pop-up-show");
		$('.m-footer-legal-privacy-eng-text').addClass("mobile-pop-up-hide");
	});	
});


// CHAT BUBBLE auto-sizing

$(document).ready(function() {
	$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
		'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
	});
	$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
		'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
	});
	$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
		'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
	});
	$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
		'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
	});
});



// FULLPAGE

$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
			// menu: '#menu',
			// lockAnchors: false,
			// anchors:['firstPage', 'secondPage'],
			// navigation: true,
			// navigationPosition: 'right',
			// navigationTooltips: ['firstSlide', 'secondSlide'],
			// showActiveTooltip: false,
			// slidesNavigation: false,
			// slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 900,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 800,
		scrollBar: false,
		easing: 'ease',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
			// fadingEffect: false,
			// normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
			// controlArrows: true,
			// verticalCentered: true,
			// sectionsColor : ['#ccc', '#fff'],
			// paddingTop: '3em',
			// paddingBottom: '10px',
			// fixedElements: '#header, .footer',
			// responsiveWidth: 0,
			// responsiveHeight: 0,
			// responsiveSlides: false,
			// parallax: false,
			// parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: false,

		//events		

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			if(index == 1){
				// MOBILE chat bubble - Default
					window.setTimeout(function () {
						$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
							'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
						});
						$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
							'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
						});
						$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
							'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
						});
						$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
							'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
						});
						$('#m-dialog, #desktop-dialog').css({
							'left': 0, 'opacity': 1
						});
					}, 0);

				// MOBILE chat bubble - 00
					window.setTimeout(function () {
	    				$('#m-content-text-eng, #desktop-content-text-eng').html('Hi ! I am Jun, a founder of Myriels.<br>This app is created to make your mobile contacts visible and real.');
	    				$('#m-content-text-kor, #desktop-content-text-kor').html('안녕하세요! 저는 마이리엘을 창안한 신우준이라고 합니다.<br>저희 앱은 휴대폰 연락처를 시각화하여 실제 인맥처럼 관리하기 용이하게 하기 위해 개발했습니다.');
			
						$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
							'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
						});
						$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
							'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
						});
						$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
							'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
						});
						$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
							'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
						});
					}, 800);

				// MOBILE bg-img pos - 00
					$('.m-img-pos-00').css({
						'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-01').css({
						'top': '25%', 'left': '25%', 'opacity': 1
					});
					$('.m-img-pos-02').css({
						'top': '55%', 'left': '80%', 'opacity': 0.4
					});
					$('.m-img-pos-03', '.m-img-pos-04', '.m-img-pos-05', '.m-img-pos-06', '.m-img-pos-07').css({
						'top': '100vh', 'left': '100vw', 'opacity': 0
					});

				// MOBILE transition delay - 00
					$('#img-contents .img-scr-a').removeClass("m-img-trans-00");
					$('#img-contents .img-scr-b').removeClass("m-img-trans-01");
					$('#img-contents .img-scr-c').removeClass("m-img-trans-02");
					$('#img-contents .img-scr-d').removeClass("m-img-trans-03");

					$('#img-contents .img-scr-z').addClass("m-img-trans-00");
					$('#img-contents .img-scr-a').addClass("m-img-trans-01");
					$('#img-contents .img-scr-b').addClass("m-img-trans-02");
					$('#img-contents .img-scr-c').addClass("m-img-trans-03");

				// DESKTOP img pos - 00
					$('.desktop-atoz-dummies').css({'left': '-21.35em', 'opacity': 1});
					$('.desktop-atoz-position').css({'top': 0});
					$('.img-desktop-mobile-wireframe-knob').css({'top': 0});
			}

			if(index ==2){
				// MOBILE chat bubble - 01
					$('#m-content-text-eng, #desktop-content-text-eng').html('You have but barely use a phone "book" in the mobile.<br>You know what it is like to use A-Z list of the contacts.');
					$('#m-content-text-kor, #desktop-content-text-kor').html('곰곰히 생각보면, 우리는 휴대폰 기본 연락처 기능을 잘 사용하지 않습니다.<br>그 원인은 고전적인 정렬 방식인 ㄱ-ㅎ 방식에서 찾을 수 있죠.');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 01
					$('#img-contents .img-scr-a').removeClass("m-img-trans-01");
					$('#img-contents .img-scr-b').removeClass("m-img-trans-02");
					$('#img-contents .img-scr-c').removeClass("m-img-trans-03");

					$('#img-contents .img-scr-a').addClass("m-img-trans-00");
					$('#img-contents .img-scr-b').addClass("m-img-trans-01");
					$('#img-contents .img-scr-c').addClass("m-img-trans-02");
					$('#img-contents .img-scr-d').addClass("m-img-trans-03");
			}

			if(index ==3){
				// MOBILE chat bubble - 02
					$('#m-content-text-eng, #desktop-content-text-eng').html('Dull, bland, and infinite scrolling.<br>Messy with a bunch of useless contacts, the unknown and old.');
					$('#m-content-text-kor, #desktop-content-text-kor').html('따분하고 반복적인 무한 스크롤 방식이며, 누군지도 모르는 연락처, 오래된 연락처 등 <br>불필요한 연락처들을 필요한 연락처들과 똑같은 방법으로 특징없이 나열되어 있기 때문입니다.');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 02
					$('#img-contents .img-scr-b').removeClass("m-img-trans-01");
					$('#img-contents .img-scr-c').removeClass("m-img-trans-02");
					$('#img-contents .img-scr-d').removeClass("m-img-trans-03");

					$('#img-contents .img-scr-b').addClass("m-img-trans-00");
					$('#img-contents .img-scr-c').addClass("m-img-trans-01");
					$('#img-contents .img-scr-d').addClass("m-img-trans-02");
					$('#img-contents .img-scr-e').addClass("m-img-trans-03");

			}
			
			if(index ==4){
				// MOBILE chat bubble - 03
					$('#m-content-text-eng, #desktop-content-text-eng').html('You have every reason to get your contacts out of the book<br>but no other choice.');
					$('#m-content-text-kor, #desktop-content-text-kor').html('그래서 다양한 방법으로 연락처를 구별하려 하지만 이렇다할 방법을 찾기 힘듭니다.');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 03
					$('#img-contents .img-scr-c').removeClass("m-img-trans-01");
					$('#img-contents .img-scr-d').removeClass("m-img-trans-02");
					$('#img-contents .img-scr-e').removeClass("m-img-trans-03");

					$('#img-contents .img-scr-c').addClass("m-img-trans-00");
					$('#img-contents .img-scr-d').addClass("m-img-trans-00");
					$('#img-contents .img-scr-e').addClass("m-img-trans-00");

					$('.img-m-scr-01').addClass("m-img-trans-04");
					$('.img-myriels-bg-01').addClass("m-img-trans-05");
					
				// DESKTOP MOBILE WIREFRAME - 00
					$('.desktop-a-to-z-screen').addClass("desktop-transition-03");
			}

			if(index ==5){
				// MOBILE chat bubble - 04
					$('#m-content-text-eng, #desktop-content-text-eng').html('Not any more. Bring your squad in here, Myriels.<br>Visualizing your contacts on your own network map.');
					$('#m-content-text-kor, #desktop-content-text-kor').html('하지만 마이리엘을 사용하면 인맥을 다시 찾을 수 있습니다.<br>시각적으로 인맥을 보여주므로 당신만의 네트워크 맵을 확인해보세요.');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 04
					$('.img-m-scr-01').removeClass("m-img-trans-04");
					$('.img-m-scr-01').addClass("m-img-trans-06");
					$('.img-m-scr-02').addClass("m-img-trans-06");

					$('.img-bg-myriels-map-01').removeClass("m-img-trans-05");
					$('.img-bg-myriels-map-01').addClass("m-img-trans-06");
					
			}

			if(index ==6){
				// MOBILE chat bubble - 05
					$('#m-content-text-eng, #desktop-content-text-eng').html('Discovering which contact is essential to you.');
					$('#m-content-text-kor, #desktop-content-text-kor').html('마이리엘은 여러분의 중요한 인맥을 재조명하는 기회를 제공합니다.');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 05
					$('.img-m-scr-03').addClass("m-img-trans-06");
			}



			if(index ==7){
				// MOBILE chat bubble - 06
					$('#m-content-text-eng, #desktop-content-text-eng').html('100 % auto-grouping your contacts into real squads.<br>No Sweat!');
					$('#m-content-text-kor, #desktop-content-text-kor').html('또한, 여러분의 인맥을 분석하여 자동으로 그룹을 생성합니다.<br>대단하죠!');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE transition delay - 06

			}

			if(index ==8){
				// MOBILE chat bubble - 06
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('&nbsp;');
				
					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
			}

		},

		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			if(index == 1 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 01
					$('.m-img-pos-00').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0
					});
					$('.m-img-pos-01').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-02').css({
							'top': '25%', 'left': '25%', 'opacity': 1, 'width': '50%', 'height': '50%'
					});
					$('.m-img-pos-03').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4
					});

				// DESTKOP img pos - 01
					$('.desktop-atoz-dummies').removeClass("desktop-transition-03");
					$('.desktop-atoz-dummies').addClass("desktop-transition-01");

					$('.desktop-atoz-position').css({'top': '-100%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '1em'});
					$('.desktop-atoz-dummies').css({'left': '-40.75em'});
			}

			if(index == 2 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 02
					$('.m-img-pos-01').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0
					});
					$('.m-img-pos-02').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-03').css({
							'top': '25%', 'left': '25%', 'opacity': 1, 'width': '50%', 'height': '50%'
					});
					$('.m-img-pos-04').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4
					});

				// DESTKOP img pos - 02
					$('.desktop-atoz-position').css({'top': '-200%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '2em'});
					$('.desktop-atoz-dummies').css({'left': '-60.15em'});
			}

			if(index == 3 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 03
					$('.m-img-pos-02').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0
					});
					$('.m-img-pos-03').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-04').css({
							'top': '25%', 'left': '25%', 'opacity': 1, 'width': '50%', 'height': '50%'
					});
					$('.m-img-pos-05').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4
					});

				// DESTKOP img pos - 03
					$('.desktop-atoz-position').css({'top': '-300%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '3em'});
					$('.desktop-atoz-dummies').css({'left': '-79.55em'});
			}

			if(index == 4 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 04
					$('.m-img-pos-03').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0
					});
					$('.m-img-pos-04').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0
					});
					$('.m-img-pos-05').css({
							'top': '-50vh', 'left': '-50vw', 'opacity': 0, 'width': '50%', 'height': '50%'
					});

					$('.img-m-scr-01').css({
						'opacity': 1,
						'top': '12.5%'
					});

					$('.img-bg-myriels-map-01').removeClass("img-position-myriels-bg-01");
					$('.img-bg-myriels-map-01').addClass("img-position-myriels-bg-02");

					$('.img-bg-myriels-map-01').css({'opacity': 1});

				// DESKTOP MOBILE WIREFRAME - 01
					$('.desktop-atoz-dummies').removeClass("desktop-transition-01");
					$('.desktop-atoz-dummies').addClass("desktop-transition-02");

					$('.desktop-atoz-dummies').css({'left': '-600%'});
					$('.desktop-a-to-z-screen, .img-desktop-mobile-wireframe-knob, .img-desktop-mobile-wireframe-track').css({'opacity': 0});
					$('.desktop-myriels-screen-contents, .img-desktop-myriels-stage-01, .img-desktop-myriels-networkmap-01').css({'opacity': 1});
			}

			if(index == 5 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 05
					$('.img-m-scr-01').css({'opacity': 0});
					$('.img-bg-myriels-map-01').css({'opacity': 0});

					$('.img-m-scr-02').css({'opacity': 1});
					$('.img-bg-myriels-map-02').css({'opacity': 1});

				// DESKTOP MOBILE WIREFRAME - 02
					$('.img-desktop-myriels-stage-01, .img-desktop-myriels-networkmap-01').css({'opacity': 0});
					$('.img-desktop-myriels-stage-02, .img-desktop-myriels-networkmap-02').css({'opacity': 1});
			}

			if(index == 6 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 06

					$('.img-m-scr-02').css({'opacity': 0});
					$('.img-bg-myriels-map-02').css({'opacity': 0});

					$('.img-m-scr-03').css({'opacity': 1});
					$('.img-bg-myriels-map-03').css({'opacity': 1});

				// DESKTOP MOBILE WIREFRAME - 03
					$('.img-desktop-myriels-stage-02, .img-desktop-myriels-networkmap-02').css({'opacity': 0});
					$('.img-desktop-myriels-stage-03, .img-desktop-myriels-networkmap-03').css({'opacity': 1});
			}

			if(index == 7 && direction =='down'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE chat bubble - change position
					$('#m-dialog, #desktop-dialog').css({'left': '-38vw'});

				// DESKTOP CONTENTS HIDE
					$('#desktop-logo-wrap').css({'top': '-14%'});
					$('#desktop-footer').css({'bottom': '-8.75em'});
				// DESKTOP IMAGE
					$('.img-bg-cover-02').css({'opacity': 1});
				// DESKTOP MOBILE WIREFRAME - 03
					$('.img-desktop-myriels-stage-03, .img-desktop-myriels-networkmap-03').css({'opacity': 0});	
			}

			if(index == 2 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				$('#m-dialog, #desktop-dialog').css({
					'left': '-20vw', 'opacity': 0
				});

				// MOBILE bg-img pos - 00
					$('.m-img-pos-00').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-01').css({
							'top': '25%', 'left': '25%', 'opacity': 1
					});
					$('.m-img-pos-02').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4, 'width': '65%', 'height': '65%'
					});
					$('.m-img-pos-03').css({
							'top': '100vh', 'left': '100vw', 'opacity': 0
					});

				// DESKTOP img pos - 00

					$('.desktop-atoz-dummies').css({'left': '-21.35em'});
					$('.desktop-atoz-position').css({'top': 0});
					$('.img-desktop-mobile-wireframe-knob').css({'top': 0});					
			}

			if(index == 3 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 01
					$('.m-img-pos-01').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-02').css({
							'top': '25%', 'left': '25%', 'opacity': 1
					});
					$('.m-img-pos-03').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4, 'width': '65%', 'height': '65%'
					});
					$('.m-img-pos-04').css({
							'top': '100vh', 'left': '100vw', 'opacity': 0
					});

				// DESTKOP img pos - 01
					$('.desktop-atoz-position').css({'top': '-100%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '1em'});
					$('.desktop-atoz-dummies').css({'left': '-40.75em'});					
			}

			if(index == 4 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 02
					$('.m-img-pos-02').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-03').css({
							'top': '25%', 'left': '25%', 'opacity': 1
					});
					$('.m-img-pos-04').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4, 'width': '65%', 'height': '65%'
					});
					$('.m-img-pos-05').css({
							'top': '100vh', 'left': '100vw', 'opacity': 0
					});

				// DESTKOP img pos - 02
					$('.desktop-atoz-dummies').removeClass("desktop-transition-03");
					$('.desktop-atoz-dummies').addClass("desktop-transition-01");

					$('.desktop-atoz-position').css({'top': '-200%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '2em'});
					$('.desktop-atoz-dummies').css({'left': '-60.15em'});
			}

			if(index == 5 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 03
					$('.m-img-pos-03').css({
							'top': '1.5em', 'left': '0.5em', 'opacity': 0.4
					});
					$('.m-img-pos-04').css({
							'top': '25%', 'left': '25%', 'opacity': 1
					});
					$('.m-img-pos-05').css({
							'top': '55%', 'left': '80%', 'opacity': 0.4, 'width': '65%', 'height': '65%'
					});

					$('.img-m-scr-01').css({
						'opacity': 0,
						'top': '100%'
					});

					$('.img-bg-myriels-map-01').addClass("img-position-myriels-bg-01");
					$('.img-bg-myriels-map-01').removeClass("img-position-myriels-bg-02");

					$('.img-bg-myriels-map-01').css({'opacity': 0});

				// DESTKOP img pos - 03

					$('.desktop-atoz-position').css({'top': '-300%'});
					$('.img-desktop-mobile-wireframe-knob').css({'top': '3em'});
					$('.desktop-atoz-dummies').css({'left': '-79.55em'});

					$('.desktop-a-to-z-screen, .img-desktop-mobile-wireframe-knob, .img-desktop-mobile-wireframe-track').css({'opacity': 1});

					$('.desktop-myriels-screen-contents, .img-desktop-myriels-stage-01, .img-desktop-myriels-networkmap-01').css({'opacity': 0});
			}

			if(index == 6 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 04
					$('.img-m-scr-01').css({'opacity': 1});
					$('.img-bg-myriels-map-01').css({'opacity': 1});

					$('.img-m-scr-02').css({'opacity': 0});
					$('.img-bg-myriels-map-02').css({'opacity': 0});

				// DESKTOP MOBILE WIREFRAME - 02
					$('.img-desktop-myriels-stage-01, .img-desktop-myriels-networkmap-01').css({'opacity': 1});
					$('.img-desktop-myriels-stage-02, .img-desktop-myriels-networkmap-02').css({'opacity': 0});					
			}	

			if(index == 7 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE bg-img pos - 05
					$('.img-m-scr-02').css({'opacity': 1});
					$('.img-bg-myriels-map-02').css({'opacity': 1});

					$('.img-m-scr-03').css({'opacity': 0});
					$('.img-bg-myriels-map-03').css({'opacity': 0});

				// DESKTOP MOBILE WIREFRAME - 03
					$('.img-desktop-myriels-stage-02, .img-desktop-myriels-networkmap-02').css({'opacity': 1});
					$('.img-desktop-myriels-stage-03, .img-desktop-myriels-networkmap-03').css({'opacity': 0});
			}

			if(index == 8 && direction =='up'){
				// MOBILE chat bubble - loading
					$('#m-content-text-eng, #desktop-content-text-eng, #m-content-text-kor, #desktop-content-text-kor').html('.........');

					$('#m-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-a').height() +$('#m-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#m-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#m-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#m-dialog .m-chat-bubble-contents').outerHeight() - ( $('#m-dialog .img-bg-chat-bubble-fixed-b').height() + $('#m-dialog .img-bg-chat-bubble-fixed-d').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-l-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-a').height() +$('#desktop-dialog .img-bg-chat-bubble-fixed-arr').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-c').height() )
					});
					$('#desktop-dialog .img-bg-chat-bubble-flex-r-h').css({
						'height': $('#desktop-dialog .m-chat-bubble-contents').outerHeight() - ( $('#desktop-dialog .img-bg-chat-bubble-fixed-b').height() + $('#desktop-dialog .img-bg-chat-bubble-fixed-d').height() )
					});

				// MOBILE chat bubble - change position
					$('#m-dialog, #desktop-dialog').css({'left': 0});

				// DESKTOP CONTENTS SHOW
					$('#desktop-logo-wrap').css({'top': 0});
					$('#desktop-footer').css({'bottom': 0});
				// DESKTOP IMAGE
					$('.img-bg-cover-02').css({'opacity': 0});
				// DESKTOP MOBILE WIREFRAME - 03
					$('.img-desktop-myriels-stage-03, .img-desktop-myriels-networkmap-03').css({'opacity': 1});	
			}

		}
	});
});

})(jQuery);