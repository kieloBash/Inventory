const ItemModel = require("../models/Item");

module.exports.getItems = async (req, res) => {
  const items = await ItemModel.find();
  res.send(items);

  //   res.send("hello");
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
      res.send(item);
    })
    .catch((err) => {
      console.log(`Error saving item: ${err}`);
    });
};

module.exports.updateItems = async (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  const update = new ItemModel({
    itemName: item.itemName,
    quantity: item.quantity,
  });
  const doc = await ItemModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        itemName: update.itemName,
        quantity: update.quantity,
      },
    }
  ).exec();
  console.log(doc);
  res.send(doc);
};

module.exports.deleteItems = async (req, res) => {
  const { id } = req.params;
  const doc = await ItemModel.findOneAndDelete({ _id: id }).exec();
  console.log(`Delete Successfully`);
  res.send("done");
};
