"use client";
import React from 'react'
import { motion } from 'framer-motion';

export default function HomeHeroSection() {
    return (
        <section className='w-full h-screen relative'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full'
                style={{
                    backgroundImage: 'url(/img/hero.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className='relative lg:max-w-[650px] 2xl:max-w-[850px] w-full h-full flex flex-col items-start justify-center px-4 lg:pl-[5rem] 2xl:pl-[15rem]'>
                    <span
                        className="text-info font-semibold text-lg sm:text-xl uppercase tracking-wider"
                    >
                        Your Study Abroad Expert
                    </span>
                    <h1 className="relative text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 leading-tight">
                        Discover {" "}
                        <span
                            className="relative inline-block text-info"
                        >
                            <span className="relative z-10">1700+</span>
                            <motion.svg
                                className="absolute -bottom-1 left-0 w-full"
                                height="15"
                                viewBox="0 0 100 15"
                            >
                                <motion.path
                                    d="M0,10 C25,15 75,5 100,10"
                                    fill="none"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 2,
                                            ease: [0.64264, -0.095, 0.42142, 0.019],
                                            repeat: Infinity,
                                        },
                                    }}
                                />
                            </motion.svg>
                        </span>
                        <br className="hidden lg:block" />
                        <span className="text-2xl sm:text-3xl lg:text-5xl">Universities Around the World</span>
                    </h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mt-2 text-lg sm:text-xl max-w-[500px] leading-relaxed"
                    >
                        British Council certified study Abroad Agent. We are obsessed with your success.
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg sm:text-xl font-serif italic text-gray-600 mt-2"
                    >
                        &quot;Education is the most powerful weapon which you can use to change the world&quot;
                    </motion.p>

                </div>
            </div>
        </section>
    )
}
