// test
const selectMenu=document.querySelector("#brand");

// 1.스드메 언더바
let horizontalBar =document.getElementById("horizontal-underline");
let horizontalMenus =document.querySelectorAll(".tabs div a")
//2. 탭 활성화
const sutdio = document.getElementsByClassName("sutdio");
const makeUp = document.getElementsByClassName("makeUp");
const dress = document.getElementsByClassName("dress");

// function showSelect(){
//     let selectedText= selectMenu.options[selectMenu.selectedIndex].innerText;
//   //  alert(`[${selectedText}]를 선택했습니다.`) ;

// }
// selectMenu.onchange =showSelect;

// 1. 스드메 언더바 함수
function horizontalIndicator(e){
  horizontalBar.style.left =e.currentTarget.offsetLeft+"px";
  horizontalBar.style.width =e.currentTarget.offsetWidth +"px";
  horizontalBar.style.top=
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px";
}
horizontalMenus.forEach((menu) => 
  menu.addEventListener("click",(e) =>{
    horizontalIndicator(e);
  })
);
// 2. 탭 활성화 
const studioActive = (e) =>{
  sutdio.classList.add("active");
  makeUp.classList.remove("active");
  dress.classList.remove("active");
} 
const makeUpActive = (e) =>{
  sutdio.classList.remove("active");
  makeUp.classList.add("active");
  dress.classList.remove("active");
} 
const dressActive = (e) =>{
  sutdio.classList.remove("active");
  makeUp.classList.remove("active");
  dress.classList.add("active");
} 
sutdio.addEventListener("click",studioActive);
makeUp.addEventListener("click",makeUpActive);
dress.addEventListener("click",dressActive);

document.querySelectorAll(".heart").forEach((item) => {
  item.addEventListener("click", () => {
      item.classList.toggle("liked");
  })
});
