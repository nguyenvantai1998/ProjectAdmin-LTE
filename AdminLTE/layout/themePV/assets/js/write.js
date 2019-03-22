$(document).ready(function(){
  // --------------------------- Theme One  --------------------------------//
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.responsive2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $("#content-slider").lightSlider({
    loop:true,
    keyPress:true
  });

  //showNavList
  $('#showNavList').click(function(){
    $('.bannerNav-left').toggle();
  })


  // --------------------------- Theme Two --------------------------------//
  // navPrimary
  $('#showNavPrimary-tw').click(function(){
    $('.themeTwo-navPrimary-bg').show();
    $('.themeTwo-navPrimary').show();
  })
  $('.themeTwo-navPrimary-bg').click(function(){
    $('.themeTwo-navPrimary-bg').hide();
    $('.themeTwo-navPrimary').hide();
  })

  //show list content nav
  $('#showListContent-nav-tw').click(function(){
    $('.themeTwo-navPrimary-listContent').show();
  })
  $('#hideListContent-nav-tw').click(function(){
    $('.themeTwo-navPrimary-listContent').hide();
    $('.themeTwo-navPrimary-bg').show();
    $('.themeTwo-navPrimary').show();
  })

  // sub nav
  $('#show-sub-listNavPrimary-list').addClass(function(index){
    return "show-sub-listNavPrimary-list_" + index;
  });
  
  // slider banner theme two
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // slider product theme two
  $('.resposive-tw').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.resposive-tw-2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  // footer theme two
  $('#btn-showContent1').click(function(){
    $('#rowHeader3-content1').slideDown();
    $('#rowHeader3-content2,#rowHeader3-content3,#rowHeader3-content4').slideUp();
  })
  $('#btn-showContent2').click(function(){
    $('#rowHeader3-content2').slideDown();
    $('#rowHeader3-content1,#rowHeader3-content3, #rowHeader3-content4').slideUp();
  })
  $('#btn-showContent3').click(function(){
    $('#rowHeader3-content3').slideDown();
    $('#rowHeader3-content1,#rowHeader3-content2,#rowHeader3-content4').slideUp();
  })
  $('#btn-showContent4').click(function(){
    $('#rowHeader3-content4').slideDown();
    $('#rowHeader3-content1,#rowHeader3-content2,#rowHeader3-content3').slideUp();
  })

})

