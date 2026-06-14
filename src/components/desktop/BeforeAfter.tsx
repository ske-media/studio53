"use client";

import { useRef, useState } from "react";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-16 aspect-video w-full max-w-5xl cursor-ew-resize overflow-hidden rounded-2xl border border-brand-darkGrey select-none"
      onPointerMove={(e) => dragging && updateFromClientX(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/portfolio/after-remodeling-loop.webm" type="video/webm" />
      </video>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio/before-remodeling.webp"
          alt="Avant remodeling"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] tracking-widest text-white/80 uppercase">
          Avant
        </span>
      </div>

      <span className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-[10px] tracking-widest text-osiris-copper uppercase">
        Après
      </span>

      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-osiris-copper" />
        <button
          type="button"
          aria-label="Glisser pour comparer"
          onPointerDown={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-osiris-copper bg-black/70 text-osiris-copper backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
            <path d="M8 7 3 12l5 5V7zm8 0v10l5-5-5-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
