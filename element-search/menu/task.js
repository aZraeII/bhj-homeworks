const main = document.querySelectorAll('.menu__link');

const activ = document.querySelectorAll('.menu_sub')
console.log(activ)


for(let i = 0; i < main.length; i++){
const menu = main[i].closest('a')
menu[i].onclick = function(){
  activ.classList.add('menu_active')
  

return false
}

  //const menu = main[i].closest("a ul");
  //console.log(menu)
// console.log(menu)

// main[i].onclick = function(){

// main[i].classList.add('menu_active');

// return false
}