'use strict';

//eslint-disable-next-line no-unused-vars
const store = (() => {
  let videos = [

  ];

  let originalSearchQuery = '';
  let next_page = '';

  function setVideos(arrOfDecoratedVideoObjects){
    this.videos = arrOfDecoratedVideoObjects;
  }

  return{
    videos, setVideos, next_page, originalSearchQuery,
  };
})();