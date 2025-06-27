const express = require('express');

const airplaneRoutes = require('./airplane-routes');

const router = express.Router();

router.get('/info', (req,res) => {
  res.json({
    msg: "ok"
  })
})

router.use('/airplanes', airplaneRoutes);



module.exports = router;