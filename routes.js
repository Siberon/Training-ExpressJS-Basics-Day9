const express = require("express"),
	router = express.Router(),
	homeController = require("./controllers/homeController")

// middleware that is specific to this router
// define the home page route

//Post Method
router.post("/post/:id", homeController.postData);

//Get all Method
router.get("/getAll", homeController.home);

//Get by ID Method
router.get("/getOne/:id", homeController.getOne);

//Update by ID Method
router.patch("/update/:id", homeController.update);

//Delete by ID Method
router.delete("/delete/:id", homeController.remove);

module.exports = router;
