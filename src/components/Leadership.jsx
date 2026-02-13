import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const leaders = [
    {
        name: "Kiran Mazumdar-Shaw",
        designation: "Message from our Chairperson",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
        message: "At Syngene, our purpose goes beyond science. We are building a resilient, inclusive, and values-driven organization where people thrive and innovation flourishes. FY25 was a year of alignment between vision and action, with investments in wellbeing, equity, and sustainability reinforcing our commitment to long-term value creation for all stakeholders."
    },
    {
        name: "Peter Bains",
        designation: "Message from our Managing Director and CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        message: "Syngene is well positioned for accelerating growth and transformation, with the potential to become a leader in serving the global biopharma and wider life sciences outsourcing market models."
    },
    {
        name: "Deepak Jain",
        designation: "Message from our Chief Financial Officer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
        message: "Despite sectoral headwinds, Syngene delivered resilient performance with strong cash generation of Rs 1,168 Cr, fully funding our USD 85 Mn capex including a strategic U.S. biologics facility acquisition, thus positioning us for long-term growth in the high-potential CRDMO market."
    }
];

const Leadership = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Determine active index based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Divide scroll progress into segments for each leader
            // More granular control to ensure all three are seen
            const segmentSize = 1 / leaders.length;
            const newIndex = Math.min(
                Math.floor(latest / segmentSize),
                leaders.length - 1
            );
            setActiveIndex(newIndex);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative min-h-[300vh] bg-white py-20">
            <div className="sticky top-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Left: Image */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <img
                                    src={leaders[activeIndex].image}
                                    alt={leaders[activeIndex].name}
                                    className="w-full max-w-md h-auto rounded-3xl shadow-2xl object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Content Panel */}
                    <div className="relative bg-blue-900 rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Designation */}
                                <h3 className="text-white text-xl md:text-2xl font-medium mb-6">
                                    {leaders[activeIndex].designation}
                                </h3>

                                {/* Decorative Circle */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                                    <div className="flex-1 h-px bg-white/20"></div>
                                </div>

                                {/* Message */}
                                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                                    {leaders[activeIndex].message}
                                </p>

                                {/* Dots for navigation indicator */}
                                <div className="flex gap-2 mb-6">
                                    {leaders.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? 'w-8 bg-white'
                                                : 'w-2 bg-white/30'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Name */}
                                <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-4">
                                    {leaders[activeIndex].name}
                                </h2>

                                {/* Read More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors group"
                                >
                                    <span className="w-1 h-6 bg-orange-400 rounded-full"></span>
                                    <span>Read More</span>
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-8 text-center text-slate-400 text-sm">
                    {activeIndex < leaders.length - 1
                        ? `Scroll to see more messages (${activeIndex + 1}/${leaders.length})`
                        : 'All messages viewed - continue scrolling'
                    }
                </div>
            </div>
        </section>
    );
};

export default Leadership;
