const db = require('../models');


const index = (req, res) => {
    db.Plant.find({}, (err, plants) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            plants
        })
    })
}

//COMMENTED OUT ROUTE NEEDS DEBUGGING

// const show = (req, res) => {
//     db.Plant.findById(req.params.id, (error, foundPlant) => {
//         if(!foundPlant) return res.status(400).json({error: "Plant not found"})
//         if(error) return res.status(400).json({error: error.message})
//         return res.status(200).json({
//             message: `Plant ${foundPlant.name} retrieved`
//         })
//     })
// }

// const create = (req, res) => {
//     db.Plant.create(req.body, (err, createdPlant) => {
//         if(err) return res.status(404).json({error: err.message})
//         return res.status(200).json(createdPlant)
//     })
// }

// const destroy = (req, res) => {
//     db.Plant.findByIdAndDelete(req.params.id, (error, deletedPlant) => {
//         if(!deletedPlant) return res.status(400).json({error: "Plant not found"})
//         if(error) return res.status(400).json({error: error.message})
//         return res.status(200).json({
//             message: `${deletedPlant.name} deleted`
//         })
//     })
// }

// const update = (req, res) => {
//     db.Plant.findByIdAndUpdate(req.params.id, 
//         {
//             $set: req.body
//         }, 
//         {new: true}, 
//         (err, updatedPlant) => {
//             if(err) return res.status(400).json({error: err.message})
//             return res.status(200).json(updatedPlant)
//         }
//     )
// }

module.exports = {
    index,
    show,
    create,
    destroy,
    update
}
