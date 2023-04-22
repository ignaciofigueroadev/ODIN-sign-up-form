const modal = document.querySelector(".modal");
const button = document.querySelector(".form__button");
const close = document.querySelector(".modal__close");

const openModal = () => {
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
};

const closeModal = () => {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
};

button.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
