/* 태그 */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".purpose-btn").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("purpose-btn-selected");
    });
});
    document.querySelectorAll(".tag-btn").forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("tag-btn-selected");
        });
    });
    document.querySelectorAll(".company-card").forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("company-card-selected");
        })
    })

});




/* 선택 목록 */
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelectorAll(".company-card");
    const selectCompany = document.querySelector(".select-company");

    card.addEventListener("click", function() {
        selectCompany.classList.toggle(".appear-select-comapny");
    })
})

