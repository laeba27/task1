import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const servicesData = [
    {
        id: 1,
        title: "Research Services",
        description: "Scientific rigor and cross-functional collaboration propelled the advancement of discovery programs across multiple therapeutic areas.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920&h=1080"
    },
    {
        id: 2,
        title: "Dedicated R&D Centres",
        description: "Our long-standing collaborations with pharmaceutical leaders exemplify our commitment to scientific rigor, operational excellence, and shared success.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920&h=1080"
    },
    {
        id: 3,
        title: "Development Services",
        description: "We focus on advancing small molecules and next-gen modalities like ADCs, oligonucleotides, and peptides, ensuring efficient, sustainable, and scientifically rigorous transitions from development to GMP-compliant manufacturing.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1920&h=1080"
    },
    {
        id: 4,
        title: "Contract Development and Manufacturing Services (CDMO)",
        description: "Driven by digital transformation, operational excellence, and the highest quality standards, we set new benchmarks in commercial-scale manufacturing for both small and large molecules.",
        image: "https://images.unsplash.com/photo-1581093458791-9d42e1d5b2f9?auto=format&fit=crop&q=80&w=1920&h=1080"
    }
];

const OurServices = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative min-h-[500vh] bg-white">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-white">

                {/* Continuously Scrolling Title - Darker */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-20 whitespace-nowrap"
                    >
                        {[...Array(20)].map((_, i) => (
                            <h2 key={i} className="text-6xl md:text-8xl font-bold text-slate-800/20">
                                Our Services
                            </h2>
                        ))}
                    </motion.div>
                </div>

                {/* Service Images - Zoom from Center */}
                <div className="relative h-full flex items-center justify-center">
                    {servicesData.map((service, index) => {
                        // Calculate scroll ranges for each service
                        const start = index / servicesData.length;
                        const end = (index + 1) / servicesData.length;
                        const mid = (start + end) / 2;

                        // Scale: starts from 0 and zooms to fill screen
                        const scale = useTransform(
                            scrollYProgress,
                            [start, mid, end],
                            [0, 1, 1]
                        );

                        // Opacity
                        const opacity = useTransform(
                            scrollYProgress,
                            [start, start + 0.05, end - 0.05, end],
                            [0, 1, 1, 0]
                        );

                        // Progress for this service (0 to 1)
                        const serviceProgress = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0, 1]
                        );

                        return (
                            <motion.div
                                key={service.id}
                                style={{ scale, opacity }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    {/* Background Image - Full Screen */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/50"></div>

                                    {/* Content - Top Left */}
                                    <div className="absolute top-20 left-8 md:left-16 max-w-2xl text-white z-20">
                                        <h3 className="text-4xl md:text-6xl font-bold mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-white/90 mb-6">
                                            {service.description}
                                        </p>

                                        {/* Read More Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors"
                                        >
                                            <span className="w-1 h-6 bg-orange-400 rounded-full"></span>
                                            <span>Read More</span>
                                        </a>
                                    </div>

                                    {/* Progress Bar - Bottom Left */}
                                    <div className="absolute bottom-8 left-8 md:left-16 right-8 md:right-auto md:w-96 z-20">
                                        <div className="flex items-center gap-4 text-white mb-2">
                                            <span className="text-sm font-semibold">
                                                {String(index + 1).padStart(2, '0')} / {String(servicesData.length).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                                            <motion.div
                                                style={{ scaleX: serviceProgress }}
                                                className="h-full bg-orange-400 origin-left"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurServices;