const express = require("express");

const router = express.Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {
  postFav,
  deleteFav,
  deleteAllFavorites,
} = require("../controllers/handleFavorites");

//Routes
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav", deleteAllFavorites);
router.delete("/fav/:id", deleteFav);

module.exports = router;
