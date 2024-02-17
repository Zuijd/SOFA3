import MovieTicket from '../../MovieTicket'
import IPricingStrategy from './IPricingStrategy'

export default class StudentPricingStrategy implements IPricingStrategy {
	calculatePrice(ticket: MovieTicket, isSecondTicket: boolean): number {
		if (isSecondTicket) return 0

		return ticket.movieScreening.getPricingPerSeat() + (ticket.isPremium ? 2 : 0)
	}
}
