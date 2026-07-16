import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

// @desc Create a booking
// @route POST /api/bookings
export const createBooking = async (req, res) => {
  const { carId, startDate, endDate, totalAmount } = req.body;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    if (!car.available) {
      return res.status(400).json({ error: "Car is not currently available for booking" });
    }

    const booking = new Booking({
      car: carId,
      user: req.user._id,
      startDate,
      endDate,
      totalAmount,
    });

    const createdBooking = await booking.save();
    
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Get logged in user bookings
// @route GET /api/bookings/mybookings
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("car");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get all bookings (Admin only)
// @route GET /api/bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate("car").populate("user", "name email");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Update booking status
// @route PUT /api/bookings/:id/status
export const updateBookingStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      // Check if user is admin or if it is the owner canceling a pending booking
      const isAdmin = req.user.role === "admin";
      const isOwner = booking.user.toString() === req.user._id.toString();

      if (!isAdmin && (!isOwner || status !== "Cancelled")) {
        return res.status(403).json({ error: "Not authorized to change this booking status" });
      }

      booking.status = status;
      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
