var flag1 = false;
var flag2 = false;

$("#present-1-image").click(function() {
  $(this).removeClass("question-mark").addClass("dude-weed").attr("src", "images/dude-weed.jpg");
  $(".present-1-text").text("WEED CAKE");

  flag1 = true;
  if (flag1 && flag2) {
    $(".main-heading").css("display", "none");
    $(".happy-merchant").css("display", "inline-block");
  }
});

$("#present-2-image").click(function() {
  $(this).removeClass("question-mark").attr("src", "images/lsd-pepe.jpg");
  $(".present-2-text").text("SHROOMS");

  flag2 = true;
  if (flag1 && flag2) {
    $(".main-heading").css("display", "none");
    $(".happy-merchant").css("display", "inline-block");
  }
});
