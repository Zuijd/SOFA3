import Payment from '../../payment'

export default interface IPaymentState {
	completePayment(payment: Payment): void
	cancelPayment(payment: Payment): void
}
