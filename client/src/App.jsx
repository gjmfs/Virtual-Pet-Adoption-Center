import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Add } from "./pages/Add";
import { Update } from "./pages/Update";
import { Filter } from "./pages/Filter";

export const App = () => {
  const api = import.meta.env.VITE_API;
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home url={api} />} />
        <Route path="/profile" element={<Profile url={api} />} />
        <Route path="/add" element={<Add url={api} />} />
        <Route path="/update" element={<Update url={api} />} />
        <Route path="/filter" element={<Filter url={api} />} />
      </Routes>
    </div>
  );
};
