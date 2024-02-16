import MovieTicket from '../../MovieTicket'
import IMovieTicketState from './IMovieTicketState'
import ProvisionalMovieTicketState from './FinalizedMovieTicketState'
import ReservedMovieTicketState from './ReservedMovieTicketState'
import FinalizedMovieTicketState from './FinalizedMovieTicketState'

export default class AvailableMovieTicketState implements IMovieTicketState {
	reserve(ticket: MovieTicket): void {
		ticket.setState(new ReservedMovieTicketState())
	}

	finalize(ticket: MovieTicket): void {
		ticket.setState(new FinalizedMovieTicketState())
	}

	cancel(): void {
		throw new Error('The ticket has not been reserved yet!')
	}
}
