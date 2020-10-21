const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    day: {
        type: String,
        trim: true
    },

    Exercises: [{
        type: {type: String, trim: true},
        name: {type: String, trim: true},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number}
    }]
})

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;