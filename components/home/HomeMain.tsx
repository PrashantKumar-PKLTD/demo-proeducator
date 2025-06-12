import React from 'react'
import HomeHeroSection from './HomeHeroSection'
import DiscoverSection from './DiscoverSection'
import TabSection from './TabSection'
import WhyWeExit from '../shared/WhyWeExit'
import WhatWeOffer from '../shared/WhatWeOffer'
import Feature from '../shared/feature'
import StudyDestinations from '../shared/ScrollDestination'
import FAQ from '../shared/Faq'

export default function HomeMain() {
  return (
    <div className='w-full h-full overflow-x-hidden'>
        <HomeHeroSection />
        <DiscoverSection />
        <TabSection />
        <WhyWeExit />
        <WhatWeOffer />
        <Feature />
        <StudyDestinations />
        <FAQ />
    </div>
  )
}
