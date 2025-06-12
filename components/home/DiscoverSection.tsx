"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DiscoverSection() {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-6 px-4 md:px-10 lg:px-24 py-12">
                {/* Box 1 */}
                <div className="flex-1 min-w-[280px] bg-info p-6 rounded-xl shadow-lg">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-xl font-bold text-white">Discover yourself</h3>
                        <p className="text-center text-white text-2xl md:text-3xl font-bold leading-snug">
                            Study abroad dreams realized through expert guidance
                        </p>

                    </div>
                </div>

                {/* Box 2 */}
                <motion.div
                    className="flex-1 min-w-[280px] bg-base-100 p-6 rounded-xl shadow-lg"
                    whileHover="hover"
                    initial="initial"
                    animate="initial"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            className="text-3xl"
                            variants={{
                                hover: { y: -10, scale: 1.1 },
                                initial: { y: 0, scale: 1 },
                            }}
                        >
                            🎓
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900">Counsellors</h3>
                        <p className="text-center text-gray-600 text-base">
                            We are British Council Certified Study Abroad Experts.
                        </p>
                    </div>
                </motion.div>


                {/* Box 3 */}
                <motion.div
                    className="flex-1 min-w-[280px] bg-base-100 p-6 rounded-xl shadow-lg"
                    whileHover="hover"
                    initial="initial"
                    animate="initial"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            className="text-3xl"
                            variants={{
                                initial: { y: 0, scale: 1 },
                                hover: { y: -10, scale: 1.1 },
                            }}
                        >
                            💬
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>
                        <p className="text-center text-gray-600 text-base">
                            You may avail free consultation to get admission in your dream university.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="w-full px-4 md:px-10 lg:px-24 py-[5rem]">
                {/* Title - one line, centered */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-secondary">
                        Welcome to The ProEducator
                    </h2>
                </div>

                {/* Row: Description + Image */}
                <div className="flex flex-col lg:flex-row items-stretch gap-12">
                    {/* Left: Description */}
                    <div className="flex flex-col justify-center gap-4 lg:w-1/2 pl-8 md:pl-16 lg:pl-24">
                        <p className="text-justify text-[18px] md:text-[20px] leading-relaxed">
                            We believe in You! We hope that with right guidance you can do wonders in your life.
                            We help you make the right choices that resonates with your aspirations, dreams and potential.
                            Once that happens, your chances of realising your potential increases exponentially.
                            It’s you who controls your destiny. You can achieve whatever you wish in your life.
                        </p>
                        <span className="font-bold text-secondary-content text-2xl md:text-3xl">Mr. Prashant Kumar</span>
                        <span className="text-gray-500 text-lg">Founder & Director</span>
                    </div>

                    {/* Right: Image */}
                    <div className="flex items-center justify-center lg:w-1/2">
                        <Image
                            src="/img/british-council.png"
                            alt="British Council Certified"
                            width={500}
                            height={400}
                            className="object-contain max-h-[400px] w-full"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
