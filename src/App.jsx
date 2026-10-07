import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import { jets } from "./data/LayoutData.js";
import LoginPage from "./components/JSX/LoginPage.jsx";
import "./components/CSS/Main.css";
import "./components/CSS/Header.css";
import "./components/CSS/Profile.css";
import "./components/CSS/Aircraft.css";
import "./components/CSS/Login.css";
import "./components/CSS/ProfilePages.css";
import "./components/CSS/AddAircraft.css";

export default function App() {
  const [currentOpenAircraftHero, setCurrentOpenAircraftHero] = useState(0);
  const [currentActivePage, setCurrentActivePage] = useState("add-aircraft");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");
  const [currentProfilePage, setCurrentProfilePage] = useState("1");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [currentLikeColor, setCurrentLikeColor] = useState("#ffffff");
  const [likedList, setLikedList] = useState([]);
  const [aircraft, setAircraft] = useState(jets);
  const [newAircraftList, setNewAircraftList] = useState([]);

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

  function addAircraft(newAircraft) {
    setAircraft((currentAircraft) => [...currentAircraft, newAircraft]);
    setNewAircraftList((currentNewAircraftList) => {
      const updatedAircraftList = [...currentNewAircraftList, newAircraft];
      return updatedAircraftList;
    });
  }

  function editAircraft(editedAircraft) {
    setAircraft((currentAircraft) =>
      currentAircraft.map((jet) =>
        jet.id === editedAircraft.id ? editedAircraft : jet,
      ),
    );

    setNewAircraftList((currentNewAircraftList) =>
      currentNewAircraftList.map((jet) =>
        jet.id === editedAircraft.id ? editedAircraft : jet,
      ),
    );
  }

  function deleteAircraft(id) {
    setAircraft((currentAircraft) =>
      currentAircraft.filter((jet) => jet.id !== id),
    );

    setLikedList((currentLikedList) =>
      currentLikedList.filter((jetId) => jetId !== id),
    );

    setNewAircraftList((currentNewAircraftList) =>
      currentNewAircraftList.filter((jet) => jet.id !== id),
    );
  }

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
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
        )}
      </div>
    </>
  );
}
