const popupRed = document.getElementById('modal_main')
const popupGreen = document.getElementById('modal_success')
const tap = document.getElementsByClassName('show-success')[0];
let close = document.getElementsByClassName('modal__close');

const loadPopup = function(){
  popupRed.className = 'modal modal_active';
}
setTimeout(loadPopup, 1000);

for(let i = 0; i < close.length; i++){
  close = document.getElementsByClassName('modal__close')[i];
  close.onclick = function(){
  popupRed.className = 'modal';
  popupGreen.className = 'modal';
  }
}

tap.onclick = function (){
  popupGreen.className = 'modal modal_active';  
}