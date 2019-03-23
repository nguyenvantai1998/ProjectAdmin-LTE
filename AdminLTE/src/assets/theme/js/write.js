/*
  - Code write: Nguyễn Văn Tài
  - Theme event: Theme Desktop, Theme Mobile
  - Description: 
          "theme one":
          [
            + login tOne
          ],
          "theme two":
          [
            + NavPrimary tTwo
            + show list content nav
            + sub nav
            + slider banner theme two
            + slider product theme two
            + footer theme two
          ],
          "general":
          [
            + Remove link file
          ]
*/
/* ------------------------------------------------------------------------ */

$(document).ready(function () {
  // --------------------------- Theme One --------------------------------//
  //event Login
  $('#loginAD').click(function () {
    $('.FormLoginAD').show(200);
  });
  $('#btnCloseLogin').click(function () {
    $('.FormLoginAD').hide();
  })

  // nav detail
  $('#showNavList').click(function(){
    alert('sss')
  })

  //--------------------------- general ---------------------------//
  //Remove link file
  function showImage() {
    if (this.files && this.files[0]) {
      var obj = new FileReader();
      obj.onload = function (data) {
        var image = document.getElementById("image");
        image.src = data.target.result;
        image.style.display = "block";
      }
      obj.readAsDataURL(this.files[0]);
    }
  }

  
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
  // $('#show-sub-listNavPrimary-list').addClass(function(index){
  //   return "show-sub-listNavPrimary-list_" + index;
  // });
  
  // slider banner theme two
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
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



