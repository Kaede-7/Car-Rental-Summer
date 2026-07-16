import mongoose from "mongoose";
import dotenv from "dotenv";
import Car from "../models/Car.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/car_rental";

const sampleCars = [
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    pricePerDay: 120,
    transmission: "Automatic",
    fuelType: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    description: "Sleek, all-electric premium sedan with long range and advanced autopilot capabilities.",
    available: true,
  },
  {
    make: "Ford",
    model: "Mustang GT",
    year: 2022,
    pricePerDay: 150,
    transmission: "Manual",
    fuelType: "Petrol",
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80",
    description: "Classic American muscle car with a roaring V8 engine and 6-speed manual transmission.",
    available: true,
  },
  {
    make: "Toyota",
    model: "RAV4 Hybrid",
    year: 2023,
    pricePerDay: 75,
    transmission: "Automatic",
    fuelType: "Hybrid",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    description: "Comfortable and extremely fuel-efficient hybrid SUV, perfect for family road trips.",
    available: true,
  },
];

const seedCars = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing cars
    await Car.deleteMany({});
    console.log("Deleted existing cars.");

    // Insert sample cars
    const createdCars = await Car.insertMany(sampleCars);
    console.log(`Successfully seeded ${createdCars.length} cars into the database!`);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding cars:", error);
    process.exit(1);
  }
};

seedCars();
