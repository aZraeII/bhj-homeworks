const popup = document.getElementById('modal_main')
const close = document.getElementsByClassName('modal__close_times')[0,1];
const tap = popup.getElementsByClassName('show-success')[0];

const popup1 = document.getElementById('modal_success')

close.onclick = function(){
  popup.className = 'modal';
   popup1.className = 'modal';
}

tap.onclick = function (){
  popup.className = 'modal';
  popup1.className = 'modal modal_active';  
}

const loadPopup = function(){
  popup.className = 'modal modal_active';
}
setTimeout(loadPopup, 1000);

