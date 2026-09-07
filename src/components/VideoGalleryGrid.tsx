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

export default function VideoGalleryGrid({ videos }: VideoGalleryGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? videos : videos.slice(0, 6);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleVideos.map((video, index) => (
          <article
            key={video.url}
            className="group overflow-hidden border border-[#10407A]/10 bg-white shadow-[0_15px_50px_rgba(16,64,122,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(16,64,122,0.12)]"
          >
            <div className="relative aspect-video overflow-hidden bg-[#071A35]">
              <YouTubePlayer url={video.url} />

              <div className="pointer-events-none absolute left-4 top-4">
                <span className="border border-white/20 bg-[#071A35]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {video.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#EE5326]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-[#EE5326]/30" />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#10407A]">
                {video.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#526174]">
                {video.description}
              </p>

              <Link
                href="/contact-us/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#EE5326] transition hover:gap-3"
              >
                Learn More
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="inline-flex items-center gap-3 border border-[#EE5326] px-6 py-3 text-sm font-bold text-[#EE5326] transition hover:bg-[#EE5326] hover:text-white"
        >
          {showAll ? "Show Less" : "See More Videos"}
          <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
        </button>
      </div>
    </>
  );
}
