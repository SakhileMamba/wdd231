let courses = [
  {
    name: "CSE110",
    completed: true,
    credits: 2,
    branch: "CSE"
  },
  {
    name: "CSE111",
    completed: true,
    credits: 2,
    branch: "CSE"
  },
  {
    name: "CSE210",
    completed: false,
    credits: 2,
    branch: "CSE"
  },
  {
    name: "WDD130",
    completed: true,
    credits: 2,
    branch: "WDD"
  },
  {
    name: "WDD131",
    completed: false,
    credits: 2,
    branch: "WDD"
  },
  {
    name: "WDD231",
    completed: false,
    credits: 2,
    branch: "WDD"
  }
]

function helper() {
  let showCourses = document.querySelectorAll(".show");

  let credits = [];
  showCourses.forEach(element => credits.push(parseInt(element.getAttribute("data-credits-type"))));
  document.querySelector("#credits").innerHTML = credits.reduce((total, num) => total + num, 0);
}

function showAllCards() {
  for (let i = 0; i < courses.length; i++) {

    let element = document.createElement('span');
    element.innerHTML = courses[i].name;
    element.setAttribute("data-credits-type", courses[i].credits);
    element.classList.add("course", courses[i].completed, "show", courses[i].branch);
    document.querySelector('#courses').appendChild(element);
  }

  helper();
}

function toggleWddCardsOnly() {
  let elements = document.querySelectorAll(".WDD");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("show");
  }

  let elementsRemove = document.querySelectorAll(".CSE");
  for (let i = 0; i < elementsRemove.length; i++) {
    elementsRemove[i].classList.remove("show");
  }

  helper();
}

function toggleCseCardsOnly() {
  let elements = document.querySelectorAll(".CSE");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("show");
  }

  let elementsRemove = document.querySelectorAll(".WDD");
  for (let i = 0; i < elementsRemove.length; i++) {
    elementsRemove[i].classList.remove("show");
  }

  helper();
}

function toggleAllCards() {
  let elements = document.querySelectorAll(".course");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("show");
  }

  helper();
}



document.querySelector("#wdd").addEventListener("click", toggleWddCardsOnly);
document.querySelector("#cse").addEventListener("click", toggleCseCardsOnly);
document.querySelector("#all").addEventListener("click", toggleAllCards);

showAllCards();
document.querySelectorAll(".show").forEach(element => {
  console.log(element.getAttribute("data-credits-type"))
});;

