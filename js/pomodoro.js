$(document).ready(function(){
  var selectBreak = parseInt($(".break").text());
  var selectWork = parseInt($(".work").text());
  var time = 0;
  var breakTime = 0;
  var minutes = 0;
  var seconds = 0;
  var loop = false;

  function breakFunc(){
    $(".title-section").html("Break time");
    breakTime = selectBreak * 60;
      while (breakTime !== 0) {
        breakTime -= 1;
        minutes = Math.floor(breakTime / 60);
        seconds = breakTime - (minutes * 60);
        $(".countdown").html(minutes + ":" + seconds);
        console.log(minutes + ":" + seconds);
      }
  }

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
      time = selectWork * 60;
      $(".work").html(selectWork);
      $(".countdown").html(selectWork);
    }
  })

  $("#plus-work").click(function(){
    selectWork += 1;
    time = selectWork * 60;
    $(".work").html(selectWork);
    $(".countdown").html(selectWork);
  })

  $(".rounded-timer").click(function(){
    if(loop == false){
      console.log("hola");
      loop = true;
          var timer = setInterval(countdownFunc, 1000)
      function countdownFunc (){
          time -= 1;
          minutes = Math.floor(time / 60);
          seconds = time - (minutes * 60);
          $(".countdown").html(minutes + ":" + seconds);
          console.log(minutes + ":" + seconds);

        if (time == 0){
          breakFunc();
        }

      }
    }
    if(loop){
      console.log("adios");
      loop = false;
      clearInterval(timer);
    }
  })

})