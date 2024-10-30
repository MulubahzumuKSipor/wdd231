const dataUrl = window.location.href;

const data = dataUrl.split("?");

const formData = data[1].split("&");
console.log(formData);

function display(cup) {
  formData.forEach((element) => {
    if (element.startsWith(cup)) {
      results = element.split("=")[1].replace("%40", "@");
      results = results.replace("%27s+", ".");
    }
  });
  return results;
}

const showResults = document.querySelector("#results");

const info = document.querySelector("#info1");
const info1 = document.querySelector("#info2");
const info2 = document.querySelector("#info3");
const info3 = document.querySelector("#info4");
const info4 = document.querySelector("#info5");

info.innerHTML = `First name: ${display("first")}`;
info1.innerHTML = `Last Name: ${display("last")}`;
info3.innerHTML = `Email: ${display("email")}`;
info4.innerHTML = `Contact: ${display("contact")}`;
info8.textContent = `You sent your feedback: ${new Date().toLocaleString(
  "en-US",
  {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  }
)}`;
