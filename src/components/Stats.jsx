import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // Parse the value to find the number and any non-numeric characters
    // Example: "30+" -> num: 30, suffix: "+"
    // "2.5+" -> num: 2.5, suffix: "+"
    // "3,642" -> num: 3642, format with commas

    const numericValue = parseFloat(value.toString().replace(/,/g, '').replace(/[^\d.-]/g, ''));
    const isFloat = value.toString().includes('.');
    const suffix = value.toString().replace(/[\d.,]/g, '');
    const prefix = value.toString().match(/^[^\d]*/)[0];

    // If we can't parse a number, just return the text (e.g. for simple text)
    if (isNaN(numericValue)) {
        return <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-900">{value}</span>;
    }

    useEffect(() => {
        const node = ref.current;
        if (inView && node) {
            const controls = animate(0, numericValue, {
                duration: duration,
                ease: "easeOut",
                onUpdate(v) {
                    if (isFloat) {
                        node.textContent = v.toFixed(1);
                    } else {
                        node.textContent = Math.round(v).toLocaleString();
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, numericValue, duration, isFloat]);

    return (
        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-900">
            {/* If it has a clean prefix like "~", show it before the span or handle inside? 
                 Simple approach: separate span for prefix if it exists and isn't part of the animated number text content 
                 Wait, the regex above for suffix might be aggressive. 
                 Let's keep it simple: just render the fixed parts around the animating span if needed, 
                 OR just use the animated span for the number and return the full string.
                 
                 Let's stick to the ref approach for the number part only.
             */}
            {prefix && <span>{prefix}</span>}
            <span ref={ref}>0</span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
};

// Data structure updated to be cleaner for animation if needed, 
// using the parsing logic in AnimatedCounter for the "value" field.
const statsData = [
    {
        value: "30+",
        suffix: "Years",
        label: "of scientific expertise",
    },
    {
        value: "400+",
        label: "Patents held by customers",
    },
    {
        value: "4",
        label: "Campuses",
    },
    {
        value: "~400",
        label: "Active customers",
    },
    {
        value: "3,642",
        prefix: "Rs",
        suffix: "Cr",
        label: "(430 Mn USD) Revenue from operations in FY25",
    },
    {
        value: "475",
        prefix: "Rs",
        suffix: "Cr",
        label: "Profit After Tax in FY25#",
    },
    {
        value: "2.5+",
        suffix: "Mn sq. ft.",
        label: "of world-class R&D and manufacturing",
    },
    {
        value: "5,641",
        label: "Scientists",
    },
    {
        value: "8,235",
        label: "Total workforce (as of March 31, 2025)",
    },
    {
        value: "95%",
        label: "Total hazardous and non-hazardous waste recycled",
    },
    {
        value: "92%",
        label: "Power sourced from renewable energy",
    },
    {
        isFootnote: true,
        content: <># Before exceptional items<br />1 USD = Rs 84.65</>
    }
];

const Stats = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Syngene at a Glance</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                                p-8 flex flex-col justify-start min-h-[200px]
                                border-slate-300 border-dashed
                                border-b lg:border-b
                                md:border-r
                                lg:border-r
                                
                                md:[&:nth-child(2n)]:border-r-0
                                lg:[&:nth-child(2n)]:border-r
                                lg:[&:nth-child(4n)]:border-r-0

                                last:border-b-0
                                lg:[&:nth-last-child(-n+4)]:border-b-0
                            `}
                        >
                            {stat.isFootnote ? (
                                <div className="mt-auto text-sm text-slate-500 text-right">
                                    {stat.content}
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                        {stat.prefix && (
                                            <span className="text-slate-500 font-medium text-lg">{stat.prefix}</span>
                                        )}

                                        <AnimatedCounter value={stat.value} />

                                        {stat.suffix && (
                                            <span className="text-blue-900 font-bold text-2xl">{stat.suffix}</span>
                                        )}
                                    </div>
                                    <p className="text-slate-600 font-medium leading-tight">
                                        {stat.label}
                                    </p>
                                    {stat.subLabel && (
                                        <p className="text-slate-400 text-sm mt-1">{stat.subLabel}</p>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-left">
                    <button className="px-6 py-3 bg-blue-100 text-blue-700 font-bold hover:bg-blue-200 transition-colors border border-blue-200 shadow-sm flex items-center gap-2">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Stats;