export default function ProfileMainAllPages({ currentProfilePage }) {
  let profilePage;

  switch (currentProfilePage) {
    case "1":
      profilePage = <div id="profile-page-1">Hello, World!</div>;
      break;
    case "2":
      profilePage = <div id="profile-page-2">Profile Page 2</div>;
      break;
    case "3":
      profilePage = <div id="profile-page-3">Profile Page 3</div>;
      break;
  }

  return <>{profilePage}</>;
}
