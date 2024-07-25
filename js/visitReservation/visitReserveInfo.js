/* 예약 확인 모달창 */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const modalBtn = document.querySelector(".btn-nxt");
    const closeBtn = document.querySelector(".cancel-btn");
  
    modalBtn.addEventListener("click", function() {
        modal.classList.add("show")
    })
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("show")
    })

    /* 예약 완료 모달창 */
    const modalNxt = document.querySelector(".check-btn");
    const modal2 = document.querySelector(".modal2");

    modalNxt.addEventListener("click", function() {
        modal.classList.remove("show")
        modal2.classList.add("show")    
    })



    // functions
    /* function toggleModal() {
      modal.classList.toggle("show");
    } */
  
    /* window.addEventListener("click", function(event) {
      // 모달의 검은색 배경 부분이 클릭된 경우 닫히도록 하는 코드
      if (event.target === modal) {
        modal.classList.remove("show")
    }); */
    window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  });
