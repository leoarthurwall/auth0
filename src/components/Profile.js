import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
  <div className="profile-container">
    <p>Email: {user.email}</p>
    <h2>Hi, {user.given_name} {user.family_name}</h2>
    <img src={user.picture} alt={user.name}/>

    {/* {JSON.stringify(user, null, 2)} */}
  </div>
  ))
};

export default Profile;
