import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Leaderboards from "./pages/Leaderboards";
import {
  faHouse,
  faHeadset,
  faTrophy,
  faBell,
  faUserFriends,
  faGear,
  faStar,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function App() {
  const links = {
    Home: "/",
    Games: "/games",
    Leaderboards: "/leaderboards",
    Friends: "/friends",
    Reviews: "/reviews",
    Guides: "/guides",
    Notifications: "/notifications",
    Settings: "/settings",
  };
  const icons = {
    Home: faHouse,
    Games: faHeadset,
    Leaderboards: faTrophy,
    Friends: faUserFriends,
    Reviews: faStar,
    Guides: faBook,
    Notifications: faBell,
    Settings: faGear,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home links={links} icons={icons} />} />
        <Route path="/games" element={<Games links={links} icons={icons} />} />
        <Route
          path="/leaderboards"
          element={<Leaderboards links={links} icons={icons} />}
        />
      </Routes>
    </Router>
  );
}
