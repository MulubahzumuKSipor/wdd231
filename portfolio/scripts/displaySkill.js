import { skills } from "../scripts/skill.mjs";

console.log(skills);

const projectContainer = document.querySelector(".skillCards");

function display(aList) {
  projectContainer.innerHTML = "";
  aList.forEach((element) => {
    const container = document.createElement("section");
    container.classList.add("skillSection");

    const titleTag = document.createElement("p");
    const img = document.createElement("img");
    img.src = element.icons;
    img.alt = element.name + " logo";
    img.loading = "lazy";
    img.width = 50;
    img.height = 50;

    titleTag.innerHTML = element.name;

    container.appendChild(img);
    container.appendChild(titleTag);

    projectContainer.append(container);
  });
}

display(skills);
