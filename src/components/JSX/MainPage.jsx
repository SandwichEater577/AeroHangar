import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";
import AircraftHero from "./Aircraft/AircraftHero.jsx";
import { findAircraftById } from "../../data/LayoutData.js";

export default function Main({
  addAircraftImageInput,
  setAddAircraftImageInput,
  newAircraftList,
  setNewAircraftList,
  addAircraftNameInput,
  setAddAircraftNameInput,
  addAircraftNicknameInput,
  setAddAircraftNicknameInput,
  addAircraftManufacturerInput,
  setAddAircraftManufacturerInput,
  addAircraftCountryInput,
  setAddAircraftCountryInput,
  addAircraftRoleInput,
  setAddAircraftRoleInput,
  addAircraftTypeInput,
  setAddAircraftTypeInput,
  addAircraftFirstFlightInput,
  setAddAircraftFirstFlightInput,
  addAircraftStatusInput,
  setAddAircraftStatusInput,
  addAircraftEngineTypeInput,
  setAddAircraftEngineTypeInput,
  addAircraftEngineCountInput,
  setAddAircraftEngineCountInput,
  addAircraftVMAXinput,
  setAddAircraftVMAXInput,
  addAircraftStealthInput,
  setAddAircraftStealthInput,
  aircraft,
  likedList,
  addAircraft,
  currentPage,
  editAircraft,
  setLikedList,
  deleteAircraft,
  currentLikeColor,
  currentProfilePage,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentProfilePage,
  setCurrentAircraftPage,
  currentOpenAircraftHero,
  setCurrentOpenAircraftHero,
  showStats,
  setShowStats,
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
  validationErrors,
  setValidationErrors,
  isImageLoading,
  setIsImageLoading,
  activeDeleteAircraftId,
  setActiveDeleteAircraftId,
}) {
  const currentOpenAircraftHeroData = findAircraftById(
    currentOpenAircraftHero,
    aircraft,
  );

  return (
    <>
      {currentOpenAircraftHero !== 0 && (
        <AircraftHero
          array={currentOpenAircraftHeroData}
          setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
        />
      )}

      {[
        [
          "aircraft",
          <AircraftPage
            aircraft={aircraft}
            deleteAircraft={deleteAircraft}
            editAircraft={editAircraft}
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
          />,
        ],
        [
          "about",
          <AboutPage showStats={showStats} setShowStats={setShowStats} />,
        ],
        [
          "add-aircraft",
          <AddAircraftPage
            addAircraftImageInput={addAircraftImageInput}
            setAddAircraftImageInput={setAddAircraftImageInput}
            aircraft={aircraft}
            addAircraft={addAircraft}
            addAircraftNameInput={addAircraftNameInput}
            setAddAircraftNameInput={setAddAircraftNameInput}
            addAircraftNicknameInput={addAircraftNicknameInput}
            setAddAircraftNicknameInput={setAddAircraftNicknameInput}
            addAircraftManufacturerInput={addAircraftManufacturerInput}
            setAddAircraftManufacturerInput={setAddAircraftManufacturerInput}
            addAircraftCountryInput={addAircraftCountryInput}
            setAddAircraftCountryInput={setAddAircraftCountryInput}
            addAircraftRoleInput={addAircraftRoleInput}
            setAddAircraftRoleInput={setAddAircraftRoleInput}
            addAircraftTypeInput={addAircraftTypeInput}
            setAddAircraftTypeInput={setAddAircraftTypeInput}
            addAircraftFirstFlightInput={addAircraftFirstFlightInput}
            setAddAircraftFirstFlightInput={setAddAircraftFirstFlightInput}
            addAircraftStatusInput={addAircraftStatusInput}
            setAddAircraftStatusInput={setAddAircraftStatusInput}
            addAircraftEngineTypeInput={addAircraftEngineTypeInput}
            setAddAircraftEngineTypeInput={setAddAircraftEngineTypeInput}
            addAircraftEngineCountInput={addAircraftEngineCountInput}
            setAddAircraftEngineCountInput={setAddAircraftEngineCountInput}
            addAircraftVMAXinput={addAircraftVMAXinput}
            setAddAircraftVMAXInput={setAddAircraftVMAXInput}
            addAircraftStealthInput={addAircraftStealthInput}
            setAddAircraftStealthInput={setAddAircraftStealthInput}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
            isImageLoading={isImageLoading}
            setIsImageLoading={setIsImageLoading}
          />,
        ],
        [
          "profile",
          <ProfilePage
            newAircraftList={newAircraftList}
            aircraft={aircraft}
            likedList={likedList}
            setLikedList={setLikedList}
            editAircraft={editAircraft}
            deleteAircraft={deleteAircraft}
            currentProfilePage={currentProfilePage}
            setCurrentProfilePage={setCurrentProfilePage}
            activeDeleteAircraftId={activeDeleteAircraftId}
            setActiveDeleteAircraftId={setActiveDeleteAircraftId}
          />,
        ],
      ].map(([page, content]) => (
        <Fragment key={page}>
          {currentPage === page && (
            <main
              className={currentOpenAircraftHero !== 0 ? "should-blur" : null}
              id={
                page === "profile"
                  ? "main-container-no-top-padding"
                  : "main-container"
              }
            >
              <div id={`main-${page}`} className="main-content">
                {content}
              </div>
            </main>
          )}
        </Fragment>
      ))}
    </>
  );
}
