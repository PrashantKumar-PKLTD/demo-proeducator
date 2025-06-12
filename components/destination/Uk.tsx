'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import DestinationHeroSection from './shared/DestinationHeroSection';
import TabsBar from './shared/TabsBar';
import { WhyDestination } from './shared/Why';
import { TrendingInDestination } from './shared/Trending';
import { OverlapGroupWrapper } from './shared/OverlapGroupWrapper';
import Top_Universities from './shared/Top_Universities';
import Admission_Timeline from './shared/Admission_Timeline';
import Education_System from './shared/Education_System';
import Admission_Requirement from './shared/Admission_Requriment';
import Schlorship from './shared/Schlorship';
import VisaProcess from './shared/VisaProcess';
import FAQ from '../shared/Faq';
import CostOfLiving from './shared/CostOfLiving';
import VisaWeatherCard from './shared/VisaWeatherCard';
import { BookOpen, DollarSign, Globe2, GraduationCap, HelpCircle, ShieldCheck, Wallet } from 'lucide-react';
import FactsGrid from './shared/FactsGrid';

interface VisaType {
  title: string;
  cost: string;
  type: string;
  description: string;
}

const visaTypes: VisaType[] = [
  {
    title: "General Student - Tier 4",
    cost: "£ 339",
    type: "Type- Study",
    description: "This category is for students coming to the UK for post-16 education. A Tier 4 (General) Student must be at least 16 years old."
  },
  {
    title: "Child Student - Tier 4",
    cost: "£ 339",
    type: "Type- Study",
    description: "You can apply for the Tier 4 (Child) student visa if you are aged between 4 and 17 and you want to study at an independent school in the UK. However w..."
  }
  // Add more visa types as needed
];

interface WeatherData {
  city: string;
  min: number;
  max: number;
}

const weatherData: WeatherData[] = [
  { city: "London", min: 6, max: 12 },
  { city: "Edinburgh", min: 2, max: 9 },
  { city: "Manchester", min: 4, max: 10 },
  { city: "Glasgow", min: 4, max: 9 },
  { city: "Coventry", min: 4, max: 10 },
  { city: "Nottingham", min: 3, max: 10 },
  { city: "Birmingham", min: 3, max: 10 },
  { city: "New Castle", min: 1, max: 12 },
  { city: "Aberdeen", min: 2, max: 9 },
  { city: "Brighton", min: 5, max: 8 }
];

const ukData = {
  capital: 'London',
  population: '68 Mn',
  language: 'English',
  students: '485,645',
  gdp: '$ 3.12 Trillion',
  dialingCode: '+44',
  currency: 'Pound sterling',
  universities: '359',
};

export default function UkDestination() {
  const [activeTab, setActiveTab] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const tabs = useMemo(() => [
    { name: "Fast Facts", id: "fast-facts", icon: <Globe2 /> },
    { name: "Top Universities", id: "universities", icon: <GraduationCap /> },
    { name: "Admission", id: "admissions", icon: <BookOpen /> },
    { name: "Scholarship", id: "scholarship", icon: <DollarSign /> },
    { name: "Visa", id: "visa", icon: <ShieldCheck /> },
    { name: "Cost Of Living", id: "costOfLiving", icon: <Wallet /> },
    { name: "FAQ", id: "faq", icon: <HelpCircle /> },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const activeTab = tabs.find((tab) => tab.id === visibleSection.target.id)?.name;
          if (activeTab) setActiveTab(activeTab);
        }
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [tabs]);

  return (
    <section className="relative w-full min-h-screen">
      <DestinationHeroSection image='/destination/UK.jpg' flagCode='GB' title='UK' />
      <div className="sticky top-[73px] z-50 bg-white/50 backdrop-blur-md shadow-md">
        <TabsBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sectionRefs={sectionRefs}
        />
      </div>


      <div className='relative w-full h-full lg:px-[4rem] md:px-[2rem] px-1.5'>
        {/* Fast Facts */}
        <div
          id="fast-facts"
          ref={(el) => { sectionRefs.current["fast-facts"] = el; }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 scroll-mt-[100px]"
        >
          <FactsGrid data={ukData} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-[2rem]">Why UK?</h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            The United Kingdom continues to be a top destination for international students, offering a compelling mix of academic
            excellence and practical benefits.
          </p>
          <WhyDestination />
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            The UK is home to the world’s most esteemed universities. Ranked among the best education systems globally, it offers
            a wide array of courses across disciplines including Business, Engineering, Medicine, Arts, and Design. British
            education emphasizes flexibility and research excellence.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">What’s Trending in United Kingdom?</h2>
          <TrendingInDestination />
        </div>

        <OverlapGroupWrapper />

        {/* Top Universities */}
        <div
          id="universities"
          ref={(el) => { sectionRefs.current["universities"] = el; }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 scroll-mt-[2rem]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Top Universities to Study in UK</h1>
          <Top_Universities />
        </div>

        {/* Admission */}
        <div
          id="admissions"
          ref={(el) => { sectionRefs.current["admissions"] = el; }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 scroll-mt-[1.5rem]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Admission Requirements for United Kingdom</h1>
          <Admission_Requirement />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">UK&apos;s Education System</h2>
          <Education_System />
          <Admission_Timeline />
        </div>

        {/* Scholarship */}
        <div
          id="scholarship"
          ref={(el) => { sectionRefs.current["scholarship"] = el; }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 scroll-mt-[1.3rem]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Scholarship Opportunities in UK</h1>
          <Schlorship />
        </div>

        {/* Visa */}
        <div
          id="visa"
          ref={(el) => { sectionRefs.current["visa"] = el; }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 scroll-mt-[1.3rem]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Visa Process</h1>
          <VisaProcess />
        </div>

        <div id="costOfLiving" ref={(el) => { sectionRefs.current["costOfLiving"] = el; }}
          className="relative w-full max-w-6xl mx-auto bg-base-200 rounded-[0.5rem]">
          <VisaWeatherCard Weather={weatherData} VisaType={visaTypes} />
          <CostOfLiving />
        </div>

        <div id="faq" ref={(el) => { sectionRefs.current["faq"] = el; }}>
          <FAQ />
        </div>
      </div>
    </section>
  );
}
