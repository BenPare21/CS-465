// Handles the travel page
const fs = require("fs");
const path = require("path");

// Load JSON data from the project root data directory
const tripsFilePath = path.join(__dirname, "../../data/trips.json");

const listTrips = (req, res) => {
  try {
    const data = fs.readFileSync(tripsFilePath, "utf8");
    const trips = JSON.parse(data);

    res.render("travel", { trips });
  } catch (err) {
    console.error("Error loading trips:", err);
    res.status(500).send("Error loading trip data.");
  }
};

module.exports = { listTrips };
