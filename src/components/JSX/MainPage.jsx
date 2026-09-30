import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";
import { jets } from "../../data/LayoutData.js";
import AircraftHero from "./Aircraft/AircraftHero.jsx";

export default function Main({
  setCurrentOpenAircraftHero,
  currentOpenAircraftHero,
  setCurrentAircraftPage,
  setCurrentProfilePage,
  currentAircraftPage,
  currentProfilePage,
  currentPage,
}) {
  function handleAircraftHeroRequest(id, array) {
    let currentJet = array.find((element) => element.id === id);
    return currentJet;
  }

  let currentOpenAircraftHeroData = handleAircraftHeroRequest(
    currentOpenAircraftHero,
    jets,
  );

  return (
    <>
      {currentOpenAircraftHero == 0 ? null : (
        <>
          <AircraftHero
            array={currentOpenAircraftHeroData}
            setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
          />
        </>
      )}
      {[
        [
          "aircraft",
          <AircraftPage
            currentAircraftPage={currentAircraftPage}
            setCurrentAircraftPage={setCurrentAircraftPage}
            setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
          />,
        ],
        ["about", <AboutPage />],
        ["add-aircraft", <AddAircraftPage />],
        [
          "profile",
          <ProfilePage
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
