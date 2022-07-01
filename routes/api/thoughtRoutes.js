const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    addNewThought,
    addReaction,
    updateThought,
    removeThought
} = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(addNewThought);

module.exports = router;    