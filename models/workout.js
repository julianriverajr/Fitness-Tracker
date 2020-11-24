const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now,
        required: true
    },
    exercises: [{
        type: {
            type: String,
            enum: ["resistance", "cardio"],
            required: "Type of exercise is required."
        },
        name: {
            type: String,
            trim: true,
            required: "Workout name is required."
        },
        duration: {
            type: Number,
            required: "Duration of workout is required."
        },
        distance: {
            type: Number,
            required: "Distance is required."
        },
        weight: {
            type: Number,
            required: "Amount of weight is requried."
        },
        reps: {
            type: Number,
            required: "Amount of reps is required."
        },
        sets: {
            type: Number,
            required: "Amount of sets is required."
        }
    }]
},
{
    toJSON: {
        virtuals: true
    }
});
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(total, exercise){
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;