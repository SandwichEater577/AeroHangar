import "../../CSS/ProfilePages.css";
import Dialog from "../Shared/Dialog.jsx";
import {
  handleAircraftLike,
  handleEditAircraft,
} from "../../../handlers/aircraftHandlers.js";
import {
  openDialog,
  closeDialog,
  confirmDeleteAircraft,
} from "../../../handlers/dialogHandlers.js";

function ProfileAircraftTile({
  jet,
  isLiked,
  setLikedList,
  canEdit,
  editAircraft,
  deleteAircraft,
  activeDeleteAircraftId,
  setActiveDeleteAircraftId,
}) {
  const setShowDeleteDialog = (isOpen) =>
    setActiveDeleteAircraftId(isOpen ? jet.id : null);
  const showDeleteDialog = activeDeleteAircraftId === jet.id;

  return (
    <>
      <article
        className="profile-aircraft-tile"
        style={{ backgroundImage: `url(${jet.png})` }}
      >
        <div className="profile-aircraft-heading">
          <h3 className="profile-aircraft-name">{jet.name}</h3>
          <p className="profile-aircraft-alias">{`Aka: "${jet.nickname}"`}</p>

          <div className="profile-aircraft-actions">
            <button
              type="button"
              className="profile-aircraft-action-button"
              aria-pressed={isLiked}
              onClick={(event) =>
                handleAircraftLike(event, jet.id, isLiked, setLikedList)
              }
            >
              {isLiked ? "Unlike" : "Like"}
            </button>

            {canEdit && (
              <>
                <button
                  type="button"
                  className="profile-aircraft-action-button"
                  onClick={() => handleEditAircraft(jet, editAircraft)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="profile-aircraft-action-button profile-aircraft-delete-button"
                  onClick={() => openDialog(setShowDeleteDialog)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </article>

      <Dialog
        open={showDeleteDialog}
        title={`Delete ${jet.name}?`}
        onClose={() => closeDialog(setShowDeleteDialog)}
        onConfirm={() =>
          confirmDeleteAircraft(jet.id, deleteAircraft, setShowDeleteDialog)
        }
        confirmText="Delete"
      >
        <p>This aircraft will be removed.</p>
      </Dialog>
    </>
  );
}

export default function ProfileMainAllPages({
  newAircraftList,
  aircraft,
  currentProfilePage,
  likedList = [],
  setLikedList,
  editAircraft,
  deleteAircraft,
  activeDeleteAircraftId,
  setActiveDeleteAircraftId,
}) {
  let profilePage;

  const likedIds = likedList.map((element) => String(element?.id ?? element));
  const likedJets = aircraft.filter((jet) => likedIds.includes(String(jet.id)));

  switch (currentProfilePage) {
    case "1":
      profilePage = (
        <>
          <section id="profile-aircraft-panel">
            <h2 id="profile-aircraft-title">My Aircraft:</h2>
            {newAircraftList.length > 0 ? (
              <div id="profile-aircraft-grid">
                {newAircraftList.map((jet) => (
                  <ProfileAircraftTile
                    key={jet.id}
                    jet={jet}
                    isLiked={likedList.includes(jet.id)}
                    setLikedList={setLikedList}
                    canEdit
                    editAircraft={editAircraft}
                    deleteAircraft={deleteAircraft}
                    activeDeleteAircraftId={activeDeleteAircraftId}
                    setActiveDeleteAircraftId={setActiveDeleteAircraftId}
                  />
                ))}
              </div>
            ) : (
              <p className="profile-aircraft-empty-message">No aircraft yet.</p>
            )}
          </section>
          <section id="profile-aircraft-panel">
            <h2 id="profile-aircraft-title">Liked Aircraft:</h2>
            {likedJets.length > 0 ? (
              <div id="profile-aircraft-grid">
                {likedJets.map((jet) => (
                  <ProfileAircraftTile
                    key={jet.id}
                    jet={jet}
                    isLiked={true}
                    setLikedList={setLikedList}
                    activeDeleteAircraftId={activeDeleteAircraftId}
                    setActiveDeleteAircraftId={setActiveDeleteAircraftId}
                  />
                ))}
              </div>
            ) : (
              <p className="profile-aircraft-empty-message">
                No liked aircraft yet.
              </p>
            )}
          </section>
        </>
      );
      break;

    case "2":
      profilePage = (
        <section id="profile-aircraft-panel">
          <h2 id="profile-aircraft-title">Liked Aircraft:</h2>
          {likedJets.length > 0 ? (
            <div id="profile-aircraft-grid">
              {likedJets.map((jet) => (
                <ProfileAircraftTile
                  key={jet.id}
                  jet={jet}
                  isLiked={true}
                  setLikedList={setLikedList}
                  activeDeleteAircraftId={activeDeleteAircraftId}
                  setActiveDeleteAircraftId={setActiveDeleteAircraftId}
                />
              ))}
            </div>
          ) : (
            <p className="profile-aircraft-empty-message">
              No liked aircraft yet.
            </p>
          )}
        </section>
      );
      break;

    case "3":
      profilePage = (
        <section id="profile-aircraft-panel">
          <h2 id="profile-aircraft-title">My Aircraft:</h2>
          {newAircraftList.length > 0 ? (
            <div id="profile-aircraft-grid">
              {newAircraftList.map((jet) => (
                <ProfileAircraftTile
                  key={jet.id}
                  jet={jet}
                  isLiked={likedList.includes(jet.id)}
                  setLikedList={setLikedList}
                  canEdit
                  editAircraft={editAircraft}
                  deleteAircraft={deleteAircraft}
                  activeDeleteAircraftId={activeDeleteAircraftId}
                  setActiveDeleteAircraftId={setActiveDeleteAircraftId}
                />
              ))}
            </div>
          ) : (
            <p className="profile-aircraft-empty-message">No aircraft yet.</p>
          )}
        </section>
      );
      break;

    default:
      profilePage = null;
  }

  return <>{profilePage}</>;
}
