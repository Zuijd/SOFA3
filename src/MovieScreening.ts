import Movie from './Movie';

export default class MovieScreening {
	dateEndTime: Date;
	pricePerSeat: number;
	movie: Movie;

	constructor(dateEndTime: Date, pricePerSeat: number, movie: Movie) {
		this.dateEndTime = dateEndTime;
		this.pricePerSeat = pricePerSeat;
		this.movie = movie;
	}

	public getPricingPerSeat(): number {
		return this.pricePerSeat;
	}

	public toString(): string {
		return `${this.dateEndTime} - ${this.pricePerSeat} - ${this.movie}`;
	}
}
