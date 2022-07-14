const { User, Thought } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .sort({ _id: -1 })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .sort({ _id: -1 })
      .then((data) => {
        !data
          ? res.status(404).json({ message: "No thought found with this ID" })
          : res.status(200).json(data);
      });
  },
  addNewThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return Thought.findOneAndUpdate(
          { username: req.body.username },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought not found" })
          : res.status(200).json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {},
  removeThought(req, res) {},
};

module.exports = thoughtController;
