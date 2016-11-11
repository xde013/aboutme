var feed = new Instafeed({
        get: 'user',
        userId: '346102260',
        accessToken: '346102260.1677ed0.637fa12e6936404c8816a3585aaa075d',
        useHttp: 'true',
        target: 'carousel',
        limit: 8,
        template: '<a class="carousel-item" ><img src="{{image}}" /></a>',
        after: function () {
          $('.carousel').carousel({
            dist: '50'
          });
        }
    });
    feed.run();   
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