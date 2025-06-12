"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Globe, Building } from "lucide-react";
import ContactForm from "@/components/form/ContactForm";

const ContactPage: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen"
            >
                {/* Hero Section */}
                <div className="relative bg-primary/5 py-24 overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent"
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            We&apos;re here to help you achieve your educational dreams. Reach out to our expert counselors today.
                        </motion.p>
                    </div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                </div>

                {/* Contact Methods Grid */}
                <div className="container mx-auto px-4 -mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: Phone, title: "Call Us", content: "+44 7435773972", subtext: "Mon-Sat, 9AM-5:30PM" },
                            { icon: Mail, title: "Email Us", content: "care@theproeducator.com", subtext: "24/7 Support" },
                            { icon: MessageSquare, title: "Live Chat", content: "Chat with an Expert", subtext: "Instant Response" },
                            { icon: Globe, title: "Virtual Meeting", content: "Schedule a Call", subtext: "Book Your Slot" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-base-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="p-4 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl w-fit mb-6">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                <p className="text-primary font-semibold mb-2">{item.content}</p>
                                <p className="text-sm text-gray-500">{item.subtext}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Office Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold mb-8">Address</h2>

                            <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                                            <Building className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                EL, 9A Apsley Close,<br />
                                                North Harrow, Harrow,<br />
                                                United Kingdom, HA2 6DP
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-full h-[400px] overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8792769660697!2d-0.35367080000000004!3d51.5862748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876136825e1810f%3A0x1d74c665d3b0c173!2s9A%20Apsley%20Close%2C%20Harrow%2C%20UK!5e0!3m2!1sen!2sin!4v1747460560447!5m2!1sen!2sin"
                                        className="w-full h-full border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location Map"
                                        aria-label="Map showing our office location"
                                    />
                                </div>
                            </div>

                            {/* Nagpur Office */}
                            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
                                <div className="flex items-start gap-4 mb-4">
                                    <Building className="w-6 h-6 text-primary" />
                                    <div>

                                        <h3 className="text-xl font-semibold mb-2">London Office</h3>
                                        <p className="text-gray-600">
                                            EL, 9A Apsley Close, North Harrow, Harrow, United Kingdom, HA2 6DP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-base-100 p-10 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Send us a Message</h2>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            {[
                                { number: "1700+", label: "Universities" },
                                { number: "31+", label: "Countries" },
                                { number: "95%", label: "Success Rate" },
                                { number: "24/7", label: "Support" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/50 backdrop-blur-sm shadow-lg"
                                >
                                    <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-3">{stat.number}</h3>
                                    <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ContactPage;
