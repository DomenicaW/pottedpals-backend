const db = require('../models');


const index = (req, res) => {
    db.Plant.find({}, (err, plants) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            plants,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}



module.exports = {
    index
}