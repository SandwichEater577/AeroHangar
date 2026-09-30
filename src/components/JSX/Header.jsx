import { headerLayout } from "../../data/LayoutData.js";
import HeaderButton from "./HeaderButton.jsx";
export default function Header({
  currentPage,
  setCurrentPage,
  setCurrentProfilePage,
}) {
  return (
    <>
      <header id="main-header">
        <section className="main-header-sections" id="main-header-logo-section">
          <div id="main-header-logo"> AeroHangar</div>
        </section>
        <section
          className="main-header-sections"
          id="main-header-button-section"
        >
          {headerLayout.map((element) => {
            return (
              <HeaderButton
                key={element.name}
                element={element}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setCurrentProfilePage={setCurrentProfilePage}
              />
            );
          })}
        </section>
      </header>
    </>
  );
}
