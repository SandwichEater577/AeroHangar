import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AircraftHero from "./Aircraft/AircraftHero.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { findAircraftById } from "../../data/LayoutData.js";

export default function Main({
  aircraft,
  newAircraftList,
  setNewAircraftList,
  likedList,
  setLikedList,

  addAircraft,
  editAircraft,
  deleteAircraft,

  currentPage,
  setCurrentPage,
  currentOpenAircraftHero,
  setCurrentOpenAircraftHero,
  currentAircraftPage,
  setCurrentAircraftPage,
  currentProfilePage,
  setCurrentProfilePage,

  currentLikeColor,
  setCurrentLikeColor,

  search,
  setSearch,
  country,
  setCountry,
  role,
  setRole,
  status,
  setStatus,
  stealth,
  setStealth,
  sortBy,
  setSortBy,

  draft,
  setDraft,
  editingId,
  openEditForm,
  closeForm,
  validationErrors,
  setValidationErrors,
  isImageLoading,
  setIsImageLoading,

  activeDeleteAircraftId,
  setActiveDeleteAircraftId,

  showStats,
  setShowStats,
}) {
  // the full aircraft object for whichever hero is open (or undefined if none)
  const openAircraft = findAircraftById(currentOpenAircraftHero, aircraft);

  // when something is open, we blur the page behind it
  const blurClass = currentOpenAircraftHero !== null ? "should-blur" : "";

  return (
    <>
      {/* big overlay that shows one aircraft up close */}
      {currentOpenAircraftHero !== null && (
        <AircraftHero
          aircraft={openAircraft}
          setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
        />
      )}

      {currentPage === "aircraft" && (
        <main className={blurClass} id="main-container">
          <div id="main-aircraft" className="main-content">
            <AircraftPage
              aircraft={aircraft}
              likedList={likedList}
              setLikedList={setLikedList}
              currentLikeColor={currentLikeColor}
              setCurrentLikeColor={setCurrentLikeColor}
              currentAircraftPage={currentAircraftPage}
              setCurrentAircraftPage={setCurrentAircraftPage}
              setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
              search={search}
              setSearch={setSearch}
              country={country}
              setCountry={setCountry}
              role={role}
              setRole={setRole}
              status={status}
              setStatus={setStatus}
              stealth={stealth}
              setStealth={setStealth}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </main>
      )}

      {currentPage === "about" && (
        <main className={blurClass} id="main-container">
          <div id="main-about" className="main-content">
            <AboutPage showStats={showStats} setShowStats={setShowStats} />
          </div>
        </main>
      )}

      {currentPage === "add-aircraft" && (
        <main className={blurClass} id="main-container">
          <div id="main-add-aircraft" className="main-content">
            <AddAircraftPage
              draft={draft}
              setDraft={setDraft}
              editingId={editingId}
              closeForm={closeForm}
              aircraft={aircraft}
              addAircraft={addAircraft}
              editAircraft={editAircraft}
              validationErrors={validationErrors}
              setValidationErrors={setValidationErrors}
              isImageLoading={isImageLoading}
              setIsImageLoading={setIsImageLoading}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </main>
      )}

      {currentPage === "profile" && (
        <main className={blurClass} id="main-container-no-top-padding">
          <div id="main-profile" className="main-content">
            <ProfilePage
              newAircraftList={newAircraftList}
              aircraft={aircraft}
              likedList={likedList}
              setLikedList={setLikedList}
              deleteAircraft={deleteAircraft}
              openEditForm={openEditForm}
              currentProfilePage={currentProfilePage}
              setCurrentProfilePage={setCurrentProfilePage}
              activeDeleteAircraftId={activeDeleteAircraftId}
              setActiveDeleteAircraftId={setActiveDeleteAircraftId}
            />
          </div>
        </main>
      )}
    </>
  );
}
