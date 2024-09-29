// Time 
const lastmod = document.querySelector("#last_modified");
lastmod.innerHTML = new Date().toLocaleDateString("en-US", Option);
document.getElementById("year").innerHTML = new Date().getFullYear();



const url = 'https://mulubahzumuksipor.github.io/wdd231/chamber/scripts/CoC.json';

const cards = document.querySelector('#businessCards');

async function getBusinessData() {

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.businesses);
    displayBusiness(data.businesses)
}

getBusinessData();

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {

        let businessCard = document.createElement('section');
        let businessName = document.createElement('h2');
        let address = document.createElement('p')
        let contact = document.createElement('p')
        let email = document.createElement('a')
        let membership = document.createElement('p')
        let portrait = document.createElement('img');

        
        businessName.textContent = `${business.Name}`;
        address.innerHTML = `${business.Address}`
        contact.innerHTML = `${business.Contact}`
        email.innerHTML = `${business.WebsiteUrls}`
        membership.innerHTML = `${business.MembershipLevel}`



        portrait.setAttribute('src', business.icons);
        portrait.setAttribute('alt', `Icon of ${business.icons}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '100');

        businessCard.appendChild(portrait);
        businessCard.appendChild(businessName);
        businessCard.appendChild(address)
        businessCard.appendChild(contact)
        businessCard.appendChild(email)
        businessCard.appendChild(membership)
        

        cards.appendChild(businessCard);
    });
}
