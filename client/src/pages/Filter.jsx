import { useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";

export const Filter = ({ url }) => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Filter by Pet Mood");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log("Selected Value:", e.target.value);
    console.log("Type of Selected Value:", typeof e.target.value);
  };

  const handleCheck = () => {
    setLoading(true);
    setError(null);
    axios
      .get(`${url}pets/filter`, {
        params: {
          mood: selectedValue === "Filter by Pet Mood" ? null : selectedValue,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log("API Response:", response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error("Error fetching filtered pets:", err);
        setLoading(false);
      });
  };

  const show = data.map((card) => <Card key={card._id} card={card} />);

  return (
    <div className="Filter container">
      <form onSubmit={(e) => e.preventDefault()}>
        <select
          className="form-select mt-4 mb-4"
          aria-label="Filter by Pet Mood"
          value={selectedValue}
          onChange={handleChange}
        >
          <option defaultValue>Filter by Pet Mood</option>
          <option value="happy">Happy</option>
          <option value="excited">Excited</option>
          <option value="sad">Sad</option>
        </select>
        <button
          type="button"
          value="check"
          className="btn btn btn-outline-info"
          onClick={handleCheck}
          disabled={loading}
        >
          {loading ? "Filtering..." : "Filter"}
        </button>
      </form>
      <div className="container mt-3">
        {loading && <p>Loading filtered pets...</p>}
        {error && <p className="text-danger">Error: {error.message}</p>}
        {data && data.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {show}
          </div>
        ) : (
          !loading && !error && <p>No pets found with the selected mood.</p>
        )}
      </div>
    </div>
  );
};
