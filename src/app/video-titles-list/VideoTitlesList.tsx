'use client'

import React from 'react';
import { VideoProps } from '../data/data';


function showTitleOverview(): void {
  console.log('implement me to make title display on video overview dynamic')
}

function setFocus(): void {
  console.log('implement me to make item focused')
}

function VideoTitlesListRow({ video }: { video: VideoProps }): JSX.Element {
  // focused = (focused) ? 'focused' : 'unfocused'
    return (
        <div className='video-title' onClick={() => { setFocus(), showTitleOverview() }}>
          {video.title}
        </div>
    );
}

// const FocusableVideoTitlesListRow = withFocusable(VideoTitlesListRow)

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
