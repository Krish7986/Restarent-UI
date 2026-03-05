import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact({ onSectionView }) {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  useEffect(() => {
    onSectionView?.("contact", inView);
  }, [inView, onSectionView]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"> <img src="/green.png" alt="" srcset="" className={`${inView ? "fade-in-right-normal" : "opacity-0 translate-x-8"}`}/>
      <div className="max-w-6xl px-4 absolute felx felx-col top-48 justify-center left-52 ">
        {/* Header */}
        <div className="text-center mb-12 ">
          <p className="text-sm tracking-[0.2em] text-red-400 uppercase font-semibold mb-2">
            Location & Timing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Contact with us
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {/* Location Card */}
          <div
            className={`bg-white border border-gray-200 rounded-lg p-8 transition-all duration-700 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold">Av. Paz Soldán 290, San Isidro</span>
              <br />
              Lima 27 - Peru
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.985a1 1 0 00.502.756l2.73 1.365a1 1 0 001.502-1.097l-1.498-7.985A1 1 0 0015.28 3H19a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span className="text-sm text-gray-700">+511 442-2777</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700">mail@restaurantpro.com</span>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div
            className={`bg-white border border-gray-200 rounded-lg p-8 transition-all duration-700 delay-100 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hours of service
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Monday to Saturday
                </p>
                <p className="text-sm text-gray-600">1:00 pm - 3:00 pm and</p>
                <p className="text-sm text-gray-600">7:00 pm - 11:00 pm</p>
              </div>
              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-900">Sunday</p>
                <p className="text-sm text-gray-600">12:30 pm - 3:30 pm</p>
              </div>
            </div>
          </div>

          {/* Support Card */}
          <div
            className={`bg-white border border-gray-200 rounded-lg p-8 transition-all duration-700 delay-200 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.985a1 1 0 00.502.756l2.73 1.365a1 1 0 001.502-1.097l-1.498-7.985A1 1 0 0015.28 3H19a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Telephone support
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Monday to Saturday from
              <br />
              <span className="font-semibold text-gray-900">9:00 am to 9:00 pm</span>
            </p>
            <a
              href="#reservation"
              className="inline-flex items-center justify-center w-full rounded-lg bg-red-500 text-white font-semibold py-3 hover:bg-red-600 transition-colors"
            >
              MAKE A RESERVATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

