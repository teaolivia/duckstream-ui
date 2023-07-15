import React from 'react';


interface VideoOverviewProps {
    titleText: string;
    thumbnailSrc: string;
}

// TODO: When hover over thumbnail, view text that tell the user to click if they want to play the video.
// When clicked, it will redirect to the video interactive player.
function VideoOverviewThumbnail({src}: {src: string}): JSX.Element {
    return (
        <div className='poster' style={{ position: 'relative', width: '100%', marginRight: '14px', boxSizing: 'content-box' }}>
            <img src={src}/>
        </div>
    );
}

function VideoOverviewTitle({text}: {text: string} ): JSX.Element {
    return (
        <div className='video-overview-title' style={{ padding: '20px' }}>
            {text}
        </div>
    );
}

export function VideoOverview({ titleText, thumbnailSrc }: VideoOverviewProps): JSX.Element {
    return (
        <div className='video-overview' style={{ justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            textAlign: 'center',
            position: 'relative',
            width: '100%'}}>
            <VideoOverviewThumbnail src={thumbnailSrc} />
            <VideoOverviewTitle text={titleText} />
        </div>
    );
}