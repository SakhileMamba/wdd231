let date = new Date(Date.now()).getFullYear();
document.getElementById("year").innerText = date;

document.getElementById("lastModified").innerText = `Last modified: ${document.lastModified}`;

const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
})