import defaultUserProfilePic from "./assets/default-user-profile-pic.png";
import Users from "./Users.json";
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

export const defaultUserInfo = {
  name: "Guest User",
  profilePic: defaultUserProfilePic,
  friend: "Dill Doe and 9+ others",
};

export const users = [...Users];
