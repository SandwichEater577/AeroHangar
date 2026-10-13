import { useRef } from "react";
import { validateAircraftForm } from "../../../handlers/aircraftHandlers.js";

// shows the error text under a field if there is one
function FieldError({ message }) {
  if (!message) return null;
  return (
    <span className="aircraft-validation-error" role="alert">
      {message}
    </span>
  );
}

// this one component handles both adding and editing.
// editingId === null  -> add mode
// editingId === number -> edit mode (fills the form, saves over that aircraft)
export default function AddAircraftPage({
  draft,
  setDraft,
  editingId,
  closeForm,
  aircraft,
  addAircraft,
  editAircraft,
  validationErrors,
  setValidationErrors,
  isImageLoading,
  setIsImageLoading,
  setCurrentPage,
}) {
  const imageFileInputRef = useRef(null);
  const imageReaderRef = useRef(null);

  const isEditMode = editingId !== null;

  // one handler for every input. `name` on the input tells us which key to update,
  // so we don't need 14 separate onChange functions
  function handleFieldChange(event) {
    const { name, value, type, checked } = event.target;
    setDraft((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    // clear this field's error as soon as they start typing
    setValidationErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    // cancel whatever was still loading
    if (imageReaderRef.current?.readyState === 1) {
      imageReaderRef.current.abort();
    }

    setDraft((current) => ({ ...current, png: "" }));
    setValidationErrors((current) => ({ ...current, png: "" }));
    setIsImageLoading(false);

    const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      setValidationErrors((current) => ({
        ...current,
        png: "Choose a PNG, JPG, WebP or GIF image.",
      }));
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setValidationErrors((current) => ({
        ...current,
        png: "The image must be 5 MB or smaller.",
      }));
      event.target.value = "";
      return;
    }

    setIsImageLoading(true);
    const reader = new FileReader();
    imageReaderRef.current = reader;

    reader.onload = () => {
      // if the user picked another file while this one was loading, ignore this result
      if (imageReaderRef.current !== reader) return;
      setIsImageLoading(false);
      if (typeof reader.result === "string") {
        setDraft((current) => ({ ...current, png: reader.result }));
      } else {
        setValidationErrors((current) => ({
          ...current,
          png: "Could not read this image. Try another file.",
        }));
      }
    };

    reader.onerror = () => {
      if (imageReaderRef.current !== reader) return;
      setIsImageLoading(false);
      setValidationErrors((current) => ({
        ...current,
        png: "Could not read this image. Try another file.",
      }));
      if (imageFileInputRef.current) imageFileInputRef.current.value = "";
    };

    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    if (imageReaderRef.current?.readyState === 1) {
      imageReaderRef.current.abort();
    }
    imageReaderRef.current = null;
    setIsImageLoading(false);
    setDraft((current) => ({ ...current, png: "" }));
    setValidationErrors((current) => ({ ...current, png: "" }));
    if (imageFileInputRef.current) imageFileInputRef.current.value = "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    // stop here if anything is wrong. errors get shown under the fields
    const errors = validateAircraftForm(draft, isImageLoading);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    if (isEditMode) {
      // keep the same id, replace the rest
      editAircraft({ ...draft, id: editingId });
    } else {
      // new aircraft. next free id = highest existing + 1
      const nextId = aircraft.reduce((max, a) => Math.max(max, a.id), 0) + 1;
      addAircraft({
        ...draft,
        id: nextId,
        engines: Number(draft.engines),
        maxSpeed: Number(draft.maxSpeed),
        birthDate: Number(draft.birthDate),
        likes: [],
      });
    }

    closeForm();
    setCurrentPage("aircraft");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="add-aircraft-h1">
        <div id="add-aircraft-title">
          {isEditMode ? "Edit Aircraft" : "Add Aircraft"}
        </div>
        <div id="add-aircraft-description">
          {isEditMode
            ? "Change what you want, then save."
            : "Fill in the details to add a new aircraft to the hangar."}
        </div>
      </div>

      <div id="add-aircraft-form-details-container">
        {/* -------------------- LEFT COLUMN -------------------- */}
        <div id="aircraft-details-left-container">
          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="aircraft-detail-input"
              type="text"
              placeholder="F-16"
              value={draft.name}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.name} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="nickname">
              Nickname
            </label>
            <input
              id="nickname"
              name="nickname"
              className="aircraft-detail-input"
              type="text"
              placeholder="Fighting Falcon"
              value={draft.nickname}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.nickname} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="manufacturer">
              Manufacturer
            </label>
            <input
              id="manufacturer"
              name="manufacturer"
              className="aircraft-detail-input"
              type="text"
              placeholder="Lockheed Martin"
              value={draft.manufacturer}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.manufacturer} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="aircraft-detail-input"
              value={draft.country}
              onChange={handleFieldChange}
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
            <FieldError message={validationErrors.country} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="aircraft-detail-input"
              value={draft.role}
              onChange={handleFieldChange}
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
            <FieldError message={validationErrors.role} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="aircraftType">
              Aircraft Type
            </label>
            <select
              id="aircraftType"
              name="aircraftType"
              className="aircraft-detail-input"
              value={draft.aircraftType}
              onChange={handleFieldChange}
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
            <FieldError message={validationErrors.aircraftType} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="birthDate">
              First Flight (Year)
            </label>
            <input
              id="birthDate"
              name="birthDate"
              className="aircraft-detail-input"
              type="number"
              min="1903"
              max={new Date().getFullYear()}
              value={draft.birthDate}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.birthDate} />
          </div>
        </div>

        {/* -------------------- RIGHT COLUMN -------------------- */}
        <div id="aircraft-details-right-container">
          {/* status is a radio group. name is the same on all of them, so only one can be checked */}
          <div className="aircraft-detail-field" id="aircraft-status-field">
            <label className="aircraft-detail-label">Status</label>
            <div id="aircraft-status" className="aircraft-detail-radio-input">
              {[
                "Active",
                "Retired",
                "Prototype",
                "Experimental",
                "Under Development",
                "Cancelled",
              ].map((option) => (
                <label key={option} className="aircraft-status-radio-input">
                  <input
                    type="radio"
                    name="status"
                    value={option}
                    className="input-radio-button-aircraft-status"
                    checked={draft.status === option}
                    onChange={handleFieldChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <FieldError message={validationErrors.status} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="engineType">
              Engine Type
            </label>
            <select
              id="engineType"
              name="engineType"
              className="aircraft-detail-input"
              value={draft.engineType}
              onChange={handleFieldChange}
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
            <FieldError message={validationErrors.engineType} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="engines">
              Number of Engines
            </label>
            <input
              id="engines"
              name="engines"
              className="aircraft-detail-input"
              type="number"
              min="0"
              max="12"
              value={draft.engines}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.engines} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="maxSpeed">
              Max Speed (km/h)
            </label>
            <input
              id="maxSpeed"
              name="maxSpeed"
              className="aircraft-detail-input"
              type="number"
              min="1"
              max="10000"
              value={draft.maxSpeed}
              onChange={handleFieldChange}
            />
            <FieldError message={validationErrors.maxSpeed} />
          </div>

          <div className="aircraft-detail-field">
            <label className="aircraft-detail-label" htmlFor="stealth">
              Stealth
            </label>
            <label id="aircraft-stealth-container">
              <input
                id="stealth"
                name="stealth"
                type="checkbox"
                checked={draft.stealth}
                onChange={handleFieldChange}
              />
              Stealth Aircraft
            </label>
          </div>
        </div>
      </div>

      {/* -------------------- IMAGE -------------------- */}
      <div id="add-aircraft-form-image-container">
        <div className="aircraft-detail-field">
          <label className="aircraft-detail-label" htmlFor="aircraft-image">
            Aircraft Image
          </label>
          <p className="aircraft-image-help">
            Choose a PNG, JPG, WebP or GIF file (maximum 5 MB).
          </p>
          <input
            id="aircraft-image"
            className="aircraft-image-input"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            ref={imageFileInputRef}
            onChange={handleImageChange}
          />
          <FieldError message={validationErrors.png} />
          {isImageLoading && (
            <p className="aircraft-image-loading" role="status">
              Loading image...
            </p>
          )}
          {draft.png && !isImageLoading && (
            <div className="aircraft-image-preview-container">
              <img
                src={draft.png}
                alt="Aircraft preview"
                className="aircraft-image-preview"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="aircraft-remove-image-button"
              >
                Remove image
              </button>
            </div>
          )}
        </div>
      </div>

      {/* -------------------- SUBMIT -------------------- */}
      <div id="add-aircraft-form-button-container">
        <button type="submit" disabled={isImageLoading}>
          {isEditMode ? "Save Changes" : "Add Aircraft"}
        </button>
      </div>
    </form>
  );
}
