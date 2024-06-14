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
About Swiper
================================================ */
const aboutSwiper = new Swiper(".about__swiper", {
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
const openButtons = document.querySelectorAll(".js-dialog-open");
const closeButtons = document.querySelectorAll(".js-dialog-close");

openButtons.forEach((button) => {
  const dialog = document.querySelector(button.dataset.dialog);
  button.addEventListener("click", () => {
    dialog.showModal();
  });
});

closeButtons.forEach((button) => {
  const dialog = button.closest("dialog");
  button.addEventListener("click", () => {
    dialog.close();
  });
});

/*
Spot Swiper
================================================ */
const spotSwiper = new Swiper(".spot__swiper", {
  loop: true,
  // speed: 4000,
  // autoplay: {
  //   delay: 0,
  // },
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  // 初期表示するスライドの番号（0〜）
  initialSlide: 1,
  // アクティブなスライドを中央に配置する
  centeredSlides: true,
  // breakpoints: {
  //   960: {
  //     spaceBetween: 20,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".spot__swiper-next",
    prevEl: ".spot__swiper-prev",
  },
});
