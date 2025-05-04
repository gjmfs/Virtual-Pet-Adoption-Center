import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Update = ({ url }) => {
  const [data, setData] = useState({
    name: "",
    species: "",
    age: "",
    personality: "",
  });
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedPet = sessionStorage.getItem("pet");
    if (storedPet) {
      const parsedData = JSON.parse(storedPet);
      setData(parsedData);
      setName(parsedData.name || "");
      setSpecies(parsedData.species || "");
      setAge(parsedData.age ? parsedData.age.toString() : "");
      setPersonality(parsedData.personality || "");
    } else {
      setError("No pet data found in session storage.");
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}pets/${data._id}`, {
        name,
        species,
        age: parseInt(age),
        personality,
      });
      console.log("Update successful:", response.data);
      sessionStorage.setItem("pet", JSON.stringify(response.data));
      toast("Pet Updated!");
    } catch (error) {
      console.error("Error updating pet:", error);
      setError("Failed to update pet. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading pet data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Update container">
      <ToastContainer />
      <h2>Update {name}</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Pet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="species" className="form-label">
            Species:
          </label>
          <input
            type="text"
            className="form-control"
            id="species"
            placeholder="Pet's Species(Dog,Cat)"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Pet's Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="personality" className="form-label">
            Personality:
          </label>
          <input
            type="text"
            className="form-control"
            id="personality"
            placeholder="Pet's Personality(shy,Friendly )"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Update Pet
        </button>
      </form>
    </div>
  );
};
