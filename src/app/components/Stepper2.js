import React, { useState } from "react";
import "./stepper.css";

const Stepper2 = () => {
  const steps = ["Basic Details", "Job Description", "Setup Applications"];
  // const [currentStep, setCurrentStep] = useState(0);
  // const goToNextStep = () => {
  //   setCurrentStep((prevStep) => prevStep + 1);
  // };
  // const goToPreviousStep = () => {
  //   setCurrentStep((prevStep) => prevStep - 1);
  // };
  return (
    <div className="flex justify-center ">
      <div className="w-1 rounded-full bg-gradient-to-b from-[#2194FF]  to-[#EFF4F7]  h-full relative"></div>
      <p className="absolute top-10 bg-red-500 h-4 w-4 rounded-full">1</p>

      {/* <p>2</p>
      <p>3</p> */}
    </div>
  );
};

export default Stepper2;
