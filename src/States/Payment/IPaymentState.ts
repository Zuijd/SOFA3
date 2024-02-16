import Payment from '../../Payment'

export default interface IPaymentState {
	completePayment(payment: Payment): void
	cancelPayment(payment: Payment): void
}
