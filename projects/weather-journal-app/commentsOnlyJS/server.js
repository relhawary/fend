// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
/* Empty JS object to act as endpoint for all routes */
projectData = { Roeya: "roeyaValue", Hello: "itMe" };

/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
	// console.log(server);
	console.log(`running on localhost: ${port}`);
}

// TODO-ROUTES!
app.get("/all", function (req, res) {
	res.send(projectData);
});
