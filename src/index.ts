import express from 'express';
require('dotenv').config();
import { Person } from './models/Person';
import init from './db/init';
init();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/createPerson', async (req, res) => {
	const data = {
		name: req.body.name,
		age: parseInt(req.body.age),
	};
	const person = new Person(data);

	const exists = await Person.exists(data);
	if(!exists) {
		person.save();
		return res.send({success: true, response: 'Uploaded person'});
	}
	else {
		return res.status(400).send({success: false, response: 'Person already exists!'});
	}
	
});

app.get('/people', async (req, res) => {
	var people = await Person.find({}).exec();
	
	return res.send(people);
});

app.get('/people/full', async (req, res) => {
	var people = await Person.find({}).exec();
	
	return res.send(people.map(e => e.identify()));
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});