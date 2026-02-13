import React from 'react';
import { motion } from 'framer-motion';

const Workforce = () => {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 flex items-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full">

                    {/* Left Side - Image with Curved Mask - No Padding */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-[700px]"
                    >
                        {/* Curved Image Container - Full Left */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{
                                clipPath: "ellipse(85% 100% at 0% 50%)",
                                borderRadius: "0 200px 200px 0"
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920&h=1080"
                                alt="Our Workforce"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Wave 1 - Behind Image (Lower z-index) */}
                        <div className="absolute bottom-0 left-0 right-0 z-0">
                            <svg
                                className="w-full h-40 md:h-48"
                                viewBox="0 0 1440 200"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0,200 L0,120 Q360,40 720,120 Q1080,200 1440,120 L1440,200 Z"
                                    fill="url(#gradient1)"
                                    opacity="0.9"
                                />
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#a855f7" />
                                        <stop offset="50%" stopColor="#22d3ee" />
                                        <stop offset="100%" stopColor="#60a5fa" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Wave 2 - On Top of Image (Higher z-index) */}
                        <div className="absolute bottom-0 left-0 right-0 z-20">
                            <svg
                                className="w-full h-32 md:h-40"
                                viewBox="0 0 1440 180"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0,180 L0,100 Q360,30 720,100 Q1080,170 1440,100 L1440,180 Z"
                                    fill="url(#gradient2)"
                                    opacity="0.95"
                                />
                                <defs>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#9333ea" />
                                        <stop offset="50%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute top-20 left-1/4 w-3 h-3 bg-purple-500 rounded-full z-10"></div>
                        <div className="absolute top-1/3 left-10 w-4 h-4 bg-cyan-400 rounded-full z-10"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 px-8 lg:px-16 py-12"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Our Workforce
                        </h2>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            At Syngene, we believe that investing in our people is fundamental to achieving scientific excellence. Through comprehensive learning and development programs, we provide opportunities for skill-building, career growth, and leadership development, ensuring our employees are equipped to deliver their best work.
                        </p>

                        {/* Read More Link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors text-lg"
                        >
                            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                            <span>Read More</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Extended Gradient Background - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 -z-10"></div>
        </section>
    );
};

export default Workforce;
