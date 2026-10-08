import { handleHeaderNavigation } from "../../handlers/aircraftHandlers.js";

export default function HeaderButton({
  element,
  currentPage,
  setCurrentPage,
  setCurrentProfilePage,
}) {
  return (
    <button
      className={`main-header-button ${currentPage === element.name ? "active-page-button" : ""}`}
      id={`main-header-${element.name}`}
      key={element.name}
      onClick={() =>
        handleHeaderNavigation(
          element.name,
          currentPage,
          setCurrentPage,
          setCurrentProfilePage,
        )
      }
    >
      {element.text}
    </button>
  );
}
