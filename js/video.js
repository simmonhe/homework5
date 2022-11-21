// Add js here.
//get the video element and store it in a variable
var vid = document.getElementById("videoplayer");

//Initialize the video variable when loading page
vid.preload = "auto";
//turn off autoplay
vid.autoplay = false;
//turn off looping when video is finsihed
vid.loop = false;

//get all the control elements (buttons and slider) and store them into variables
var play_btn = document.getElementById("play");
var pause_btn = document.getElementById("pause");
var slower_btn = document.getElementById("slower");
var faster_btn = document.getElementById("faster");
var skip_btn = document.getElementById("skip");
var mute_btn = document.getElementById("mute");
var vol_slider = document.getElementById("slider");


function playVid(){
  vid.play();
}
play_btn.addEventListener("click", playVid);

function pauseVid(){
  vid.pause();
}
pause_btn.addEventListener("click", pauseVid);

function slowVid(){
  if (vid.playbackRate == 2){
    vid.playbackRate = 1;
  }
  else if (vid.playbackRate == 1){
    vid.playbackRate = 0.5;
  }
  else if (vid.playbackRate == 0.5){
    window.alert("Video is at lowest speed!")
  }
}
slower_btn.addEventListener("click", slowVid);

function speedVid(){
  if (vid.playbackRate ==0.5){
    vid.playbackRate = 1;
  }
  else if (vid.playbackRate == 1){
    vid.playbackRate = 2;
  }
  else if (vid.playbackRate == 2){
    window.alert("Video is at fastest speed!")
  }
}
faster_btn.addEventListener("click", speedVid);

function skipVid(){
  vid.currentTime += 15;

  if (vid.currentTime > vid.duration){
    vid.currentTime = 0;
  }
}
skip_btn.addEventListener("click", skipVid);

function muteVid(){
  vid.muted = true;
  mute_btn.textContent = "Unmute";
}
function unmuteVid(){
  vid.muted = false;
  mute_btn.textContent = "Mute";
}

mute_btn.addEventListener("click", function(){
    if (vid.muted == false){
      muteVid();
    }
    else{
      unmuteVid();
    }
  });

function changeVol(){
  vid.volume = vol_slider.value / 100;
  document.getElementById("volume").innerHTML = vid.volume * 100 + "%";
}
vol_slider.addEventListener("change", changeVol);




