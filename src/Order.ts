import MovieTicket from './MovieTicket'
import IPricingStrategy from './Pricing/IPricingStrategy'
import PricingStrategyFactory from './Pricing/PricingStrategyFactory'
import TicketExport from './Export/TicketExport'

export default class Order {
	orderNr: number
	isStudentOrder: boolean
	movieTickets: MovieTicket[] = []

	constructor(orderNr: number, isStudentOrder: boolean) {
		this.orderNr = orderNr
		this.isStudentOrder = isStudentOrder
	}

	getOrderNr(): number {
		return this.orderNr
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

	export(exportType: TicketExport) {
		exportType.export(this)
	}
}
