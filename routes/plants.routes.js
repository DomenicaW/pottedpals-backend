const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

// This looks at in the controllers folder (const variable we created above tells it to look there) then it looks specifically at the index.js file within the controller folder and then it looks at the plants controller js file based upon the instructions found in the index.js file 

router.get('/', ctrls.plants.index)

// router.get('/:id', ctrls.plants.show)
// router.post('/', ctrls.plants.create)
// router.delete('/:id', ctrls.plants.destroy)
// router.put('/:id', ctrls.plants.update)

router.post('/', ctrls.plants.create); 

router.put('/:id', ctrls.plants.update)

router.delete('/:id', ctrls.plants.destroy);



module.exports = router;