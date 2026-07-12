import React from 'react'
import HeroSection from '../../components/heroSection'
import NewItemSection from '../../components/newItem'
import WhyMobileAbed from '../../components/whyMobileAbed'
import BestComment from '../../components/bestComments'



export default function Home() {
  return (
    <div className='flex flex-wrap w-full justify-center'>
     <HeroSection/>
     <NewItemSection/>
     <WhyMobileAbed/>
     <BestComment/>
    </div>
  )
}
