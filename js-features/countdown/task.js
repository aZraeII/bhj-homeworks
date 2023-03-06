const counter = function(){
    const timer = document.getElementById("timer");
    const time = timer.textContent -=1;
    if(time === -1){
        clearInterval(set);
        alert('Вы победили в конкурсе')
    timer.textContent = '0';
    }
}
const set = setInterval(counter, 1000);