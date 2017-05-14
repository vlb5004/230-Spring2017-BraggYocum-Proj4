$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		navigation: true,
		navigationPosition: 'right',
		//Scrolling
		css3: true,
		scrollingSpeed: 600,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
        
        // anchors
        anchors:['first', 'second', 'third'],
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            //fire animations for first wonder
            if(anchorLink == 'first'){
                caseOneAnimations();
            }

            //fire animations for second wonder
            if(anchorLink == 'second'){
                caseTwoAnimations();
            }
            
            //fire animations for third wonder
            if(anchorLink == 'third'){
                caseThreeAnimations();
            }
        },
        
	});
});


// variables for first wonder

var image1 = $('.area .image1');

// setup animations to be fired on first wonder
var caseOneAnimations = (function() {
    
    setTimeout(function() { 
        image1.addClass('visible'); 
    }, 150);
});


// variables for second wonder

var image2 = $('.area .image2');


// setup animations to be fired on second wonder

var caseTwoAnimations = (function() {
    
    setTimeout(function() { 
        image2.addClass('visible'); 
    }, 150);
});



// variables for third wonder

var image3 = $('.area .image3');


// setup animations to be fired on third wonder

var caseThreeAnimations = (function() {
    
   setTimeout(function() { 
        image3.addClass('visible'); 
    }, 150);
});






