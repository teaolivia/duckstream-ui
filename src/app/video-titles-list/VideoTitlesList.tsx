'use client'

import React, { useState } from 'react';
import { VideoProps } from '../data/data';


function VideoTitlesListRow({ video, handleVideoTitleHover }: { video: VideoProps, handleVideoTitleHover: (title: string) => void }): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    handleVideoTitleHover(video.title);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleVideoTitleHover('');
  }

  const videoTitleClass = isHovered? 'video-title hover:bg-raw-sienna hover:text-cocoa-brown' : 'video-title';

    return (
        <div 
          className={videoTitleClass}
          // onClick={() => { 
          //   setFocus(), 
          //   showTitleOverview() 
          //   }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}    
        >
          {video.title}
        </div>
    );
}

export function VideoTitlesList({ data, handleVideoTitleHover }: { data: VideoProps[], handleVideoTitleHover: (title: string) => void}): JSX.Element {
  const list: JSX.Element[] = [];
  data.forEach(video => {
    list.push(
      <VideoTitlesListRow video={video} key={video.title} handleVideoTitleHover={handleVideoTitleHover}/>
    );
  });
    return (
      <div style={{ overflowY: 'auto', maxHeight: '800px', direction: 'rtl', padding: '30px' }}>
        {list}
      </div>
    );
  }
