import { members } from "../scripts/join.mjs";

console.log(members);

const modals = document.querySelector("#modal");
const closet = document.querySelector("#close-button");

const infoContainer = document.querySelector("#skill");

function display(aList) {
  infoContainer.innerHTML = "";
  aList.forEach((element) => {
    const container = document.createElement("section");
    container.classList.add("section");

    const titleTag = document.createElement("p");
    const buttonTag = document.createElement("button");

    const title = `${element.name}`;
    const buttons = "Learn more";

    titleTag.innerHTML = title;
    buttonTag.innerHTML = buttons;

    buttonTag.addEventListener("click", () => {
      displayInfo(element);
    });

    if (element.name === "Bronze Membership") {
      container.classList.add("bronze");
    } else if (element.name === "Silver Membership") {
      container.classList.add("silver");
    } else if (element.name === "Gold Membership") {
      container.classList.add("premium");
    } else {
      container.classList.add("normal");
    }

    container.appendChild(titleTag);
    container.appendChild(buttonTag);

    infoContainer.append(container);
  });
}

display(members);
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");
const info4 = document.querySelector("#info4");
const info5 = document.querySelector("#info5");
const info6 = document.querySelector("#info6");
const myTitle = document.querySelector("#title h2");

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
  info1.innerHTML = `${elements.benefits[0]}`;
  info2.innerHTML = `${elements.benefits[1]}`;
  info3.innerHTML = `${elements.benefits[2]}`;
  info4.innerHTML = `${elements.benefits[3]}`;
  info5.innerHTML = `${elements.benefits[4]}`;
  info6.innerHTML = `Price: ${elements.price}`;
}
