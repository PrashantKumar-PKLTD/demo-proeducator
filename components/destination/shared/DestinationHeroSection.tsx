'use client';

import Image from 'next/image';
import React from 'react';
import Flag from 'react-world-flags';

interface DestinationHeroSectionProps {
  image: string;
  flagCode: string;
  title: string;
}

export default function DestinationHeroSection({
  image,
  flagCode,
  title,
}: DestinationHeroSectionProps) {
  return (
    <div className="relative w-full h-[540px]">
      <Image
        src={image}
        alt="hero"
        className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-full object-cover object-top-[100px]"
        fill
        priority
      />
      <div className="absolute w-full h-full inset-0 bg-black/35" />
      <div className="absolute w-full h-full flex flex-col justify-center items-center gap-2.5 text-white text-center px-4">
        <Flag code={flagCode} className="w-16 h-14" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Study in {title}
        </h1>
        <span className="text-2xl font-normal leading-normal">Explore, Apply, Succeed</span>
        {/* Optional CTA button */}
        {/* <button className="mt-4 w-[275px] h-[60px] bg-[#2a64f0] rounded-full shadow-md text-white text-2xl font-bold">
          Talk to an Expert
        </button> */}
      </div>
    </div>
  );
}
