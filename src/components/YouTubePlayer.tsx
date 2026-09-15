"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface YouTubePlayerProps {
  url: string;
}

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    return parsed.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

export default function YouTubePlayer({ url }: YouTubePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = useMemo(() => getYouTubeId(url), [url]);

  if (!videoId) return null;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title="TravelIQ video"
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="relative h-full w-full"
      aria-label="Play video"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-[#071A35]/25" />
      <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EE5326] text-white shadow-[0_10px_24px_rgba(238,83,38,0.35)]">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
