const Data = require("../data/data.json");
module.exports = {
	home: (_, res) => {
		res.json({ message: "yang indah dalam hidupku" });
	},
	postData: (req, res) => {
		const { id } = req.params;
		const { title } = req.body;

		if (!title) {
			res.status(418).send({ message: "We need a title!" });
		}

		res.send({
			title: `${title}`,
			id: `${id}`,
		});
	},
	getOne: (req, res) => {
		res.send(Data.at(req.params.id));
	},
	update: (req, res) => {
		const { title, message } = req.body;

		res.send({
			title: `${title}`,
			id: req.params.id,
			message: `${message}`,
		});
	},
	remove: (req, res) => {
		res.send(Data.filter((Data) => Data.id != req.params.id));
	},
};
