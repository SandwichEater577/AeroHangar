export default function ProfileMainAllPages({ currentProfilePage }) {
  let profilePage;

  switch (currentProfilePage) {
    case "1":
      profilePage = <div>Profile Page 1</div>;
      break;
    case "2":
      profilePage = <div>Profile Page 2</div>;
      break;
    case "3":
      profilePage = <div>Profile Page 3</div>;
      break;
    default:
      profilePage = <div>Default Profile Page</div>;
  }

  return <>{profilePage}</>;
}
