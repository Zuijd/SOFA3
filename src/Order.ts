import MovieTicket from './MovieTicket'
import IPricingStrategy from './Strategies/Pricing/IPricingStrategy'
import PricingStrategyFactory from './Pricing/PricingStrategyFactory'
import TicketExport from './Strategies/Export/TicketExport'
import IOrderState from './States/Order/IOrderState'
import InitialOrderState from './States/Order/InitialOrderState'
import Payment from './payment'
import StartedPaymentState from './States/Payment/StartedPaymentState'

export default class Order {
	orderNr: number
	isStudentOrder: boolean
	movieTickets: MovieTicket[]
	isParkingTicketIncluded: boolean
	state: IOrderState
	payment: Payment

	constructor(orderNr: number, isStudentOrder: boolean, isParkingTicketIncluded?: boolean) {
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
		this.state.submit(this)
	}

	startPayment() {
		if (this.state.startPayment()) {
			this.payment.setState(new StartedPaymentState())
		}
	}

	export(exportType: TicketExport) {
		exportType.export(this)
	}
}
