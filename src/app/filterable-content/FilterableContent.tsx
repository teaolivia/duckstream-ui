'use client'

import React,  { useState } from 'react';
import { SearchBox } from '../search-box/SearchBox';
import { VideoTitlesList } from '../video-titles-list/VideoTitlesList';
import { VideoOverview } from '../video-overview/VideoOverview';
import { VideoProps } from '../data/data';
import { VideoView } from '../video-view/VideoView';


interface FilterableContentProps {
  data: VideoProps[];
  thumbnailSrc: string;
}

export function FilterableContent({ data, thumbnailSrc }: FilterableContentProps): JSX.Element {
  const [filterText, setFilterText] = useState('')
  const [hoveredVideoTitle, setHoveredVideoTitle] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  
  const handleVideoTitleHover = (title: string) => {
    setHoveredVideoTitle(title);
  };

  return (
    <div className='filterable-content'>
      <div className='bg-blend-overlay bg-blend-darken absolute place-content-center'>
        { isOpen ? <VideoView isOpen={isOpen} /> : null }
      </div>
      <div className='search-box'>
        <SearchBox filterText={filterText} onFilterTextChange={setFilterText}/>
      </div>
      <div className='flex justify-around w-full mt-30 flex'>
        <div className='ml-10 mr-10px h-full w-full flex'>
          <VideoTitlesList data={data} filterText={filterText} handleVideoTitleHover={handleVideoTitleHover} isOpen={isOpen} onToggleVideoView={setIsOpen}/>
        </div>
        <VideoOverview thumbnailSrc={thumbnailSrc} videoTitle={hoveredVideoTitle} />
      </div>
    </div>
  );
}
