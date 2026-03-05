// src/components/CategoryMenu.jsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MENU_DATA } from "./Menudata";

const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"];
const ICON_BASE_CLASS = "h-5 w-5";

function CategoryIcon({ category, active }) {
  const cls = `${ICON_BASE_CLASS} ${active ? "text-gray-900" : "text-slate-400"}`;

  if (category === "Breakfast") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} stroke="currentColor" strokeWidth="1.8">
        <path d="M6 7h8a0 0 0 0 1 0 0v4a4 4 0 0 1-4 4H6a0 0 0 0 1 0 0V7a0 0 0 0 1 0 0Z" />
        <path d="M14 9h2a2 2 0 0 1 0 4h-2" />
      </svg>
    );
  }

  if (category === "Lunch") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4v7M8 4v7M10 4v7M8 11v9" />
        <path d="M16 4v8a2 2 0 0 0 2 2v6" />
      </svg>
    );
  }

  if (category === "Dinner") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} stroke="currentColor" strokeWidth="1.8">
        <path d="M7 14c0-3 2.2-5 5-5 2.7 0 5 2 5 5-1.8.2-3.4 1.1-4.7 2.4L10 19H7v-5Z" />
      </svg>
    );
  }

  if (category === "Desserts") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} stroke="currentColor" strokeWidth="1.8">
        <path d="M5 10h14M6 10V8l2-2 1 2 1-3 2 3 1-2 2 2v2" />
        <path d="M7 10v7M12 10v7M17 10v7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={cls} stroke="currentColor" strokeWidth="1.8">
      <path d="M7 6h5l-2 4v5a2 2 0 0 0 2 2h0" />
      <path d="M16 6l-2 6 4 3" />
      <circle cx="16" cy="6" r="2" />
    </svg>
  );
}

export default function CategoryMenu({ onSectionView }) {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [fadeKey, setFadeKey] = useState(0); // key to retrigger animation
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  const items = MENU_DATA[activeCategory] || [];

  useEffect(() => {
    onSectionView?.("menu", inView);
  }, [inView, onSectionView]);

  const changeCategory = (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setFadeKey((prev) => prev + 1);
  };

  return (
    <section ref={ref} className="py-16 bg-gray-50" id="menu">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className={`text-center mb-10 ${
            inView ? "fade-in-right-normal" : "opacity-0 translate-x-8"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">Our Menu</h2>
          <p className="text-gray-500">
            Choose from Breakfast, Lunch, Dinner, Desserts or Drinks.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 border-b border-slate-200">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => changeCategory(cat)}
              className={`inline-flex flex-col items-center gap-1 px-3 py-3 text-sm font-semibold transition-colors duration-200 border-b-2 ${
                activeCategory === cat
                  ? "text-gray-900 border-amber-400"
                  : "text-slate-400 border-transparent hover:text-slate-600"
              }`}
            >
              <CategoryIcon category={cat} active={activeCategory === cat} />
              <span>{cat}</span>
            </button>
          ))}
          </div>
        </div>

        {/* Animated items container */}
        <div
          key={fadeKey}
          className="space-y-4 transition-all duration-300 ease-out"
        >
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-row sm:flex-row sm:items-center justify-between gap-3 border-b pb-4
                         hover:bg-white hover:shadow-md rounded-lg px-3 -mx-3
                         transition-shadow duration-200"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-500">{item.price}</p>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <p className="text-center text-gray-400 text-sm">
              No items available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}


export function Chips({ onSectionView }) {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  useEffect(() => {
    onSectionView?.("chips", inView);
  }, [inView, onSectionView]);

  return(
    <>
    <section ref={ref} className="my-12 z-10 inset-0">
  <div className="relative mx-auto h-[320px] w-full  overflow-visible bg-[#001737] ">
    {/* Left image block */}
    <div className="absolute -top-24 left-28 z-10 inset-0 h-[420px] w-[330px]"> 
      <img
        src="/friedgrill.png"
        alt="Fries"
        className={`w-full h-full hidden md:block object-contain ${
          inView ? "fade-in-bottom-normal" : "opacity-0 translate-y-10"
        }`}
      />
    </div>

    {/* Right text block */}
    <div
      className={`absolute right-8 top-1/3 z-10 w-[45%] -translate-y-1/2 text-white sm:-top-2 sm:mt-6 ${
        inView ? "slide-in-right-normal" : "opacity-0 translate-x-10"
      }`}
    >
      <p className="mb-2 text-2xl font-bold text-[#f3bb4e]">Hungry?</p>
      <h2 className="mb-8 text-4xl font-semibold leading-tight">
        We will home deliver !
      </h2>
      <button className="rounded-xl bg-[#f3bb4e] px-10 py-4 text-xl font-semibold tracking-wide text-[#1e3a5f]">
        MAKE AN ORDER
      </button>
    </div>
  </div>
</section>

    </>

  )
}
