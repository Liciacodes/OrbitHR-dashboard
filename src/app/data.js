import {
  PiStackSimpleLight,
  PiChartBarHorizontalLight,
  PiFlagCheckeredLight,
} from "react-icons/pi";

export const data = [
  {
    id: 0,
    label: "Hr Overview",
    path: "/overview",
    icon: <PiStackSimpleLight size={30} />,
  },
  {
    id: 0,
    label: "Analytics",
    path: "/analytics",
    icon: <PiChartBarHorizontalLight size={30} />,
  },
  {
    id: 0,
    label: "Applications",
    path: "/",
    icon: <PiFlagCheckeredLight size={30} />,
    buttonTag: "New",
  },
];
