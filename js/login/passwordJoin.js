let pass1 = document.querySelector(".pass > #passSet1");
const eg = /^[a-zA-Z]+$/;
const sp = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
const su = /[0-9]+$/;


pass1.addEventListener('keyup',()=>{
    if(pass1.value.length >= 8)
    {
        document.querySelector("#up1").style.color="black";
        document.querySelector("#upper").style.color="black";
    }

    if(eg.test(pass1.value))
    {
        console.log("대소문자성공");
    }
    if(sp.test(pass1.value))
    {
        console.log("특수문자성공");
    }
    if(su.test(pass1.value))
    {
        console.log("숫자문자성공");
    }
});
