export default function HeaderButton({ element, currentPage, setCurrentPage }) {
  return (
    <button
      className={`main-header-button ${currentPage === element.name ? "active-page-button" : ""}`}
      id={`main-header-${element.name}`}
      key={element.name}
      onClick={() =>
        currentPage !== element.name && setCurrentPage(element.name)
      }
    >
      {element.text}
    </button>
  );
}
