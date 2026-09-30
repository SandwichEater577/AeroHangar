import { jets } from "../../../data/LayoutData.js";
import {
  aircraftPerPage,
  whenNextAircraftShouldCreateNewPage,
} from "../../../data/LayoutData.js";

export default function AircraftPage({
  currentAircraftPage,
  setCurrentAircraftPage,
}) {
  const totalPages = Math.ceil(jets.length / aircraftPerPage);

  return (
    <>
      <div id="aircraft-cards-container">
        {jets
          .slice(
            (currentAircraftPage - 1) * aircraftPerPage,
            currentAircraftPage * aircraftPerPage,
          )
          .map((jet) => (
            <div
              className="aircraft-card"
              id={`aircraft-card-${jet.id}`}
              key={jet.id}
              style={{ backgroundImage: `url(${jet.png})` }}
            >
              <div className="jet-name-div">
                <div className="jet-name">{jet.name}</div>
                <div className="jet-nickname">{`Aka: "${jet.nickname}"`}</div>
              </div>
              <div></div>
            </div>
          ))}
      </div>
      <div id="aircraft-page-buttons-container">
        {whenNextAircraftShouldCreateNewPage.map((element) => (
          <button
            key={element.value}
            onClick={() =>
              setCurrentAircraftPage((element.value / 6).toString())
            }
            className={`aircraft-page-button ${
              currentAircraftPage === element.value.toString() ? "active" : ""
            }`}
          >
            {element.value / 6}
          </button>
        ))}
      </div>
    </>
  );
}
