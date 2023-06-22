let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params.id;

  myFavorites = myFavorites.filter((character) => character.id !== Number(id));

  res.status(200).json(myFavorites);
};

const deleteAllFavorites = (req, res) => {
  myFavorites = [];
  res.status(200).json(myFavorites);
};
module.exports = {
  postFav,
  deleteFav,
  deleteAllFavorites,
};
