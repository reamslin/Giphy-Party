// api key from Giphy API
const key = 'dp9447Uvx73IAez4G2wSaKYCMfl77Rio';

// Random GIF base URL
const baseURL = 'https://api.giphy.com/v1/gifs/random';

// Jquery Objects
const $gifs = $('#gifs');
const $keyword = $('#keyword');

// retrieves gif from API and adds to html gifs element
async function getGif(keyword) {
    // make request with tag as entered keyword
    const response = await axios.get(baseURL, { params: {tag: keyword,
                                                        api_key : key}});
    // retrieve url from response
    const imgSource = response.data.data.images.fixed_width.url;

    // create new img element and append to gifs element
    $(`<img src=${imgSource} class="card img-fluid d-inline-block bg-dark p-1">`).appendTo($gifs);
}

// on form submission, get gif
$('form').on('submit', function (e) {
    e.preventDefault();
    
    // call getGif with the entered keyword
    getGif($keyword.val())
})

// on remove button, clear gifs
$('#remove').on('click', function () {
    $gifs.html('');
})