import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo(iframe);

const onPlay = function(data) {
    // data is an object containing properties specific to that event

    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

iframePlayer
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function(seconds) {
    // seconds = the actual time that the player seeked to
    
    })
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });