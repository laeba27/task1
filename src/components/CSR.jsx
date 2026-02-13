import React from 'react';
import { motion } from 'framer-motion';

const CSR = () => {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 flex items-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full">

                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 px-8 lg:px-16 py-12 order-2 lg:order-1"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Corporate Social Responsibility
                        </h2>

                        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
                            At Syngene, we drive meaningful change through CSR initiatives in Healthcare, Science Education, Research and Scholarships, and Environmental Sustainability, thus empowering underserved communities in partnership with the Biocon Foundation and the Biocon Academy.
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

                    {/* Right Side - Image with Curved Mask - No Padding */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-[700px] order-1 lg:order-2"
                    >
                        {/* Curved Image Container - Full Right */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{
                                clipPath: "ellipse(85% 100% at 100% 50%)",
                                borderRadius: "200px 0 0 200px"
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920&h=1080"
                                alt="Corporate Social Responsibility"
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
                                    d="M0,120 Q360,200 720,120 Q1080,40 1440,120 L1440,200 L0,200 Z"
                                    fill="url(#gradient3)"
                                    opacity="0.9"
                                />
                                <defs>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#22d3ee" />
                                        <stop offset="50%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#ec4899" />
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
                                    d="M0,100 Q360,170 720,100 Q1080,30 1440,100 L1440,180 L0,180 Z"
                                    fill="url(#gradient4)"
                                    opacity="0.95"
                                />
                                <defs>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop offset="50%" stopColor="#9333ea" />
                                        <stop offset="100%" stopColor="#db2777" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute top-20 right-1/4 w-3 h-3 bg-purple-500 rounded-full z-10"></div>
                        <div className="absolute top-1/3 right-10 w-4 h-4 bg-cyan-400 rounded-full z-10"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Extended Gradient Background - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 -z-10"></div>
        </section>
    );
};

export default CSR;
