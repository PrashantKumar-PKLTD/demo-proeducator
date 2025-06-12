'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Building2, CreditCard, School } from 'lucide-react';
import Image from 'next/image';

type Category = 'AFTER_12TH' | 'MASTERS' | 'MBA';

const categoryContent = {
  AFTER_12TH: {
    howToApply: 'All UG Applications are submitted through UCAS.',
    costEstimate: '£9,000 - £30,000 (₹9,00,000 - ₹30,00,000) per year',
    programs: [
      { icon: "/destination/popular_program/vector.png", text: "Business" },
      { icon: "/destination/popular_program/engineering.png", text: "Engineering and Technology" },
      { icon: "/destination/popular_program/law.png", text: "Law" },
      { icon: "/destination/popular_program/business.png", text: "Natural Sciences" },
      { icon: "/destination/popular_program/medicines.png", text: "Medicine" },
      { icon: "/destination/popular_program/social.png", text: "Social Sciences" },
    ],
    universities: [
      { icon: "/destination/popular_university/standrewsuniversity.png", text: "University of St Andrews" },
      { icon: "/destination/popular_university/oxforduniversity.png", text: "University of Oxford" },
      { icon: "/destination/popular_university/logo_1681394934810.png", text: "Imperial College London" },
      { icon: "/destination/popular_university/durhamuniversity.png", text: "LSE" },
      { icon: "/destination/popular_university/lse.png", text: "University of St. Andrews" },
    ],
  },
  MASTERS: {
    howToApply: 'Applications are submitted through the respective university portals.',
    costEstimate: '£15,000 - £40,000 (₹15,00,000 - ₹40,00,000) per year',
    programs: [
      { icon: "/destination/popular_program/vector.png", text: "Business" },
      { icon: "/destination/popular_program/engineering.png", text: "Engineering and Technology" },
      { icon: "/destination/popular_program/law.png", text: "Law" },
      { icon: "/destination/popular_program/business.png", text: "Natural Sciences" },
      { icon: "/destination/popular_program/medicines.png", text: "Medicine" },
      { icon: "/destination/popular_program/social.png", text: "Social Sciences" },
    ],
    universities: [
      { icon: "/destination/popular_university/standrewsuniversity.png", text: "University of St Andrews" },
      { icon: "/destination/popular_university/oxforduniversity.png", text: "University of Oxford" },
      { icon: "/destination/popular_university/logo_1681394934810.png", text: "Imperial College London" },
      { icon: "/destination/popular_university/durhamuniversity.png", text: "LSE" },
      { icon: "/destination/popular_university/lse.png", text: "University of St. Andrews" },
    ],
  },
  MBA: {
    howToApply: 'Applications are submitted via GMAT or GRE scores with interviews.',
    costEstimate: '£25,000 - £60,000 (₹25,00,000 - ₹60,00,000) per year',
    programs: [
      { icon: "/destination/popular_program/vector.png", text: "Business" },
      { icon: "/destination/popular_program/engineering.png", text: "Engineering and Technology" },
      { icon: "/destination/popular_program/law.png", text: "Law" },
      { icon: "/destination/popular_program/business.png", text: "Natural Sciences" },
      { icon: "/destination/popular_program/medicines.png", text: "Medicine" },
      { icon: "/destination/popular_program/social.png", text: "Social Sciences" },
    ],
    universities: [
      { icon: "/destination/popular_university/standrewsuniversity.png", text: "University of St Andrews" },
      { icon: "/destination/popular_university/oxforduniversity.png", text: "University of Oxford" },
      { icon: "/destination/popular_university/logo_1681394934810.png", text: "Imperial College London" },
      { icon: "/destination/popular_university/durhamuniversity.png", text: "LSE" },
      { icon: "/destination/popular_university/lse.png", text: "University of St. Andrews" },
    ],
  }
};

export default function Admission_Timeline() {
  const [activeCategory, setActiveCategory] = useState<Category>('AFTER_12TH');
  const currentContent = categoryContent[activeCategory];

  return (
    <div className='relative w-full mt-12 px-4 sm:px-6 lg:px-12'>
      <h1 className='font-bold text-black text-2xl sm:text-3xl lg:text-5xl leading-tight text-center'>Admission Timeline</h1>

      <div className='mt-12 max-w-7xl mx-auto'>
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          {(['AFTER_12TH', 'MASTERS', 'MBA'] as Category[]).map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeCategory === category
                  ? 'bg-primary text-black shadow-lg border-2 border-white'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                }`}
            >
              {category.replace('_', ' ')}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* How to Apply */}
              <motion.div className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <School className="w-6 h-6 text-neutral" />
                  </div>
                  <h2 className="text-xl font-bold ml-4 text-gray-800">How to Apply</h2>
                </div>
                <p className="text-gray-600">{currentContent.howToApply}</p>
              </motion.div>

              {/* Cost Estimate */}
              <motion.div className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <CreditCard className="w-6 h-6 text-neutral" />
                  </div>
                  <h2 className="text-xl font-bold ml-4 text-gray-800">Cost Estimate</h2>
                </div>
                <p className="text-gray-600">{currentContent.costEstimate}</p>
              </motion.div>
            </div>

            {/* Programs & Universities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Programs */}
              <motion.div className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold ml-4 text-gray-800">Popular Programs</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {currentContent.programs.map((program, index) => (
                    <div key={index} className="flex flex-col items-center w-[110px] sm:w-[140px] text-center">
                      <div className="w-[60px] h-[60px] bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                        <Image src={program.icon} alt={program.text} width={30} height={30} />
                      </div>
                      <span className="font-semibold text-gray-600 text-sm leading-tight">{program.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Universities */}
              <motion.div className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold ml-4 text-gray-800">Popular Universities</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                  {currentContent.universities.map((university, index) => (
                    <div key={index} className="w-[60px] h-[60px] flex items-center justify-center">
                      <Image src={university.icon} alt={university.text} width={55} height={55} className="object-contain" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
