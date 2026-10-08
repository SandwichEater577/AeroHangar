import UserProfileCard from "./UserProfileCard.jsx";
import ProfileUserPages from "./ProfileUserPages.jsx";

export default function ProfilePage({
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
    <div id="profile-page">
      <section id="user-profile-header">
        <UserProfileCard />
      </section>

      <section id="user-profile-main">
        <ProfileUserPages
          newAircraftList={newAircraftList}
          aircraft={aircraft}
          currentProfilePage={currentProfilePage}
          setCurrentProfilePage={setCurrentProfilePage}
          likedList={likedList}
          setLikedList={setLikedList}
          editAircraft={editAircraft}
          deleteAircraft={deleteAircraft}
        />
      </section>
    </div>
  );
}
