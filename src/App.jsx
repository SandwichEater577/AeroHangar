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

export default function App() {
  const [currentOpenAircraftHero, setCurrentOpenAircraftHero] = useState(0);
  const [currentActivePage, setCurrentActivePage] = useState("aircraft");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");
  const [currentProfilePage, setCurrentProfilePage] = useState("1");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentLikeColor, setCurrentLikeColor] = useState("#ffffff");
  const [likedList, setLikedList] = useState([]);

  const [aircraft, setAircraft] = useState(jets);

  function addAircraft(newAircraft) {
    setAircraft((currentAircraft) => [...currentAircraft, newAircraft]);
  }

  function editAircraft(editedAircraft) {
    setAircraft((currentAircraft) =>
      currentAircraft.map((jet) =>
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
              aircraft={aircraft}
              addAircraft={addAircraft}
              editAircraft={editAircraft}
              deleteAircraft={deleteAircraft}
              likedList={likedList}
              setLikedList={setLikedList}
              currentPage={currentActivePage}
              currentLikeColor={currentLikeColor}
              currentProfilePage={currentProfilePage}
              setCurrentLikeColor={setCurrentLikeColor}
              currentAircraftPage={currentAircraftPage}
              setCurrentProfilePage={setCurrentProfilePage}
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
