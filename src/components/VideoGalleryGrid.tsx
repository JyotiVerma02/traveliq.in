"use client";

import { useState } from "react";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";

interface VideoItem {
  title: string;
  description: string;
  badge: string;
  url: string;
}

interface VideoGalleryGridProps {
  videos: VideoItem[];
}

export default function VideoGalleryGrid({
  videos,
}: VideoGalleryGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? videos : videos.slice(0, 6);

  return (
    <>
      {/* VIDEO GRID */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleVideos.map((video, index) => (
          <article
            key={video.url}
            className="
              group
              flex
              h-full
              min-w-0
              flex-col
              overflow-hidden
              rounded-[20px]
              border
              border-white/80
              bg-[#F8FAFD]
              p-1
              shadow-[10px_12px_25px_rgba(16,64,122,0.13),-10px_-10px_25px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.9)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[14px_18px_35px_rgba(16,64,122,0.16),-12px_-12px_28px_rgba(255,255,255,1),inset_1px_1px_3px_rgba(255,255,255,0.95)]
            "
          >
            {/* VIDEO */}
            <div
              className="
                relative
                aspect-video
                w-full
                min-w-0
                overflow-hidden
                rounded-[20px]
                bg-[#071A35]
                shadow-[inset_4px_4px_10px_rgba(0,0,0,0.20),inset_-4px_-4px_10px_rgba(255,255,255,0.06),3px_3px_8px_rgba(16,64,122,0.08)]
              "
            >
              <YouTubePlayer url={video.url} />

              {/* VIDEO BADGE */}
              <div className="pointer-events-none absolute left-4 top-4 z-10">
                <span
                  className="
                    inline-flex
                    max-w-[calc(100%-1rem)]
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/20
                    bg-[#071A35]/75
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    shadow-[3px_4px_8px_rgba(0,0,0,0.22)]
                    backdrop-blur-sm
                  "
                >
                  {video.badge}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                flex
                flex-1
                min-w-0
                flex-col
                rounded-[24px]
                px-5
                pb-5
                pt-5
                sm:px-6
                sm:pb-6
                sm:pt-6
              "
            >
              {/* NUMBER */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    min-w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-[#FFF5F1]
                    px-2
                    whitespace-nowrap
                    text-[10px]
                    font-bold
                    tracking-[0.15em]
                    text-[#EE5326]
                    shadow-[4px_4px_8px_rgba(238,83,38,0.10),-4px_-4px_8px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.9)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-8 shrink-0 bg-[#EE5326]/25" />
              </div>

              {/* TITLE */}
              <h2
                className="
                  break-words
                  text-lg
                  font-bold
                  leading-snug
                  tracking-tight
                  text-[#10407A]
                  transition-colors
                  duration-300
                  group-hover:text-[#EE5326]
                  sm:text-xl
                "
              >
                {video.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  break-words
                  text-sm
                  leading-6
                  text-[#526174]
                  sm:leading-7
                "
              >
                {video.description}
              </p>

              {/* LEARN MORE */}
              <div className="mt-auto pt-5">
                <Link
                  href="/contact-us/"
                  className="
                    inline-flex
                    shrink-0
                    max-w-full
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white
                    bg-[#FFF8F5]
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    text-[#EE5326]
                    shadow-[4px_5px_10px_rgba(238,83,38,0.10),-4px_-4px_8px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.9)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:gap-3
                    hover:bg-[#EE5326]
                    hover:text-white
                    hover:shadow-[5px_7px_14px_rgba(238,83,38,0.20),-4px_-4px_8px_rgba(255,255,255,0.9)]
                  "
                >
                  <span className="whitespace-nowrap">Learn More</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* SEE MORE VIDEOS */}
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="
            group
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-3
            whitespace-nowrap
            rounded-[20px]
            border
            border-white
            bg-[#F8FAFD]
            px-7
            py-3.5
            text-sm
            font-bold
            text-[#EE5326]
            shadow-[7px_8px_18px_rgba(16,64,122,0.12),-7px_-7px_16px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.9)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#EE5326]
            hover:text-white
            hover:shadow-[9px_11px_22px_rgba(16,64,122,0.16),-6px_-6px_14px_rgba(255,255,255,0.9)]
            active:translate-y-0
          "
        >
          <span className="whitespace-nowrap">
            {showAll ? "Show Less" : "See More Videos"}
          </span>

          <span
            aria-hidden="true"
            className="shrink-0 text-base transition-transform duration-300"
          >
            {showAll ? "↑" : "↓"}
          </span>
        </button>
      </div>
    </>
  );
}