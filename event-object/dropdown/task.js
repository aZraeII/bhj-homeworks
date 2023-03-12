const select = document.querySelector(".dropdown__value");
const activSelect = document.querySelector(".dropdown__list");
const allItem = document.querySelectorAll(".dropdown__item");
const activ = document.querySelector(".dropdown__value");

select.onclick = function(){
    activSelect.classList.toggle('dropdown__list_active');
}

for(let i = 0; i < allItem.length; i++){
    allItem[i].onclick = function(){
        activ.textContent = allItem[i].textContent;
        activSelect.classList.toggle('dropdown__list_active');
        return false;
    }
}