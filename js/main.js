// /*
// スライドメニュー: js
// ================================================ */
const menuIcon = document.querySelector("#js-drawer-icon");
const menuPanel = document.querySelector("#js-drawer-panel");

if (menuIcon) {
  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle("is-checked");
    menuPanel.classList.toggle("is-checked");
  });
}

/*
スムーススクロール：js
================================================ */
// ドロワーメニュー内のリンククリック時にドロワーを閉じる
document.querySelectorAll('#js-drawer-panel a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    menuIcon.classList.remove("is-checked");
    menuPanel.classList.remove("is-checked");
  });
});

/*
Swiper: js
================================================ */
const swiper = new Swiper(".about__swiper", {
  loop: true,
  // loopAdditionalSlides: 1,
  speed: 4000,
  autoplay: {
    delay: 0,
    // delay: 1000,
    // disableOnInteraction: false,
  },
  // slidPerView: 3,
  slidesPerView: "auto",
  spaceBetween: 10,

  // breakpoints: {
  //   600: {
  //     slidesPerView: 2
  //   },
  //   960: {
  //     slidesPerView: 3,
  //     spaceBetween: 32
  //   }
  // }
});
