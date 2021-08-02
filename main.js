const body = document.querySelector('body');
const vid1 = document.getElementById('vid1');
const vid2 = document.getElementById('vid2');
const startLocalVideoButton = document.getElementById('startLocalVideoButton');
const stopLocalVideoButton = document.getElementById('stopLocalVideoButton');

const screenCaptureButton = document.getElementById('screenCaptureButton');

// uncomment for secureContext check
// console.log(`Secure Context is: ${window.isSecureContext}`)

startLocalVideoButton.addEventListener('click', (e) => {
    navigator.mediaDevices.getUserMedia({video:true}) // use {audio: true, video: true} for full A/V
    .then(mediaStream => vid1.srcObject = mediaStream)
    .then(() => {
        startLocalVideoButton.disabled = true;
        stopLocalVideoButton.disabled = false;
    })
    .catch(err => console.log(err));
});

stopLocalVideoButton.addEventListener('click', (e) => {
    vid1.srcObject = null;
    startLocalVideoButton.disabled = false;
    stopLocalVideoButton.disabled = true;
});

screenCaptureButton.addEventListener('click', (e) => {
    navigator.mediaDevices.getDisplayMedia() // <-- screen capture
    .then(mediaStream => vid2.srcObject = mediaStream)
    .catch(err => console.log(err));
});

/* // code to move local video. Nothing important. Just funny.

vid1.style.position = 'relative';
vid1.style.left = '0px';
vid1.style.top = '0px';
const slowSpeed = 15;
const fastSpeed = 45;
let moveInterval = slowSpeed;

body.addEventListener('keydown', e => {

    actions = {
        'ArrowUp' : () => vid1.style.top = parseInt(vid1.style.top) - moveInterval + "px",
        'ArrowDown' : () => vid1.style.top = parseInt(vid1.style.top) + moveInterval + "px",
        'ArrowLeft' : () => vid1.style.left = parseInt(vid1.style.left) - moveInterval + "px",
        'ArrowRight' : () => vid1.style.left = parseInt(vid1.style.left) + moveInterval + "px",
        'ShiftLeft' : () => moveInterval = fastSpeed,
        'ShiftRight' : () => moveInterval = fastSpeed,
    }
    if (actions[e.code]) actions[e.code]();
    //console.log(e.code)
});

body.addEventListener('keyup', e => {
    //console.log(e.code)
    if (e.code == 'ShiftLeft' || 'ShiftRight') moveInterval = slowSpeed;
})
*/