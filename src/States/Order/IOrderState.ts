import Order from '../../Order'

export default interface IOrderState {
	submit(order: Order): void
	startPayment(): boolean
	cancel(order: Order): void
}
