// const modal = document.querySelector('.modal');
// const btnOpenModal=document.querySelector('#forgot');
// btnOpenModal.addEventListener("click", ()=>{
//     modal.style.display="flex";
// });

let email = document.querySelector('#email-id');
let pass = document.querySelector('.password-ps');
const loginbutton = document.querySelector('#continue');
console.log(pass);

function main(){
    window.open("../../html/main/main.html");
}

function showpopup() {
    window.open("../../html/login/passfind.html", "a", "width=550, height=700, left=100 "); 
}

function showpopup1() {
    window.open("../../html/login/passfind.html", "a", "width=700, height=700, left=100 "); 
}

function usePopup() {
    window.open("../../html/login/uselaw.html", "a", "width=730, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}


function privacyPopup() {
    window.open("../../html/login/uselaw.html", "a", "width=730, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}


function marketingPopup() {
    window.open("../../html/login/uselaw.html", "a", "width=730, height=700, left=100,resizable=no, menuber=no, scrollbars=no "); 
}


//눈동자
const mso = document.querySelector(".material-symbols-outlined");
let msotf=false
mso.addEventListener("click",()=>
{
    if(!msotf){
        mso.innerText = "visibility_off";
        msotf=true;
        pass.type ="text";
    }
    else if(msotf){
        mso.innerText = "visibility";
        msotf=false;
        pass.type="password";
    }
});

// const fil = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/gi;
// //로그인
// link = '../../html/main/main.html'
// email.addEventListener("keyup",()=>{
//     if(fil.test(email) && pass.value != ""){
//         loginbutton.onclick = function(){
//             location.href=link;
//     }
//     }else{
//         loginbutton.onclick = function(){
//             location.href='../../html/main/login.js';
//         }
//     }
// });