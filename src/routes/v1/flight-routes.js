const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");

const router = express.Router();

// /api/v1/flights POST
router.post(
  "/",
  FlightMiddleware.validateCreateRequest,
  FlightMiddleware.validateTimeRequest,
  FlightController.createFlight
);

// /api/v1/flights?trips=MUM-DEL
router.get('/', FlightController.getAllFlights);

router.get('/:id', FlightController.getFlight);

// /api/v1/flights/:id/seats PATCH
router.patch(
        '/:id/seats', 
        FlightMiddleware.validateUpdateSeatsRequest,
        FlightController.updateSeats
);

module.exports = router;
