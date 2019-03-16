$(document).ready(function () {
  //event Login
  $('#loginAD').click(function () {
    $('.FormLoginAD').show(200);
  });
  $('#btnCloseLogin').click(function () {
    $('.FormLoginAD').hide();
  })


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

  $('#showNavList').click(function(){
    alert('sss')
  })

})

