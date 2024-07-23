const modal = document.querySelector('.modal');
const btnOpenModal=document.querySelector('#forgot');
btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
});

let email = document.querySelector('#EmailID');
let pas = document.querySelector('#Password');
const loginbutton = document.querySelector('#continue');


function showPopup() {
     window.open("passfind.html", "a", "width=500, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
    }

function usePopup() {
window.open("uselaw.html", "a", "width=710, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}


function privacyPopup() {
window.open("privacy.html", "a", "width=710, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}


function marketingPopup() {
window.open("marketing.html", "a", "width=710, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}



