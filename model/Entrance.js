const mongoose = require('mongoose');

const EntranceSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
    }
)

module.exports = mongoose.model('Entrance', EntranceSchema);