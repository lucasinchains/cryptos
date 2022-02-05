import React from 'react';

const VideoItem = ({video}) => {
  return (
      <div>
        <h4>{video.snippet.title}</h4>
          <iframe 
              src={`http://youtube.com/embed/${video.id.videoId}`}
              allowfullscreen="allowfullscreen"
              width="500px"
              height="300px">
          </iframe>
      </div>
  );
};

export default VideoItem;