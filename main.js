// ==UserScript==
// @name        Hacky Audio Cutoff Fix
// @namespace   wanikaniaudiocutoff
// @include     /^https://(www|preview).wanikani.com/(lesson|review|subjects|subject-lessons)
// @version     0.0.2
// @run-at      document-end
// @grant       none
// ==/UserScript==
// Play audio in background to omit clipping

// See: https://stackoverflow.com/a/70551742/12347616
var player = document.createElement('audio');
player.loop = true
player.volume = 0.00001
// See: https://www.chosic.com/download-audio/32083/
player.src = "https://www.chosic.com/wp-content/uploads/2022/04/Cozy-Place-Chill-Background-Music.mp3"
player.play()

// Enable optional muter
// // See: https://stackoverflow.com/a/34507423/12347616
// function addOnBlurListener(onBlurCallback, onFocusCallback) {
//     var hidden, visibilityState, visibilityChange; // check the visiblility of the page

//     if (typeof document.hidden !== "undefined") {
//         hidden = "hidden"; visibilityChange = "visibilitychange"; visibilityState = "visibilityState";
//     } else if (typeof document.mozHidden !== "undefined") {
//         hidden = "mozHidden"; visibilityChange = "mozvisibilitychange"; visibilityState = "mozVisibilityState";
//     } else if (typeof document.msHidden !== "undefined") {
//         hidden = "msHidden"; visibilityChange = "msvisibilitychange"; visibilityState = "msVisibilityState";
//     } else if (typeof document.webkitHidden !== "undefined") {
//         hidden = "webkitHidden"; visibilityChange = "webkitvisibilitychange"; visibilityState = "webkitVisibilityState";
//     }


//     if (typeof document.addEventListener === "undefined" || typeof hidden === "undefined") {
//         // not supported
//     } else {
//         document.addEventListener(visibilityChange, function() {
//         switch (document[visibilityState]) {
//             case "visible":
//             if (onFocusCallback) onFocusCallback();
//             break;
//             case "hidden":
//             if (onBlurCallback) onBlurCallback();
//             break;
//         }
//         }, false);
//     }
// }

// function pauseAudio() {
//     console.log('mute all audios...');
//     player.pause()
// }

// function resumeAudio() {
//     console.log('unmute all audios...');
//     player.play()
// }

// addOnBlurListener(pauseAudio, resumeAudio);


