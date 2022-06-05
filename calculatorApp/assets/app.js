$(document).ready(function () {
  $(".button").click(function () {
    if ($("input").hasClass("need-clear")) {
      if ($(this).hasClass("num")) {
        $("input").val("");
        $("input").removeClass("need-clear");
      } else if ($(this).hasClass("button operator")) {
        $("input").removeClass("need-clear");
      }
    }

    let currentVal = $("input").val();
    let val = $(this).data("val");
    $("input").val(currentVal + val);
  });

  $(".button.clear").click(function () {
    $("input").val("");
  });

  $(".button-result").click(function () {
    let val = $("input").val().split(" ");
    let result = "";

    if (val[1] == "/") {
      result = parseInt(val[0]) / parseInt(val[2]);
    } else if (val[1] == "x") {
      result = parseInt(val[0]) * parseInt(val[2]);
    } else if (val[1] == "-") {
      result = parseInt(val[0]) - parseInt(val[2]);
    } else if (val[1] == "+") {
      result = parseInt(val[0]) + parseInt(val[2]);
    }

    $("input").val(result);
    $("input").addClass("need-clear");
  });
});
