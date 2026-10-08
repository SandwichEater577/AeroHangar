import { closeAircraftHero } from "../../../handlers/aircraftHandlers.js";

export default function AircraftHero({ setCurrentOpenAircraftHero, ...props }) {
  return (
    <>
      <div id="overlay-aircraft-hero-container">
        <div id="overlay-aircraft-hero">
          <div id="overlay-aircraft-header">
            <div id="overlay-aircraft-hero-title">
              <div id="overlay-aircraft-hero-name">{props.array.name}</div>
              <div id="overlay-aircraft-hero-nickname">
                {`Aka: "${props.array.nickname}"`}
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
                    {"Name: " + props.array.name}
                  </div>
                  <div id="overlay-aircraft-main-info-nickname">
                    {"Nickname: " + props.array.nickname}
                  </div>
                  <div id="overlay-aircraft-main-info-birth-date">
                    {"Birth Date: " + props.array.birthDate}
                  </div>
                  <div id="overlay-aircraft-main-info-status">
                    {"Status: " + props.array.status}
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
                    {"Manufacturer: " + props.array.manufacturer}
                  </div>
                  <div id="overlay-aircraft-main-info-country">
                    {"Country: " + props.array.country}
                  </div>
                  <div id="overlay-aircraft-main-info-role">
                    {"Role: " + props.array.role}
                  </div>
                </div>
              </div>
              <div>
                <label className="overlay-aircraft-info-label">
                  Performance
                </label>
                <div
                  id="overlay-aircraft-main-info-performance"
                  className="overlay-aircraft-info-container"
                >
                  <div id="overlay-aircraft-main-info-engine">
                    {"Engine: " + props.array.engineType}
                  </div>
                  <div id="overlay-aircraft-main-info-engines">
                    {"No. Engines: " + props.array.engines}
                  </div>
                  <div id="overlay-aircraft-main-info-max-speed">
                    {"Max Speed: " +
                      props.array.maxSpeed +
                      `km/h [${(props.array.maxSpeed * 0.000816).toFixed(2)} mach]`}
                  </div>
                  <div id="overlay-aircraft-main-info-stealth">
                    {"Stealth: " + props.array.stealth}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay-aircraft-card-img">
            {<img src={props.array.png} alt="Aircraft" />}
          </div>
        </div>
      </div>
    </>
  );
}
