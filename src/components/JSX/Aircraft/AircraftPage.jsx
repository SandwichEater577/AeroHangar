import AircraftCard from "./AircraftCard.jsx";

export default function AircraftPage({
  aircraft,
  likedList,
  setLikedList,
  currentLikeColor,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentAircraftPage,
  setCurrentOpenAircraftHero,
}) {
  const aircraftPerPage = 4;
  const totalPages = Math.ceil(aircraft.length / aircraftPerPage);

  return (
    <>
      <div id="aircraft-cards-container">
        {aircraft
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
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentAircraftPage((index + 1).toString())}
            className={
              "aircraft-page-button " +
              (currentAircraftPage === (index + 1).toString()
                ? "aircraft-page-button-active"
                : "")
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
