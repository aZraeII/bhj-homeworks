const slider = document.querySelectorAll(".slider__item");
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

for(let i = 0; i < slider.length; i++){
  let n = 0;
  prev.onclick = function(){
    if(n === 0){
      n = slider.length - 1;
      slider[slider.length - 1].classList.add('slider__item_active');
      slider[0].classList.remove('slider__item_active');
    }else{
      n--;
      slider[n].classList.add('slider__item_active');
      slider[n + 1].classList.remove('slider__item_active');
    }
  } 
  next.onclick = function(){
    if(n === slider.length - 1){
      n = 0;
      slider[0].classList.add('slider__item_active')
      slider[slider.length - 1].classList.remove('slider__item_active');
    }else{
      n++;
      slider[n].classList.add('slider__item_active');
      slider[n - 1].classList.remove('slider__item_active');
    }
  }
}