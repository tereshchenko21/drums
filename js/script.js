
const kickButton = document.getElementById('kick');
const snareButton = document.getElementById('snare');
const hihatButton = document.getElementById('hi-hat');

let kick = new Audio('./sounds/kick.wav');
let snare = new Audio('./sounds/snare.wav');
let hihat = new Audio('./sounds/hi-hat.wav');


kickButton.onclick = function() {
    kick.play();
}
snareButton.onclick = function() {
    snare.play();
}
hihatButton.onclick = function() {
    hihat.play();
}