const { Router } = require("express");
const router = Router();
const {
  getpeliculas,
  createpelicula,
  updatepelicula,
  deletepelicula,
} = require("../controllers/movies.controllers");
//READ
router.get("/", getpeliculas);
//CREATE
router.post("/", createpelicula);
//UPDATE
router.put("/:id", updatepelicula);
//DELETE
router.delete("/:id", deletepelicula);

module.exports = router;
