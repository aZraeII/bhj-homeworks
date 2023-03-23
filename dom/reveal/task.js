const reveal0 = document.querySelectorAll(".reveal")[0]
const reveal1 = document.querySelectorAll(".reveal")[1]


function pozition(el){
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0){
        el.classList.remove('reveal_active');
    }
    if (top > window.innerHeight){
        el.classList.remove('reveal_active');
    }
    el.classList.add('reveal_active');
}

pozition(reveal0);
pozition(reveal1);