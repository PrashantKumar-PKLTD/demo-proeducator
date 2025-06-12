'use client'
import Image from 'next/image'
import React from 'react'

const schlorshipData = [
  "British Chevening Scholarships for International Scholarships",
  "A.S Hornby Educational Trust Scholarship",
  "Rhodes Scholarship",
  "Charles Wallace India Trust Scholarships (CWIT)",
  "Inlaks Scholarships",
  "Erasmus Mundus Joint Masters Degree Scholarship",
  "Felix Scholarships",
  "Commonwealth Scholarship and Fellowship Plan",
  "Dr. Manmohan Singh Scholarships"
]

export default function Schlorship() {
  return (
    <div className='relative w-full py-12 mt-[2rem] bg-gradient-to-b from-yellow-50 via-amber-50 to-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {schlorshipData.map((schlo, index) => (
            <div
              key={index}
              className='flex items-start gap-3 p-4 shadow-sm hover:shadow-md transition duration-200'
            >
              <Image
                src="/destination/cap.png"
                alt='Graduation cap icon'
                width={28}
                height={28}
                className="mt-1"
              />
              <p className='text-gray-700 text-base leading-snug'>{schlo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
