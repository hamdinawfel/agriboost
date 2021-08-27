import React from 'react'
import Countdown from 'react-countdown';

import Hero from './components/Hero'
import ContactUs from './components/ContactUs'
import ProjectTimeline from './components/ProjectTimeline'
import Stepper from './components/Stepper2' //FIXME: REMOVE TOW
import Result from './components/Result'
import Footer from '../../utils/Footer'

const renderer = ({ completed }) => {
    if (completed) {
      // Render a completed state
      return (
      <React.Fragment>
         <Result />
         <ProjectTimeline />
        </React.Fragment>);
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
            <ContactUs />
            <Footer />
        </div>
    )
}
