// 画面はみ出しチェック
// document.querySelectorAll("*").forEach((el) => (el.clientWidth > document.body.clientWidth ? console.log(el) : console.log("ないよ")));

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
page topボタンを表示
================================================ */
const pageTop = document.querySelector("#js-page-top");
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  if (window.scrollY > 300) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
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
    900: {
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
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  // 初期表示するスライドの番号（0〜）
  // initialSlide: 0,
  // アクティブなスライドを中央に配置する
  centeredSlides: true,
  breakpoints: {
    900: {
      spaceBetween: 32,
      centeredSlides: false,
    },
  },

  navigation: {
    nextEl: ".spot__swiper-next",
    prevEl: ".spot__swiper-prev",
  },
});

/*
FAQ
================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const details = document.querySelectorAll(".js-details");
  const RUNNING_VALUE = "running";

  details.forEach((detail) => {
    const summary = detail.querySelector(".js-summary");
    const content = detail.querySelector(".js-content");

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      // 連打防止
      if (detail.dataset.animStatus === RUNNING_VALUE) {
        return;
      }

      const isOpen = detail.classList.contains("is-open");

      if (isOpen) {
        // アコーディオンを閉じる

        const closingAnim = content.animate(closingAnimKeyframes(content), animTiming);
        detail.classList.toggle("is-open");
        detail.dataset.animStatus = RUNNING_VALUE;

        closingAnim.onfinish = () => {
          // アニメーション完了後にopen属性を削除
          detail.removeAttribute("open");
          detail.dataset.animStatus = "";
        };
      } else {
        // アコーディオンを開く
        detail.setAttribute("open", true);
        detail.classList.toggle("is-open");

        const openingAnim = content.animate(openingAnimKeyframes(content), animTiming);
        detail.dataset.animStatus = RUNNING_VALUE;

        openingAnim.onfinish = () => {
          detail.dataset.animStatus = "";
        };
      }
    });
  });
});

const animTiming = {
  duration: 400,
  easing: "ease-in-out",
};

const closingAnimKeyframes = (content) => [
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];

const openingAnimKeyframes = (content) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
];
