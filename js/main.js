/*
360pxでviewport固定
================================================ */
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 360 ? "width=device-width,initial-scale=1" : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/*
スライドメニュー
================================================ */
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

/*
モーダル
================================================ */
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

/*
フォームバリデーション
================================================ */
const form = document.querySelector("#js-form");
const inputs = form.querySelectorAll(".js-input");
const checkBox = form.querySelector("#form-checkbox");

// 入力時の処理
const handleInput = (e) => {
  e.preventDefault();
  const inputElement = e.target;
  const formFieldHead = inputElement.closest(".form-field").querySelector(".form-field__head");
  const label = formFieldHead.querySelector(".form-field__label");

  if (inputElement.classList.contains("is-error")) {
    label.classList.remove("is-error");
    inputElement.classList.remove("is-error");
  }
};

// バリデーションエラー時の処理
const handleInvalid = (e) => {
  const inputElement = e.target;
  const formFieldHead = inputElement.closest(".form-field").querySelector(".form-field__head");
  const label = formFieldHead.querySelector(".form-field__label");

  if (label) {
    label.classList.add("is-error");
  }
  inputElement.classList.add("is-error");

  // プライバシーポリシー
  if (!checkBox.checked) {
    checkBox.classList.add("is-error");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", handleInput);
  input.addEventListener("invalid", handleInvalid);
});

form.addEventListener("submit", (e) => {
  if (form.checkValidity()) {
    alert("送信が完了しました");
  }
});

// プライバシーポリシーのチェックボックスにチェックされたらクラスを削除
checkBox.addEventListener("change", (e) => {
  e.preventDefault();
  if (checkBox.checked) {
    checkBox.classList.remove("is-error");
  }
});
