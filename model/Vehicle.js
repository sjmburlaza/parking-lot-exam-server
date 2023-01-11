const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        entryPoint: { type: String, required: true },
        type: { type: String, required: true },
        parkingSpot: { type: Number, required: true },
        timeOfEntry: { type: Date, required: true },
        timeOfExit: { type: Date, required: true  },
        chargedFee: { type: Number, required: true},
        isParked: { type: Boolean, required: true }
    }
)

module.exports = mongoose.model('Vehicle', VehicleSchema);