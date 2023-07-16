'use client'

import React,  { FC, useState } from 'react';
import { SearchBox } from '../search-box/SearchBox';
import { VideoTitlesList } from '../video-titles-list/VideoTitlesList';
import { VideoOverview } from '../video-overview/VideoOverview';
import { VideoProps } from '../data/data';


interface FilterableContentProps {
  data: VideoProps[];
  thumbnailSrc: string;
}

export function FilterableContent({ data, thumbnailSrc }: FilterableContentProps): JSX.Element {
  const [hoveredVideoTitle, setHoveredVideoTitle] = useState('')
  
  const handleVideoTitleHover = (title: string) => {
    setHoveredVideoTitle(title);
  };

  return (
    <div className='filterable-content'>
      <div className='search-box'>
        <SearchBox />
      </div>
      <div className='flex justify-around w-full mt-30 flex items-center'>
        <div className='video-titles-list-container'>
          <VideoTitlesList data={data} handleVideoTitleHover={handleVideoTitleHover}/>
        </div>
        <VideoOverview thumbnailSrc={thumbnailSrc} videoTitle={hoveredVideoTitle} />
      </div>
    </div>
  );
}
