import { Person } from '../models/Person';

export default function PersonSeeder() {
	const names = ['sarah', 'joe', 'jim'];
	const ages = [1,2,3];

	names.forEach(name => {
		ages.forEach(age => {
			const person = new Person({
				name: name,
				age: age,
			});
			
			person.save();
		});
	});
}