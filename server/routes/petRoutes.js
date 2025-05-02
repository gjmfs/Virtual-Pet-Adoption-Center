const express = require("express");

const petRouter = express.Router();

/* importing controllers */
const {
  addPet,
  viewAll,
  aPet,
  updatePet,
  adopt,
  removePet,
  filterPet,
} = require("../controllers/petController");

petRouter.post("/", addPet);
petRouter.get("/", viewAll);
petRouter.get("/filter", filterPet);
petRouter.get("/:id", aPet);
petRouter.put("/:id", updatePet);
petRouter.patch("/:id/adopt", adopt);
petRouter.delete("/:id", removePet);

module.exports = petRouter;
