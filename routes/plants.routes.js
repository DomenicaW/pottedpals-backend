const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

router.get('/', ctrls.plants.index)
router.get('/:id', ctrls.plants.show)
router.post('/', ctrls.plants.create)
router.delete('/:id', ctrls.plants.destroy)
router.put('/:id', ctrls.plants.update)

module.exports = router;