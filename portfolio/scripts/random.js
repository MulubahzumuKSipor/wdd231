const businessURL = "./scripts/CoC.json";

async function membersFetch() {
  try {
    const response = await fetch(businessURL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

membersFetch();
document.addEventListener("DOMContentLoaded", () => {
  membersFetch().then((cards) => {
    const randomCards = fetchRandomCards(cards);
    renderCards(randomCards);
  });
});

function fetchRandomCards(cards) {
  const members = cards.filter((card) => card.level > 1 && card.level < 4);

  const randomCards = members.sort(() => 0.5 - Math.random()).slice(0, 3);

  return randomCards.sort(() => 0.5 - Math.random());
}

function renderCards(cards) {
  const cardsElement = document.querySelector("#cards");
  cardsElement.innerHTML = "";

  cards.forEach((card) => {
    const cardSection = document.createElement("section");
    cardSection.classList.add("cardSection");

    const img = document.createElement("img");
    img.src = card.icons;
    img.alt = card.name + " logo";
    img.loading = "lazy";
    img.width = 200;
    img.height = 200;
    cardSection.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = card.name;
    cardSection.appendChild(h3);

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = card.address;
    cardSection.appendChild(address);

    const contact = document.createElement("p");
    contact.classList.add("phone");
    contact.textContent = card.contact;
    cardSection.appendChild(contact);

    const website = document.createElement("a");
    website.href = card.urls;
    website.textContent = `${card.urls}`;
    cardSection.appendChild(website);

    cardsElement.appendChild(cardSection);
  });
}
