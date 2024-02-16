import MovieTicket from '../../MovieTicket'
import AvailableMovieTicketState from './AvailableMovieTicketState'
import IMovieTicketState from './IMovieTicketState'
import ReservedMovieTicketState from './ReservedMovieTicketState'

export default class ProvisionalMovieTicketState implements IMovieTicketState {
	reserve(ticket: MovieTicket): void {
		ticket.setState(new ReservedMovieTicketState())
	}
	provisionalize(): void {
		throw new Error('The ticket has already been provisionalized!')
	}
	cancel(ticket: MovieTicket): void {
		ticket.setState(new AvailableMovieTicketState())
	}
}
