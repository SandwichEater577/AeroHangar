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
      onClick={() => {
        if (currentPage === "profile" && element.name !== "profile") {
          setCurrentProfilePage("1");
          setCurrentPage(element.name);
        } else if (currentPage !== element.name) {
          setCurrentPage(element.name);
        }
      }}
    >
      {element.text}
    </button>
  );
}
