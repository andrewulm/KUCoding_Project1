// Nosh App
// Author: Andrew Ulm

$(document).ready(function () {
    //// Setup ////

    // Array to store ingredients to query API
    let ingredients = [];

    // API Keys
    const YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
    const YUMMLY_APPID = '368554d1';
    var YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + ingredients;


    //// Functions ////

    // Adds ingredient to the array and displays to the page
    // @param ingredient: ingredient to add
    function addIngredient(ingredient) {
        ingredients.push(ingredient.toLowerCase() + '+');
        $('#_ingredientList').append('<li data-id="' + ingredient + '+">' + ingredient + '<button class="delete"> <i class="fas fa-times"></i> </button>');
    }

    // Removes ingredient from the array and removes from page
    // @param item: ingredient to remove
    function removeIngredient(item) {
        let arrayItemToRemove = jQuery.inArray($(item).parent().attr('data-id'), ingredients);
        $(item).parent().remove();
        ingredients.splice(arrayItemToRemove, 1);
        showGetRecipesButton();
    }

    // Yummly API call to retrieve all recipes based on the ingredents array
    function getRecipes() {
        $.ajax({
            url: YUMMLY_URL,
            method: 'GET'
        }).then( function(res) {

            console.log(res);
            let recipes = res.matches;

            // Adds each recipe card to the page
            recipes.forEach(function(recipe) {
                let recipesList = $('#_recipes');
                   let newRecipe = $(
                       '<div class="card">' +
                        '<div class="card-header">' + recipe.recipeName + '</div>' +
                        '<div class="card-body">' +
                            '<img src="' + recipe.imageUrlsBySize[90] + '">' + '</div>'
                   );

                $(recipesList).append(newRecipe);
            });
        });
    }

    // Displays and Hides the Get button based on ingredients in the array
    function showGetRecipesButton() {
        if ( ingredients.length > 0 ) {
            $('#_getRecipes').css('display', 'block');
        } else {
            $('#_getRecipes').css('display', 'none');
        }
    }

    //// Triggers ////

    // When the 'Add' button is clicked
    $("#_addIngredient").on('click', function(event){
        event.preventDefault();

        let ingredient = $("#_ingredient").val().trim();
        if ( ingredient === '') {
            console.log('empty');
        } else {
            addIngredient(ingredient);
            $('#_ingredient').val('');
        }
        showGetRecipesButton();
    });

    // When the 'Get Recipes' button is clicked
    $('#_getRecipes').on('click', function(event){
        event.preventDefault();

        YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + ingredients;
        getRecipes();
    });

    // When the 'X' is clicked
    $(document).on('click', '.delete', function() {
        removeIngredient(this);
    });
});