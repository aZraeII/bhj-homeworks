const tab = document.querySelectorAll(".tab");
const tabCon = document.querySelectorAll(".tab__content");

for(let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', () => {
        (document.querySelector(".tab_active")).classList.remove('tab_active');
        (document.querySelector(".tab__content_active")).classList.remove('tab__content_active');
        tab[i].classList.add('tab_active');
        tabCon[i].classList.add('tab__content_active');
    });
}