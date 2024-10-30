import { certificatesInfo } from "./certificatesInfo.mjs";

const certificates = certificatesInfo;

const modals = document.querySelector("#modal");
const closet = document.querySelector("#close-button");

const infoContainer = document.querySelector("#promoCards");

function display(aList) {
  infoContainer.innerHTML = "";
  aList.forEach((element) => {
    const container = document.createElement("section");
    container.classList.add("certificateSection");

    const titleTag = document.createElement("p");
    const title = `${element.name}`;

    titleTag.innerHTML = title;
    const img = document.createElement("img");
    img.src = element.icons;
    img.alt = element.name + " Certificate";
    img.loading = "lazy";
    img.width = 200;
    img.height = 200;

    container.appendChild(titleTag);
    container.appendChild(img);

    infoContainer.append(container);
  });
}

display(certificatesInfo);

/* Collect all necessary data */
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");
const myTitle = document.querySelector("#title h2");

/* Change original elements */
function displayInfo(elements) {
  modals.showModal();
  myTitle.innerHTML = `${elements.name}`;
  info1.innerHTML = `${elements.purpose}`;
  info2.innerHTML = `${elements.qualifications}`;
  info3.innerHTML = `${elements.school}`;
}
