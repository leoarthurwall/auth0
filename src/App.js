import "./index.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div className="loading">Loading...</div>
  return (
    <div className="app-container">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
