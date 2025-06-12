"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How do I apply to universities?",
        answer: "To apply to universities, you need to research and shortlist institutions based on your interests and eligibility. Most universities have an online application portal where you can create an account, fill out the application form, upload required documents such as transcripts, recommendation letters, and personal statements, and pay the application fee. Make sure to check application deadlines and specific requirements for each university."
    },
    {
        question: "What documents are needed for a student visa?",
        answer: "A student visa application usually requires a valid passport, proof of acceptance from a recognized university (admission letter), financial statements proving you can cover tuition and living expenses, passport-sized photographs, a completed visa application form, proof of English proficiency (such as TOEFL or IELTS scores), and a medical examination report in some cases. Always check the specific requirements of the country you are applying to."
    },
    {
        question: "How to find scholarships for international students?",
        answer: "You can find scholarships by checking university websites, government scholarship programs, and private organizations offering financial aid. Websites like Scholarship.com, DAAD, Chevening, and Fulbright provide numerous opportunities. Additionally, you can reach out to university financial aid offices for institution-specific scholarships and grants. Some scholarships are merit-based, while others are need-based or awarded for specific fields of study."
    },
    {
        question: "What are application deadlines for top universities?",
        answer: "Application deadlines vary by university and country. Generally, for fall intake, applications open around August-September and close between December and January. Some universities also offer early decision deadlines around November. For spring intake, deadlines usually fall between July and October. It is best to check the university's official website for precise deadlines and start preparing your application well in advance."
    },
    {
        question: "How to write an effective personal statement?",
        answer: "An effective personal statement should be well-structured, engaging, and personalized. Start with a strong introduction that captures the reader’s attention, followed by body paragraphs that highlight your academic achievements, extracurricular activities, career aspirations, and reasons for choosing the specific university and program. Use real-life examples to showcase your skills and experiences. Conclude with a powerful closing statement that reinforces your enthusiasm and commitment. Proofread multiple times to avoid grammatical errors and ensure clarity."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Frequently Asked Questions
                </h1>
                <div className="mt-4 mx-auto max-w-3xl">
                    <p className="text-xl text-gray-600">
                        Everything you need to know about studying abroad. Can&apos;t find the answer you&apos;re looking for? Feel free to contact our support team.
                    </p>
                </div>
            </div>

            <div className="mt-12 space-y-4">
                <AnimatePresence>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                        >
                            <button
                                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium text-gray-900">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0 ml-2"
                                    >
                                        <FaChevronDown className="h-5 w-5 text-gray-500" />
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-4 pt-2">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.main>
    );
};

export default FAQ;
