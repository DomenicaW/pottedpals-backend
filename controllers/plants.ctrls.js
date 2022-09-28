const db = require("../models");

// Get all the plants
const index = (req, res) => {
  db.Plant.find({}, (err, plants) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      plants,
      requestedAt: new Date().toLocaleDateString(),
    });
  });
};

// Create a plant with req.body
const create = (req, res) => {
  db.Plant.create(req.body, (error, createdPlant) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json(createdPlant); //  .json() will send proper headers in response so client knows it's json coming back
  });
};

// Updating a single plant
const update = (req, res) => {
  db.Plant.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (err, updatedPlant) => {
      if (err) return res.status(400).json({ error: err.message });
      return res.status(200).json(updatedHoliday);
    }
  );
};

// Destroy a single plant by its ID
const destroy = (req, res) => {
  db.Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
    if (err) return res.status(400).json({ error: err.message });
    return res.status(200).json({
      message: `Plant ${deletedPlant.name} deleted successfully`,
    });
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};