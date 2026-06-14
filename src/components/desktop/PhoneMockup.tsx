export function PhoneMockup() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[280px] rounded-[2.6rem] border border-brand-darkGrey bg-black p-3 shadow-2xl shadow-black/60">
        <div
          aria-hidden
          className="absolute top-4 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-full border border-brand-darkGrey bg-black"
        />
        <video
          className="aspect-[9/19] w-full rounded-[1.9rem] object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/about/teaser-demo-mobile.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="mt-5 max-w-[16rem] text-center text-xs leading-relaxed text-white/45">
        Exemple de teaser généré en 48h à partir d&apos;une simple photo.
      </p>
    </div>
  );
}
