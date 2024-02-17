import MovieScreening from './MovieScreening';
import AvailableMovieTicketState from './States/MovieTicket/AvailableMovieTicketState'
import IMovieTicketState from './States/MovieTicket/IMovieTicketState'

export default class MovieTicket {
	rowNr: number
	seatNr: number
	isPremium: boolean
	movieScreening: MovieScreening
	state: IMovieTicketState

	constructor(movieScreening: MovieScreening, isPremiumReservation: boolean, seatNr: number, rowNr: number) {
		this.rowNr = rowNr
		this.seatNr = seatNr
		this.isPremium = isPremiumReservation
		this.movieScreening = movieScreening
		this.state = new AvailableMovieTicketState()
	}

	setState(state: IMovieTicketState) {
		this.state = state
	}

	isPremiumTicket() {
		return this.isPremium
	}

	getPrice() {
		return
	}

	toString() {
		return `${this.rowNr} - ${this.seatNr} - ${this.isPremium}`
	}

	reserve() {
		this.state.reserve(this)
	}

	finalize() {
		this.state.finalize(this)
	}

	cancel() {
		this.state.cancel(this)
	}
}
