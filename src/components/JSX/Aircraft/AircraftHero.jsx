import { closeAircraftHero } from "../../../handlers/aircraftHandlers.js";

// the big overlay that shows one aircraft up close.
// rendered by MainPage only when something is selected
export default function AircraftHero({ aircraft, setCurrentOpenAircraftHero }) {
  // safety net: if the aircraft was deleted while the overlay was open,
  // aircraft will be undefined. bail out instead of crashing
  if (!aircraft) return null;

  // speed in km/h -> mach. rough conversion at sea level
  const mach = (aircraft.maxSpeed * 0.000816).toFixed(2);

  return (
    <div id="overlay-aircraft-hero-container">
      <div id="overlay-aircraft-hero">
        <div id="overlay-aircraft-header">
          <div id="overlay-aircraft-hero-title">
            <div id="overlay-aircraft-hero-name">{aircraft.name}</div>
            <div id="overlay-aircraft-hero-nickname">
              {`Aka: "${aircraft.nickname}"`}
            </div>
          </div>
          <button
            type="button"
            id="overlay-aircraft-hero-close"
            aria-label="Close aircraft details"
            onClick={() => closeAircraftHero(setCurrentOpenAircraftHero)}
          >
            ×
          </button>
        </div>

        <div id="overlay-aircraft-main">
          <div id="overlay-aircraft-main-info">
            <div>
              <label className="overlay-aircraft-info-label">Aircraft</label>
              <div
                id="overlay-aircraft-main-info-aircraft"
                className="overlay-aircraft-info-container"
              >
                <div id="overlay-aircraft-main-info-name">
                  {"Name: " + aircraft.name}
                </div>
                <div id="overlay-aircraft-main-info-nickname">
                  {"Nickname: " + aircraft.nickname}
                </div>
                <div id="overlay-aircraft-main-info-birth-date">
                  {"Birth Date: " + aircraft.birthDate}
                </div>
                <div id="overlay-aircraft-main-info-status">
                  {"Status: " + aircraft.status}
                </div>
              </div>
            </div>

            <div>
              <label className="overlay-aircraft-info-label">Origins</label>
              <div
                id="overlay-aircraft-main-info-origins"
                className="overlay-aircraft-info-container"
              >
                <div id="overlay-aircraft-main-info-manufacturer">
                  {"Manufacturer: " + aircraft.manufacturer}
                </div>
                <div id="overlay-aircraft-main-info-country">
                  {"Country: " + aircraft.country}
                </div>
                <div id="overlay-aircraft-main-info-role">
                  {"Role: " + aircraft.role}
                </div>
              </div>
            </div>

            <div>
              <label className="overlay-aircraft-info-label">Performance</label>
              <div
                id="overlay-aircraft-main-info-performance"
                className="overlay-aircraft-info-container"
              >
                <div id="overlay-aircraft-main-info-engine">
                  {"Engine: " + aircraft.engineType}
                </div>
                <div id="overlay-aircraft-main-info-engines">
                  {"No. Engines: " + aircraft.engines}
                </div>
                <div id="overlay-aircraft-main-info-max-speed">
                  {"Max Speed: " + aircraft.maxSpeed + `km/h [${mach} mach]`}
                </div>
                <div id="overlay-aircraft-main-info-stealth">
                  {"Stealth: " + aircraft.stealth}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay-aircraft-card-img">
          <img src={aircraft.png} alt="Aircraft" />
        </div>
      </div>
    </div>
  );
}
