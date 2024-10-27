const hamButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamButton.classList.toggle("show");
});
