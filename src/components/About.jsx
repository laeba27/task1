import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/img1.png';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Start the card lower (y: 100) and move it up (y: -100) as we scroll past
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image - Fixed/Parallax feel */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img1}
                    alt="About Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Glassmorphism Card */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-4xl mx-6 p-8 md:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Pioneering Global Health
                </h2>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                    We are dedicated to accelerating innovation in life sciences. From discovery to development,
                    our integrated scientific solutions help partners deliver breakthrough therapies to patients worldwide.
                </p>
                <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                    Our Vision
                </button>
            </motion.div>
        </section>
    );
};

export default About;
