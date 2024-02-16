import IPaymentState from './IPaymentState'

export default class CompletedPaymentState implements IPaymentState {
	completePayment(): void {
		throw new Error('The payment has already been completed!')
	}

	cancelPayment(): void {
		throw new Error('The payment has already been completed!')
	}
}
