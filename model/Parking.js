const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        size: { type: String, required: true },
        distancesFromEntrance: [
            { type: Number, required: true }
        ],
        isVacant: { type: Boolean, required : true}
    }
)

module.exports = mongoose.model('Parking', ParkingSchema);