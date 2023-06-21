const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const id = req.params.id; // Obtener el ID de los parámetros de la solicitud
  console.log("estan usando el getCharById")
  axios
    .get(`${URL}${id}`)
    .then((response) => {
      if (response.data.error) res.status(404).send("not found");

      const { id, name, status, species, gender, origin, image } =
        response.data;
      res
        .status(200)
        .json({ id, name, status, species, gender, origin, image });
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
}

module.exports = getCharById;
