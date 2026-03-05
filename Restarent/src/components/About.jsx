import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About({ onSectionView }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    useEffect(() => {
        onSectionView?.("about", inView);
    }, [inView, onSectionView]);

    return(
        <>
        <section ref={ref} className="py-16 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                
                {/* Left Column - Text & Team */}
                <div className={`flex flex-col ${inView ? "fade-in-left-normal" : "opacity-0 -translate-x-8"}`}>
                    <h3 className="text-lg text-gray-400 font-semibold mb-4">About Us</h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Who Are We?</h1>
                    
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        We are a chain of theme restaurant founded in 1971 in London. In 
                        1979, the cafe began covering its walls with rock and roll 
                        memorabilia, a tradition which expanded to others in the chain.
                    </p>

                    <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg w-48 mb-12 hover:bg-yellow-500 transition">
                        LEARN MORE
                    </button>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 border-l-4 border-gray-400 overflow-hidden mb-3">
                                <img src="/1 - Copy.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 overflow-hidden mb-3">
                                <img src="/2 - Copy.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 overflow-hidden mb-3">
                                <img src="/3 - Copy.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 overflow-hidden mb-3">
                                <img src="/4 - Copy.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 overflow-hidden mb-3">
                                <img src="/5.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-300 overflow-hidden mb-3">
                                <img src="/6.png" alt="Gordon Ramsey" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-semibold text-center text-sm md:text-base">Gordon Ramsey</p>
                            <p className="text-gray-500 text-xs md:text-sm">Owner & Founder</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className={`flex justify-center ${inView ? "fade-in-right-normal" : "opacity-0 translate-x-8"}`}>
                    <div className="relative w-full max-w-sm">
                        {/* Background Circle */}
                        <div className="absolute inset-0 bg-yellow-100 rounded-full blur-3xl opacity-70"></div>
                        
                        {/* Image Container */}
                        <img 
                            src="/dish.png" 
                            alt="Restaurant Dish" 
                            className="relative w-full h-auto object-cover rounded-xl shadow-lg "
                        />
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
