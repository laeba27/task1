import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const DownloadCenter = () => {
    const downloads = [
        {
            title: "Board Report",
            link: "#"
        },
        {
            title: "Standalone Financial Statements",
            link: "#"
        },
        {
            title: "Corporate Governance Report",
            link: "#"
        },
        {
            title: "Consolidated Financial Statements",
            link: "#"
        },
        {
            title: "Business Responsibility and Sustainability Report",
            link: "#"
        },
        {
            title: "Glossary",
            link: "#"
        },
        {
            title: "Management Discussion and Analysis",
            link: "#"
        },
        {
            title: "AGM Notice",
            link: "#"
        },
        {
            title: "Annual Report 2024",
            link: "#"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
                    Download Center
                </h2>

                {/* Downloads Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {downloads.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-700 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-orange-500 transition-colors"
                            >
                                <span>Download</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Back to Top */}
                <div className="text-center mt-16">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-orange-500 transition-colors"
                    >
                        <span>Back to Top</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadCenter;
