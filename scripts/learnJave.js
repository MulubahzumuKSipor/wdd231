
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {

    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);

}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-day Saints President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

const utah = document.querySelector("#utah");
const alien = document.querySelector("#alien")
const ancestor = document.querySelector("#ancestor")
const moreChildren = document.querySelector("#moreChildren")
const longServe = document.querySelector("#longServe")

utah.addEventListener('click', () => {
    getProphetData(url.filter(prophets => prophets.birthplace == "Utah"))

})



