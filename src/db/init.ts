import mongoose from 'mongoose';
import seed from '../seeder/Seeders';

export default async function init(): Promise<boolean> {
	await mongoose.connect('mongodb://localhost/mvc-test', {useNewUrlParser: true});
	await mongoose.connection.dropDatabase();
	
	await seed();
	
	return true;
}
