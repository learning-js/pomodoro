$(document).ready(function(){
  var selectBreak = parseInt($(".break").text());
  var selectWork = parseInt($(".work").text());

  $("#minus-break").click(function(){
    selectBreak -= 1;
    $(".break").html(selectBreak);
  })

  $("#plus-break").click(function(){
    selectBreak += 1;
    $(".break").html(selectBreak);
  })

  $("#minus-work").click(function(){
    selectWork -= 1;
    $(".work").html(selectWork);
  })

  $("#plus-work").click(function(){
    selectWork += 1;
    $(".work").html(selectWork);
  })

})