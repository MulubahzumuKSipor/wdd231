import { certificatesInfo } from "./join.mjs";

const certificates = certificatesInfo;

const modals = document.querySelector("#modal");
const closet = document.querySelector("#close-button");

const infoContainer = document.querySelector("#promoCards");

function display(aList) {
  infoContainer.innerHTML = "";
  aList.forEach((element) => {
    const container = document.createElement("section");
    container.classList.add("skillSection");

    const titleTag = document.createElement("p");
    const buttonTag = document.createElement("button");

    const title = `${element.name}`;
    const buttons = "Learn more";

    titleTag.innerHTML = title;
    buttonTag.innerHTML = buttons;

    buttonTag.addEventListener("click", () => {
      displayInfo(element);
    });

    container.appendChild(titleTag);
    container.appendChild(buttonTag);

    infoContainer.append(container);
  });
}

display(certificatesInfo);

/* Collect all necessary data */
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");
const myTitle = document.querySelector("#title h2");

/* Close modal when button clicked */
closet.addEventListener("click", function () {
  modals.close();
});

window.addEventListener("click", function (event) {
  if (event.target === modals) {
    modals.close();
  }
});

/* Change original elements */
function displayInfo(elements) {
  modals.showModal();
  myTitle.innerHTML = `${elements.name}`;
  info1.innerHTML = `${elements.purpose}`;
  info2.innerHTML = `${elements.qualifications}`;
  info3.innerHTML = `${elements.school}`;
}
