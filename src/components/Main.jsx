import AircraftPage from "./AircraftPage";
import AboutPage from "./AboutPage";
import AddAircraftPage from "./AddAircraftPage";
import ProfilePage from "./ProfilePage";
import { Fragment } from "react";
import "./Page.css";

export default function Main({ currentPage }) {
  return (
    <>
      {[
        ["aircraft", <AircraftPage />],
        ["about", <AboutPage />],
        ["add-aircraft", <AddAircraftPage />],
        ["profile", <ProfilePage />],
      ].map(([page, content]) => (
        <Fragment key={page}>
          {currentPage === page && (
            <main id="main-container">
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
