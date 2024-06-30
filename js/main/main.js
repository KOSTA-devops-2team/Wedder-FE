document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

function includeHTML() {
    fetch("../../components/header/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    fetch("../../components/footer/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
}
