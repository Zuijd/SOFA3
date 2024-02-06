import MovieTicket from './MovieTicket'

export abstract class OrderPrice {
	private tickets: MovieTicket[]
	private pricePerSeat: number
	private dateEndTime: Date
	private isMidDay: boolean

	public OrderPrice(tickets: MovieTicket[]) {
		this.tickets = tickets
	}

	public calculatePrice() {
		this.tickets.forEach((ticket, index) => {
			const pricePerSeat = ticket.movieScreening.getPricingPerSeat()
			const dateEndTime = ticket.movieScreening.dateEndTime
			const isMidDay = this.dateEndTime.getDay() >= 1 && this.dateEndTime.getDay() <= 4
		})
	}
}
