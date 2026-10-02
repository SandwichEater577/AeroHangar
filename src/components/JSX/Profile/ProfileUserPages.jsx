import { profile_main_header } from "../../../data/LayoutData.js";
import ProfileMainAllPages from "./ProfileMainAllPages.jsx";

export default function ProfileUserPages({
  currentProfilePage,
  setCurrentProfilePage,
  likedList,
}) {
  return (
    <>
      <div id="user-profile-main-correcter">
        <div id="user-profile-main-header">
          {profile_main_header.map((item) => (
            <button
              className={
                "user-profile-main-header-button" +
                (currentProfilePage === item.id.toString()
                  ? " user-profile-main-header-button-active"
                  : "")
              }
              key={item.name}
              id={`user-profile-main-header-${item.name}`}
              onClick={() => setCurrentProfilePage(item.id.toString())}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div id="user-profile-main-page-container">
          <ProfileMainAllPages
            currentProfilePage={currentProfilePage}
            likedList={likedList}
          />
        </div>
      </div>
    </>
  );
}
