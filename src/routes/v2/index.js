const express = require('express');
const { StatusCodes } = require('http-status-codes')
const router = express.Router();

router.get('/info', (req,res) => {
  return res.status(StatusCodes.OK).json({
    message: 'coming from v2'
  })
});

module.exports = router;