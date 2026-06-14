"use client";

import { useRef, useState } from "react";
import { SpeakerOnIcon, SpeakerOffIcon } from "@/components/shared/icons";
import { SHOWREEL_POINTS } from "@/components/home/showreel";

export function ShowreelMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <section
      id="showreel"
      aria-label="Showreel — La Démonstration"
      className="bg-osiris-black px-5 py-14"
    >
      <div className="relative overflow-hidden rounded-xl border border-brand-darkGrey">
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          src="/portfolio/showreel-main.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
        />
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
          className="absolute right-3 bottom-3 flex min-h-12 items-center gap-2 rounded-full border border-osiris-copper bg-black/60 px-4 text-xs font-medium text-osiris-white backdrop-blur-sm"
        >
          {isMuted ? (
            <>
              <SpeakerOffIcon className="h-4 w-4 text-osiris-copper" />
              Activer le son
            </>
          ) : (
            <>
              <SpeakerOnIcon className="h-4 w-4 text-osiris-copper" />
              Son actif
            </>
          )}
        </button>
      </div>

      <dl className="mt-8 space-y-4">
        {SHOWREEL_POINTS.map(({ title, text }) => (
          <div key={title} className="flex gap-3">
            <span className="mt-0.5 text-osiris-copper">✓</span>
            <div>
              <dt className="text-sm font-medium text-osiris-white">{title}</dt>
              <dd className="mt-1 text-xs leading-relaxed text-white/55">{text}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
