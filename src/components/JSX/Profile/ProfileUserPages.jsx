import { profile_main_header } from "../../../data/LayoutData.js";
import ProfileMainAllPages from "./ProfileMainAllPages.jsx";
import { useState } from "react";

export default function ProfileUserPages({
  currentProfilePage,
  setCurrentProfilePage,
}) {
  return (
    <>
      <div id="user-profile-main-correcter">
        <div id="user-profile-main-header">
          {profile_main_header.map((item) => (
            <button
              className="user-profile-main-header-button"
              key={item.name}
              id={`user-profile-main-header-${item.name}`}
              onClick={() => setCurrentProfilePage(item.id.toString())}
              style={
                currentProfilePage === item.id.toString()
                  ? { borderBottom: "2px solid #ffd166" }
                  : {}
              }
            >
              {item.text}
            </button>
          ))}
        </div>
        <div id="user-profile-main-page-container">
          <ProfileMainAllPages currentProfilePage={currentProfilePage} />
        </div>
      </div>
    </>
  );
}
