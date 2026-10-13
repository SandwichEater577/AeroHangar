import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import LoginPage from "./components/JSX/LoginPage.jsx";
import { useState } from "react";
import { jets } from "./data/LayoutData.js";
import { createAircraftStateHandlers } from "./handlers/aircraftHandlers.js";

import "./components/CSS/Main.css";
import "./components/CSS/Header.css";
import "./components/CSS/Profile.css";
import "./components/CSS/Aircraft.css";
import "./components/CSS/Login.css";
import "./components/CSS/ProfilePages.css";
import "./components/CSS/AddAircraft.css";

// blank form. used to reset after add, and as the starting point in add mode
const EMPTY_AIRCRAFT = {
  name: "",
  nickname: "",
  manufacturer: "",
  country: "",
  role: "",
  aircraftType: "",
  birthDate: "",
  status: "",
  engineType: "",
  engines: "",
  maxSpeed: "",
  stealth: false,
  png: "",
};

export default function App() {
  // false = show login, true = show the app
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // "aircraft" | "about" | "add-aircraft" | "profile"
  const [currentActivePage, setCurrentActivePage] = useState("aircraft");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");
  const [currentProfilePage, setCurrentProfilePage] = useState("1");

  // id of the aircraft whose big overlay is open. null = none
  // (was 0 before but 0 could be a real id, so null is safer)
  const [currentOpenAircraftHero, setCurrentOpenAircraftHero] = useState(null);

  // all aircraft. starts with the sample jets
  const [aircraft, setAircraft] = useState(jets);
  // only the ones the user added themselves
  const [newAircraftList, setNewAircraftList] = useState([]);
  // ids of liked aircraft
  const [likedList, setLikedList] = useState([]);
  const [currentLikeColor, setCurrentLikeColor] = useState("#ffffff");

  // search + filters + sort
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [stealth, setStealth] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  // form fields live in one object. this is the trick that lets add and edit
  // share the same form — the inputs just read/write keys on this object
  const [draft, setDraft] = useState(EMPTY_AIRCRAFT);

  // null = adding. a number = editing the aircraft with that id
  const [editingId, setEditingId] = useState(null);

  // field name -> error message. empty object = no errors
  const [validationErrors, setValidationErrors] = useState({});
  const [isImageLoading, setIsImageLoading] = useState(false);

  // id of the aircraft with a delete dialog open. null = no dialog
  const [activeDeleteAircraftId, setActiveDeleteAircraftId] = useState(null);

  const [showStats, setShowStats] = useState(false);

  // these three update the aircraft list. they come from the handlers file
  const { addAircraft, editAircraft, deleteAircraft } =
    createAircraftStateHandlers({
      setAircraft,
      setNewAircraftList,
      setLikedList,
    });

  // called from profile when the user clicks Edit on one of their aircraft.
  // fills the form with that aircraft and switches to the add-aircraft page,
  // which now acts as the edit page too
  function openEditForm(aircraftToEdit) {
    setDraft({ ...EMPTY_AIRCRAFT, ...aircraftToEdit });
    setEditingId(aircraftToEdit.id);
    setValidationErrors({});
    setCurrentActivePage("add-aircraft");
  }

  // clears the form. called after a successful add or edit
  function closeForm() {
    setDraft(EMPTY_AIRCRAFT);
    setEditingId(null);
    setValidationErrors({});
    setIsImageLoading(false);
  }

  return (
    <div className={isUserLoggedIn ? "App" : "logged-out"}>
      {isUserLoggedIn ? (
        <>
          <Header
            currentPage={currentActivePage}
            setCurrentPage={setCurrentActivePage}
            setCurrentProfilePage={setCurrentProfilePage}
          />
          <Main
            aircraft={aircraft}
            newAircraftList={newAircraftList}
            setNewAircraftList={setNewAircraftList}
            likedList={likedList}
            setLikedList={setLikedList}
            addAircraft={addAircraft}
            editAircraft={editAircraft}
            deleteAircraft={deleteAircraft}
            currentPage={currentActivePage}
            setCurrentPage={setCurrentActivePage}
            currentOpenAircraftHero={currentOpenAircraftHero}
            setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
            currentAircraftPage={currentAircraftPage}
            setCurrentAircraftPage={setCurrentAircraftPage}
            currentProfilePage={currentProfilePage}
            setCurrentProfilePage={setCurrentProfilePage}
            currentLikeColor={currentLikeColor}
            setCurrentLikeColor={setCurrentLikeColor}
            search={search}
            setSearch={setSearch}
            country={country}
            setCountry={setCountry}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
            stealth={stealth}
            setStealth={setStealth}
            sortBy={sortBy}
            setSortBy={setSortBy}
            draft={draft}
            setDraft={setDraft}
            editingId={editingId}
            openEditForm={openEditForm}
            closeForm={closeForm}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
            isImageLoading={isImageLoading}
            setIsImageLoading={setIsImageLoading}
            activeDeleteAircraftId={activeDeleteAircraftId}
            setActiveDeleteAircraftId={setActiveDeleteAircraftId}
            showStats={showStats}
            setShowStats={setShowStats}
          />
        </>
      ) : (
        <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
      )}
    </div>
  );
}
