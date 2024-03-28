import { Switch, FormControlLabel } from "@mui/material";
function ToggleSwitch({ label, checked, onChange }) {
  return (
    <div className="text-[rgb(141,148,153)]">
      <FormControlLabel
        control={
          <Switch
            color="default"
            checked={checked}
            onChange={onChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              "& .MuiSwitch-thumb": {
                color: checked ? "green" : "#ccc", // Change thumb color when switch is checked
              },
              "& .MuiSwitch-track": {
                backgroundColor: checked ? "gray" : "#ccc", // Change track color when switch is checked
              },
            }}
          />
        }
        label={label}
      />
    </div>
  );
}

export default ToggleSwitch;

// components/ToggleSwitch.js
// import React from "react";

// const ToggleSwitch = ({ checked, onChange, label }) => {
//   return (
//     <div className="flex items-center mb-2">
//       <label
//         htmlFor="toggleSwitch"
//         className="flex items-center cursor-pointer"
//       >
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="toggleSwitch"
//             className="sr-only"
//             checked={checked}
//             onChange={onChange}
//           />
//           <div className="block bg-[#E5E9EB] w-6 h-5 rounded-full"></div>
//           <div
//             className={`dot absolute right-1 top-0 bg-white w-3 h-4 rounded-full transition-transform ${
//               checked ? "transform translate-x-full" : ""
//             }`}
//           ></div>
//         </div>
//         <div className="ml-3 text-[#8D9499] font-normal">{label}</div>
//       </label>
//     </div>
//   );
// };
