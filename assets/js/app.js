// Nosh
// Author: Andrew Ulm

$(document).ready(function () {

    const YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
    const YUMMLY_APPID = '368554d1';

    let searchTerms = [];
    let YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + searchTerms;

    $.ajax({
        url: YUMMLY_URL,
        method: 'GET'
    }).then(function (res) {

    });

    $('#_addIngredient').on('click', function (event) {
        event.preventDefault();

        let ingredient = $('#_ingredient').val().trim();

        searchTerms.push(ingredient);

        $('#_ingredientList').html('<li>' + ingredient)

        console.log(searchTerms);

        $('#_ingredient').val('');

    });

});