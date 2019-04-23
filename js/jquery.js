$.get("nav.html", function(data) {
  $("#nav-placeholder").replaceWith(data);
});

$(document).ready(function() {
  $('.fadein-load').css('display', 'none');
  $('.fadein-load').fadeIn(1000);

  $(window).scroll(function() {
    $('.fadein').each(function(i) {

      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1'
        }, 700);
      }

    });
  });

  $(".collapsible-two").click(function() {
    $(".content-starostlivost").slideToggle("slow");
  });

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


});
