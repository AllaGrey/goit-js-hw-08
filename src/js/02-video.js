import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// iframe.addEventListener('player', throttle(7000));

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const savedTimeFromLocalStorage = Number(
  localStorage.getItem('videoplayer-current-time')
);
console.log(savedTimeFromLocalStorage);

player.setCurrentTime(savedTimeFromLocalStorage).then(function (seconds) {
  // seconds = the actual time that the player seeked to
});
