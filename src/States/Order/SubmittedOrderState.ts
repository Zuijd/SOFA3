import Order from '../../Order'
import AvailableMovieTicketState from '../MovieTicket/AvailableMovieTicketState'
import IOrderState from './IOrderState'
import InitialOrderState from './InitialOrderState'
import ProvisionalOrderState from './ProvisionalOrderState'

export default class SubmittedOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been submitted!')
	}

	startPayment(order: Order): void {
		order.setState(new ProvisionalOrderState())
	}

	cancel(order: Order): void {
		order.setState(new InitialOrderState())

		order.movieTickets.forEach((ticket) => {
			ticket.setState(new AvailableMovieTicketState())
		})
	}
}
