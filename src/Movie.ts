export default class Movie {
	title: string;

	constructor(title: string) {
		this.title = title;
	}

	addScreening(screening: any) {
		// TODO add screening
	}

	toString() {
		return this.title;
	}
}
