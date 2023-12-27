import { useState } from "react";
import { Stepper } from "@mantine/core";
import Button2 from "./Button2";
import ToggleSwitch from "./ToggleSwitch";
import BasicDetails from "./BasicDetails";
import JobDescription from "./JobDescription";
import SetupApplication from "./SetupApplication";

const StepperComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(1);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full">
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label=" Basic Details"
          description="Enter a Job Title"
          className=""
        >
          <BasicDetails />
        </Stepper.Step>
        <Stepper.Step
          label="Job Descriptions"
          description="create a detailed description"
        >
          <JobDescription />
        </Stepper.Step>

        <Stepper.Step label=" Setup Application Forms " description="Lorem">
          <SetupApplication />
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default StepperComponent;
