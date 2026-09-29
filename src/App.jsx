import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import LoginPage from "./components/JSX/LoginPage.jsx";

export default function App() {
  const [currentActivePage, setCurrentActivePage] = useState("profile");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [currentProfilePage, setCurrentProfilePage] = useState("1");

  return (
    <>
      <div className={!isUserLoggedIn ? `logged-out ` : `App `}>
        {isUserLoggedIn ? (
          <>
            <Header
              currentPage={currentActivePage}
              setCurrentPage={setCurrentActivePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />
            <Main
              currentPage={currentActivePage}
              currentProfilePage={currentProfilePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
        )}
      </div>
    </>
  );
}
