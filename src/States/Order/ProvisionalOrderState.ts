import Order from '../../Order'
import InitialPaymentState from '../Payment/InitialPaymentState'
import IOrderState from './IOrderState'
import SubmittedOrderState from './SubmittedOrderState'

export default class ProvisionalOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been submitted!')
	}

	startPayment(): boolean {
		throw new Error('The payment has already been started!')
	}

	cancel(order: Order): void {
		order.setState(new SubmittedOrderState())
		order.payment.setState(new InitialPaymentState())
	}
}
