const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;


const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

// Data from https://www.uncommongoods.com/fun/by-interest/geek-gifts

let items = [
  {id: 0, name: 'Total Eclipse of the Heart', artist: 'Bonnie Tyler', mood: 'sad', tempo: '60', accoustic: 'no'},
  {id: 0, name: 'Stayin\' Alive', artist: 'The Bee Gees', mood: 'happy', tempo: '104', accoustic: 'no'},
  {id: 0, name: 'Body Beautiful', artist: 'Salt n Pepa', mood: 'happy', tempo: '102', accoustic: 'no'}
]

server.get("/items", (req, res) => {
  res.json(items);
});
let itemId = 12;

server.get("/itemById/:id", (req, res) => {
  const { name } = req.params;
  const findItemById = item => {
    return item.name == name;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError("No Item found by that ID", res);
  } else {
    res.json(foundItem);
  }
});

// server.post("/items", (req, res) => {
//   const { name, artist, mood, tempo, acoustic } = req.body;
//   const newItem = { name, artist, mood, tempo, acoustic, id: itemId };
//   if (!name || !artist) {
//     return sendUserError(
//       "Ya gone did goofed! Name/Price/Description are all required to create an item in the item DB.",
//       res
//     );
//   }
//   const findItemByName = item => {
//     return item.name === name;
//   };
//   if (items.find(findItemByName)) {
//     res.json()
//   }

//   // items.push(newItem);
//   itemId++;
//   // res.json(items);
// });

// server.put("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, price, imageUrl, description, shipping } = req.body;
//   const findItemById = item => {
//     return item.id == id;
//   };
//   const foundItem = items.find(findItemById);
//   if (!foundItem) {
//     return sendUserError("No Item found by that ID", res);
//   } else {
//     if (name) foundItem.name = name;
//     if (price) foundItem.price = price;
//     if (imageUrl) foundItem.imageUrl = imageUrl;
//     if (description) foundItem.description = description;
//     if (shipping) foundItem.shipping = shipping;
//     res.json(items);
//   }
// });

// server.delete("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const foundItem = items.find(item => item.id == id);

//   if (foundItem) {
//     const ItemRemoved = { ...foundItem };
//     items = items.filter(item => item.id != id);
//     res.status(200).json(items);
//   } else {
//     sendUserError("No item by that ID exists in the item DB", res);
//   }
// });

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});


