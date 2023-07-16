import React from 'react';
import Image from 'next/image'


interface VideoOverviewProps {
    titleText: string;
    thumbnailSrc: string;
}

// TODO: When hover over thumbnail, view text that tell the user to click if they want to play the video.
// When clicked, it will redirect to the video interactive player.
export function VideoOverview({ titleText, thumbnailSrc }: VideoOverviewProps): JSX.Element {
    return (
        <div className="justify-center content-center flex-wrap text-center relative w-full">
            <div className="flex flex-col items-center ml-50 mr-30">
                <Image 
                    src={thumbnailSrc}
                    width={600}
                    height={800}
                    alt="The video thumbnail overview image"
                />
                <p className="mt-4 text-xl">{titleText}</p>
            </div>
        </div>
    );
}