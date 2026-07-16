const jsonUrl = "data/members.json";

const membersSpotlights = document.querySelector(".member-spotlights");

let indexes = [];

async function getMemberData() {
  const response = await fetch(jsonUrl);
  const data = await response.json();

  while (indexes.length < 3) {

    let random = Math.floor(Math.random() * data.members.length);
    console.log(random);

    console.log(indexes);
    if (indexes.indexOf(random) == -1) {
      if (data.members[random]["membership-level"] === "Silver" || data.members[random]["membership-level"] === "Gold") {
        indexes.push(random);
      }
    }
  }

  displayMembers(indexes, data.members);
}

const displayMembers = (indexes, members) => {


  indexes.forEach(index => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let info = document.createElement("p");
    let contactDiv = document.createElement("div");
    let email = document.createElement("p");
    let phone = document.createElement("p");
    let websiteURL = document.createElement("a");


    name.textContent = `${members[index]["name"]}`;
    info.textContent = `${members[index]["other-information"]}`;

    email.textContent = `${members[index]["email"]}`;
    phone.textContent = `${members[index]["phone-number"]}`;
    websiteURL.textContent = `${members[index]["website-URL"]}`;


    websiteURL.setAttribute("href", `${members[index]["website-URL"]}`);
    websiteURL.setAttribute("target", "_blank");
    card.setAttribute("class", "spotlight");
    contactDiv.setAttribute("class", "spotlight-contacts");

    card.appendChild(name);
    card.appendChild(info);
    contactDiv.appendChild(email);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(websiteURL);
    card.appendChild(contactDiv);
    membersSpotlights.appendChild(card);

  });
}

getMemberData();