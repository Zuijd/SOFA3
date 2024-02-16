import IMovieTicketState from './IMovieTicketState'

export default class FinalizedMovieTicketState implements IMovieTicketState {
	reserve(): void {
		throw new Error('The ticket has already been finalized!')
	}

	finalize(): void {
		throw new Error('The ticket has already been finalized!')
	}

	cancel(): void {
		throw new Error('The ticket has already been finalized!')
	}
}
