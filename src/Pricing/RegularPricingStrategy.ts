import MovieTicket from '../MovieTicket'
import IPricingStrategy from './IPricingStrategy'

export default class RegularPricingStrategy implements IPricingStrategy {
	calculatePrice(ticket: MovieTicket, index: number, ticketAmount: number): number {
		const dateEndTime: Date = ticket.movieScreening.dateEndTime
		const isMidDay: boolean = dateEndTime.getDay() >= 1 && dateEndTime.getDay() <= 4
		const isFree: boolean = isMidDay && (index + 1) % 2 === 0
		const discount: number = isMidDay && ticketAmount >= 6 ? 0.9 : 1

		if (isFree) return 0

		console.log(ticket.movieScreening.getPricingPerSeat() * discount)

		return (ticket.movieScreening.getPricingPerSeat() + (ticket.isPremium ? 3 : 0)) * discount
	}
}
