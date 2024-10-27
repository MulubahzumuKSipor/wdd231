const figcaption = document.querySelector("#town");
const icons  = document.querySelector("#icon");
const describe = document.querySelector("#description");
const temp = document.querySelector("#temp");
const dew = document.querySelector("#pressure")
const humid = document.querySelector("#humidity")
const ws = document.querySelector("#windspeed")


const monday = document.querySelector("#monday")
const tuesday = document.querySelector("#tuesday")
const wednesday = document.querySelector("#wednesday")


const lon = "-10.812594771879137"; 
const lat = "6.31575440876422";
const key = "72cda687de2efb6aac89727e0fb521a2";

const url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=6.31575440876422&lon=-10.812594771879137&appid=72cda687de2efb6aac89727e0fb521a2`

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayOneResults(data);
        displayThreeResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayOneResults(data) {
    figcaption.innerHTML = data.city.name;
    describe.innerHTML = data.list[0].weather[0].description.toUpperCase();
    temp.innerHTML = `Temp: ${data.list[0].main.temp} &deg;F`
    const iconsrc =  `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    icons.setAttribute("SRC", iconsrc);
    icons.setAttribute('alt', data.list[0].weather[0].description)
    dew.innerHTML = `Pressure: ${data.list[0].main.pressure}mb`;
    ws.innerHTML = `Wind Speed: ${data.list[0].wind.speed}mph`;
    humid.innerHTML = `Humidity: ${data.list[0].main.humidity}&deg;F`;

}

function displayThreeResults(data) {
    monday.innerHTML = `Monday: ${data.list[0].main.temp} &deg;F`;
    tuesday.innerHTML = `Tuesday: ${data.list[1].main.temp} &deg;F`;
    wednesday.innerHTML = `Wednesday: ${data.list[2].main.temp} &deg;F`;
};

