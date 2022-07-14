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
router.route('/')

module.exports = router;    