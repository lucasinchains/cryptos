import React from 'react';

const VideoItem = ({video}) => {
  return (
      <div className="video-item">
        <h4>{video.snippet.title}</h4>
          <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id.videoId}`}
              allowFullScreen="allowfullscreen"
              width="500px"
              height="300px">
          </iframe>
          <hr class="solid" />
      </div>
  );
};

export default VideoItem;