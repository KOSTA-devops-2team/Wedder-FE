



//눈동자
const mso = document.querySelectorAll(".material-symbols-outlined");

let msotf=false
document.querySelectorAll(".material-symbols-outlined").forEach((item) => {
    item.addEventListener("click",()=> {

    if(!msotf){
        item.innerText = "visibility_off";
        msotf=true;
        pass1.type ="text";
        pass2.type ="text";
        
    }
    else if(msotf){
        item.innerText = "visibility";
        msotf=false;
        pass1.type ="password";
        pass2.type ="password";
    }
});
});

