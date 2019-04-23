$.get("nav.html", function(data) {
  $("#nav-placeholder").replaceWith(data);
});

$(document).ready(function() {
  $('.container-text, .container-title').css('display', 'none');
  $('.container-text, .container-title').fadeIn(700);
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
});
