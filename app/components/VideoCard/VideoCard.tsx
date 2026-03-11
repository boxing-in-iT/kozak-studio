"use client";

import { useState } from "react";

const VideoCard = ({ videoId }: { videoId: string }) => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="relative w-full aspect-video cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            className="w-full h-full object-cover"
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-black/70 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoCard;
