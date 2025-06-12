'use client';

import axios from 'axios';
import { useState, ChangeEvent } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (showSuccess) setShowSuccess(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await axios.post('api/contact-form', form);
            if (res.data.success) {
                setShowSuccess(true);
                setForm({ fullName: '', email: '', phone: '', message: '' });
                // Auto-hide success message after 5 seconds
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                setIsSubmitting(false);
                console.log('Submission failed');
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="space-y-6">
                {showSuccess && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6 animate-pulse">
                        <div className="flex items-center">
                            <div className="relative">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                            </div>
                            <div className="ml-4">
                                <p className="text-green-800 font-semibold text-lg">Message sent successfully!</p>
                                <p className="text-green-600 text-sm">We&apos;ll get back to you soon.</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-800">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                required
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-800">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-800">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                            placeholder="(555) 123-4567"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-800">Message</label>
                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                            required
                            placeholder="Tell us how we can help you..."
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed overflow-hidden"
                    >
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <div className="relative">
                                    {/* Outer spinning ring */}
                                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    {/* Inner pulsing dot */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                                <span className="ml-3 font-medium">Sending...</span>
                            </div>
                        )}
                        {!isSubmitting && (
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send Message
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}