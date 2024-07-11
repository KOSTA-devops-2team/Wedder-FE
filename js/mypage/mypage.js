const selectMenu=document.querySelector("#brand");

function showSelect(){
    let selectedText= selectMenu.options[selectMenu.selectedIndex].innerText;
  //  alert(`[${selectedText}]를 선택했습니다.`) ;

}
selectMenu.onchange =showSelect;
