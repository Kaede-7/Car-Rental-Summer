import Car from "../models/Car.js";

// @desc Get all cars
// @route GET /api/cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get single car
// @route GET /api/cars/:id
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Create a car
// @route POST /api/cars
export const createCar = async (req, res) => {
  const { make, model, year, pricePerDay, transmission, fuelType, imageUrl, description } = req.body;

  try {
    const car = new Car({
      make,
      model,
      year,
      pricePerDay,
      transmission,
      fuelType,
      imageUrl,
      description,
    });

    const createdCar = await car.save();
    res.status(201).json(createdCar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Update a car
// @route PUT /api/cars/:id
export const updateCar = async (req, res) => {
  const { make, model, year, pricePerDay, transmission, fuelType, imageUrl, description, available } = req.body;

  try {
    const car = await Car.findById(req.params.id);

    if (car) {
      car.make = make || car.make;
      car.model = model || car.model;
      car.year = year || car.year;
      car.pricePerDay = pricePerDay || car.pricePerDay;
      car.transmission = transmission || car.transmission;
      car.fuelType = fuelType || car.fuelType;
      car.imageUrl = imageUrl || car.imageUrl;
      car.description = description || car.description;
      car.available = available !== undefined ? available : car.available;

      const updatedCar = await car.save();
      res.json(updatedCar);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Delete a car
// @route DELETE /api/cars/:id
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (car) {
      await car.deleteOne();
      res.json({ message: "Car removed successfully" });
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
