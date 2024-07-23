document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".time-slot").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("time-slot-selected");
    });
});
})
