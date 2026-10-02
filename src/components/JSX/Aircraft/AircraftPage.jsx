import { jets } from "../../../data/LayoutData.js";
import AircraftCard from "./AircraftCard.jsx";
import {
  aircraftPerPage,
  whenNextAircraftShouldCreateNewPage,
} from "../../../data/LayoutData.js";

export default function AircraftPage({
  likedList,
  setLikedList,
  currentLikeColor,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentAircraftPage,
  setCurrentOpenAircraftHero,
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
            <AircraftCard
              likedList={likedList}
              setLikedList={setLikedList}
              currentLikeColor={currentLikeColor}
              setCurrentLikeColor={setCurrentLikeColor}
              key={jet.id}
              jet={jet}
              setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
            />
          ))}
      </div>
      <div id="aircraft-page-buttons-container">
        {whenNextAircraftShouldCreateNewPage.map((element) => (
          <button
            key={element.value}
            onClick={() =>
              setCurrentAircraftPage((element.value / 6).toString())
            }
            className={
              `aircraft-page-button ` +
              `${
                currentAircraftPage === (element.value / 6).toString()
                  ? "aircraft-page-button-active"
                  : ""
              }`
            }
          >
            {element.value / 6}
          </button>
        ))}
      </div>
    </>
  );
}
