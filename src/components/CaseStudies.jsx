import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const studies = [
    {
        title: "Syngene partners with a client for Global Economy Decarbonization",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
        description: "Developing biodegradable alternatives to single-use plastics using plant-based polymers."
    },
    {
        title: "Enhancing Patient Compliance: Developing an Extended-Release Anti-Epileptic Drug",
        image: "https://images.unsplash.com/photo-1579684385136-1571f54361d9?auto=format&fit=crop&q=80&w=800",
        description: "Targeted immunotherapy treatments tailored into individual genetic profiles for better outcomes."
    },
    {
        title: "Syngene Enhances Bispecific Antibody Production",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
        description: "Genetically modified crop variants designed to thrive in arid conditions and ensure food security."
    },
    {
        title: "Pharmaceutical Development: Broad-Spectrum Antibiotic",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        description: "Advanced research in developing next-generation antibiotics for resistant bacteria."
    },
    {
        title: "Innovative Drug Discovery Platform",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800",
        description: "Cutting-edge technology platform for accelerated drug discovery and development."
    }
];

const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? studies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === studies.length - 1 ? 0 : prev + 1));
    };

    // Get visible cards (previous, current, next)
    const getVisibleCards = () => {
        const cards = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + studies.length) % studies.length;
            cards.push({
                ...studies[index],
                position: i,
                index: index
            });
        }
        return cards;
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
                    Case Studies
                </h2>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                    {/* Left Navigation Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 md:left-12 z-30 w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-500 transition-all shadow-lg"
                        aria-label="Previous case study"
                    >
                        <ChevronLeft className="text-gray-600" size={28} />
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-full max-w-6xl h-[450px] flex items-center justify-center">
                        {getVisibleCards().map((card) => {
                            const isCenter = card.position === 0;
                            const offset = card.position * 350; // Horizontal spacing

                            return (
                                <motion.div
                                    key={card.index}
                                    className="absolute"
                                    initial={false}
                                    animate={{
                                        x: offset,
                                        scale: isCenter ? 1 : 0.85,
                                        opacity: isCenter ? 1 : 0.5,
                                        zIndex: isCenter ? 20 : 10
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                    style={{
                                        width: '320px'
                                    }}
                                >
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl shadow-2xl overflow-hidden">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 bg-white">
                                            <h3 className="text-xl font-bold text-blue-900 mb-4 line-clamp-2 min-h-[56px]">
                                                {card.title}
                                            </h3>
                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                                            >
                                                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-12 z-30 w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-500 transition-all shadow-lg"
                        aria-label="Next case study"
                    >
                        <ChevronRight className="text-gray-600" size={28} />
                    </button>
                </div>

                {/* Page Counter */}
                <div className="text-center mt-12">
                    <span className="text-2xl font-bold text-gray-800">
                        {String(currentIndex + 1).padStart(2, '0')}
                        <span className="text-gray-400">/</span>
                        {String(studies.length).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
