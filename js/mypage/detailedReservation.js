const modal = document.querySelector('.modal');
const card = document.querySelector('.Card');

const closeButton = document.querySelector('.close-area');



card.addEventListener("click", ()=>{
    modal.style.display="inline flex";
})

closeButton.addEventListener('click',()=> {
    modal.style.display="none"
})

