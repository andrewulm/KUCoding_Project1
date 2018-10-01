// Nosh
// Author: Andrew Ulm

$(document).ready(function () {

    let ingredients = [];

    const YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
    const YUMMLY_APPID = '368554d1';
    var YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + ingredients;

    function addIngredient(ingredient) {
        ingredients.push(ingredient.toLowerCase() + '+');

        $('#_ingredientList').append('<li>' + ingredient + '<button class="delete"> X </button>');
        console.log(ingredients);

    }

    function getRecipes() {
        $.ajax({
            url: YUMMLY_URL,
            method: 'GET'
        }).then( function(res) {
            console.log(res);
        })
    }

    function showGetRecipesButton() {
        if ( ingredients.length > 1 ) {
            $('#_getRecipes').css('display', 'block');
        } else {
            $('#_getRecipes').css('display', 'none');
        }
    }


    $("#_addIngredient").on('click', function(event){
        event.preventDefault();
        showGetRecipesButton();

        let ingredient = $("#_ingredient").val().trim();

        if ( ingredient === '') {
            console.log('empty');
        } else {
            addIngredient(ingredient);
            $('#_ingredient').val('');
        }
    });

    $('#_getRecipes').on('click', function(event){
        event.preventDefault();

        YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + ingredients;

        getRecipes();
    });
});