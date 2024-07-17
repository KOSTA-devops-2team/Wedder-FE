let pass = document.getElementById(".passSet1").value;
const pas = pass.length;
const up = document.getElementById("#upper");

console.log(`${pas}`);
pass.addEventListener('keyup',(e)=>{
    
    if(pas > 8)
    {
       up.addEventListener("",()=>{
            document.body.style.color = "blue";
       })
    }
    else
    {
        up.addEventListener("",()=>{
            document.body.style.color = "RED";
       })
    }
})