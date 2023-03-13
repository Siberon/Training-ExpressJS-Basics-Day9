const express = require("express"),
	cors = require("cors"),
	app = express(),
	routes = require("./routes"),
	PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log("server is running at port 5000"));
