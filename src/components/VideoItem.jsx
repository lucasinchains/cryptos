import React from 'react';

const VideoItem = ({video}) => {
  return (
      <div>
          <h3>{video.snippet.title}</h3>
      </div>
  );
};

export default VideoItem;