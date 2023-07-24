import express from "express";

const router = express.Router();

import getCharById from "../controllers/getCharById.js";

import login from "../controllers/login.js";

import {postFav,deleteFav,deleteAllFavorites,} from "../controllers/handleFavorites.js";

//Routes
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav", deleteAllFavorites);

export default router;
