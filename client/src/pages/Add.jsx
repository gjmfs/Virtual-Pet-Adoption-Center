import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const Add = ({ url }) => {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();
  const [personality, setPersonality] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}pets`, { name, species, age, personality })
      .then((data) => {
        console.log(data);
        toast("Pet Add Successfully!");
      });

    setName("");
    setSpecies("");
    setAge("");
    setPersonality("");
  };
  return (
    <div className="Add container">
      <ToastContainer />
      <h2>Add a Pet</h2>
      <form action="" method="post" className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="name"
            placeholder="Pet Name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="species" className="form-label">
            Species:
          </label>
          <input
            value={species}
            type="text"
            className="form-control"
            id="species"
            placeholder="Pet's Species(Dog,Cat)"
            onChange={(e) => setSpecies(e.target.value)}
          />
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            value={age}
            type="text"
            className="form-control"
            id="age"
            placeholder="Pet's Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="personality" className="form-label">
            personality:
          </label>
          <input
            value={personality}
            type="text"
            className="form-control"
            id="personality"
            placeholder="Pet's Personlaity(shy,Friendly )"
            onChange={(e) => setPersonality(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
