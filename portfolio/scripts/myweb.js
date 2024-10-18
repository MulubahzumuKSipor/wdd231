document.querySelector(".unseen").style.color = "red"

const year = document.querySelector("#year");
document.getElementById("year").innerHTML = new Date((document.lastModified));

onclick = "myClickFunction()"

function myClickFunction() {
    var elementName = document.getElementById("unseen")

    if (elementName.style.color != "brown"){
        elementName.style.color = "brown"
    }

    else {elementName.style.color = "black"}

}



