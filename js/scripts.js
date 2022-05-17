$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputWeight = parseInt($("#weight").val());
    var inputHeight = parseInt($("#height").val());
    var inputWidth = parseInt($("#width").val());
    var inputDepth = parseInt($("#depth").val());
    var inputDist = parseInt($("#dist").val());
    var box = { weight: inputWeight, height: inputHeight, width: inputWidth, depth: inputDepth, dist:inputDist };
    if (inputWeight && inputHeight && inputWidth && inputDepth && inputDist) {
      var outputCost = (1.5*box.height*box.width*box.depth + .5*box.weight)*box.dist/200;
      var outputtime = (2 + box.dist/100)
      $("#cost-output").fadeIn();
      $(".cost").text(outputCost);
      $("#time-output").fadeIn();
      $(".time").text(outputtime);
    } else {
      $("#cost-output").hide();
      $(".displayError").fadeIn();
    }
  });
});
