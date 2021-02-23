// window.onload = function(){
//     const video = document.querySelector("video");
//     const playBackSpeed = 100;

//     document.body.style.height = Math.floor(
//         video.duration) * playBackSpeed + 'px';

//     window.addEventListener("scroll",function(){
//         video.currentTime = window.pageYOffset / (playBackSpeed+200);
//     });
// }


var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);