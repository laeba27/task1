import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
    {
        id: 1,
        category: "Strategic Priorities",
        title: "Research Services",
        description: "Provide an integrated end-to-end therapeutic discovery services encompassing drug discovery, pre-clinical and clinical development capabilities across technologies, platforms, disciplines, disease areas and therapeutic modalities.",
    },
    {
        id: 2,
        category: "Our Value Creation Model",
        title: "Our Business",
        description: "We are an integrated research, development and manufacturing organization providing scientific services from early discovery to commercial supply. We serve a wide range of industrial sectors including pharmaceutical, biotechnology, nutrition, animal health, consumer goods and specialty chemical companies.",
    }
];

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="relative min-h-screen py-10 bg-gradient-to-r from-orange-500 via-pink-400 to-blue-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-8">
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            onHoverStart={() => setHoveredId(service.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className="relative min-h-[300px] flex flex-col justify-between p-8 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Category Badge */}
                            <div className="mb-4">
                                <span className="inline-block px-4 py-2 bg-white text-slate-800 text-sm font-semibold rounded">
                                    {service.category}
                                </span>
                            </div>

                            {/* Title - Always Visible */}
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {service.title}
                            </h2>

                            {/* Divider Line */}
                            <div className="w-full h-px bg-white/30 mb-6"></div>

                            {/* Description - Revealed on Hover */}
                            <AnimatePresence>
                                {hoveredId === service.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Read More Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-200 transition-colors group"
                                        >
                                            <span className="w-1 h-6 bg-orange-400 rounded-full"></span>
                                            <span>Read More</span>
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Placeholder when not hovered */}
                            {hoveredId !== service.id && (
                                <div className="h-6"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
