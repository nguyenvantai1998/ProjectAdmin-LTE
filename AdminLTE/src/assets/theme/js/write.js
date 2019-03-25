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
  // $('#showNavList').click(function(){
  //   alert('sss')
  // })

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

  $("#slider3").responsiveSlides({
    manualControls: '#slider3-pager',
    maxwidth: 540
  });
  
})



