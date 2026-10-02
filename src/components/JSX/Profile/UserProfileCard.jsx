import { user } from "../../../data/LayoutData.js";

export default function UserProfileCard() {
  return (
    <>
      <div id="user-profile-header-top">
        <div id="profile-pic-container">
          <img
            src={user.pfp}
            alt="Profile Picture"
            id="profile-pic-at-profile"
          />
        </div>
        <div id="profile-actions-container">
          <div id="profile-user-name">{user.name}</div>
          <div id="profile-user-friends">
            {user.friends?.length > 0 ? (
              <img
                id="friend-pic-at-profile"
                src={user.friends[0]?.pfp}
                alt="Friend's Picture"
              />
            ) : null}
            {`${user.friends?.length || 0} `}
            {user.friends?.length === 1 ? "Friend" : "Friends"}
          </div>
        </div>
      </div>
    </>
  );
}
