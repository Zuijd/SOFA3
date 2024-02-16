import Order from '../../Order'
import AvailableMovieTicketState from '../MovieTicket/AvailableMovieTicketState'
import InitialPaymentState from '../Payment/InitialPaymentState'
import CancelledOrderState from './CancelledOrderState'
import IOrderState from './IOrderState'

export default class ProvisionalOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been submitted!')
	}

	startPayment(): boolean {
		throw new Error('The payment has already been started!')
	}

	cancel(order: Order): void {
		order.setState(new CancelledOrderState())
		order.payment.setState(new InitialPaymentState())
		order.movieTickets.forEach((ticket) => {
			ticket.setState(new AvailableMovieTicketState())
		})
	}
}
