import React,  { FC, useState } from 'react';
import { SearchBox } from '../search-box/SearchBox';
import { VideoTitlesList } from '../video-titles-list/VideoTitlesList';
import { VideoOverview } from '../video-overview/VideoOverview';
import { VideoProps } from '../data/data';


interface FilterableContentProps {
  data: VideoProps[];
  titleText: string;
  thumbnailSrc: string;
}

export function FilterableContent({ data, titleText, thumbnailSrc }: FilterableContentProps): JSX.Element {
  return (
    <div className='filterable-content'>
      <div className='search-box'>
        <SearchBox />
      </div>
      <div className='flex justify-around w-full mt-30 flex items-center'>
        <div className='video-titles-list-container'>
          <VideoTitlesList data={data}/>
        </div>
        <VideoOverview titleText={titleText} thumbnailSrc={thumbnailSrc} />
      </div>
    </div>
  );
}
