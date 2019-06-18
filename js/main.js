// Объявление переменных
let feedback = document.querySelector(".feedback-button");

let modal = document.querySelector(".modal");
let close = modal.querySelector(".modal-close");

let form = modal.querySelector("form");
let name = form.querySelector("#name");
let email = form.querySelector("#email");
let message = form.querySelector("#message-text");

let isStorageEnabled = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageEnabled = false;
}

feedback.addEventListener("click", function(e) {
  e.preventDefault();

  modal.classList.add("modal-show");

  if (storageName) {
    name.value = storageName;
    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    } else {
      email.focus();
    }
  } else {
    name.focus();
    if (storageEmail) {
      email.value = storageEmail;
    }
  }
});

close.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.remove("modal-show");
  if (modal.classList.contains("modal-error")) {
    modal.classList.remove("modal-error");
  }
  if (name.classList.contains("invalid")) {
    name.classList.remove("invalid");
  }
  if (email.classList.contains("invalid")) {
    email.classList.remove("invalid");
  }
  if (message.classList.contains("invalid")) {
    message.classList.remove("invalid");
  }
});

form.addEventListener("submit", function (e) {
  if (!name.value || !email.value || !message.value) {
    e.preventDefault();

    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");

    if (!name.value) {
      name.classList.add("invalid");
    }
    if (!email.value) {
      email.classList.add("invalid");
    }
    if (!message.value) {
      message.classList.add("invalid");
    }
  } else {
    if (isStorageEnabled) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();

    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      if (modal.classList.contains("modal-error")) {
        modal.classList.remove("modal-error");
      }
      if (name.classList.contains("invalid")) {
        name.classList.remove("invalid");
      }
      if (email.classList.contains("invalid")) {
        email.classList.remove("invalid");
      }
      if (message.classList.contains("invalid")) {
        message.classList.remove("invalid");
      }
    }
  }
});
