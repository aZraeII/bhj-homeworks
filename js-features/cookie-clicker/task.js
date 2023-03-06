const cookie = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")
cookie.onclick = function(){
   if(counter.textContent % 2 === 0){
     cookie.width = 150;
   } else {
     cookie.width = 200;
   }
  counter.textContent ++;
}