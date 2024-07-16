import "../../css/reservation/reservationSelectCompany.css"

const actBtn = document.querySelector(".tab.active")
const btn = document.querySelector(".tab")
const tagSearch = document.querySelector("#tag-search")
const scheduleSearch = document.querySelector("#schedule-search")

actBtn.addEventListener("click", () => {
    tagSearch.style.display = "block";
    scheduleSearch.style.display = "none";
    btn.classList.remvove("tab.active")
    actBtn.classList.add("tab.active") 
})

btn.addEventListener("click", () => {
    tagSearch.style.display = "none";
    scheduleSearch.style.display = "block";
   /*  btn.style.color = "#CA1A5A";
    btn.style.borderBottom = "2px solid #CA1A5A"; */   
    btn.classList.add("tab.active")
    actBtn.classList.remove("tab.active")
})