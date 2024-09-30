// Time 
const lastmod = document.querySelector("#last_modified");
lastmod.innerHTML = new Date().toLocaleDateString("en-US", Option);
document.getElementById("year").innerHTML = new Date().getFullYear();



/* responsive Menu */
const menu = document.querySelector('.menu');
const offscreen = document.querySelector(".off-screen");

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
    offscreen.classList.toggle('active');

});




