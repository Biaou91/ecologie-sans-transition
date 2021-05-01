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


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js", { scope: '/serviceWorker.js' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};