import { projectsInfo } from "../scripts/projectInfo.mjs";

console.log(projectsInfo);

const modals = document.querySelector("#projectModal");
const closet = document.querySelector(".close-button");

const projectContainer = document.querySelector("#projectCards");

function display(aList) {
  projectContainer.innerHTML = "";
  aList.forEach((element) => {
    const container = document.createElement("section");
    container.classList.add("projectSection");

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

    projectContainer.append(container);
  });
}

display(projectsInfo);
const info1 = document.querySelector("#inf1");
const info2 = document.querySelector("#inf2");
const myTitle = document.querySelector("#projectTitle h2");

closet.addEventListener("click", function () {
  modals.close();
});

window.addEventListener("click", function (event) {
  if (event.target === modals) {
    modals.close();
  }
});

function displayInfo(elements) {
  modals.showModal();
  myTitle.innerHTML = `${elements.name}`;
  info1.innerHTML = `${elements.purpose}`;
  info2.innerHTML = `${elements.client}`;
}

// Time
const lastmod = document.querySelector("#last_modified");
lastmod.innerHTML = new Date().toLocaleDateString("en-US", Option);
document.getElementById("year").innerHTML = new Date().getFullYear();
