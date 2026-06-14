"use client";

import { useRef, useState } from "react";
import { PlayIcon, SpeakerOnIcon, SpeakerOffIcon } from "@/components/shared/icons";
import { SHOWREEL_POINTS } from "@/components/home/showreel";

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImmerse = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
    void video.play();
    setIsPlaying(true);
    void video.requestFullscreen?.();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setIsMuted(next);
  };

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <section
      id="showreel"
      aria-label="Showreel — La Démonstration"
      className="bg-osiris-black px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-brand-darkGrey">
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
          onTimeUpdate={onTimeUpdate}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handleImmerse}
            aria-label="Lancer la vidéo en immersion"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-osiris-copper bg-black/40 backdrop-blur-sm transition-transform hover:scale-105">
              <PlayIcon className="ml-1 h-7 w-7 text-osiris-white" />
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
          className="absolute right-4 bottom-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-osiris-white backdrop-blur-sm transition-colors hover:border-osiris-copper"
        >
          {isMuted ? (
            <SpeakerOffIcon className="h-5 w-5" />
          ) : (
            <SpeakerOnIcon className="h-5 w-5 text-osiris-copper" />
          )}
        </button>

        <div
          className="absolute inset-x-0 bottom-0 h-0.5 bg-osiris-copper"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <dl className="mx-auto mt-14 grid max-w-6xl grid-cols-3 gap-10">
        {SHOWREEL_POINTS.map(({ title, text }) => (
          <div key={title}>
            <dt className="text-sm font-medium tracking-wide text-osiris-white">
              <span className="mr-2 text-osiris-copper">✓</span>
              {title}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-white/55">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
