import React, { useState } from "react";
import Button2 from "./Button2";
import ToggleSwitch from "./ToggleSwitch";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";

// const customTheme = (outerTheme) =>
//   createTheme({
//     palette: {
//       mode: outerTheme.palette.mode,
//     },
//     components: {
//       MuiTextField: {
//         styleOverrides: {
//           root: {
//             "--TextField-brandBorderColor": "#E0E3E7",
//             "--TextField-brandBorderHoverColor": "#B2BAC2",
//             "--TextField-brandBorderFocusedColor": "##F8FBFF",
//             "--TextField-brandFocusedColor": "red",
//             "& label.Mui-focused": {
//               color: "var(--TextField-brandBorderFocusedColor)",
//             },
//           },
//         },
//       },
//       MuiOutlinedInput: {
//         styleOverrides: {
//           notchedOutline: {
//             borderColor: "var(--TextField-brandBorderColor)",
//           },
//           root: {
//             [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
//               borderColor: "var(--TextField-brandBorderHoverColor)",
//             },
//             [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
//               focusColor: "var(--TextField-brandFocusedColor)",
//             },
//           },
//         },
//       },
//       MuiFilledInput: {
//         styleOverrides: {
//           root: {
//             "&::before, &::after": {
//               borderBottom: "2px solid var(--TextField-brandBorderColor)",
//             },
//             "&:hover:not(.Mui-disabled, .Mui-error):before": {
//               borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
//             },
//             "&.Mui-focused:after": {
//               borderBottom:
//                 "2px solid var(--TextField-brandBorderFocusedColor)",
//             },
//           },
//         },
//       },
//       MuiInput: {
//         styleOverrides: {
//           root: {
//             "&::before": {
//               borderBottom: "2px solid var(--TextField-brandBorderColor)",
//             },
//             "&:hover:not(.Mui-disabled, .Mui-error):before": {
//               borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
//             },
//             "&.Mui-focused:after": {
//               borderBottom:
//                 "2px solid var(--TextField-brandBorderFocusedColor)",
//             },
//           },
//         },
//       },
//     },
//   });

const BasicDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" w-[540px] mt-[-30px]  h-[700px]">
      <h3 className="text-[#2194FF]  leading-[19.36px] font-medium text-[1rem]">
        Basic Details
      </h3>
      <div className="flex flex-col w-full">
        <label className="text-[#8D9499] text-[14px] mt-2 font-normal leading-[16.94px]">
          Enter a Job Title
        </label>
        <input
          type="text"
          name="JobTitle"
          className="   border-none outline-none text-[22px] placeholder:text-gray-200 mb-4"
          placeholder="Eg. Software Engineer"
        ></input>
      </div>
      <div className="w-full">
        <label className="text-[#8D9499]  text-[14px] font-normal leading-[16.94px]">
          Choose Employment Type
        </label>
        <div className="flex gap-x-2">
          <Button2 label={"Freelance"} />
          <Button2 label={"FullTime"} />
          <Button2 label={"Contract"} />
          <Button2 label={"Consultancy"} />
        </div>
      </div>
      <div className="flex w-full items-stretch justify-between mt-6 ">
        <TextField
          id="filled-basic"
          label="Country"
          variant="standard"
          InputLabelProps={{
            style: {
              color: "#8D9499",
              width: "160%",
              paddingLeft: "8px",
              paddingTop: "4px",
            },
          }}
          required
          sx={{
            ".Mui-focused": {
              backgroundColor: "#F8FBFF",
            },
          }}
          size="small"
        />

        <TextField
          id="filled-basic"
          label="City"
          variant="standard"
          autoFocus
          InputLabelProps={{
            style: {
              color: "#8D9499",
              width: "160%",
              paddingLeft: "8px",
              paddingTop: "4px",
            },
          }}
          required
          size="small"
          sx={{
            ".Mui-focused": {
              backgroundColor: "#F8FBFF",
            },
          }}
        />
      </div>
      <div className="flex w-full items-stretch justify-between mt-6 gap-y-4">
        <div>
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"100% Remote"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Partially Remote"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Hybrid"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Onsite"}
          />
        </div>
        <div className="mr-20">
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Americian"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"EMEA"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"All"}
          />
        </div>
      </div>
      <div className=" text-[#8D9499] mt-6">
        <span className="text-[14px]  font-normal leading-[16.94px]">
          Salary Range - USD
        </span>{" "}
        <span className=" ml-4 text-[14px] text-[#2194FF]  font-normal leading-[16.94px]">
          Change Currency
        </span>
        <input
          type="text"
          name="JobTitle"
          className="block my-2  border-none outline-none placeholder:text-[22px] placeholder:text-black"
          placeholder="175,000 - 185,000"
        ></input>
      </div>
    </div>
  );
};

export default BasicDetails;
