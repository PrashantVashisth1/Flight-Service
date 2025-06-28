const express = require('express');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

const router = express.Router();

router.get('/info', (req,res) => {
  res.json({
    msg: "ok"
  })
})

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);



module.exports = router;