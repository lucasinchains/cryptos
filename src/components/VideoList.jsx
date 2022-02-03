import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {

  const videosArray = videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId} />
  });

  return (
      <div>
         {
           videosArray
         }
      </div>
  );
};

export default VideoList;
