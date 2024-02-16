import MovieTicket from '../../MovieTicket'

export default interface IMovieTicketState {
	reserve(ticket: MovieTicket): void
	finalize(ticket: MovieTicket): void
	cancel(ticket: MovieTicket): void
}
