  



   var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 1
      }
    }
  });

  var swiper = new Swiper(".slider_img", {
    slidesPerView:3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 1.5
      }
    }
  });



  if ($(window).width() < 767) {

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,  
    });
     
    

 }

 

$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,  
});
 




$(".clickshow").click(function(){ 
 $("dshow").show();
});
 












































var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1
    },
    800: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 3
    }
  }
});
 
  /* jQuery
==================================================  
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});


*/
  

/*
//itinerary-section-tab
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});

 
 if ($(window).width() < 767) {

  $('.bolgs-slider').slick({
    slidesToShow: 1,
    arrow:true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });

 }


$('.bolgs-slider').slick({
  slidesToShow: 4,
  arrow:true,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 2000,
});


$('.banner-slide').slick({
  slidesToShow: 1,
  arrow:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.bolg-slider').slick({
  slidesToShow: 3,
  arrow:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



$('.all-employee').slick({
  slidesToShow:4,
  arrows:false,
  dots: true, 
  slidesToScroll: 1,  
  autoplay: true,
  autoplaySpeed: 2000,
});



$('.vertical-slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

*/



// function([string1, string2],target id,[color1,color2])    




