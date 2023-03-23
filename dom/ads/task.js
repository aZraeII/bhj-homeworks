const ca = document.querySelectorAll(".rotator__case");

let i = 0; 
var tim = 1000;

setInterval(async () => {
    (document.querySelector(".rotator__case_active")).classList.remove('rotator__case_active');
    ca[i].classList.add('rotator__case_active');
    ca[i].style.color = ca[i].dataset.color;
    b = ca[i].dataset.speed;
    if (i===(ca.length-1)){
        i=0;
    }else{
        i++;
    }
}, tim);