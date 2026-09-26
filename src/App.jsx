import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { useState } from "react";
import LoginPage from "./components/LoginPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("aircraft");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className={!isLoggedIn ? `logged-out` : "App"}>
        {isLoggedIn ? (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main currentPage={currentPage} />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}
