import "../../CSS/ProfilePages.css";
import Dialog from "../Shared/Dialog.jsx";
import { handleAircraftLike } from "../../../handlers/aircraftHandlers.js";
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
  openEditForm,
  deleteAircraft,
  activeDeleteAircraftId,
  setActiveDeleteAircraftId,
}) {
  // this tile's dialog is open only when its id matches the active one
  const showDeleteDialog = activeDeleteAircraftId === jet.id;
  const setShowDeleteDialog = (isOpen) =>
    setActiveDeleteAircraftId(isOpen ? jet.id : null);

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
                  onClick={() => openEditForm(jet)}
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
  openEditForm,
  activeDeleteAircraftId,
  setActiveDeleteAircraftId,
}) {
  // likes are stored as ids. this turns them into the actual aircraft objects
  const likedIds = likedList.map((element) => String(element?.id ?? element));
  const likedJets = aircraft.filter((jet) => likedIds.includes(String(jet.id)));

  // small helper so we don't repeat the same map 3 times
  const renderGrid = (jets, canEdit) => (
    <div id="profile-aircraft-grid">
      {jets.map((jet) => (
        <ProfileAircraftTile
          key={jet.id}
          jet={jet}
          isLiked={likedList.includes(jet.id)}
          setLikedList={setLikedList}
          canEdit={canEdit}
          openEditForm={openEditForm}
          deleteAircraft={deleteAircraft}
          activeDeleteAircraftId={activeDeleteAircraftId}
          setActiveDeleteAircraftId={setActiveDeleteAircraftId}
        />
      ))}
    </div>
  );

  const emptyMessage = (text) => (
    <p className="profile-aircraft-empty-message">{text}</p>
  );

  if (currentProfilePage === "2") {
    // "liked" tab
    return (
      <section id="profile-aircraft-panel">
        <h2 id="profile-aircraft-title">Liked Aircraft:</h2>
        {likedJets.length > 0
          ? renderGrid(likedJets, false)
          : emptyMessage("No liked aircraft yet.")}
      </section>
    );
  }

  if (currentProfilePage === "3") {
    // "aircraft" tab — only the ones the user made
    return (
      <section id="profile-aircraft-panel">
        <h2 id="profile-aircraft-title">My Aircraft:</h2>
        {newAircraftList.length > 0
          ? renderGrid(newAircraftList, true)
          : emptyMessage("No aircraft yet.")}
      </section>
    );
  }

  if (currentProfilePage === "1") {
    // "all" tab — both lists on one page
    return (
      <>
        <section id="profile-aircraft-panel">
          <h2 id="profile-aircraft-title">My Aircraft:</h2>
          {newAircraftList.length > 0
            ? renderGrid(newAircraftList, true)
            : emptyMessage("No aircraft yet.")}
        </section>
        <section id="profile-aircraft-panel">
          <h2 id="profile-aircraft-title">Liked Aircraft:</h2>
          {likedJets.length > 0
            ? renderGrid(likedJets, false)
            : emptyMessage("No liked aircraft yet.")}
        </section>
      </>
    );
  }

  return null;
}
