import Order from '../../Order'

export default interface IOrderState {
	submit(order: Order): void
	startPayment(order: Order): boolean
	cancel(order: Order): void
}
