import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Catering({ onSectionView }) {
  const galleryImages = [
    { src: "/1.jpg", alt: "Fried chicken pieces" },
    { src: "/2.jpg", alt: "Fresh burger plating" },
    { src: "/3.jpg", alt: "Seasoned fries and dip" },
    { src: "/4.jpg", alt: "Dining table setup" },
    { src: "/5.jpg", alt: "Friends sharing drinks" },
    { src: "/6.jpg", alt: "Outdoor restaurant lights" },
  ];

  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    onSectionView?.("catering", topInView || galleryInView);
  }, [topInView, galleryInView, onSectionView]);

  return (
    <>
      <section ref={topRef}>
        <div className="mx-auto my-16 w-[70%] px-6 text-center text-gray-400">
          <h3
            className={`my-2 text-2xl font-mono ${
              topInView ? "fade-in-right-normal" : "opacity-0 translate-x-8"
            }`}
          >
            Catering
          </h3>
          <h1 className="my-2 font-serif text-4xl font-bold text-black">
            We Manage Your Events
          </h1>
          <p>
            Allow our Chef to deliver the perfect private dinner or cocktail
            party experience in your home; or let us simply add a little extra
            flavor to your next office meeting, boat trip, or beach picnic. By
            partnering with our sibling location Rosewater Wine & Spirits, we
            can offer a full array of bar services and beverage selections.
            Email us to learn more.
          </p>

          <div
            className={`my-10 mx-auto flex w-[97%] flex-col items-center justify-evenly gap-4 rounded-lg bg-slate-200 py-5 md:w-[60%] md:flex-row ${
              topInView ? "fade-in-bottom-normal" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/pancake.png"
              alt="Pancake"
              className="fade-in-left-normal w-64"
            />
            <div className="fade-in-left-normal text-gray-700 md:-mt-3">
              <p className="w-48">
                We cater weddings, corporate functions, and events.
              </p>
              <button className="my-4 w-32 rounded-md bg-yellow-400 p-3 text-black">
                Hire us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="px-3 pb-6 md:px-6 md:pb-10">
        <div className="mx-auto max-w-[1180px] rounded-md bg-white p-3 md:p-4">
          <div className="grid gap-3 md:gap-4 lg:grid-cols-[1fr_1fr]">
            <div>
              <img
                src="/bigimg.jpg"
                alt="Featured fried dish and sauce"
                className={`h-[200px] rounded-lg object-cover sm:h-[360px] lg:h-60 lg:min-h-[500px] ${
                  galleryInView
                    ? "fade-in-left-normal"
                    : "opacity-0 -translate-x-8"
                }`}
              />
            </div>

            <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className={`h-[170px] w-full rounded-lg object-cover sm:h-[180px] lg:h-[230px] ${
                    galleryInView
                      ? "fade-in-right-normal"
                      : "opacity-0 translate-x-8"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
