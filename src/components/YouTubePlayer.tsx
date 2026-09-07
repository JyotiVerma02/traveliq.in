"use client";

import ReactPlayer from "react-player";

interface YouTubePlayerProps {
  url: string;
}

export default function YouTubePlayer({
  url,
}: YouTubePlayerProps) {
  return (
    <ReactPlayer
      src={url}
      width="100%"
      height="100%"
      controls
      playing={false}
      playsInline
    />
  );
}