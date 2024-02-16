import Order from '../../Order'
import AvailableMovieTicketState from '../MovieTicket/AvailableMovieTicketState'
import IOrderState from './IOrderState'
import SubmittedOrderState from './SubmittedOrderState'

export default class InitialOrderState implements IOrderState {
	submit(order: Order): void {
		order.setState(new SubmittedOrderState())
	}

	startPayment(): boolean {
		throw new Error('The order must first be submitted!')
	}

	cancel(order: Order): void {
		order.movieTickets.forEach((ticket) => {
			ticket.setState(new AvailableMovieTicketState())
		})
	}
}
