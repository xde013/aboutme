 function copyToClipboard() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#email').text()).select();
        document.execCommand("copy");
        $temp.remove();
        Materialize.toast('Email copied to Clipboard!', 2000);
    };

  
  $( document ).ready(function(){
  	function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top ) {
   
        $('#sticky').addClass('fix');
         $('#first').css({'margin-top' : '65px'});
    } else {
      
        $('#sticky').removeClass('fix');
        $('#first').css({'margin-top' : '0px'});
    }
}
    $(".button-collapse").sideNav();

      $(".sub").typed({
        strings: [" an IT student", "a web developer", " an Android guy ", "a cool kid", "a saiyan", "a photographer"],
        typeSpeed: 30,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        startDelay: 1000,
        shuffle: true,
      });

      	$(window).scroll(sticky_relocate);
    	sticky_relocate();

    	
    	var feed = new Instafeed({

        get: 'user',
        userId: '346102260',
        accessToken: '346102260.1677ed0.637fa12e6936404c8816a3585aaa075d',
        target: 'carousel',
        sortBy: 'random',
        resolution: 'standard_resolution',
        template: '<a class="carousel-item" ><img src="{{image}}" /></a>',
        after: function () {
        	$('.carousel').carousel({
        		dist: '50'
        	});
        }
    });
    feed.run();
    $('.parallax').parallax();

   
  });
