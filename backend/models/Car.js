import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Automatic", "Manual"],
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);
export default Car;
