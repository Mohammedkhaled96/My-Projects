function play() {
let audio=[];
audio[0]= new Audio("audios/2.mp3");
audio[1]= new Audio("audios/1.mp3");
let i = Math.floor(audio.length * Math.random());
        audio[i].play();
      }

function swich() {

let SwichAudio= new Audio("swich.mp3");
        SwichAudio.play();
      }
