import UserProfileCard from "./UserProfileCard.jsx";
import ProfileUserPages from "./ProfileUserPages.jsx";

export default function ProfilePage({
  currentProfilePage,
  setCurrentProfilePage,
}) {
  return (
    <div id="profile-page">
      <section id="user-profile-header">
        <UserProfileCard />
      </section>

      <section id="user-profile-main">
        <ProfileUserPages
          currentProfilePage={currentProfilePage}
          setCurrentProfilePage={setCurrentProfilePage}
        />
      </section>
    </div>
  );
}
