import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import LoginPage from "./components/JSX/LoginPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentProfilePage, setCurrentProfilePage] = useState("1");

  return (
    <>
      <div className={!isLoggedIn ? `logged-out ` : `App `}>
        {isLoggedIn ? (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main
              currentPage={currentPage}
              currentProfilePage={currentProfilePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}
