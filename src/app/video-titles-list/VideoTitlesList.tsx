'use client'

import React, { useState } from 'react';
import { VideoProps } from '../data/data';


// function showTitleOverview(): void {
//   console.log('implement me to make title display on video overview dynamic')
// }

// function setFocus(): void {
//   console.log('implement me to make item focused')
// }

function VideoTitlesListRow({ video }: { video: VideoProps }): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
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

export function VideoTitlesList({ data }: { data: VideoProps[] }): JSX.Element {
  const list: JSX.Element[] = [];
  data.forEach(video => {
    list.push(
      <VideoTitlesListRow video={video} key={video.title}/>
    );
  });
    return (
      <div style={{ overflowY: 'auto', maxHeight: '800px', direction: 'rtl', padding: '30px' }}>
        {list}
      </div>
    )
  }
