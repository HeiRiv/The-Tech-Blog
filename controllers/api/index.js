const router = require('express').Router();
const userRoutes = require('./userRoutes');
const factRoutes = require('./factRoutes');

router.use('/users', userRoutes);
router.use('/fact', factRoutes);

module.exports = router;
