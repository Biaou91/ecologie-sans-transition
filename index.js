let video = document.querySelector('.video');
let muteBtn = document.getElementById('mute');

muteBtn.addEventListener('click', function(){
if(video.muted){
  video.muted = false;
  muteBtn.innerHTML = "&#128362;";
} else {
  video.muted = true;
  muteBtn.innerHTML = "&#128360;"
}
})
