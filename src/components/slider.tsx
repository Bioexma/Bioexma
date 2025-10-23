"use client";

import { useEffect, useRef, useState } from "react";

interface SliderProps {
  images: string[];
  height?: string;
  auto?: boolean;
  interval?: number;
  bgColorClass?: string;
  fit?: "contain" | "cover";
}

export default function Slider({
  images,
  height = "h-56 sm:h-64 md:h-80",
  auto = true,
  interval = 4000,
  bgColorClass = "bg-neutral-900",
  fit = "cover",
}: SliderProps) {
  const [index, setIndex] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!auto || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [auto, interval, images.length]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const fitClass = fit === "cover" ? "bg-cover bg-no-repeat" : "bg-cover";

  return (
    <div
      aria-roledescription="carousel"
      className={`relative w-full ${height} overflow-hidden rounded-lg shadow-lg`}
      role="region"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      {/* Pista */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            aria-label={`Slide ${i + 1} de ${images.length}`}
            aria-roledescription="slide"
            className={`min-w-full h-full ${bgColorClass} bg-center ${fitClass}`}
            role="group"
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
            onClick={prev}
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
            onClick={next}
          >
            ›
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
