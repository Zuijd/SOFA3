import MovieTicket from '../MovieTicket'

export default interface IPricingStrategy {
	calculatePrice(ticket: MovieTicket, isSecondTicket: boolean, ticketAmount: number): number
}
