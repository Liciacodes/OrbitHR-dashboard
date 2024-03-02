import {
  PiStackSimpleLight,
  PiChartBarHorizontalLight,
  PiFlagCheckeredLight,
} from "react-icons/pi";

export const data = [
  {
    id: 0,
    label: "Hr Overview",
    path: "/",
    icon: <PiStackSimpleLight size={30} />,
    disabled: false,
  },
  {
    id: 1,
    label: "Analytics",
    path: "analytics",
    icon: <PiChartBarHorizontalLight size={30} />,
    disabled: true,
  },
  {
    id: 2,
    label: "Applications",
    path: "/new-application",
    icon: <PiFlagCheckeredLight size={30} />,
    buttonTag: "New",
    disabled: false,
  },
];
