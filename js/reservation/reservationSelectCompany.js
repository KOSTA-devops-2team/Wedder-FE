import "../../css/reservation/reservationSelectCompany.css"

const tabList = document.querySelectorAll(".tab a")
const contents = document.querySelectorAll("#tab-contents")
let activeCont = '';
/* const tagSearch = document.querySelector("#tag-search")
const scheduleSearch = document.querySelector("#schedule-search") */



for(var i = 0; i < btn.length; i++) {
    btn[i].querySelector(".tab").addEventListener("click", function(e){
        e.preventDefault();
        for(var j = 0; j < btn.length; j++) {
            btn[j].querySelector(".tab").classList.remove(".tab.active")

            contents[j].style.display = "none";
        }
        this.parentNode.classList.add(".tab.active");

        activeCont = this.getAttribute("div");
        document.querySelector(activeCont).style.display = 'block';
})}


/* 탭 */
/* document.addEventListener("DOMContentLoaded", function() {
    const tab = document.querySelectorAll(".tab")
    const 
})
 */

/* 선택 목록 */
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelectorAll(".company-card");
    const selectCompany = document.querySelector(".select-company");

    card.addEventListener("click", function() {
        selectCompany.classList.toggle(".appear-select-comapny");
    })
})

