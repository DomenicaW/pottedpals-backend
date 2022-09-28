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

const create = (req, res) => {
    db.Plant.create(req.body, (err, createdPlant) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json(createdPlant)
    })
}

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