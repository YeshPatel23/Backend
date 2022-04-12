const express = require("express");
require("./db/mongoose");
const Place = require("./models/place");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// app.post("/places", (req, res) => {
//   const place = new Place(req.body);

//   place
//     .save()
//     .then(() => {
//       res.status(200).send(place);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

app.post("/places", async (req, res) => {
  const place = new Place(req.body);

  try {
    await place.save();
    res.status(201).send(place);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/places", async (req, res) => {
  try {
    const places = await Place.find({});
    res.send(places);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/places/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const place = await Place.findById(_id);
    if (!place) {
      return res.status(404).send();
    }
    res.send(place);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get("/places", (req, res) => {
//   Place.find({})
//     .then((places) => {
//       res.send(places);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/places/:id", (req, res) => {
//   const _id = req.params.id;

//   Place.findById(_id)
//     .then((place) => {
//       if (!place) {
//         return res.status(404).send();
//       }

//       res.send(place);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/users", (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get("/users", (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   const _id = req.params.id;

//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

app.listen(port, () => {
  console.log("server is running on port " + port);
});
