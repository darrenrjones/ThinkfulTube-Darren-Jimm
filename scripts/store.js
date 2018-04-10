'use strict';

//eslint-disable-next-line no-unused-vars
const store = (() => {
  let videos = [

  ];

  function setVideos(arrOfDecoratedVideoObjects){
    this.videos.push(...arrOfDecoratedVideoObjects);
  }

  return{
    videos, setVideos,
  };
})();