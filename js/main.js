// /*
// スライドメニュー
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
スムーススクロール
================================================ */
// ドロワーメニュー内のリンククリック時にドロワーを閉じる
document.querySelectorAll('#js-drawer-panel a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    menuIcon.classList.remove("is-checked");
    menuPanel.classList.remove("is-checked");
  });
});

/*
Swiper
================================================ */
const swiper = new Swiper(".about__swiper", {
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
  },
  slidesPerView: "auto",
  spaceBetween: 10,

  breakpoints: {
    960: {
      spaceBetween: 20,
    },
  },
});

// /*
// モーダル
// ================================================ */
