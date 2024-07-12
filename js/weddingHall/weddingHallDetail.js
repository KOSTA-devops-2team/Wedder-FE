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

// Section5. 슬라이드 하단 페이지
let currentIndex = 0;

const similarCarousel = document.querySelector(".similar-inner");
const similarTotalItems = document.querySelectorAll(".similar-item").length;

const itemsPerSlide = 4;

const similarCurrentPageElement = document.getElementById(
    "similar-currentPage"
);
const similarTotalPagesElement = document.getElementById("similar-totalPages");
similarCurrentPageElement.textContent = 1; // 현재 페이지
const similarTotalPages = Math.ceil(similarTotalItems / itemsPerSlide);
similarTotalPagesElement.textContent = similarTotalPages; // 총 페이지수

document.getElementById("similar-prevButton").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        Event.preventDefault();
    }
    updateSimilarCarousel();
});

document.getElementById("similar-nextButton").addEventListener("click", () => {
    if (currentIndex < similarTotalItems / itemsPerSlide - 1) {
        currentIndex++;
    } else {
        Event.preventDefault();
    }
    updateSimilarCarousel();
});

function updateSimilarCarousel() {
    const offset = -currentIndex * 100; // 한 페이지 100%씩 이동
    similarCarousel.style.transform = `translateX(${offset}%)`;
    similarCurrentPageElement.textContent = currentIndex + 1;
}

// Section6. 슬라이드 하단 페이지

let currentIndex2 = 0;
const carousel = document.querySelector(".recommend-inner");
const totalItems = document.querySelectorAll(".recommend-item").length;

const currentPageElement = document.getElementById("currentPage");
const totalPagesElement = document.getElementById("totalPages");
currentPage.textContent = 1; // 현재 페이지
const totalPages = Math.ceil(totalItems / itemsPerSlide);
totalPagesElement.textContent = totalPages; // 총 페이지수

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        Event.preventDefault();
    }
    updateRecommendCarousel();
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentIndex2 < totalItems / itemsPerSlide - 1) {
        currentIndex2++;
    } else {
        Event.preventDefault();
    }
    updateRecommendCarousel();
});

function updateRecommendCarousel() {
    const offset = -currentIndex2 * 100; // 한 페이지 100%씩 이동
    carousel.style.transform = `translateX(${offset}%)`;
    currentPageElement.textContent = currentIndex2 + 1;
}
