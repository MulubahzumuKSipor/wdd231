// Fetch the fetch("scripts/members.json"); with async/await
const fetchMembers = async () => {
    const response = await fetch("https://mulubahzumuksipor.github.io/wdd231/chamber/scripts/CoC.json");
    const members = await response.json();
    return members;
};

document.addEventListener("DOMContentLoaded", () => {
    const viewOptions = document.querySelectorAll("#view>button");

    viewOptions.forEach(option => {
        option.addEventListener("click", event => handleViewOptionsClick(event.target));
    });

    rendercards(cards);

});

function handleViewOptionsClick(target) {
    const cards = document.querySelector("#cards");
    if (target.id === "grid") {
        target.classList.toggle("active");
        document.getElementById("list").classList.toggle("active");
        // remove any classes that are on the cards element
        cards.classList = "grid";
    } else if (target.id === "list") {
        target.classList.toggle("active");
        document.getElementById("grid").classList.toggle("active");
        cards.classList = "list";
    } else {
        // get parent element of target until it is a button
        while (target.nodeName !== "BUTTON") {
            target = target.parentNode;
        }
        
        handleViewOptionsClick(target);
    }
}

function rendercards(cards) {

    
    fetchMembers().then(members => {
        let cardsElement = document.querySelector("#cards");

        // clear out any existing cards
        cardsElement.innerHTML = "";

        members.forEach(member => {
            console.log(member);
            const companyElement = document.createElement("div");
            companyElement.classList.add("company");
            
            const img = document.createElement("img");
            img.src = member.icons;
            img.alt = member.name + " logo";
            img.loading = "lazy";
            img.width = 200;
            img.height = 200;
            companyElement.appendChild(img);

            const h3 = document.createElement("h3");
            h3.textContent = member.name;
            companyElement.appendChild(h3);

            const address = document.createElement("p");
            address.classList.add("address");
            address.textContent = member.address;
            companyElement.appendChild(address);

            const contact = document.createElement("p");
            contact.classList.add("phone");
            contact.textContent = member.contact;
            companyElement.appendChild(contact);

            const website = document.createElement("a");
            website.href = member.urls;
            website.textContent = `${member.urls}`;
            companyElement.appendChild(website);

            cardsElement.appendChild(companyElement);
        });
    });
}

