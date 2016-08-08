$(document).ready(function(){
  var selectBreak = parseInt($(".break").text());
  var selectWork = parseInt($(".work").text());
  var time;
  var loop = false;
  var workTime = false;
  var countdownStarted = false;
  var countId;
  var fillingBg;
  var position = 45;

  ///////////////// FUNCTIONS FOR STARTING/STOPPING COUNTDOWN /////////////////

  function countdownStart() {
    //starts the setInterval method and calls the function (updateCountdown) that works out the countdown
    countId = setInterval(updateCountdown, 1000);
  }

  function countdownStop() {
    //stops the setInterval method
    clearInterval(countId);
  }

// function that makes the countdown //
    //// Total pixels to fill the space in countdown: 288px
    //// Position hidden: 45px - Position full: -243px
  function updateCountdown() {
    if (time == 0 && workTime){
      time = parseInt($(".break").text()) * 60;
      fillingBg = 288 / time;
      position = 45;
      $(".bg-special").css("background-color", "#9DDA52");
      $(".title-section").html("Break time");
      workTime = false;
    }
    if (time == 0 && !workTime){
      time = parseInt($(".work").text()) * 60;
      fillingBg = 288 / time;
      position = 45;
      $(".bg-special").css("background-color", "#820263");
      $(".title-section").html("Work time");
      workTime = true;
    }
    var min = Math.floor(time / 60);
    var sec = time - (min * 60);
    if (min < 10){
      min = "0" + min;
    }
    if (sec < 10){
      sec = "0" + sec;
    }
    var timerText = min + ":" + sec;
    position -= fillingBg;
    var positionString = position + "px";
    $(".countdown").html(timerText);
    $(".bg-special").css("margin-top", positionString);
    time -= 1;
  }

///////////////// BREAK PLUS/MINUS SIGNS /////////////////

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

///////////////// WORKING PLUS/MINUS SIGNS /////////////////

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

///////////////// TIMER ONCLICK EVENTS  /////////////////

  $(".rounded-timer").click(function(){
    if (loop) {
      countdownStop();
      loop = false;
    }
    else {
      if (!countdownStarted) {
        workTime = true;
        countdownStarted = true;
        time = parseInt($(".countdown").text()) * 60;
        fillingBg = 288 / time;
        updateCountdown();
      }
      countdownStart();
      loop = true;
    }
  })


})