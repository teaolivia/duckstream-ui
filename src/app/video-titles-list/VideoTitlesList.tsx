'use client'

import React, { useState } from 'react';
import { VideoProps } from '../data/data';


function VideoTitlesListRow({ video, handleVideoTitleHover, isOpen, setIsOpen }: { video: VideoProps, handleVideoTitleHover: (title: string) => void, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    handleVideoTitleHover(video.title);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleVideoTitleHover('');
  }

  const toggleOpen = () => {
    setIsOpen(true)
  }

  const videoTitleClass = isHovered? 'video-title hover:bg-raw-sienna hover:text-cocoa-brown hover:cursor-pointer' : 'video-title';

    return (
        <div 
          className={videoTitleClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
        >
          <div onClick={toggleOpen}>
            {video.title}
          </div>
        </div>
    );
}

export function VideoTitlesList({ data, filterText, handleVideoTitleHover, isOpen, onToggleVideoView }: { data: VideoProps[], filterText: string, handleVideoTitleHover: (title: string) => void, isOpen: boolean, onToggleVideoView: (isOpen: boolean) => void}): JSX.Element {
  const filteredList = data.filter(video =>
    video.title.toLowerCase().includes(filterText.toLowerCase())
  );

    return (
      <div style={{ overflowY: 'auto', maxHeight: '800px', direction: 'rtl', padding: '30px' }}>
        {filteredList.map((video) =>
          <VideoTitlesListRow video={video} key={video.title} handleVideoTitleHover={handleVideoTitleHover} isOpen={isOpen} setIsOpen={onToggleVideoView}/>
        )}
      </div>
    );
  }
