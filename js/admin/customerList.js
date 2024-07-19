document.addEventListener("DOMContentLoaded", function () {
    includeSidebar();
});

function includeSidebar() {
    fetch("../../components/sidebar/sidebarAdmin.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("admin-sidebar-placeholder").innerHTML =
                data;
        });
}
