import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Stepper from './components/Stepper'
import Footer from '../../utils/Footer'
export default function Home() {
    return (
        <div>
            <Hero />
            <Stepper />
            <About />
            <Footer />
        </div>
    )
}
