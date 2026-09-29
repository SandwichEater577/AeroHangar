import { profile_main_header } from "../../../data/LayoutData.js";
import ProfileMainAllPages from "./ProfileMainAllPages.jsx";

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
            >
              {item.text}
            </button>
          ))}
        </div>
        <div>
          <ProfileMainAllPages
            currentProfilePage={currentProfilePage}
            setCurrentProfilePage={setCurrentProfilePage}
          />
        </div>
      </div>
    </>
  );
}
