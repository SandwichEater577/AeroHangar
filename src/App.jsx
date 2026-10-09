import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import { jets } from "./data/LayoutData.js";
import LoginPage from "./components/JSX/LoginPage.jsx";
import { createAircraftStateHandlers } from "./handlers/aircraftHandlers.js";
import "./components/CSS/Main.css";
import "./components/CSS/Header.css";
import "./components/CSS/Profile.css";
import "./components/CSS/Aircraft.css";
import "./components/CSS/Login.css";
import "./components/CSS/ProfilePages.css";
import "./components/CSS/AddAircraft.css";

export default function App() {
  const [currentOpenAircraftHero, setCurrentOpenAircraftHero] = useState(0);
  const [currentActivePage, setCurrentActivePage] = useState("aircraft");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");
  const [currentProfilePage, setCurrentProfilePage] = useState("1");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentLikeColor, setCurrentLikeColor] = useState("#ffffff");
  const [likedList, setLikedList] = useState([]);
  const [aircraft, setAircraft] = useState(jets);
  const [newAircraftList, setNewAircraftList] = useState([]);
  const [showStats, setShowStats] = useState(false);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [stealth, setStealth] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");
  const [validationErrors, setValidationErrors] = useState({});
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [activeDeleteAircraftId, setActiveDeleteAircraftId] = useState(null);

  // ADD AIRCRAFT INPUT STATES
  const [addAircraftNameInput, setAddAircraftNameInput] = useState("");
  const [addAircraftNicknameInput, setAddAircraftNicknameInput] = useState("");
  const [addAircraftManufacturerInput, setAddAircraftManufacturerInput] =
    useState("");
  const [addAircraftCountryInput, setAddAircraftCountryInput] = useState("");
  const [addAircraftRoleInput, setAddAircraftRoleInput] = useState("");
  const [addAircraftTypeInput, setAddAircraftTypeInput] = useState("");
  const [addAircraftFirstFlightInput, setAddAircraftFirstFlightInput] =
    useState("");
  const [addAircraftStatusInput, setAddAircraftStatusInput] = useState("");
  const [addAircraftEngineTypeInput, setAddAircraftEngineTypeInput] =
    useState("");
  const [addAircraftEngineCountInput, setAddAircraftEngineCountInput] =
    useState("");
  const [addAircraftVMAXinput, setAddAircraftVMAXInput] = useState(0);
  const [addAircraftStealthInput, setAddAircraftStealthInput] = useState(false);
  const [addAircraftImageInput, setAddAircraftImageInput] = useState("");

  const { addAircraft, editAircraft, deleteAircraft } =
    createAircraftStateHandlers({
      setAircraft,
      setNewAircraftList,
      setLikedList,
    });

  return (
    <>
      <div className={!isUserLoggedIn ? "logged-out" : "App"}>
        {isUserLoggedIn ? (
          <>
            <Header
              currentPage={currentActivePage}
              setCurrentPage={setCurrentActivePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />

            <Main
              addAircraftImageInput={addAircraftImageInput}
              setAddAircraftImageInput={setAddAircraftImageInput}
              newAircraftList={newAircraftList}
              setNewAircraftList={setNewAircraftList}
              addAircraftNameInput={addAircraftNameInput}
              setAddAircraftNameInput={setAddAircraftNameInput}
              addAircraftNicknameInput={addAircraftNicknameInput}
              setAddAircraftNicknameInput={setAddAircraftNicknameInput}
              addAircraftManufacturerInput={addAircraftManufacturerInput}
              setAddAircraftManufacturerInput={setAddAircraftManufacturerInput}
              addAircraftCountryInput={addAircraftCountryInput}
              setAddAircraftCountryInput={setAddAircraftCountryInput}
              addAircraftRoleInput={addAircraftRoleInput}
              setAddAircraftRoleInput={setAddAircraftRoleInput}
              addAircraftTypeInput={addAircraftTypeInput}
              setAddAircraftTypeInput={setAddAircraftTypeInput}
              addAircraftFirstFlightInput={addAircraftFirstFlightInput}
              setAddAircraftFirstFlightInput={setAddAircraftFirstFlightInput}
              addAircraftStatusInput={addAircraftStatusInput}
              setAddAircraftStatusInput={setAddAircraftStatusInput}
              addAircraftEngineTypeInput={addAircraftEngineTypeInput}
              setAddAircraftEngineTypeInput={setAddAircraftEngineTypeInput}
              addAircraftEngineCountInput={addAircraftEngineCountInput}
              setAddAircraftEngineCountInput={setAddAircraftEngineCountInput}
              addAircraftVMAXinput={addAircraftVMAXinput}
              setAddAircraftVMAXInput={setAddAircraftVMAXInput}
              addAircraftStealthInput={addAircraftStealthInput}
              setAddAircraftStealthInput={setAddAircraftStealthInput}
              aircraft={aircraft}
              addAircraft={addAircraft}
              editAircraft={editAircraft}
              deleteAircraft={deleteAircraft}
              likedList={likedList}
              setLikedList={setLikedList}
              currentPage={currentActivePage}
              currentLikeColor={currentLikeColor}
              setCurrentLikeColor={setCurrentLikeColor}
              currentProfilePage={currentProfilePage}
              setCurrentProfilePage={setCurrentProfilePage}
              currentAircraftPage={currentAircraftPage}
              setCurrentAircraftPage={setCurrentAircraftPage}
              currentOpenAircraftHero={currentOpenAircraftHero}
              setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
              showStats={showStats}
              setShowStats={setShowStats}
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
              validationErrors={validationErrors}
              setValidationErrors={setValidationErrors}
              isImageLoading={isImageLoading}
              setIsImageLoading={setIsImageLoading}
              activeDeleteAircraftId={activeDeleteAircraftId}
              setActiveDeleteAircraftId={setActiveDeleteAircraftId}
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
        )}
      </div>
    </>
  );
}
