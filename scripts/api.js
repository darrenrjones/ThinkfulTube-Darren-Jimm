'use strict';
/* global store, videoList*/
//eslint-disable-next-line no-unused-vars
const api = (function (){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyCz-XXdoMaVM8PXSJ2hUD26718OM2v_i_I';

  
  const fetchVideos = function(searchTerm, page_token) {
    store.originalSearchQuery = searchTerm;
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm,
      type: 'video',
      pageToken: page_token,

    };
    $.getJSON(BASE_URL,query, decorateResponse);
  };

  const decorateResponse = function(response) {
    const results = response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channel: item.snippet.channelId, 
      };
    });
    store.next_page = response.nextPageToken;
    store.prev_page = response.prevPageToken;
    
    //console.log(results);
    //console.log(results[1].title);
    //generateVideoItemHtml(results);
    store.setVideos(results);
    videoList.render();
  };

  return{
    fetchVideos,
  };
}());

