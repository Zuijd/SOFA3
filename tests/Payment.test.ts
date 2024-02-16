import Order from '../src/Order'
import MovieTicket from '../src/MovieTicket'
import MovieScreening from '../src/MovieScreening'
import Movie from '../src/Movie'

describe('Payment', () => {
	let mockedOrder: Order
	let mockedTicket: MovieTicket
	let mockedMovieScreening: MovieScreening
	let mockedMovie: Movie

	beforeEach(() => {
		mockedOrder = new Order(1, true)
		mockedMovie = new Movie('Mr. Bean')
		mockedMovieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, mockedMovie)
		mockedTicket = new MovieTicket(mockedMovieScreening, true, 1, 2)
	})

	describe('States', () => {
		describe('when state is initial', () => {
			it('completePayment should throw an error', () => {
				try {
					mockedOrder.payment.completePayment()
					throw new Error('Expected payment.completePayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The payment must first be started!')
					expect(mockedOrder.payment.state.constructor.name).toBe('InitialPaymentState')
				}
			})

			it('cancelPayment should throw an error', () => {
				try {
					mockedOrder.payment.cancelPayment()
					throw new Error('Expected payment.cancelPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The payment must first be started!')
					expect(mockedOrder.payment.state.constructor.name).toBe('InitialPaymentState')
				}
			})
		})

		describe('when state is started', () => {
			beforeEach(() => {
				mockedOrder.submit()
				mockedOrder.startPayment()
				mockedOrder.addSeatToReservation(mockedTicket)
			})

			it('completePayment should complete the payment', () => {
				mockedOrder.payment.completePayment()
				expect(mockedOrder.payment.state.constructor.name).toBe('CompletedPaymentState')
			})

			it('cancelPayment should cancel the payment', () => {
				mockedOrder.payment.cancelPayment()
				expect(mockedOrder.payment.state.constructor.name).toBe('InitialPaymentState')
				expect(mockedOrder.state.constructor.name).toBe('CancelledOrderState')
				expect(mockedOrder.movieTickets[0].state.constructor.name).toBe('AvailableMovieTicketState')
			})
		})

		describe('when state is completed', () => {
			beforeEach(() => {
				mockedOrder.submit()
				mockedOrder.startPayment()
				mockedOrder.payment.completePayment()
			})

			it('completePayment should throw an error', () => {
				try {
					mockedOrder.payment.completePayment()
					throw new Error('Expected payment.completePayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The payment has already been completed!')
					expect(mockedOrder.payment.state.constructor.name).toBe('CompletedPaymentState')
				}
			})

			it('cancelPayment should throw an error', () => {
				try {
					mockedOrder.payment.cancelPayment()
					throw new Error('Expected payment.cancelPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The payment has already been completed!')
					expect(mockedOrder.payment.state.constructor.name).toBe('CompletedPaymentState')
				}
			})
		})
	})
})
