import MovieTicket from '../../MovieTicket'
import AvailableMovieTicketState from './AvailableMovieTicketState'
import IMovieTicketState from './IMovieTicketState'
import ProvisionalMovieTicketState from './ProvisionalMovieTicketState'

export default class ReservedMovieTicketState implements IMovieTicketState {
	reserve() {
		throw new Error('The ticket has already been reserved!')
	}

	provisionalize(ticket: MovieTicket) {
		ticket.setState(new ProvisionalMovieTicketState())
	}

	cancel(ticket: MovieTicket) {
		ticket.setState(new AvailableMovieTicketState())
	}
}
