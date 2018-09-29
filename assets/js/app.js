// Nosh
// Author: Andrew Ulm

$(document).ready(function () {

    

    
    
    $("#_addIngredient").on('click', function(event){
        event.preventDefault();
        var searchTerms = $("#_ingredient").val().trim();

        console.log(searchTerms);
        var YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
        var YUMMLY_APPID = '368554d1';
        var query_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + searchTerms;
        console.log(query_URL);
        $.ajax({
            url: query_URL,
            method: 'GET'
        })
            .then(function (response) {
                var results = response;
                console.log(results);
                for (var i = 0; i < response.matches.length; i++) {
                    
                        var ingredientDiv = $("<div class = 'col' >");
                        var recipeName = response.matches[i].recipeName;
                        console.log(recipeName);
                        var p = $("<p>").text("Recipe: " + recipeName)
                        var recipeImage = $("<img>");
                        recipeImage.attr("src",response.matches[i].smallImageUrls);
                        console.log(recipeImage);
                        $("a").attr("href", "http://www.yummly.com/recipe/" + response.matches[i].id);
                        ingredientDiv.append("<a href = 'www.yummly.com/recipe/'" + response.matches[i].id + '>' + "<p> Recipe: " + recipeName + "</p>" +"</a>");
                        ingredientDiv.append(recipeImage);
                        
                        
                        $("#_recipes").prepend(ingredientDiv);
                    
                    
                }
            })

    });



});