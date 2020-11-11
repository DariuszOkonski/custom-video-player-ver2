const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play & pause video
function toggleVideoStatus() {
  return true;
}

// update play/pause icon
function updatePlayIcon() {
  return true;
}

//update progress & timestamp
function updateProgress() {
  return true;
}

// set video time to progress
function setVideoProgress() {
  return true;
}

// stop video
function stopVideo() {
  return true;
}

// event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
