const Item = require('../models/item.schema');

exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const result = await item.save();
    res.status(201).json({ id: result._id });
  } catch (error) {
    res.status(400).json({ message: 'item creation failed', error: error.message });
  }
};

exports.modifyQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'item not located' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'could not update quantity', error: error.message });
  }
};

exports.fetchAllItems = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * size;

    const items = await Item.find().skip(skip).limit(size);
    const count = await Item.countDocuments();

    res.status(200).json({
      total: count,
      page,
      pagesize: items.length,
      inventory: items
    });
  } catch (error) {
    res.status(500).json({ message: 'unable to retrieve inventory', error: error.message });
  }
};
