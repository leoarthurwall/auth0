import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login-container">
        <h1 className="welcome">Welcome</h1>
        <p>Log in to see your profile details...</p>
        <button className="button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    )
  );
};

export default LoginButton;
