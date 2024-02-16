import IOrderState from './IOrderState'

export default class CancelledOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has been cancelled!')
	}

	startPayment(): boolean {
		throw new Error('The order has been cancelled!')
	}

	cancel(): void {
		throw new Error('The order has already been cancelled!')
	}
}
