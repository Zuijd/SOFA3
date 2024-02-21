import MovieScreening from './MovieScreening'
import NotificationObservable from './Observers/NotificationObservable'
import AvailableMovieTicketState from './States/MovieTicket/AvailableMovieTicketState'
import IMovieTicketState from './States/MovieTicket/IMovieTicketState'

export default class MovieTicket extends NotificationObservable {
	rowNr: number
	seatNr: number
	isPremium: boolean
	movieScreening: MovieScreening
	state: IMovieTicketState

	constructor(movieScreening: MovieScreening, isPremiumReservation: boolean, seatNr: number, rowNr: number) {
		super()

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
		this.notify('Ticket reserved')

		this.state.reserve(this)
	}

	finalize() {
		this.state.finalize(this)
	}

	cancel() {
		this.notify('Ticket canceled')

		this.state.cancel(this)
	}
}
