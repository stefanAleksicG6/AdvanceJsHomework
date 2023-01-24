let button = document.getElementById("btn");

button.addEventListener("click", function(){
    fetch (`https://swapi.dev/api/films`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let films = data.results;
        let filmList = document.getElementById("ul");
        for (let i = 0; i < films.length; i++) {
            filmList.innerHTML += `<li> ${films[i].title} </li>`;
        }
    })
    .catch(function(error){
        console.log(`Error: ${error}`)
    });
});




