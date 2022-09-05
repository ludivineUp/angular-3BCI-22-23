export class Pony {
	id: number;
	name: string;
	color: string;
	age: number;

	constructor(id?: number,name?: string, color?: string,age?: number){
		this.id = id === undefined ? 0 : id;
		this.name = name === undefined ? "" : name;
		this.color = color === undefined ? '' : color;
		this.age = age === undefined ? 0 : age;
	}
}
