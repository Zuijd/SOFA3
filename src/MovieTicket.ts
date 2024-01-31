import MovieScreening from './MovieScreening';

export default class MovieTicket {
	rowNr: number;
	seatNr: number;
	isPremium: boolean;
	movieScreening: MovieScreening;

	constructor(
		movieScreening: MovieScreening,
		isPremiumReservation: boolean,
		seatNr: number,
		rowNr: number
	) {
		this.rowNr = rowNr;
		this.seatNr = seatNr;
		this.isPremium = isPremiumReservation;
		this.movieScreening = movieScreening;
	}

	isPremiumTicket() {
		return this.isPremium;
	}

	getPrice() {
		return;
	}

	toString() {
		return `${this.rowNr} - ${this.seatNr} - ${this.isPremium}`;
	}
}
