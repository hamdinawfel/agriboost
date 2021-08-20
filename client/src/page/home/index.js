import React from 'react'
import Countdown from 'react-countdown';

import Hero from './components/Hero'
import About from './components/About'
import Stepper from './components/Stepper2'
import Result from './components/Result'
import Footer from '../../utils/Footer'

const renderer = ({ completed }) => {
    if (completed) {
      // Render a completed state
      return <Result />;
    } else {
      // Render a countdown
      return <Stepper />;
    }
  };
export default function Home() {
   
    return (
        <div>
            <Hero />
            <Countdown
                date={parseInt(process.env.REACT_APP_START_TIME)}
                renderer={renderer}
            />
            <About />
            <Footer />
        </div>
    )
}
