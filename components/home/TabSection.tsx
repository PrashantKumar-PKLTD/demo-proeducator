"use client";
import Image from 'next/image';
import React, { useState } from 'react'

export default function TabSection() {
    const [activeTab, setActiveTab] = useState('students');

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-wrap px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="w-full text-center py-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                    A Platform That{" "}
                    <span className="relative inline-block">
                        Helps You
                        <div className="absolute bottom-1 left-0 w-full h-1 bg-primary opacity-50" />
                    </span>
                </h2>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
                    Throughout The Entire Process
                </h3>

                <div className="flex flex-col items-center">
                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 border-b w-full">
                        {["students", "recruitment", "universities"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium ${activeTab === tab
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {tab === "students"
                                    ? "Students"
                                    : tab === "recruitment"
                                        ? "Recruitment Partners"
                                        : "Partner Universities"}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-10 sm:mt-12 w-full">
                        {activeTab === "students" && (
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="flex-1 w-full">
                                    <Image
                                        src="/img/step-journey-1.png"
                                        alt="Student"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex-1 w-full text-left">
                                    <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                        We support your dreams, making them real
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        Discover and apply to programs and schools that match your background, skills, and interests. Believe, achieve, and succeed with us!
                                    </p>
                                    {/* <button className="btn btn-primary">Learn More</button> */}
                                </div>
                            </div>
                        )}

                        {activeTab === "recruitment" && (
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="flex-1 w-full">
                                    <Image
                                        src="/img/step-journey-2.png"
                                        alt="Recruitment"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex-1 w-full text-left">
                                    <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                        Partner with us to expand your reach
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        We&apos;re your trusted partner to help students achieve international education goals.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "universities" && (
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="flex-1 w-full">
                                    <Image
                                        src="/img/step-journey-3.png"
                                        alt="University"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex-1 w-full text-left">
                                    <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                        Connect with qualified students
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        Expand your reach in the United Kingdom, attracting qualified students effortlessly with our trusted platform.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
