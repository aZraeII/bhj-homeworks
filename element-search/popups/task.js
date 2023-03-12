const popupRed = document.getElementById('modal_main')
const popupGreen = document.getElementById('modal_success')
const tap = document.querySelector('.show-success');
let close = document.querySelectorAll('.modal__close');

const loadPopup = function(){
  popupRed.classList.toggle('modal_active');
}
setTimeout(loadPopup, 1000);

for(let i = 0; i < close.length; i++){
  close[i].onclick = function(){
    popupRed.classList.remove('modal_active');
    popupGreen.classList.remove('modal_active');
  }
  
}

tap.onclick = function(){
    popupRed.classList.remove('modal_active');
    popupGreen.classList.add('modal_active');
  }