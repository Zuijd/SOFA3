import Payment from '../../payment'
import InitialOrderState from '../Order/InitialOrderState'
import CompletedPaymentState from './CompletedPaymentState'
import IPaymentState from './IPaymentState'
import InitialPaymentState from './InitialPaymentState'

export default class StartedPaymentState implements IPaymentState {
	completePayment(payment: Payment): void {
		payment.setState(new CompletedPaymentState())
	}

	cancelPayment(payment: Payment): void {
		payment.setState(new InitialPaymentState())
		payment.order.setState(new InitialOrderState())
	}
}
