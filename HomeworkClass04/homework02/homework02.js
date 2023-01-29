let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");
let button = document.getElementById("btn");


let currentPage = 1;

function getPlanets(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let planets = data.results;
            printPlanets(planets);
            if (currentPage === 1) {
                prevButton.style.display = "none";
            } else {
                prevButton.style.display = "inline-block";
            }
            if (currentPage === 2) {
                nextButton.style.display = "none";
            } else {
                nextButton.style.display = "inline-block";
            }
        })
        .catch(error => console.log(error));
}

function printPlanets(planets) {
    let table = document.getElementById("table");
    let rows = `<tr>
        <th>Name</th>
        <th>Population</th>
        <th>Climate</th> 
        <th>Gravity</th> 
      </tr>`;
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
        rows += `<tr>
        <td>${planet.name}</td> 
        <td>${planet.population}</td> 
        <td>${planet.climate}</td> 
        <td>${planet.gravity}</td> 
      </tr>`;
  }
        table.innerHTML = rows;
  }

button.addEventListener("click", () => {
    let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    getPlanets(url);
});

nextButton.addEventListener("click", () => {
    currentPage++;
    let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    getPlanets(url);
});

prevButton.addEventListener("click", () => {
    currentPage--;
    let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    getPlanets(url);
});

