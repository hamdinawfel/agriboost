import React from "react";
import Countdown from "react-countdown";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import ProjectTimeline from "./components/ProjectTimeline";
// import Stepper from "./components/Stepper";
import Stepper from "./components/stepper/Index";
import Result from "./components/Result";
import Footer from "../../utils/Footer";

const renderer = ({ completed }) => {
  if (!completed) {
    //FIXME: REMOVE !
    // Render the result screen at the finishing the event time
    return (
      <React.Fragment>
        <Result />
        <ProjectTimeline />
      </React.Fragment>
    );
  } else {
    // Render the form for submittion a candidate
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
  );
}
