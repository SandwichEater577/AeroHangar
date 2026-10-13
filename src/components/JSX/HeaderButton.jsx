import { handleHeaderNavigation } from "../../handlers/aircraftHandlers.js";

export default function HeaderButton({
  element,
  currentPage,
  setCurrentPage,
  setCurrentProfilePage,
}) {
  const isActive = currentPage === element.name;

  return (
    <button
      type="button"
      className={`main-header-button ${isActive ? "active-page-button" : ""}`}
      id={`main-header-${element.name}`}
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
