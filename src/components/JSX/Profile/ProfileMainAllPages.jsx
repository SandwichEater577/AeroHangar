import { jets } from "../../../data/LayoutData.js";
import "../../CSS/ProfilePages.css";

export default function ProfileMainAllPages({
  currentProfilePage,
  likedList = [],
}) {
  let profilePage;

  const likedIds = likedList.map((element) => String(element?.id ?? element));

  const likedJets = jets.filter((jet) => likedIds.includes(String(jet.id)));

  switch (currentProfilePage) {
    case "1":
      profilePage = <div id="profile-page-all">All</div>;
      break;

    case "2":
      profilePage = (
        <section id="profile-aircraft-panel">
          <h2 id="profile-aircraft-title">Liked Aircraft:</h2>

          {likedJets.length > 0 ? (
            <div id="profile-aircraft-grid">
              {likedJets.map((jet) => (
                <article
                  className="profile-aircraft-tile"
                  key={jet.id}
                  style={{
                    backgroundImage: `url(${jet.png})`,
                  }}
                >
                  <div className="profile-aircraft-heading">
                    <h3 className="profile-aircraft-name">{jet.name}</h3>

                    <p className="profile-aircraft-alias">
                      {`Aka: "${jet.nickname}"`}
                    </p>
                  </div>
                </article>
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
      profilePage = <div id="profile-page-3">Page 3</div>;
      break;

    default:
      profilePage = null;
  }

  return <>{profilePage}</>;
}
