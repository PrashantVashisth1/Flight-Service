const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest (req, res, next) {
  if(!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = new AppError(['Model number is not found in correct form in incoming request'], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest
}