import MovieTicket from '../MovieTicket'

export default interface IPricingStrategy {
	calculatePrice(ticket: MovieTicket, index: number, ticketAmount: number): number
}
