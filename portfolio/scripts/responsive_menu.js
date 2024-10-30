const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hamButton.classList.toggle("show");
});

// JavaScript for modals and year update
document.getElementById("year").textContent = new Date().getFullYear();

function openModal(modalId) {
  document.getElementById(modalId).showModal();
}

function closeModal(modalId) {
  document.getElementById(modalId).close();

  window.addEventListener("click", function (event) {
    if (event.target === getElementById(modalId)) {
      modals.close();
    }
  });
}
