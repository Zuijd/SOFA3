import MovieTicket from '../MovieTicket'
import IPricingStrategy from './IPricingStrategy'

export default class RegularPricingStrategy implements IPricingStrategy {
	calculatePrice(ticket: MovieTicket, isSecondTicket: boolean, ticketAmount: number): number {
		const dateEndTime: Date = ticket.movieScreening.dateEndTime
		const isMidDay: boolean = dateEndTime.getDay() >= 1 && dateEndTime.getDay() <= 4
		const discount: number = isMidDay && ticketAmount >= 6 ? 0.9 : 1

		if (isMidDay && isSecondTicket) return 0

		return (ticket.movieScreening.getPricingPerSeat() + (ticket.isPremium ? 3 : 0)) * discount
	}
}
