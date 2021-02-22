window.onload = function(){
    const video = document.querySelector("video");
    const playBackSpeed = 100;

    document.body.style.height = Math.floor(
        video.duration) * playBackSpeed + 'px';

    window.addEventListener("scroll",function(){
        video.currentTime = window.pageYOffset / (playBackSpeed+200);
    });
}