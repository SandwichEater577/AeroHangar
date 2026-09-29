import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";
import "../CSS/Page.css";

export default function Main({
  currentPage,
  currentProfilePage,
  setCurrentProfilePage,
}) {
  return (
    <>
      {[
        ["aircraft", <AircraftPage />],
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
