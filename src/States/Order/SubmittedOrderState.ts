import Order from '../../Order'
import AvailableMovieTicketState from '../MovieTicket/AvailableMovieTicketState'
import IOrderState from './IOrderState'
import InitialOrderState from './InitialOrderState'
import ProvisionalOrderState from './ProvisionalOrderState'

export default class SubmittedOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been submitted!')
	}

	startPayment(order: Order): boolean {
		order.state = new ProvisionalOrderState()
		return true
	}

	cancel(order: Order): void {
		order.state = new InitialOrderState()
		order.movieTickets.forEach((ticket) => {
			ticket.setState(new AvailableMovieTicketState())
		})
	}
}
