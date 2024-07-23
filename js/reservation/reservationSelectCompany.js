import "../../css/reservation/reservationSelectCompany.css"

const btn = document.querySelectorAll(".tabs")
const contents = document.querySelectorAll("#tab-contents")
let activeCont = '';
/* const tagSearch = document.querySelector("#tag-search")
const scheduleSearch = document.querySelector("#schedule-search") */

/* actBtn.addEventListener("click", () => {
    tagSearch.style.display = "block";
    scheduleSearch.style.display = "none";
    btn.classList.remvove("tab.active")
    actBtn.classList.add("tab.active") 
})

btn.addEventListener("click", () => {
    tagSearch.style.display = "none";
    scheduleSearch.style.display = "block";
    btn.style.color = "#CA1A5A";
    btn.style.borderBottom = "2px solid #CA1A5A";  
    btn.classList.add("tab.active")
    actBtn.classList.remove("tab.active")
}) */

for(var i = 0; i < btn.length; i++) {
    btn[i].querySelector('.tab').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < btn.length; j++) {
            btn[j].classList.remove('.tab.active')

            contents[j].style.display = 'none';
        }
        this.parentNode.classList.add('.tab.active');

        activeCont = this.getAttribute('div');
        document.querySelector(activeCont).style.display = 'block';
})}