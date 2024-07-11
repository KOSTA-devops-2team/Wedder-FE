const modal = document.querySelector('.modal');
const btnOpenModal=document.querySelector('#forgot');
btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
});

const passbox = document.querySelector('#Password');
    passbox.getElementById('#Password').addEventListener("focus", () =>{
    btnOpenModal.style.display = 'block';
})