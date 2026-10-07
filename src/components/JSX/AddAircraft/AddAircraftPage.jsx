export default function AddAircraftPage({
  addAircraftNameInput,
  setAddAircraftNameInput,
  addAircraftNicknameInput,
  setAddAircraftNicknameInput,
  addAircraftManufacturerInput,
  setAddAircraftManufacturerInput,
  addAircraftCountryInput,
  setAddAircraftCountryInput,
  addAircraftRoleInput,
  setAddAircraftRoleInput,
  addAircraftTypeInput,
  setAddAircraftTypeInput,
  addAircraftFirstFlightInput,
  setAddAircraftFirstFlightInput,
  addAircraftStatusInput,
  setAddAircraftStatusInput,
  addAircraftEngineTypeInput,
  setAddAircraftEngineTypeInput,
  addAircraftEngineCountInput,
  setAddAircraftEngineCountInput,
  addAircraftVMAXinput,
  setAddAircraftVMAXInput,
  addAircraftStealthInput,
  setAddAircraftStealthInput,
  aircraft,
  addAircraft,
}) {
  const handleInputChange = (settingFunction) => (event) => {
    settingFunction(event.target.value);
  };

  const handleAddAircraft = () => {
    const nextId =
      aircraft.reduce(
        (highestId, currentAircraft) => Math.max(highestId, currentAircraft.id),
        0,
      ) + 1;

    addAircraft({
      id: nextId,
      name: addAircraftNameInput,
      nickname: addAircraftNicknameInput,
      manufacturer: addAircraftManufacturerInput,
      country: addAircraftCountryInput,
      role: addAircraftRoleInput,
      aircraftType: addAircraftTypeInput,
      birthDate: Number(addAircraftFirstFlightInput),
      status: addAircraftStatusInput,
      engineType: addAircraftEngineTypeInput,
      engines: Number(addAircraftEngineCountInput),
      maxSpeed: Number(addAircraftVMAXinput),
      stealth: addAircraftStealthInput,
      png: "",
      likes: [],
    });

    setAddAircraftNameInput("");
    setAddAircraftNicknameInput("");
    setAddAircraftManufacturerInput("");
    setAddAircraftCountryInput("");
    setAddAircraftRoleInput("");
    setAddAircraftTypeInput("");
    setAddAircraftFirstFlightInput("");
    setAddAircraftStatusInput("");
    setAddAircraftEngineTypeInput("");
    setAddAircraftEngineCountInput("");
    setAddAircraftVMAXInput(0);
    setAddAircraftStealthInput(false);
  };

  return (
    <>
      <div id="add-aircraft-h1">
        <div id="add-aircraft-title">Add Aircraft</div>
        <div id="add-aircraft-description">
          Fill in the details to add a new aircraft to the hangar.
        </div>
      </div>
      <div id="add-aircraft-form-details-container">
        <div id="aircraft-details-left-container">
          <div id="aircraft-name-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-name">
              Name
            </label>
            <input
              id="aircraft-name"
              className="aircraft-detail-input"
              type="text"
              placeholder="F-16"
              value={addAircraftNameInput}
              onChange={handleInputChange(setAddAircraftNameInput)}
            />
          </div>

          <div id="aircraft-nickname-field" className="aircraft-detail-field">
            <label
              className="aircraft-detail-label"
              htmlFor="aircraft-nickname"
            >
              Nickname
            </label>
            <input
              id="aircraft-nickname"
              className="aircraft-detail-input"
              placeholder="Fighting Falcon"
              type="text"
              value={addAircraftNicknameInput}
              onChange={handleInputChange(setAddAircraftNicknameInput)}
            />
          </div>

          <div
            id="aircraft-manufacturer-field"
            className="aircraft-detail-field"
          >
            <label
              className="aircraft-detail-label"
              htmlFor="aircraft-manufacturer"
            >
              Manufacturer
            </label>
            <input
              id="aircraft-manufacturer"
              className="aircraft-detail-input"
              placeholder="Lockheed Martin"
              type="text"
              value={addAircraftManufacturerInput}
              onChange={handleInputChange(setAddAircraftManufacturerInput)}
            />
          </div>

          <div id="aircraft-country-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-country">
              Country
            </label>

            <select
              id="aircraft-country"
              className="aircraft-detail-input"
              value={addAircraftCountryInput}
              onChange={handleInputChange(setAddAircraftCountryInput)}
            >
              <option value="" disabled>
                Select country...
              </option>

              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Brazil">Brazil</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="Czechoslovakia">Czechoslovakia</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Poland">Poland</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="Spain">Spain</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Turkey">Turkey</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="USA">USA</option>
              <option value="USSR">USSR</option>
              <option value="Yugoslavia">Yugoslavia</option>
              <option value="International">International</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div id="aircraft-role-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-role">
              Role
            </label>

            <select
              id="aircraft-role"
              className="aircraft-detail-input"
              value={addAircraftRoleInput}
              onChange={handleInputChange(setAddAircraftRoleInput)}
            >
              <option value="" disabled>
                Select role...
              </option>

              <optgroup label="Combat">
                <option value="Fighter">Fighter</option>
                <option value="Air Superiority Fighter">
                  Air Superiority Fighter
                </option>
                <option value="Multirole Fighter">Multirole Fighter</option>
                <option value="Interceptor">Interceptor</option>
                <option value="Attack Aircraft">Attack Aircraft</option>
                <option value="Ground Attack Aircraft">
                  Ground Attack Aircraft
                </option>
                <option value="Strike Aircraft">Strike Aircraft</option>
                <option value="Bomber">Bomber</option>
                <option value="Strategic Bomber">Strategic Bomber</option>
                <option value="Tactical Bomber">Tactical Bomber</option>
                <option value="Close Air Support">Close Air Support</option>
              </optgroup>

              <optgroup label="Support">
                <option value="Transport">Transport</option>
                <option value="Strategic Transport">Strategic Transport</option>
                <option value="Tactical Transport">Tactical Transport</option>
                <option value="Tanker">Tanker</option>
                <option value="Trainer">Trainer</option>
                <option value="Utility">Utility</option>
                <option value="Maritime Patrol">Maritime Patrol</option>
                <option value="Search and Rescue">Search and Rescue</option>
              </optgroup>

              <optgroup label="Special Mission">
                <option value="Reconnaissance">Reconnaissance</option>
                <option value="Surveillance">Surveillance</option>
                <option value="Early Warning">Early Warning</option>
                <option value="Electronic Warfare">Electronic Warfare</option>
                <option value="Command and Control">Command and Control</option>
                <option value="Anti-Submarine Warfare">
                  Anti-Submarine Warfare
                </option>
              </optgroup>

              <optgroup label="Other">
                <option value="Experimental">Experimental</option>
                <option value="Research">Research</option>
                <option value="Demonstrator">Technology Demonstrator</option>
                <option value="Other">Other</option>
              </optgroup>
            </select>
          </div>

          <div id="aircraft-type-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-type">
              Aircraft Type
            </label>

            <select
              id="aircraft-type"
              className="aircraft-detail-input"
              value={addAircraftTypeInput}
              onChange={handleInputChange(setAddAircraftTypeInput)}
            >
              <option value="" disabled>
                Select aircraft type...
              </option>

              <option value="Fixed-Wing">Fixed-Wing</option>
              <option value="Helicopter">Helicopter</option>
              <option value="Tiltrotor">Tiltrotor</option>
              <option value="Compound Helicopter">Compound Helicopter</option>
              <option value="Gyroplane">Gyroplane</option>
              <option value="Glider">Glider</option>
              <option value="Unmanned Aircraft">Unmanned Aircraft</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div
            id="aircraft-first-flight-field"
            className="aircraft-detail-field"
          >
            <label
              className="aircraft-detail-label"
              htmlFor="aircraft-first-flight"
            >
              First Flight (Year)
            </label>

            <input
              id="aircraft-first-flight"
              className="aircraft-detail-input"
              type="number"
              min="1903"
              max={new Date().getFullYear()}
              value={addAircraftFirstFlightInput}
              onChange={handleInputChange(setAddAircraftFirstFlightInput)}
            />
          </div>
        </div>

        <div id="aircraft-details-right-container">
          <div id="aircraft-status-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label">Status</label>

            <div id="aircraft-status" className="aircraft-detail-radio-input">
              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Active"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Active"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Active
              </label>

              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Retired"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Retired"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Retired
              </label>

              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Prototype"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Prototype"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Prototype
              </label>

              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Experimental"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Experimental"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Experimental
              </label>

              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Under Development"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Under Development"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Under Development
              </label>

              <label className="aircraft-status-radio-input">
                <input
                  type="radio"
                  name="aircraft-status"
                  value="Cancelled"
                  className="input-radio-button-aircraft-status"
                  checked={addAircraftStatusInput === "Cancelled"}
                  onChange={handleInputChange(setAddAircraftStatusInput)}
                />
                Cancelled
              </label>
            </div>
          </div>

          <div
            id="aircraft-engine-type-field"
            className="aircraft-detail-field"
          >
            <label
              className="aircraft-detail-label"
              htmlFor="aircraft-engine-type"
            >
              Engine Type
            </label>

            <select
              id="aircraft-engine-type"
              className="aircraft-detail-input"
              value={addAircraftEngineTypeInput}
              onChange={handleInputChange(setAddAircraftEngineTypeInput)}
            >
              <option value="" disabled>
                Select engine type...
              </option>

              <optgroup label="Jet">
                <option value="Turbojet">Turbojet</option>
                <option value="Turbofan">Turbofan</option>
                <option value="Ramjet">Ramjet</option>
                <option value="Scramjet">Scramjet</option>
              </optgroup>

              <optgroup label="Propeller">
                <option value="Piston">Piston</option>
                <option value="Turboprop">Turboprop</option>
              </optgroup>

              <optgroup label="Rotorcraft">
                <option value="Turboshaft">Turboshaft</option>
              </optgroup>

              <optgroup label="Other">
                <option value="Rocket">Rocket</option>
                <option value="Electric">Electric</option>
                <option value="None">None / Unpowered</option>
                <option value="Other">Other</option>
              </optgroup>
            </select>
          </div>

          <div id="aircraft-engines-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-engines">
              Number of Engines
            </label>

            <input
              id="aircraft-engines"
              className="aircraft-detail-input"
              type="number"
              min="0"
              max="12"
              value={addAircraftEngineCountInput}
              onChange={handleInputChange(setAddAircraftEngineCountInput)}
            />
          </div>

          <div id="aircraft-max-speed-field" className="aircraft-detail-field">
            <label
              className="aircraft-detail-label"
              htmlFor="aircraft-max-speed"
            >
              Max Speed (km/h)
            </label>

            <input
              id="aircraft-max-speed"
              className="aircraft-detail-input"
              type="number"
              min="500"
              max="10000"
              value={addAircraftVMAXinput}
              onChange={(event) =>
                setAddAircraftVMAXInput(Number(event.target.value))
              }
            />
          </div>

          <div id="aircraft-stealth-field" className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraft-stealth">
              Stealth
            </label>

            <label id="aircraft-stealth-container">
              <input
                id="aircraft-stealth"
                type="checkbox"
                checked={addAircraftStealthInput}
                onChange={(event) =>
                  setAddAircraftStealthInput(event.target.checked)
                }
              />
              Stealth Aircraft
            </label>
          </div>
        </div>
      </div>
      <div id="add-aircraft-form-image-container"></div>
      <div id="add-aircraft-form-button-container">
        <button type="button" onClick={handleAddAircraft}>
          Add Aircraft
        </button>
      </div>
    </>
  );
}
