$(document).ready(function(){
  var selectBreak = parseInt($(".break").text());
  var selectWork = parseInt($(".work").text());
  var time;
  var loop = false;
  var countdownStarted = false;
  var countId;

  function countdownStart() {
    countId = setInterval(updateCountdown, 1000);
  }

  function countdownStop() {
    clearInterval(countId);
  }

  function updateCountdown() {
    var min = Math.floor(time / 60);
    var sec = time - (min * 60);
    if (min < 10){
      min = "0" + min;
    }
    if (sec < 10){
      sec = "0" + sec;
    }
    var timerText = min + ":" + sec;
    $(".countdown").html(timerText);
    time -= 1;
  }

  $("#minus-break").click(function(){
    if (!loop){
      if(selectBreak >1){
        selectBreak -= 1;
        $(".break").html(selectBreak);
      }
    }
  })

  $("#plus-break").click(function(){
    if (!loop){
      selectBreak += 1;
      $(".break").html(selectBreak);
    }
  })

  $("#minus-work").click(function(){
    if (!loop){
      if(selectWork >1){
        selectWork -= 1;
        $(".work").html(selectWork);
        $(".countdown").html(selectWork);
        countdownStarted = false;
      }
    }
  })

  $("#plus-work").click(function(){
    if (!loop){
      selectWork += 1;
      $(".work").html(selectWork);
      $(".countdown").html(selectWork);
      countdownStarted = false;
    }
  })

  $(".rounded-timer").click(function(){
    if (loop) {
      console.log("debo parar");
      countdownStop();
      loop = false;
    }
    else {
      console.log("debo seguir");
      if (!countdownStarted) {
        // get time from html
        time = parseInt($(".countdown").text()) * 60;
        countdownStarted = true;
        updateCountdown();
      }
      countdownStart();
      loop = true;
    }
  })


})