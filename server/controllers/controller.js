const ItemModel = require("../models/Item");

module.exports.getItems = async (req, res) => {
  // const items = await ItemModel.find()
  // res.send(items);

  res.send("hello");
};

module.exports.postItems = (req, res) => {
  const { item } = req.body;

  const newItem = new ItemModel({
    itemName: item.itemName,
    quantity: item.quantity,
  });

  newItem
    .save()
    .then((item) => {
      console.log(`Saved item: ${item}`);
    })
    .catch((err) => {
      console.log(`Error saving item: ${err}`);
    });

  res.send(item);
};
