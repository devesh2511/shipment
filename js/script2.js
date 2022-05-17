$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      var inputWeight2 = parseInt($("#weight2").val());
      var inputHeight2 = parseInt($("#height2").val());
      var inputWidth2 = parseInt($("#width2").val());
      var inputDepth2 = parseInt($("#depth2").val());
      var inputDist2 = parseInt($("#dist2").val());
      var box2 = { weight2: inputWeight2, height2: inputHeight2, width2: inputWidth2, depth2: inputDepth2, dist2:inputDist2 };
      if (inputWeight2 && inputHeight2 && inputWidth2 && inputDepth2 && inputDist2) {
        var outputCost2 = (1.5*box2.height2*box2.width2*box2.depth2 + .5*box2.weight2)*box2.dist2/100;
        var outputtime2 = (2 + box2.dist2/100);
        $("#cost-output2").fadeIn();
        $(".cost2").text(outputCost2);
        $("#time-output2").fadeIn();
        $(".time2").text(outputtime2);
      } else {
        $("#cost-output2").hide();
        $(".displayError2").fadeIn();
      }
    });
  });
  