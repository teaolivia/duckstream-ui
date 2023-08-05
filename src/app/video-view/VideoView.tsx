import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";


interface VideoViewInterface {
    isOpen: boolean;
}


function VideoViewCloseButton(): JSX.Element {
    return (
        <button type="button" className="bg-transparent rounded-md p-2 absolute top-0 right-0 text-gray-400 hover:text-gray-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
}


export function VideoView({ isOpen }: VideoViewInterface): JSX.Element {
    const [showCloseButton, setShowCloseButton] = useState(false)
    
    const handleMouseEnter = () => {
        setShowCloseButton(true)
    }
    
    const handleMouseLeave = () => {
        setShowCloseButton(false)
    }

    return (
        <div>
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {showCloseButton ? <VideoViewCloseButton /> : null}
            </div>
            {
                isOpen
                &&
                <MuxPlayer
                    streamType="on-demand"
                    playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
                    metadata={{
                        video_id: "video-id-54321",
                        video_title: "Test video title",
                        viewer_user_id: "user-id-007",
                    }}
                />
            }
        </div>

    );
}
