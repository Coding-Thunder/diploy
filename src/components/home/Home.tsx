import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import WhyGaleto from './WhyGaleto'
import GaletoConnect from './GaletoConnect'

const Home = () => {
    return (
        <section className='w-full min-h-screen max-h-fit'>
            <Hero />
            <Stats />
            <WhyGaleto />
            <GaletoConnect />
        </section>
    )
}

export default Home