const Workout = require("../models/workout");
module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(function(workout){
                res.json(workout);
            })
            .catch(function(err){
                res.json(err);
            })
    });
    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(function(newWorkout){
                res.json(newWorkout);
            })
            .catch(function(err){
                res.json(err);
            })
    });
    app.put("/api/workouts/:id", function({body, params}, res){
        Workout.findByIdAndUpdate(
            params.id,
            {$set: {exercises:body}},
            {new: true}
        )
        .then(function(workout){
            res.json(workout);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.get("/api/workouts/range", function(req,res){
        Workout.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.post("/api/workouts/range", function(req,res){
        Workout.create({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });
}