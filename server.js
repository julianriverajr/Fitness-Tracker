const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useUnifiedTopology:true, useNewUrlParser:true
})
.then(function(){
    console.log("connected to mongodb")
})
.catch(function(err){
    console.error("could not connect to mongodb", err)
})
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.listen(PORT, function(){
    console.log(`App running on port ${PORT}`);
})