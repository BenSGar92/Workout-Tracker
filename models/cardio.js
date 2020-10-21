const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    day: {
        type: String,
        trim: true
    },

    Exercises: [{
        type: {type: String, trim: true},
        name: {type: String, trim: true},
        duration: {type: Number},
        distance: {type: Number},
    }]
})

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;