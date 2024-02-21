import Order from '../src/Order'
import MovieTicket from '../src/MovieTicket'
import MovieScreening from '../src/MovieScreening'
import Movie from '../src/Movie'
import SmsNotification from '../src/Notifications/SmsNotification'

describe('MovieTicket', () => {
	let mockedOrder: Order
	let mockedTicket: MovieTicket
	let mockedMovieScreening: MovieScreening
	let mockedMovie: Movie

	beforeEach(() => {
		mockedOrder = new Order(1, true)
		mockedMovie = new Movie('Mr. Bean')
		mockedMovieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, mockedMovie)
		mockedTicket = new MovieTicket(mockedMovieScreening, true, 1, 2)

		mockedOrder.attach(new SmsNotification())
		mockedTicket.attach(new SmsNotification())
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('States', () => {
		describe('when state is available', () => {
			it('reserve should reserve the ticket', () => {
				mockedTicket.reserve()
				expect(mockedTicket.state.constructor.name).toBe('ReservedMovieTicketState')
			})

			it('finalize should finalize the ticket', () => {
				mockedTicket.finalize()
				expect(mockedTicket.state.constructor.name).toBe('FinalizedMovieTicketState')
			})

			it('cancel should throw an error', () => {
				try {
					mockedTicket.cancel()
					throw new Error('Expected mockedTicket.cancel to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The ticket has not been reserved yet!')
					expect(mockedTicket.state.constructor.name).toBe('AvailableMovieTicketState')
				}
			})
		})

		describe('when state is finalized', () => {
			beforeEach(() => {
				mockedTicket.finalize()
			})

			it('reserve should throw an error', () => {
				try {
					mockedTicket.reserve()
					throw new Error('Expected mockedTicket.provisionalize to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The ticket has already been finalized!')
					expect(mockedTicket.state.constructor.name).toBe('FinalizedMovieTicketState')
				}
			})

			it('provisionalize should throw an error', () => {
				try {
					mockedTicket.finalize()
					throw new Error('Expected mockedTicket.provisionalize to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The ticket has already been finalized!')
					expect(mockedTicket.state.constructor.name).toBe('FinalizedMovieTicketState')
				}
			})

			it('cancel should throw an error', () => {
				try {
					mockedTicket.cancel()
					throw new Error('Expected mockedTicket.provisionalize to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The ticket has already been finalized!')
					expect(mockedTicket.state.constructor.name).toBe('FinalizedMovieTicketState')
				}
			})
		})

		describe('when state is reserved', () => {
			beforeEach(() => {
				mockedTicket.reserve()
			})

			it('reserve should throw an error', () => {
				try {
					mockedTicket.reserve()
					throw new Error('Expected mockedTicket.reserve to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The ticket has already been reserved!')
					expect(mockedTicket.state.constructor.name).toBe('ReservedMovieTicketState')
				}
			})

			it('finalize should finalize the ticket', () => {
				mockedTicket.finalize()
				expect(mockedTicket.state.constructor.name).toBe('FinalizedMovieTicketState')
			})

			it('cancel should cancel the ticket', () => {
				mockedTicket.cancel()
				expect(mockedTicket.state.constructor.name).toBe('AvailableMovieTicketState')
			})
		})
	})
})
