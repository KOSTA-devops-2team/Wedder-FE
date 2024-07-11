document.querySelectorAll(".time-list").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("time-list-selected");
    });
});

document.querySelectorAll(".month-grid").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.remove("month-grid");
        item.classList.toggle("month-grid-selected");
    });
});
