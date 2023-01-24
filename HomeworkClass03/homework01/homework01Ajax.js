$(document).ready(function() {
    let button = $("#btn");

    button.click(function() {
        $.ajax({
            url: 'https://swapi.dev/api/films',
            success: function(response) {
                let films = response.results;
                let filmList = $('#ul');
            for(let i = 0; i < films.length; i++) {
                    filmList.append('<li>' + films[i].title + '</li>');

            }
            },
            error: function(response) {
                console.log(`Error: ${response.status}`);
                
            }
        });
    });
});
                
        

    
