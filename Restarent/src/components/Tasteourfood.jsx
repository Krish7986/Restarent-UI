// src/components/MenuCarousel.jsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MENU_CAROUSEL_ITEMS } from "./tasteMenuData";


export default function Tasteourfood({ onSectionView }) {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });
  const total = MENU_CAROUSEL_ITEMS.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const current = MENU_CAROUSEL_ITEMS[index];

  useEffect(() => {
    onSectionView?.("taste", inView);
  }, [inView, onSectionView]);

  return (
    <>
    <section ref={ref} id="taste" className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-white">
        <div
          className={`text-center py-4 mb-10 ${
            inView ? "fade-in-bottom-normal" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-red-300 mb-2">
            Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Taste Our Foods &amp; Enjoy
          </h2>
          <p className="text-white text-sm md:text-base">
            Slide through our featured dishes with a smooth 3D card effect.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full
                       border border-white/40 text-white/80 hover:bg-white/10
                       transition-colors"
          >
            ‹
          </button>

          {/* 3D card */}
          <div
            className="mx-4 w-full max-w-xl
                       [perspective:1000px]"
          >
            <div
              className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl
                         transform transition-transform duration-500
                         hover:-translate-y-2 hover:scale-[1.02]
                         hover:[transform:rotateY(6deg)_translateY(-8px)]
                         [transform-style:preserve-3d]"
            >
              <div className="overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-64 w-full object-cover
                             transform transition-transform duration-700
                             hover:scale-110"
                />
              </div>

              <div className="p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-red-300 mb-2">
                  {current.category}
                </p>
                <h3 className="text-xl font-semibold mb-2">{current.title}</h3>
                <p className="text-sm text-white mb-4">{current.desc}</p>

                <div className="flex items-center justify-between text-xs text-white">
                  <span>
                    {index + 1} / {total}
                  </span>
                  <span>Slide to explore more →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full
                       border border-white/40 text-white/80 hover:bg-white/10
                       transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {MENU_CAROUSEL_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all
                ${
                  index === i
                    ? "bg-red-500 w-6"
                    : "bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
