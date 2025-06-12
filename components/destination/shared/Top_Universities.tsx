'use client';
import Image from 'next/image';
import React from 'react';

const universities = [
    {
        name: 'University of Oxford',
        location: 'Oxford, England',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/oxweb-logo-1.png',
    },
    {
        name: 'Imperial College London',
        location: 'London, England',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/imperial-600.png',
    },
    {
        name: 'The University of Edinburgh',
        location: 'Edinburgh, Scotland',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/uni.png',
    },
    {
        name: 'University of Bristol',
        location: 'Bristol, England',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/imagesdswa-.png',
    },
    {
        name: 'University of Cambridge',
        location: 'Cambridge, England',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/secondary-logo-stacked.png',
        link:
            'https://www.google.com/search?q=University+of+Cambridge',
    },
    {
        name: 'University College London',
        location: 'London, England',
        logo: 'https://c.animaapp.com/mblk7d9mk255sw/img/images.png',
    },
];

export default function Top_Universities() {
    return (
        <div className="w-full max-w-[1260px] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((univ, index) => (
                    <div
                        key={index}
                        className="flex items-center border-[0.5] border-amber-200 rounded-[0.5rem] gap-4 bg-white shadow-[0_4px_12px_#fec84933] p-4 transition-transform hover:scale-[1.02]"
                    >
                        <div className="relative w-[70px] h-[70px] flex-shrink-0">
                            <Image
                                src={univ.logo}
                                alt={univ.name}
                                fill
                                className="object-contain rounded-md"
                                sizes="70px"
                            />
                        </div>
                        <div className="flex flex-col">
                            {univ.link ? (
                                <a
                                    href={univ.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-black hover:underline"
                                >
                                    {univ.name}
                                </a>
                            ) : (
                                <div className="text-lg font-semibold text-black">{univ.name}</div>
                            )}
                            <div className="text-gray-600 text-sm sm:text-base">{univ.location}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
