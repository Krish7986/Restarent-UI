import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero({ onSectionView }) {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  useEffect(() => {
    onSectionView?.("home", inView);
  }, [inView, onSectionView]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-gray-900 text-white "
    >
    <div className="absolute inset-0">
        <video src="backgroundvideo.mp4"  autoPlay loop playsInline muted className="max-h-full w-full object-cover opacity-80 scale-120"   />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10 ">
        {/* Left content */}
        <div
          className={`max-w-xl ${
            inView ? "slide-in-right-normal" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-red-300 uppercase mb-3">
            Welcome to RestaurantPro
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Enjoy <span className="text-red-400">Delicious</span> Food &amp; Cozy
            Ambience.
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Discover carefully crafted dishes made with fresh ingredients,
            served in a warm and friendly environment.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#reservation"
              className="inline-flex items-center rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium hover:bg-red-600 transition"
            >
              Make a reservation
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-gray-900 transition"
            >
              View menu
            </a>
          </div>
        </div>

        {/* Right side small card (like stats / opening hours) */}
        {/* <div className="bg-white/90 text-gray-900 rounded-2xl shadow-xl p-5 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-3">Opening Hours</h2>
          <ul className="text-sm space-y-1 mb-4">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium">10:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">12:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium">Closed</span>
            </li>
          </ul>
          <div className="border-t pt-3">
            <p className="text-xs text-gray-500 mb-1">
              Call us for group bookings
            </p>
            <p className="text-base font-semibold text-red-500">
              +91-98765-43210
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
