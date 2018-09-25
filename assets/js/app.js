// Nosh
// Author: Andrew Ulm

const YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
const YUMMLY_APPID = '368554d1';

let searchTerm = 'chicken';
let YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + searchTerm;

$.ajax({
    url: YUMMLY_URL,
    method: 'GET'
}).then( function(res) {

    console.log(res)

});