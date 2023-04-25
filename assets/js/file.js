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

var locations = [
  [
    `
    <div class="card mb-3 cardMap">
      <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
      <div class="card-body">
          <h6 class="fw-bold">Arc Triomphe</h6>
          <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
          <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
      </div>
    </div>
  `,
    -33.890542,
    151.274856,
    4,
  ],
  [
    `
    <div class="card mb-3 cardMap">
      <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
      <div class="card-body">
          <h6 class="fw-bold">Arc Triomphe</h6>
          <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
          <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
      </div>
    </div>
  `,
    -33.923036,
    151.259052,
    5,
  ],
  [
    `
    <div class="card mb-3 cardMap">
      <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
      <div class="card-body">
          <h6 class="fw-bold">Test Map</h6>
          <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
          <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
      </div>
    </div>
    `,
    -34.028249,
    151.157507,
    3,
  ],
  [
    `
    <div class="card mb-3 cardMap">
      <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
      <div class="card-body">
          <h6 class="fw-bold">Arc Triomphe</h6>
          <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
          <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
      </div>
    </div>
    `,
    -33.80010128657071,
    151.28747820854187,
    2,
  ],
  [
    ` 
    <div class="card mb-3 cardMap">
      <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
      <div class="card-body">
          <h6 class="fw-bold">Arc Triomphe</h6>
          <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
          <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
      </div>
    </div>
    `,
    -33.950198,
    151.259302,
    1,
  ],
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: new google.maps.LatLng(-33.92, 151.25),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers=[];

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
    markers.push(marker);
  }

  function myClick(id) {
    console.log(id)
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-33.950198,151.259302),
      content:  ` 
      <div class="card mb-3 cardMap">
        <a href="details.html"><img class="card-img imgExtraSmall imgLeft" src="assets/images/restaurant_1.jpg"></a>
        <div class="card-body">
            <h6 class="fw-bold">Arc Triomphe</h6>
            <p class="textWrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit Egypt is a heavy mass tourism country that receives millions of touris</p>
            <a href="tel:+201114205243" class="opacity-75 text-black text-decoration-none mb-0"><i class="fa fa-phone-alt pe-1"></i> +2 01114205243</a>
        </div>
      </div>
      `,
      map: map
    })
    google.maps.event.trigger(markers[id], 'click');
  }

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 20) {
//         $(".customHeader").addClass("bgDark text-dark py-0");
//         } 
//         else {
//             //remove the background property so it comes transparent again (defined in your css)
//         $(".customHeader").removeClass("bgDark py-2");
//         }
// });