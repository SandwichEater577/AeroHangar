import AeroHangarProfile from "./assets/AeroHangarProfile.png";
import AeroHangarLandscape from "./assets/AeroHangarLandScape.png";
import IgnacyPFP from "./assets/IgnacyPFP.png";
import KubaPFP from "./assets/KubaPFP.png";

export { AeroHangarProfile, AeroHangarLandscape, IgnacyPFP, KubaPFP };
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

export const user = {
  name: "AeroHangar",
  username: "aero-hangar",
  email: "user@aerohangar.com",
  password: "1234",
  pfp: AeroHangarProfile,
  friends: [
    {
      name: "Ignacy Chacinski",
      username: "ignacy-chacinski",
      email: "ignacy.chacinski@aerohangar.com",
      pfp: IgnacyPFP,
    },
    {
      name: "Kuba Ropiak",
      username: "kuba-ropiak",
      email: "kuba.ropiak@aerohangar.com",
      pfp: KubaPFP,
    },
  ],
};

export const profile_main_header = [
  {
    text: "All",
    name: "all",
    id: 1,
  },
  {
    text: "Activity",
    name: "activity",
    id: 2,
  },
  {
    text: "Aircraft",
    name: "aircraft",
    id: 3,
  },
];

export const profile_main_page_activity = [];

export const profile_main_page_aircraft = [];

export const profile_main_page_all = [];
