const express = require("express");
require("./db/mongoose");
const Place = require("./models/place");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post("/places", (req, res) => {
  const place = new Place(req.body);

  place
    .save()
    .then(() => {
      res.status(200).send(place);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
