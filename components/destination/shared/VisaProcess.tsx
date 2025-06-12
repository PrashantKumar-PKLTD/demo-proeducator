import React from 'react'

const visaSteps = [
  {
    step: 'Step 1',
    title: 'English Language Requirement',
    description: 'Take IELTS or provide Medium of Instruction (MOI) certificate.'
  },
  {
    step: 'Step 2',
    title: 'Apply to University/College',
    description: 'Submit applications to chosen UK universities or colleges.'
  },
  {
    step: 'Step 3',
    title: 'Receive Offer Letter',
    description: 'Wait approximately 2–4 weeks to receive an Offer Letter.'
  },
  {
    step: 'Step 4',
    title: 'Pay Tuition Fees',
    description: 'Pay the initial tuition deposit as requested by the university.'
  },
  {
    step: 'Step 5',
    title: 'CAS Letter Issued',
    description: 'The university issues a Confirmation of Acceptance for Studies (CAS) letter.'
  },
  {
    step: 'Step 6',
    title: 'Arrange Finances',
    description: 'Arrange funds for tuition fees and living expenses (required for visa).'
  },
  {
    step: 'Step 7',
    title: 'Apply for VISA Online',
    description: 'Fill out the UK student visa application form online and pay the visa fee.'
  },
  {
    step: 'Step 8',
    title: 'Book Biometric Appointment',
    description: 'Schedule an appointment at VFS Global for biometric verification and document submission.'
  },
  {
    step: 'Step 9',
    title: 'Prepare Required Documents',
    description: 'Gather academic, financial, and language proficiency documents.'
  },
  {
    step: 'Step 10',
    title: 'Submit VISA Application',
    description: 'Submit the complete visa application form along with supporting documents.'
  },
  {
    step: 'Step 11',
    title: 'Attend Interview at VFS',
    description: 'Attend an in-person interview (if required) at the VFS center.'
  },
  {
    step: 'Step 12',
    title: 'VISA Approval',
    description: 'Once approved, receive your passport with the UK student visa stamped.'
  },
]

export default function VisaProcess() {
  return (
    <div className='relative w-full py-10 bg-gradient-to-b from-yellow-50 via-amber-50 to-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {visaSteps.map(({ step, title, description }, index) => (
            <div key={index} className='bg-white border border-yellow-100 shadow-md hover:shadow-lg rounded-xl p-5 transition-all duration-200'>
              <div className='inline-block bg-yellow-100 text-yellow-700 font-extrabold px-3 py-1 rounded-full mb-3 text-sm'>
                {step}
              </div>
              <h3 className='text-lg font-semibold text-gray-800 leading-snug mb-2'>{title}</h3>
              <p className='text-gray-600 text-sm'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
