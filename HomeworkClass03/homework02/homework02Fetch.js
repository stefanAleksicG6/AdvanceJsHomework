let button = document.getElementById("btn");

button.addEventListener("click", function(){
    fetch (` https://swapi.dev/api/vehicles/20 `)
    .then (function(response){
        return response.json()
    })
    .then(function(data) {
        let vehicle = data;
        let vehicleName = document.getElementById("h2");
            vehicleName.innerText = vehicle.name;

        let table = document.getElementById("table");
            table.innerHTML = `
                <tr>
                    <td>Model:</td>
                    <td>${vehicle.model}</td>
                </tr>
                <tr>
                    <td>Manufacturer:</td>
                    <td>${vehicle.manufacturer}</td>
                </tr>
                <tr>
                    <td>Crew:</td>
                    <td>${vehicle.crew}</td>
                </tr>
                <tr>
                    <td>Passengers:</td>
                    <td>${vehicle.passengers}</td>
                </tr>
                <tr>
                    <td>Class:</td>
                    <td>${vehicle.vehicle_class}</td>
                </tr>
            `;
        })
    .catch(function(error){
        console.log(`Error: ${error}`)
    });
});
