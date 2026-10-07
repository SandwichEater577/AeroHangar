import UserProfileCard from "./UserProfileCard.jsx";
import ProfileUserPages from "./ProfileUserPages.jsx";

export default function ProfilePage({
  newAircraftList,
  setNewAircraftList,
  aircraft,
  currentProfilePage,
  setCurrentProfilePage,
  likedList,
}) {
  return (
    <div id="profile-page">
      <section id="user-profile-header">
        <UserProfileCard />
      </section>

      <section id="user-profile-main">
        <ProfileUserPages
          newAircraftList={newAircraftList}
          setNewAircraftList={setNewAircraftList}
          aircraft={aircraft}
          currentProfilePage={currentProfilePage}
          setCurrentProfilePage={setCurrentProfilePage}
          likedList={likedList}
        />
      </section>
    </div>
  );
}
