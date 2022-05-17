$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      var inputWeight1 = parseInt($("#weight1").val());
      var inputHeight1 = parseInt($("#height1").val());
      var inputWidth1 = parseInt($("#width1").val());
      var inputDepth1 = parseInt($("#depth1").val());
      var inputDist1 = parseInt($("#dist1").val());
      var box1 = { weight1: inputWeight1, height1: inputHeight1, width1: inputWidth1, depth1: inputDepth1, dist1:inputDist1 };
      if (inputWeight1 && inputHeight1 && inputWidth1 && inputDepth1 && inputDist1) {
        var outputCost1 = (1.5*box1.height1*box1.width1*box1.depth1 + .5*box1.weight1)*box1.dist1/150;
        var outputtime1 = (2 + box1.dist1/100);
        $("#cost-output1").fadeIn();
        $(".cost1").text(outputCost1);
        $("#time-output1").fadeIn();
        $(".time1").text(outputtime1);
      } else {
        $("#cost-output1").hide();
        $(".displayError1").fadeIn();
      }
    });
  });