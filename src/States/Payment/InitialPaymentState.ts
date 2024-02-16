import IPaymentState from './IPaymentState'

export default class InitialPaymentState implements IPaymentState {
	completePayment(): void {
		throw new Error('The payment must first be started!')
	}

	cancelPayment(): void {
		throw new Error('The payment must first be started!')
	}
}
