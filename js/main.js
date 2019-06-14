// Объявление переменных
let feedback = document.querySelector(".feedback-button");
let modal = document.querySelector(".modal");
let modal_close = modal.querySelector(".modal-close");
let name = modal.querySelector("#name");
let email = modal.querySelector("#email");
let message = modal.querySelector("#message-text");

let isStorageEnabled = true;

try {
  name.value = localStorage.getItem("name");
  email.value = localStorage.getItem("email");
} catch (err) {
  isStorageEnabled = false;
}

feedback.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.add("modal-show");
});

modal_close.addEventListener("click", function(e) {
e.preventDefault();
  modal.classList.remove("modal-show");
})