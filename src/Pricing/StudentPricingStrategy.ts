import MovieTicket from '../MovieTicket'
import IPricingStrategy from './IPricingStrategy'

export default class StudentPricingStrategy implements IPricingStrategy {
	calculatePrice(ticket: MovieTicket, index: number): number {
		if ((index + 1) % 2 === 0) return 0

		return ticket.movieScreening.getPricingPerSeat() + (ticket.isPremium ? 2 : 0)
	}
}
