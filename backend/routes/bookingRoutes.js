import express from "express";
import { createBooking, getUserBookings, getAllBookings, updateBookingStatus } from "../controllers/bookingController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createBooking)
  .get(protect, admin, getAllBookings);

router.route("/mybookings")
  .get(protect, getUserBookings);

router.route("/:id/status")
  .put(protect, updateBookingStatus);

export default router;
