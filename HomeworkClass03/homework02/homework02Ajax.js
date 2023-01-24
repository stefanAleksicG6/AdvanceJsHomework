$(document).ready(function() {
    let button = $("#btn");

    button.click(function() {
        $.ajax({
            url: 'https://swapi.dev/api/vehicles/20/',
            success: function(response) {
                let vehicle = response;
                let vehicleName = $('#h2');
                    vehicleName.text(vehicle.name);
                let table = $('#table');
                    table.append(`
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
                `);
            },
            error: function(response) {
                console.log(`Error: ${response.status}`);
            }
        });
    })
})