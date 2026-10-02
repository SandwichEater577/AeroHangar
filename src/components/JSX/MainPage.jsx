import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";
import AircraftHero from "./Aircraft/AircraftHero.jsx";

export default function Main({
  aircraft,
  addAircraft,
  editAircraft,
  deleteAircraft,
  likedList,
  currentPage,
  setLikedList,
  currentLikeColor,
  currentProfilePage,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentProfilePage,
  setCurrentAircraftPage,
  currentOpenAircraftHero,
  setCurrentOpenAircraftHero,
}) {
  function handleAircraftHeroRequest(id, array) {
    let currentJet = array.find((element) => element.id === id);
    return currentJet;
  }

  let currentOpenAircraftHeroData = handleAircraftHeroRequest(
    currentOpenAircraftHero,
    aircraft,
  );

  return (
    <>
      {currentOpenAircraftHero == 0 ? null : (
        <AircraftHero
          array={currentOpenAircraftHeroData}
          setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
        />
      )}

      {[
        [
          "aircraft",
          <AircraftPage
            aircraft={aircraft}
            deleteAircraft={deleteAircraft}
            editAircraft={editAircraft}
            likedList={likedList}
            setLikedList={setLikedList}
            currentLikeColor={currentLikeColor}
            setCurrentLikeColor={setCurrentLikeColor}
            currentAircraftPage={currentAircraftPage}
            setCurrentAircraftPage={setCurrentAircraftPage}
            setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
          />,
        ],
        ["about", <AboutPage likedList={likedList} />],
        [
          "add-aircraft",
          <AddAircraftPage aircraft={aircraft} addAircraft={addAircraft} />,
        ],
        [
          "profile",
          <ProfilePage
            aircraft={aircraft}
            likedList={likedList}
            currentProfilePage={currentProfilePage}
            setCurrentProfilePage={setCurrentProfilePage}
          />,
        ],
      ].map(([page, content]) => (
        <Fragment key={page}>
          {currentPage === page && (
            <main
              className={currentOpenAircraftHero !== 0 ? "should-blur" : null}
              id={
                page === "profile"
                  ? "main-container-no-top-padding"
                  : "main-container"
              }
            >
              <div id={`main-${page}`} className="main-content">
                {content}
              </div>
            </main>
          )}
        </Fragment>
      ))}
    </>
  );
}
