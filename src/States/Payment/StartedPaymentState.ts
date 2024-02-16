import Payment from '../../Payment'
import AvailableMovieTicketState from '../MovieTicket/AvailableMovieTicketState'
import FinalizedMovieTicketState from '../MovieTicket/FinalizedMovieTicketState'
import CancelledOrderState from '../Order/CancelledOrderState'
import CompletedOrderState from '../Order/CompletedOrderState'
import ProvisionalOrderState from '../Order/ProvisionalOrderState'
import CompletedPaymentState from './CompletedPaymentState'
import IPaymentState from './IPaymentState'
import InitialPaymentState from './InitialPaymentState'

export default class StartedPaymentState implements IPaymentState {
	completePayment(payment: Payment): void {
		payment.order.movieTickets.forEach((ticket) => {
			ticket.setState(new FinalizedMovieTicketState())
		})
		payment.order.setState(new CompletedOrderState())
		payment.setState(new CompletedPaymentState())
	}

	cancelPayment(payment: Payment): void {
		payment.setState(new InitialPaymentState())
		payment.order.setState(new CancelledOrderState())
		payment.order.movieTickets.forEach((ticket) => {
			ticket.setState(new AvailableMovieTicketState())
		})
	}
}
