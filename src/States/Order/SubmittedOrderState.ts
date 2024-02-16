import IOrderState from './IOrderState'

export default class SubmittedOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been submitted!')
	}

	startPayment(): boolean {
		return true
	}

	cancel(): void {
		throw new Error('Method not implemented.')
	}
}
