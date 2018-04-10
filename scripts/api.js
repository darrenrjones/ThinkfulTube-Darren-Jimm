'use strict';
/* global store*/

const api = (function (){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyCz-XXdoMaVM8PXSJ2hUD26718OM2v_i_I';

  
  const fetchVideos = function(searchTerm) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm,
      type: 'video',
    };
    $.getJSON(BASE_URL,query, decorateResponse);
  };

  const decorateResponse = function(response) {
    const results = response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });
    console.log(results);
    console.log(results[1].title);
    //generateVideoItemHtml(results);
    store.setVideos(results);
  };

  return{
    fetchVideos,
  };
}());