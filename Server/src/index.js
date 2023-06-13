const http = require("http");

const data = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").at(-1);

      res.writeHead(200, { "Content-Type": "application/json" });
      let character = data.find((el) => el.id === Number(id));

      return res.end(JSON.stringify(character));
    }

    res.end("Error");
  })
  .listen(3001, "localhost");
