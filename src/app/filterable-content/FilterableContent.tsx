'use client'

import React,  { useState } from 'react';
import { SearchBox } from '../search-box/SearchBox';
import { VideoTitlesList } from '../video-titles-list/VideoTitlesList';
import { VideoOverview } from '../video-overview/VideoOverview';
import { VideoProps } from '../data/data';


interface FilterableContentProps {
  data: VideoProps[];
  thumbnailSrc: string;
}

export function FilterableContent({ data, thumbnailSrc }: FilterableContentProps): JSX.Element {
  const [filterText, setFilterText] = useState('')
  const [hoveredVideoTitle, setHoveredVideoTitle] = useState('')
  
  const handleVideoTitleHover = (title: string) => {
    setHoveredVideoTitle(title);
  };

  return (
    <div className='filterable-content'>
      <div className='search-box'>
        <SearchBox filterText={filterText} onFilterTextChange={setFilterText}/>
      </div>
      <div className='flex justify-around w-full mt-30 flex'>
        <div className='ml-10 mr-10px h-full w-full flex'>
          <VideoTitlesList data={data} filterText={filterText} handleVideoTitleHover={handleVideoTitleHover}/>
        </div>
        <VideoOverview thumbnailSrc={thumbnailSrc} videoTitle={hoveredVideoTitle} />
      </div>
    </div>
  );
}
