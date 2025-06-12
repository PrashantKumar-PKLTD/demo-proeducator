"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyWeExit() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 py-24 px-4 mt-16"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-50 rounded-full -z-10 blur-3xl opacity-40" />

            {/* Image Section */}
            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative">
                    <Image
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Students collaborating"
                        width={800}
                        height={500}
                        className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                    />

                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -z-10" />
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="lg:w-1/2 flex flex-col gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="space-y-4">
                    <motion.span
                        className="text-yellow-500 font-semibold tracking-wider uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Our Purpose
                    </motion.span>
                    <motion.h2
                        className="text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Why We Exist
                    </motion.h2>
                </div>

                <div className="h-1 w-20 bg-yellow-500 rounded-full" />

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-gray-700 text-lg leading-relaxed">
                        <span className="text-yellow-500 font-semibold">We believe in You! </span>
                        We hope that with <span className="text-yellow-500 font-semibold">right guidance</span> you can do
                        wonders in your life. We help you make the right choices that
                        resonates with your aspirations, dreams and potential.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        It&apos;s you who <span className="text-yellow-500 font-semibold">controls your destiny</span>.
                        You can achieve whatever you wish in your life.
                    </p>

                </motion.div>


            </motion.div>
        </motion.div>
    )
}
