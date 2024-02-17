import Order from '../../Order'

export default interface IOrderState {
	submit(order: Order): void
	startPayment(order: Order): void
	cancel(order: Order): void
}
