const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    description: {
        type: String,
        required: [true, "description is a required field"]
    },
    // Chest, Arms, etc.
    bodyArea: {
        type: [String],
        required: [true, "bodyArea is a required field"]
    },
    musclesUsed: [String],
    machinesUsed: [String]
}, 
{
    collection : 'Exercises' // must match name of Collection in MongoDb
})

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema)

module.exports = ExerciseModel