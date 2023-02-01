let imagePerson = document.getElementById("person");
let shipImage = document.getElementById("starShip");
let personTable = document.getElementById("personsTable")
let starshipTable = document.getElementById("starships")
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

let currentPage = 1;

function fetchData(url, table) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let results = data.results;
      let tableHead;
      if (table.id === "personsTable") {

        tableHead = `<thead>
             <tr>
              <th>Name</th> 
              <th>Height</th> 
              <th>Mass</th> 
              <th>Gender</th> 
              <th>Birth Year</th> 
              <th>Number of Movies</th> 
            </tr> 
        </thead>`;
        table.innerHTML = tableHead;

        for (let i = 0; i < results.length; i++) {

          let tableRow = `<tr> 
            <td>${results[i].name}</td> 
            <td>${results[i].height}</td> 
            <td>${results[i].mass}</td> 
            <td>${results[i].gender}</td> 
            <td>${results[i].birth_year}</td> 
            <td>${results[i].films.length}</td> 
          </tr>`;
          table.innerHTML += tableRow;
        }
      } else if (table.id === "starships") {

        tableHead = `<thead>
            <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Cost</th>
            <th>Crew + Passengers</th>
            <th>Class</th>
            </tr>
            </thead>`;
        table.innerHTML = tableHead;

        for (let i = 0; i < results.length; i++) {
          let crew = results[i].crew;
          let passengers = results[i].passengers;
        
          if ((crew === "unknown" || crew === "n/a") && (passengers !== "unknown" && passengers !== "n/a")) {
            results[i].sum = parseInt(passengers);
          } else if ((passengers === "unknown" || passengers === "n/a") && (crew !== "unknown" && crew !== "n/a")) {
            results[i].sum = parseInt(crew);
          } else if (crew !== "unknown" && crew !== "n/a" && passengers !== "unknown" && passengers !== "n/a") {
            
            if (crew.includes(",")) {
              crew = crew.replace(",", "");
            }
            if (passengers.includes(",")) {
              passengers = passengers.replace(",", "");
            }
            if (crew.includes("-")) {
              crew = crew.split("-")[1];
            }
            if (passengers.includes("-")) {
              passengers = passengers.split("-")[1];
            }
            results[i].sum = parseInt(crew) + parseInt(passengers);
          }
        
          let tableRow = `<tr> 
            <td>${results[i].name}</td> 
            <td>${results[i].model}</td> 
            <td>${results[i].manufacturer}</td> 
            <td>${results[i].cost_in_credits}</td>
            <td>${results[i].sum}</td> 
            <td>${results[i].starship_class}</td> 
          </tr>`;
          table.innerHTML += tableRow;
        }
      }
      
      if (data.previous === null) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "block";
      }
      if (data.next === null) {
        nextButton.style.display = "none";
      } else {
        nextButton.style.display = "block";
      }
    });
}

imagePerson.addEventListener("click", function() {
  fetchData(`https://swapi.dev/api/people/?page=${currentPage}`, personTable);
});

shipImage.addEventListener("click", function () {
  fetchData(`https://swapi.dev/api/starships/?page=${currentPage}`, starshipTable );
});

nextButton.addEventListener("click", function() {
  currentPage++;
  let activeTable = "";
  if (document.querySelector("#personsTable tbody tr")) {
    activeTable = "personsTable";
  } else if (document.querySelector("#starships tbody tr")) {
    activeTable = "starships";
  }
  fetchData(`https://swapi.dev/api/${activeTable === "personsTable" ? "people" : "starships"}/?page=${currentPage}`, document.getElementById(activeTable));
});

previousButton.addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    let activeTable = "";
    if (document.querySelector("#personsTable tbody tr")) {
      activeTable = "personsTable";
    } else if (document.querySelector("#starships tbody tr")) {
      activeTable = "starships";
    }
    fetchData(`https://swapi.dev/api/${activeTable === "personsTable" ? "people" : "starships"}/?page=${currentPage}`, document.getElementById(activeTable));
  }
});