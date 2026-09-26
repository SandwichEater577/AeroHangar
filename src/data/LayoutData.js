import AeroHangarProfile from "./assets/AeroHangarProfile.png";
import AeroHangarLandscape from "./assets/AeroHangarLandScape.png";
import Users from "./Users.json";

export { AeroHangarProfile, AeroHangarLandscape };
export const headerLayout = [
  {
    name: "aircraft",
    text: "Aircraft",
    pic: null,
  },
  {
    name: "about",
    text: "About",
    pic: null,
  },
  {
    name: "add-aircraft",
    text: "Add Aircraft",
    pic: null,
  },
  {
    name: "profile",
    text: "Profile",
    pic: null,
  },
];

export const users = [...Users];
