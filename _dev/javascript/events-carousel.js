/********************************************************
roundtable carousel on landing page
********************************************************/

$(document).ready(() => {

  const roundtableImage = {
    1: '/assets/images/events/event1-pic1.jpg',
    2: '/assets/images/events/event1-pic2.jpg',
    3: '/assets/images/events/event1-pic3.jpg',
    4: '/assets/images/events/event1-pic4.jpg',
    5: '/assets/images/events/event1-pic5.jpg',
    6: '/assets/images/events/event1-pic6.jpg',
    7: '/assets/images/events/event1-pic7.jpg',
    8: '/assets/images/events/event2-pic1.jpg',
    9: '/assets/images/events/event2-pic2.jpg',
    10: '/assets/images/events/event2-pic3.jpg',
    11: '/assets/images/events/event2-pic4.jpg',
    12: '/assets/images/events/event2-pic5.jpg'
  }
    
  let roundtableImages = '';
  
  for (let i = 1; i <= 12; i++) {
    roundtableImages += '<div class="roundtableImage" style="background: url(' + roundtableImage[i] + ')"></div>';
  }
  
  $('.roundtableGallery').append(roundtableImages);
  
  $('.roundtableGallery').slick({
    centerMode: true,
    centerPadding: '3rem',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 1
        }
      }
    ]
  });
});