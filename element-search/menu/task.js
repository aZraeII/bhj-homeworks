const main = document.querySelectorAll('ul.menu_main > li');
let menu = document.querySelectorAll('ul.menu_sub');
let counter = 0;

for(let i = 0; i < main.length; i++){
  main[i].onclick = function(){
    counter ++;
    if(counter % 2 === 0){
      menu[i - 1].classList.remove('menu_active');
    }else{
      menu[i - 1].classList.add('menu_active');
    }
    return false;
  }
}


  