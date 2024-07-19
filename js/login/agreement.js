document.addEventListener('DOMContentLoaded',()=>{
  const checkall = document.querySelector('#checkset');
  const check1 = document.querySelector('#checkin1');
  const check2 = document.querySelector('#checkin2');
  const check3 = document.querySelector('#checkin3');
  const check4 = document.querySelector('#checkin4');
  const check5 = document.querySelector('#checkin5');
 

  const btn = document.querySelector('.bt');
  
    checkall.addEventListener('click',(event)=>{
        const chckValue = event.currentTarget.checked;
        
              check1.checked = chckValue;
              check2.checked = chckValue;
              check3.checked = chckValue;
              check4.checked = chckValue;
              check5.checked = chckValue;
        
        if(check1.checked && check2.checked && check3.checked)
        {
          
          btn.style.backgroundColor="#CA1A5A";
          btn.style.cursor = "pointer";
          link ='IDJoin.html';
          btn.addEventListener("click",()=>{
            location.href=link;
          })

        }
        if (!check1.checked || !check2.checked || !check3.checked) {
         
          btn.style.backgroundColor="#959da8";
          btn.style.cursor = "default";
          link ='IDJoin.html';
          btn.disabled = true;
        }
    });


    check1.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
        checkall.checked = false;
        
      }

      if(check1.checked && check2.checked && check3.checked)
        {
          
          btn.style.backgroundColor="#CA1A5A";
          btn.style.cursor = "pointer";
          link ='IDJoin.html';
          btn.addEventListener("click",()=>{
            location.href=link;
          })

        }
        if (!check1.checked || !check2.checked || !check3.checked) {
         
          btn.style.backgroundColor="#959da8";
          btn.style.cursor = "default";
          link ='IDJoin.html';
          btn.disabled = true;
        }
    
    });

    check2.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
        checkall.checked = false;
      }
      if(check1.checked && check2.checked && check3.checked)
        {
          
          btn.style.backgroundColor="#CA1A5A";
          btn.style.cursor = "pointer";
          link ='IDJoin.html';
          btn.addEventListener("click",()=>{
            location.href=link;
          })

        }
        if (!check1.checked || !check2.checked || !check3.checked) {
         
          btn.style.backgroundColor="#959da8";
          btn.style.cursor = "default";
          link ='IDJoin.html';
          btn.disabled = true;
        }
    });

    check3.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
        checkall.checked = false;
      }
      if(check1.checked && check2.checked && check3.checked)
        {
          
          btn.style.backgroundColor="#CA1A5A";
          btn.style.cursor = "pointer";
          link ='IDJoin.html';
          btn.addEventListener("click",()=>{
            location.href=link;
          })

        }
        if (!check1.checked || !check2.checked || !check3.checked) {
         
          btn.style.backgroundColor="#959da8";
          btn.style.cursor = "default";
          link ='IDJoin.html';
          btn.disabled = true;
        }
    });

    check4.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
        checkall.checked = false;
      }
    });

    check5.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
        checkall.checked = false;
      }
    });

    
  
  

  
  
});


  
