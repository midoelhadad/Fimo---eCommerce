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





