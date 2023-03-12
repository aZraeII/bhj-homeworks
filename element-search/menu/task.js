const main = document.querySelectorAll('ul.menu_main > li');
let menu = document.querySelectorAll('ul.menu_sub');

for(let i = 0; i < main.length; i++){
  main[i].onclick = function(){
    menu[i - 1].classList.toggle('menu_active');
    return false
  }
}