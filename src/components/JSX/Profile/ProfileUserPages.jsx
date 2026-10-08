import { profile_main_header } from "../../../data/LayoutData.js";
import { changeProfilePage } from "../../../handlers/aircraftHandlers.js";
import ProfileMainAllPages from "./ProfileMainAllPages.jsx";

export default function ProfileUserPages({
  newAircraftList,
  aircraft,
  currentProfilePage,
  setCurrentProfilePage,
  likedList,
  setLikedList,
  editAircraft,
  deleteAircraft,
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
              onClick={() =>
                changeProfilePage(item.id, setCurrentProfilePage)
              }
            >
              {item.text}
            </button>
          ))}
        </div>

        <div id="user-profile-main-page-container">
          <ProfileMainAllPages
            newAircraftList={newAircraftList}
            aircraft={aircraft}
            currentProfilePage={currentProfilePage}
            likedList={likedList}
            setLikedList={setLikedList}
            editAircraft={editAircraft}
            deleteAircraft={deleteAircraft}
          />
        </div>
      </div>
    </>
  );
}
