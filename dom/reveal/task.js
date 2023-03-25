const spam = document.querySelectorAll('.reveal');

let  reveal = function(el){
   const {top, bottom} = el.getBoundingClientRect();

    if(bottom < 0){
        el.classList.remove('reveal_active');
    }else if(top > window.innerHeight){
        el.classList.remove('reveal_active');
    } else{
        el.classList.add('reveal_active');
    }
}

for(let i = 0; i < spam.length; i++) {
    window.addEventListener('scroll', function() { 
        reveal(spam[i]);
    })
}