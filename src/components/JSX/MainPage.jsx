import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";

export default function Main({
  currentAircraftPage,
  setCurrentAircraftPage,
  currentPage,
  currentProfilePage,
  setCurrentProfilePage,
}) {
  return (
    <>
      {[
        [
          "aircraft",
          <AircraftPage
            currentAircraftPage={currentAircraftPage}
            setCurrentAircraftPage={setCurrentAircraftPage}
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
