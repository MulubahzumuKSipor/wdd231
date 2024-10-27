
const latitude =  "-6.333972067741023";
const longitude = "31.963641208048827";
const APIkey = "72cda687de2efb6aac89727e0fb521a2"

const APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=imperial&cnt=3`

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

