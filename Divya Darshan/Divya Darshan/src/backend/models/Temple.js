const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
  templeName: String,
  templeImage: String,
  stateName: String,
  districtName: String,
  talukaName: String,
  templeHistory: String,
  ritualsFestival: String,
  darshanTiming: String,
  poojaTiming: String,
  visitorGuidelines: String,
  dressCodeRules: String,
  templeLocation: String,
  googleMapLink: String,
  nearbyHotels: [
    {
      hotelName: String,
      hotelLink: String,
    },
  ],
});

module.exports = mongoose.model("Temple", templeSchema);