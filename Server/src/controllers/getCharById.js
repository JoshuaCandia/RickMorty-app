const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`); //Destructuring de response
    const { name, status, species, gender, origin, image } = data;

    res
      .status(200)
      .json({ id: data.id, name, status, species, gender, origin, image });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCharById;
