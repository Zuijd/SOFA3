import Order from './Order'
import IPaymentState from './States/Payment/IPaymentState'
import InitialPaymentState from './States/Payment/InitialPaymentState'

export default class Payment {
	order: Order
	state: IPaymentState

	constructor(order: Order) {
		this.order = order
		this.state = new InitialPaymentState()
	}

	setState(state: IPaymentState) {
		this.state = state
	}

	completePayment() {
		this.state.completePayment(this)
	}

	cancelPayment() {
		this.state.cancelPayment(this)
	}
}
