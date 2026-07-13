const url = "data/members.json";

const cards = document.querySelector(".directory-grid");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {


    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let websiteURL = document.createElement("a");
        let membershipLevel = document.createElement("p");
        let otherInfo = document.createElement("p");
        let image = document.createElement("img");
        name.textContent = `${member["name"]}`;
        address.textContent = `${member["address"]}`;
        phoneNumber.textContent = `${member["phone-number"]}`;
        websiteURL.textContent = `${member["website-URL"]}`;
        membershipLevel.textContent = `${member["membership-level"]}`;
        otherInfo.textContent = `${member["other-information"]}`;
        image.setAttribute("src", `images/${member["image-file-name"]}`);
        image.setAttribute("alt", `Logo image of ${member["name"]}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100%");
        websiteURL.setAttribute("href", `${member["website-URL"]}`);
        websiteURL.setAttribute("target", "_blank");
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteURL);
        card.appendChild(membershipLevel);
        card.appendChild(otherInfo);
        cards.appendChild(card);
    });
}

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.directory-grid");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
