import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="z-10 text-left pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-0 tracking-wide uppercase">
                            Innovating
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-6 leading-none tracking-tight">
                            REACH
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 mb-12 font-medium"
                    >
                        Researching New Paths. <br />
                        Delivering Breakthroughs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <a href="#" className="flex items-center gap-4 group">
                            <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                            <span className="text-blue-900 font-bold text-lg group-hover:text-blue-700 transition-colors">
                                Read More
                            </span>
                        </a>

                        <a href="#" className="flex items-center gap-4 group">
                            <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                            <div className="flex items-center gap-2 text-blue-900 font-bold text-lg group-hover:text-blue-700 transition-colors">
                                <span>Watch the Video</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Right Content - Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:h-full flex items-center justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        {/* Background gradient blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50"></div>

                        {/* Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        >
                            <source src="/src/assets/video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Decorative elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full border-dashed"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce text-blue-900"
            >
                <div className="relative group cursor-pointer">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-blue-600 rounded-full opacity-75 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-10 h-10 bg-white rounded-full border border-blue-200 flex items-center justify-center shadow-sm text-blue-900">
                        <ChevronDown size={20} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
