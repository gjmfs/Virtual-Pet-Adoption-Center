import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Add } from "./pages/Add";

export const App = () => {
  const api = import.meta.env.VITE_API;
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home url={api} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};
