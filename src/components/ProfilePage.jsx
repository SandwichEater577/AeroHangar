import { AeroHangarProfile, users } from "../data/LayoutData.js";

export default function ProfilePage() {
  const user = users[0] ?? {};
  const username = user.username || "Guest User";

  return (
    <div id="profile-page">
      <section id="first-user-layer" aria-labelledby="profile-name">
        <article id="profile-card" className="first-user-layer-content">
          <div id="profile-image">
            <img src={AeroHangarProfile} alt={`${username}'s profile`} />
          </div>
          <div className="profile-summary">
            <h1 id="profile-name">{username}</h1>
            <p>Manage your account details</p>
          </div>
        </article>

        <section
          id="account-info"
          className="first-user-layer-content"
          aria-labelledby="account-info-heading"
        >
          <h2 id="account-info-heading">Account information</h2>
          <dl id="account-info-card">
            <div className="account-info-card-row">
              <dt>Username</dt>
              <dd>{user.username}</dd>
            </div>
            <div className="account-info-card-row">
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div className="account-info-card-row">
              <dt>Password</dt>
              <dd aria-label="Password hidden">••••••••</dd>
            </div>
          </dl>
        </section>
      </section>
    </div>
  );
}
