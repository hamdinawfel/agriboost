import React from "react";
import Countdown from "react-countdown";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import ProjectTimeline from "./components/ProjectTimeline";
import Stepper from "./components/stepper/Index";
import Result from "./components/Result";
import Criteria from "./components/Criteria";
import Footer from "../../utils/Footer";

const renderer = ({ completed }) => {
  if (completed) {
    // Render the result screen at the finishing the event time
    return (
      <React.Fragment>
        <Result />
        <ProjectTimeline />
      </React.Fragment>
    );
  } else {
    // Render the form for submittion a candidate
    return (
      <React.Fragment>
        <Criteria />
        <Stepper />
      </React.Fragment>
    );
  }
};
export default function Index() {
  return (
    <div>
      <Hero />
      <Countdown
        date={parseInt(process.env.REACT_APP_END_SUBMSITTION)}
        renderer={renderer}
      />
      <ContactUs />
      <Footer />
    </div>
  );
}
