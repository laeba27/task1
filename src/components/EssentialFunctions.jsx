import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EssentialFunctions = () => {
    const [activeTab, setActiveTab] = useState(0);

    const functionsData = [
        {
            id: 0,
            number: "01",
            title: "Execution Excellence",
            subtitle: "Essential functions",
            description: "At Syngene, excellence is a core value that guides everything we do. Driven by a commitment to continuous improvement, we aim to consistently deliver value and delight our customers through project management, service delivery, and operational excellence.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920&h=1080",
            color: "#003D6B" // Dark blue
        },
        {
            id: 1,
            number: "02",
            title: "Environment, Health, Safety and Sustainability",
            subtitle: "Essential functions",
            description: "We take our responsibility to people and the planet seriously. By using resources wisely and raising operational standards, we're building a safer, more sustainable, and efficient future for all.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920&h=1080",
            color: "#F47920" // Orange
        },
        {
            id: 2,
            number: "03",
            title: "Quality management",
            subtitle: "Essential functions",
            description: "Quality is at the heart of everything we do. Through rigorous standards and continuous monitoring, we ensure excellence in every aspect of our operations.",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920&h=1080",
            color: "#003D6B" // Dark blue
        },
        {
            id: 3,
            number: "04",
            title: "Information technology",
            subtitle: "Essential functions",
            description: "Leveraging cutting-edge technology to drive innovation and efficiency across all our operations and services.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080",
            color: "#F47920" // Orange
        },
        {
            id: 4,
            number: "05",
            title: "Strategic sourcing",
            subtitle: "Essential functions",
            description: "Strategic procurement and sourcing practices that ensure quality, reliability, and value across our supply chain.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920&h=1080",
            color: "#003D6B" // Dark blue
        }
    ];

    // Reverse order for display (05, 04, 03, 02, 01)
    const displayOrder = [...functionsData].reverse();

    return (
        <section className="relative h-screen bg-white overflow-hidden">
            <div className="flex h-full">
                {/* Left Side - Inactive Tabs (before active) */}
                <div className="flex">
                    {displayOrder.map((func, index) => {
                        const actualIndex = functionsData.length - 1 - index;
                        if (actualIndex <= activeTab) return null;

                        return (
                            <motion.div
                                key={func.id}
                                onClick={() => setActiveTab(actualIndex)}
                                className="relative cursor-pointer flex items-center justify-center"
                                style={{
                                    backgroundColor: func.color,
                                    width: '80px',
                                    minWidth: '80px'
                                }}
                                initial={false}
                                animate={{ width: '80px' }}
                                transition={{ duration: 0.5, ease: [0.05, 0.61, 0.41, 0.95] }}
                            >
                                <div className="transform -rotate-90 whitespace-nowrap">
                                    <span className="text-white text-2xl font-bold">{func.number}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Center - Active Tab with Description AND Image */}
                <motion.div
                    key={activeTab}
                    className="flex-1 flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Description Section */}
                    <div
                        className="w-1/2 flex flex-col justify-center px-12 py-16"
                        style={{ backgroundColor: functionsData[activeTab].color }}
                    >
                        <div className="relative">
                            <span className="text-white text-8xl font-bold opacity-10 absolute -top-8 -left-4">
                                {functionsData[activeTab].number}
                            </span>
                            <p className="text-white text-sm mb-2 relative z-10">
                                {functionsData[activeTab].subtitle}
                            </p>
                            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
                                {functionsData[activeTab].title}
                            </h2>
                            <p className="text-white text-lg mb-8 leading-relaxed max-w-lg relative z-10">
                                {functionsData[activeTab].description}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-300 transition-colors text-lg relative z-10"
                            >
                                <span className="w-1 h-6 bg-orange-400 rounded-full"></span>
                                <span>Read More</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2 relative overflow-hidden">
                        <motion.img
                            key={activeTab}
                            src={functionsData[activeTab].image}
                            alt={functionsData[activeTab].title}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Right Side - Inactive Tabs (after active) */}
                <div className="flex">
                    {displayOrder.map((func, index) => {
                        const actualIndex = functionsData.length - 1 - index;
                        if (actualIndex >= activeTab) return null;

                        return (
                            <motion.div
                                key={func.id}
                                onClick={() => setActiveTab(actualIndex)}
                                className="relative cursor-pointer flex items-center justify-center"
                                style={{
                                    backgroundColor: func.color,
                                    width: '80px',
                                    minWidth: '80px'
                                }}
                                initial={false}
                                animate={{ width: '80px' }}
                                transition={{ duration: 0.5, ease: [0.05, 0.61, 0.41, 0.95] }}
                            >
                                <div className="transform -rotate-90 whitespace-nowrap">
                                    <span className="text-white text-2xl font-bold">{func.number}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EssentialFunctions;
