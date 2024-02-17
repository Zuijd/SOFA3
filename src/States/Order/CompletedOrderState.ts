import Order from '../../Order'
import IOrderState from './IOrderState'

export default class CompletedOrderState implements IOrderState {
	submit(): void {
		throw new Error('The order has already been completed!')
	}

	startPayment(): boolean {
		throw new Error('The order has already been completed!')
	}

	cancel(): void {
		throw new Error('The order has already been completed!')
	}
}
