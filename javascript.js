const name = "admin";
const phone = "9818562314";
const email = "admin@gmail.com";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-signup");
  const loginBtn = form.querySelectorAll("button")[1]; // Assuming second button is Login

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameVal = form.querySelector('input[name="nameText"]').value.trim();
    const phoneVal = form.querySelector('input[name="phoneText"]').value.trim();
    const emailVal = form.querySelector('input[name="emailText"]').value.trim();

    if (nameVal === name && phoneVal === phone && emailVal === email) {
      alert("Login success");
      loginBtn.style.display = "none";
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  });

  // Optional: Hide login button after successful login (if not using form submit)
  // loginBtn.addEventListener("click", function () { ... });
});