document.querySelectorAll(".time-list").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("time-list-selected");
    });
});
