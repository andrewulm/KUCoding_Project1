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
                var matches = response;
                console.log(matches);
                for (var i = 0; i < matches.length; i++) {
                   
                        var ingredientDiv = $("<div>");
                        var recipeName = matches[i].recipeName;
                        console.log(recipeName);
                        var p = $("<p>").text("Recipe: " + recipeName)
                        var recipeImage = $("<img>");
                        recipeImage.attr("src",matches[i].smallImageURLs);
                        ingredientDiv.append(p);
                        ingredientDiv.append(recipeImage);
                        $("#_recipes").prepend(ingredientDiv);
                    
                    
                }
            })

    });



});