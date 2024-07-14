document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

function includeHTML() {
    fetch("../../components/header/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
            loadScript("../../js/header/header.js");
        });

    fetch("../../components/footer/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

    fetch("../../components/sidebar/sidebarAdmin.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("admin-sidebar-placeholder").innerHTML =
                data;
        });
}

function loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.defer = true;
    script.onload = callback;
    document.body.appendChild(script);
}
