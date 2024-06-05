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
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
