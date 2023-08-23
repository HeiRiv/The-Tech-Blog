const router = require('express').Router();
const { Fact } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFact = await Fact.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFact);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const factData = await Fact.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!factData) {
      res.status(404).json({ message: 'No fact found with this id!' });
      return;
    }

    res.status(200).json(factData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;