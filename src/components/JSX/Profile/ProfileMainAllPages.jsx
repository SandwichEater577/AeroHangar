export default function ProfileMainAllPages({ currentProfilePage }) {
  let profilePage;

  switch (currentProfilePage) {
    case "1":
      profilePage = (
        <div id="profile-page-1">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
          <div>I</div>
          <div>J</div>
          <div>K</div>
          <div>L</div>
          <div>M</div>
          <div>N</div>
          <div>O</div>
          <div>P</div>
          <div>Q</div>
          <div>R</div>
          <div>S</div>
          <div>T</div>
          <div>U</div>
          <div>V</div>
          <div>W</div>
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
          <div>I</div>
          <div>J</div>
          <div>K</div>
          <div>L</div>
          <div>M</div>
          <div>N</div>
          <div>O</div>
          <div>P</div>
          <div>Q</div>
          <div>R</div>
          <div>S</div>
          <div>T</div>
          <div>U</div>
          <div>V</div>
          <div>W</div>
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
        </div>
      );
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
