"use client";

import { useEffect, useRef, useState } from "react";
import { SpeakerOnIcon, SpeakerOffIcon } from "@/components/shared/icons";
import { SHOWREEL_POINTS } from "@/components/home/showreel";

const FALLBACK_IMG = "/portfolio/showreel-poster.jpg";

export function ShowreelMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt) attempt.catch(() => setAutoplayFailed(true));
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
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
          className={`aspect-video w-full object-cover transition-opacity duration-700 ${autoplayFailed ? "opacity-0" : "opacity-100"}`}
          src="/portfolio/showreel-main.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={FALLBACK_IMG}
          controls={false}
        />

        {autoplayFailed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={FALLBACK_IMG}
            alt="Aperçu du showreel STUDIO 53"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {!autoplayFailed && (
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
        )}
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
