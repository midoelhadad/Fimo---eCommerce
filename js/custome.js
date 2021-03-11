console.log('test file');

$('.top-nav .nav-pages .language').each(function () {
  $(this).find('> .select').on('click', function () {
    $(this).next().slideToggle();
  });
  $(this).find('.option').on('click', function () {
    $('.top-nav .nav-pages .language > .select').html($(this).html()).next().slideUp();
  });
});


    $(document).click(function() {
    $(".top-nav .nav-pages .language").removeClass('open');
});

  /*===================================*
  2.  range widget
  *===================================*/
const slideValue = document.querySelector(".sidebar .widget .range .slidervalue span");
const inputSlider = document.querySelector(".sidebar .widget .range .field input");
if (slideValue && inputSlider) {
inputSlider.oninput = (() => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = ( () => {
  slideValue.classList.remove("show");
});
}
(function($){
  'use strict';

  /*===================================*
	3. PRODUCT COLOR JS
	*===================================*/
	$('.product_color_switch span').each(function() {
		var get_color = $(this).attr('data-color');
		$(this).css("background-color", get_color);
	});
	
	$('.product_color_switch span,.product_size_switch span').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
	

  // 	/*===================================*
	// 24. CHECKBOX CHECK THEN ADD CLASS JS
	// *===================================*/
	// $('.create-account,.different_address').hide();
	// $('#createaccount:checkbox').on('change', function(){
	// 	if($(this).is(":checked")) {
	// 		$('.create-account').slideDown();
	// 	} else {
	// 		$('.create-account').slideUp();
	// 	}
	// });
	// $('#differentaddress:checkbox').on('change', function(){
	// 	if($(this).is(":checked")) {
	// 		$('.different_address').slideDown();
	// 	} else {
	// 		$('.different_address').slideUp();
	// 	}
	// });


  $('.shorting_icon').on('click',function() {
		if ($(this).hasClass('grid')) {
			$('.shop_container').removeClass('list').addClass('grid');
			$(this).addClass('active').siblings().removeClass('active');
		}
		else if($(this).hasClass('list')) {
			$('.shop_container').removeClass('grid').addClass('list');
			$(this).addClass('active').siblings().removeClass('active');
		}
		$(".shop_container").append('<div class="loading_pr"><div class="mfp-preloader"></div></div>');
		setTimeout(function(){
			$('.loading_pr').remove();
			$container.isotope('layout');
		}, 800);
	});



/*===================================*
	24. NAVBAR HOVER ADD CLASS JS
*===================================*/


document.addEventListener('DOMContentLoaded', function () {
    var dropdownItem = document.querySelector('.navbar .navbar-collapse .navbar-nav .costom-hov ');
    var dropdown = document.querySelector('.navbar .navbar-collapse .navbar-nav .costom-hov .dropdown-menu');

    dropdownItem.addEventListener('mouseenter', function (e) {
        dropdown.classList.add('show');
    });
    dropdownItem.addEventListener('mouseleave', function () {
        dropdown.classList.remove('show');
		console.log("hover");
    })

});


/*===================================*
	24. NAVBAR HOVER ADD CLASS JS
*===================================*/
$('.nav-mob, .nav-mob *').on('click', function(e){
	e.preventDefault();
	return false;
});

})(jQuery);


