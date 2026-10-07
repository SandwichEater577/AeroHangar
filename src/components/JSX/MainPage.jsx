import AircraftPage from "./Aircraft/AircraftPage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import AddAircraftPage from "./AddAircraft/AddAircraftPage.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import { Fragment } from "react";
import AircraftHero from "./Aircraft/AircraftHero.jsx";

export default function Main({
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
}) {
  function handleAircraftHeroRequest(id, array) {
    return array.find((element) => element.id === id);
  }

  const currentOpenAircraftHeroData = handleAircraftHeroRequest(
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
          />,
        ],
        ["about", <AboutPage likedList={likedList} />],
        [
          "add-aircraft",
          <AddAircraftPage
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
          />,
        ],
        [
          "profile",
          <ProfilePage
            newAircraftList={newAircraftList}
            setNewAircraftList={setNewAircraftList}
            aircraft={aircraft}
            likedList={likedList}
            currentProfilePage={currentProfilePage}
            setCurrentProfilePage={setCurrentProfilePage}
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
