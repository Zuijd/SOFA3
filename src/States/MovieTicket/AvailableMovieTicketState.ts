import MovieTicket from '../../MovieTicket'
import IMovieTicketState from './IMovieTicketState'
import ProvisionalMovieTicketState from './ProvisionalMovieTicketState'
import ReservedMovieTicketState from './ReservedMovieTicketState'

export default class AvailableMovieTicketState implements IMovieTicketState {
	reserve(ticket: MovieTicket): void {
		ticket.setState(new ReservedMovieTicketState())
	}

	provisionalize(ticket: MovieTicket): void {
		ticket.setState(new ProvisionalMovieTicketState())
	}

	cancel(): void {
		throw new Error('The ticket must first be reserved!')
	}
}
