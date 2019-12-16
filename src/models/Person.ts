import mongoose from 'mongoose';

export interface IPerson extends mongoose.Document {
	name: string;
	age: number;
	identify(): string;
}

const PersonSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

PersonSchema.methods.identify = function(): string {
	return `${this.name} - ${this.age}`;
};


export { PersonSchema };

export const Person = mongoose.model<IPerson>('Person', PersonSchema);