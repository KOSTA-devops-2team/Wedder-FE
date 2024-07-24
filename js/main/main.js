document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

function includeHTML() {
    fetch("../../components/header/headerV2.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
            //             loadScript("../../js/header/header.js");
            loadCSS("../../css/common/header/header.css");
            initializeHeader();
        });

    fetch("../../components/footer/footerV2.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
}

function loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.defer = true;
    script.onload = callback;
    document.body.appendChild(script);
}

function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

function loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.defer = true;
    script.onload = callback;
    document.body.appendChild(script);
}

function initializeHeader() {
    let horizontalBar = document.getElementById("horizontal-underline");
    let horizontalMenus = document.querySelectorAll(".header-cate ul li a");

    function horizontalIndicator(e) {
        horizontalBar.style.left = e.offsetLeft + "px";
        horizontalBar.style.width = e.offsetWidth + "px";
        horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
    }

    horizontalMenus.forEach((menu) =>
        menu.addEventListener("mouseenter", (e) =>
            horizontalIndicator(e.currentTarget)
        )
    );
}
