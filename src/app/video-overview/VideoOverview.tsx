import React from 'react';
import Image from 'next/image'


interface VideoOverviewProps {
    videoTitle: string;
    thumbnailSrc: string;
}


export function VideoOverview({ videoTitle, thumbnailSrc }: VideoOverviewProps): JSX.Element {
    return (
        <div className="justify-center content-center flex-wrap text-center relative w-full">
            <div className="flex flex-col items-center ml-50 mr-30">
                <Image 
                    src={thumbnailSrc}
                    width={600}
                    height={800}
                    alt="The video thumbnail overview image"
                />
                <p className="mt-4 text-xl">{videoTitle}</p>
            </div>
        </div>
    );
}