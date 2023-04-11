// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  $(function() {
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".customHeader").addClass("activeHeader");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".customHeader").removeClass("activeHeader");
        }
    });
});

var swiper1 = new Swiper('.theBest .swiper-container', {
    spaceBetween: 1,
    slidesPerView: 3,
    // centeredSlides: true,
    // freeMode: true,
    // roundLengths: true,
    // loop: true,
    loopAdditionalSlides: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000
    },
 
    breakpoints: {
        300: {
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            loopedSlides: 1,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            loopedSlides: 3,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
            loopedSlides: 3,
        }
    },
});
$(document).ready(function(){
  $(".sectionDisplay").mouseover(function(){
    $(".sectionDisplay").stop().animate({
        top: '350px',
        width: '+=150px'
      });
    $(".btnView").css("display","block");
  });
  $(".sectionDisplay").mouseout(function(){
    $(".sectionDisplay").stop().animate({
        top: '-350px',
        width: '-=150px'
      });
      $(".btnView").css("display","none");
  });
})
// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 20) {
//         $(".customHeader").addClass("bgDark text-dark py-0");
//         } 
//         else {
//             //remove the background property so it comes transparent again (defined in your css)
//         $(".customHeader").removeClass("bgDark py-2");
//         }
// });