import MovieTicket from './MovieTicket'
import IPricingStrategy from './Strategies/Pricing/IPricingStrategy'
import PricingStrategyFactory from './Strategies/Pricing/PricingStrategyFactory'
import TicketExport from './Strategies/Export/TicketExport'
import IOrderState from './States/Order/IOrderState'
import InitialOrderState from './States/Order/InitialOrderState'
import Payment from './Payment'
import NotificationObservable from './Observers/NotificationObservable'

export default class Order extends NotificationObservable {
	orderNr: number
	isStudentOrder: boolean
	movieTickets: MovieTicket[]
	isParkingTicketIncluded: boolean
	state: IOrderState
	payment: Payment

	constructor(orderNr: number, isStudentOrder: boolean, isParkingTicketIncluded?: boolean) {
		super()

		this.orderNr = orderNr
		this.isStudentOrder = isStudentOrder
		this.movieTickets = []
		this.isParkingTicketIncluded = isParkingTicketIncluded || false
		this.state = new InitialOrderState()
		this.payment = new Payment(this)
	}

	getOrderNr(): number {
		return this.orderNr
	}

	setState(state: IOrderState) {
		this.state = state
	}

	addSeatToReservation(ticket: MovieTicket) {
		this.movieTickets.push(ticket)
	}

	calculatePrice(): number {
		const pricingStrategyFactory: PricingStrategyFactory = new PricingStrategyFactory(this.isStudentOrder)
		const pricingStrategy: IPricingStrategy = pricingStrategyFactory.getPricingStrategy()

		let totalTicketPrice: number = 0

		this.movieTickets.forEach((ticket, index) => {
			const ticketPrice: number = pricingStrategy.calculatePrice(
				ticket,
				(index + 1) % 2 === 0,
				this.movieTickets.length
			)

			totalTicketPrice += ticketPrice
		})

		return totalTicketPrice
	}

	submit() {
		this.notify('Order submitted')

		this.state.submit(this)
	}

	startPayment() {
		this.notify('Payment started')

		this.state.startPayment(this)
	}

	cancel() {
		this.notify('Order cancelled')

		this.state.cancel(this)
	}

	export(exportType: TicketExport) {
		this.notify('Order exported to file')

		exportType.export(this)
	}
}
