$(document).ready(function(){
  var selectBreak = parseInt($(".break").text());
  var selectWork = parseInt($(".work").text());
  var time = selectWork * 60;

  $("#minus-break").click(function(){
    if(selectBreak >1){
      selectBreak -= 1;
      $(".break").html(selectBreak);
    }
  })

  $("#plus-break").click(function(){
    selectBreak += 1;
    $(".break").html(selectBreak);
  })

  $("#minus-work").click(function(){
    if(selectWork >1){
      selectWork -= 1;
      $(".work").html(selectWork);
      $(".countdown").html(selectWork);
    }
  })

  $("#plus-work").click(function(){
    selectWork += 1;
    $(".work").html(selectWork);
    $(".countdown").html(selectWork);
  })

  $(".rounded-timer").click(function(){
    var minutes = 0;
    var seconds = 0;
    while (time >= 0){2
      time -= 1;
      minutes = Math.floor(time / 60);
      seconds = time - (minutes * 60);
      $(".countdown").html(minutes + ":" + seconds);
    }

  })

})