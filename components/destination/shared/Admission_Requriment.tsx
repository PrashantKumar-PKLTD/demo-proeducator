import Image from 'next/image';
import React from 'react';

const admissionRequirement = [
    'Copy of a valid passport',
    'GMAT/GRE scores for PG programs',
    'Letter of Recommendations (LORs)',
    'A CV (if applicable)',
    'TOEFL/IELTS/C1 Advanced scores',
    'Academic Transcripts',
    'Portfolio (for specific courses)',
    'Statement of Purpose (SOP)',
];

export default function Admission_Requirement() {
    return (
        <div className="relative w-full px-6 py-8 flex justify-center items-center">
            <ul
                className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 w-full max-w-5xl"
                aria-label="Admission Requirements"
            >
                {admissionRequirement.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-gray-800 text-base leading-relaxed"
                    >
                        <Image
                            src="/destination/document.png"
                            alt="Document icon"
                            width={20}
                            height={20}
                            className="mt-1"
                        />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
