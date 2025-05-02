const pet = require("../models/petModel");
const moment = require("moment");
/* calculate Mood */
const calculateMood = (createdAt) => {
  const now = moment();
  const created = moment(createdAt);
  const diffDays = now.diff(created, "days");

  if (diffDays < 1) {
    return "Happy";
  } else if (diffDays >= 1 && diffDays <= 3) {
    return "Excited";
  } else {
    return "Sad";
  }
};

/* Add a new pet */
const addPet = async (req, res) => {
  console.log("Request body :", req.body);
  const check = await pet.create(req.body);
  console.log("Response body:", check);
  res.json(check);
};

// /* View All pets */
// const viewAll = async (req, res) => {
//   await pet.find().then((data) => res.json(data));
// };

// /* view a single pet */
// const aPet = async (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   await pet.findOne({ _id: id }).then((data) => res.json(data));
// };

const viewAll = async (req, res) => {
  try {
    const pets = await pet.find();
    const petsWithDynamicMood = pets.map((pet) => ({
      ...pet.toObject(),
      mood: calculateMood(pet.createdAt),
    }));
    res.json(petsWithDynamicMood);
  } catch (error) {
    console.error("Error viewing all pets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* view a single pet */
const aPet = async (req, res) => {
  try {
    const id = req.params.id;
    const petData = await pet.findById(id);
    if (!petData) {
      return res.status(404).json({ message: "Pet not found" });
    }
    const petWithDynamicMood = {
      ...petData.toObject(),
      mood: calculateMood(petData.createdAt),
    };
    res.json(petWithDynamicMood);
  } catch (error) {
    console.error("Error viewing pet:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* update a pet details */
const updatePet = async (req, res) => {
  const petId = req.params.id;
  console.log(petId);
  const oldData = await pet.findOne({ _id: petId });
  console.log(oldData);
  const request = req.body;
  const newData = {
    name: request.name || oldData.name,
    species: request.species || oldData.species,
    age: request.age || oldData.age,
    personality: request.personality || oldData.personality,
  };
  pet
    .findByIdAndUpdate(petId, newData, {
      new: true,
      runValidators: true,
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

/* adopt a pet */
const adopt = async (req, res) => {
  const petId = req.params.id;
  console.log("petID : ", petId);
  await pet
    .findByIdAndUpdate(
      petId,
      {
        adopted: true,
        adoption_date: new Date(),
      },
      { new: true, runValidators: true }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

/* delete a pet */
const removePet = async (req, res) => {
  const petId = req.params.id;
  await pet
    .findByIdAndDelete(petId)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

/* filter by mood */
const filterPet = async (req, res) => {
  const mood = req.query.mood;
  await pet
    .find({ mood: mood })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

/* exporting all the controller functions */
module.exports = {
  addPet,
  viewAll,
  aPet,
  updatePet,
  adopt,
  removePet,
  filterPet,
};
