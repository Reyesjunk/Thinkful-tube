var OMDB_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    part: 'snippet',
    key: 'AIzaSyDrYIhkhh643MjXhy191mg42G6NXROoWlk'
  };
  $.getJSON(OMDB_BASE_URL, query, callback);
}


function displayYoutubeSearchData(data) {
  var resultElement = '';
  console.log(data);
  data.items.forEach(function(item){
    resultElement+= '<a href="https://www.youtube.com/watch?v='+ item.id.videoId + '">'+
    '<img src ="'+ item.snippet.thumbnails.medium.url + '"></a><br>'+
    '<p><b>Title:</b> ' + item.snippet.title + '</p>';
  });
  // if (data.Search) {
  //   data.Search.forEach(function(item) {
  //    resultElement += '<p>' + item.Title + '</p>';
  //   });
  // }
  // else {
  //   resultElement += '<p>No results</p>';
  // }

  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});
