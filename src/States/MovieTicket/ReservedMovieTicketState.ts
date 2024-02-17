import MovieTicket from '../../MovieTicket'
import AvailableMovieTicketState from './AvailableMovieTicketState'
import IMovieTicketState from './IMovieTicketState'
import FinalizedMovieTicketState from './FinalizedMovieTicketState'

export default class ReservedMovieTicketState implements IMovieTicketState {
	reserve() {
		throw new Error('The ticket has already been reserved!')
	}

	finalize(ticket: MovieTicket) {
		ticket.setState(new FinalizedMovieTicketState())
	}

	cancel(ticket: MovieTicket) {
		ticket.setState(new AvailableMovieTicketState())
	}
}
