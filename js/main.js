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
