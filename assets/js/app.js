// Nosh
//

const YUMMLY_APIKEY = 'ed390d594e8e1a62e504715e17a2943b';
const YUMMLY_APPID = '368554d1';

var searchTerm = 'chicken'
var YUMMLY_URL = 'https://api.yummly.com/v1/api/recipes?_app_id=' + YUMMLY_APPID + '&_app_key=' + YUMMLY_APIKEY + '&q=' + searchTerm;

console.log(YUMMLY_URL);

$.ajax({
    url: YUMMLY_URL,
    method: 'GET'
}).then( function(res) {

    console.log(res)

});