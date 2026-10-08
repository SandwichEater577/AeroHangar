import { handleAircraftLike, openAircraftHero } from "../../../handlers/aircraftHandlers.js";

export default function AircraftCard({
  setCurrentOpenAircraftHero,
  jet,
  likedList,
  setLikedList,
}) {
  const isLiked = likedList.includes(jet.id);

  return (
    <div
      className="aircraft-card"
      style={{ backgroundImage: `url(${jet.png})` }}
      onClick={() => openAircraftHero(jet.id, setCurrentOpenAircraftHero)}
    >
      <div className="jet-name-div">
        <div className="jet-name">{jet.name}</div>
        <div className="jet-nickname">{`Aka: "${jet.nickname}"`}</div>
      </div>

      <div className="aircraft-likes-container">
        <button
          className="aircraft-like-button"
          type="button"
          aria-label="Like aircraft"
          aria-pressed={isLiked}
          onClick={(event) =>
            handleAircraftLike(event, jet.id, isLiked, setLikedList)
          }
        >
          <svg viewBox="0 0 25 25" width="39" height="38" aria-hidden="true">
            <path
              d="M12 21.23 3.16 12.39a5.5 5.5 0 0 1 7.78-7.78L12 5.67l1.06-1.06a5.5 5.5 0 0 1 7.78 7.78L12 21.23Z"
              fill={likedList.includes(jet.id) ? "#ff0000" : "#ffffff"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
