jQuery(document).ready(function($) {
  
  $(".sub").typed({
        strings: [" an IT student..", "a web developer.", "an Android guy..", "a cool kid?", "a saiyan!", "a photographer.."],
        typeSpeed: 30,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        startDelay: 800,
        shuffle: true,
  });

  $(".button-collapse").sideNav();

 function sticky() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top ) {
         $('#sticky').addClass('fix');
         $('#title').css({'margin-top' : '64px'});
    } else {
        $('#sticky').removeClass('fix');
        $('#title').css({'margin-top' : '0px'});
    }
};

 $('#trigger').click(function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#email').text()).select();
        document.execCommand("copy");
        $temp.remove();
        Materialize.toast('Email copied to Clipboard!', 2000);
    });

 $(window).scroll(sticky);
  sticky();
  $('.parallax').parallax();

$('.scrollspy').scrollSpy();

});