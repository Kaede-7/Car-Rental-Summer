import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/car_rental";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected successfully to MongoDB");
    seedDatabase();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Simple Schema & Model
const messageSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Seed database with a Hello World message if empty
async function seedDatabase() {
  try {
    const count = await Message.countDocuments();
    if (count === 0) {
      await Message.create({ text: "Hello World from MongoDB!" });
      console.log("Database seeded with default Hello World message.");
    }
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Registered API Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/tasks", taskRoutes);

// Hello World from MongoDB Route
app.get("/db-hello", async (req, res) => {
  try {
    const greeting = await Message.findOne().sort({ createdAt: -1 });
    if (greeting) {
      res.json({ message: greeting.text, timestamp: greeting.createdAt });
    } else {
      res.status(404).json({ error: "No greeting message found in database." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to query database", details: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
