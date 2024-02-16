import Order from '../src/Order'
import MovieTicket from '../src/MovieTicket'
import MovieScreening from '../src/MovieScreening'
import Movie from '../src/Movie'

describe('Order', () => {
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

	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('calculatePrice', () => {
		it('should not calculate price with zero tickets', () => {
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(0)
		})

		it('should calculate price with one regular ticket', () => {
			mockedTicket = new MovieTicket(mockedTicket.movieScreening, false, mockedTicket.seatNr, mockedTicket.rowNr)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(20)
		})

		it('should calculate price with two tickets and regular seats', () => {
			mockedTicket = new MovieTicket(mockedTicket.movieScreening, false, mockedTicket.seatNr, mockedTicket.rowNr)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(20)
		})

		it('should calculate price with one premium ticket', () => {
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(22)
		})

		it('should calculate price with two premium tickets', () => {
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(22)
		})

		it('should calculate price for non-students with premium tickets', () => {
			mockedOrder = new Order(mockedOrder.orderNr, false)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(23)
		})

		it('should calculate price for non-students with regular tickets on a midday and more then 5 tickets', () => {
			mockedOrder = new Order(mockedOrder.orderNr, false)
			mockedTicket = new MovieTicket(mockedMovieScreening, false, 1, 2)
			mockedMovieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, mockedMovie)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(54)
		})
	})

	describe('States', () => {
		beforeEach(() => {
			mockedOrder.addSeatToReservation(mockedTicket)
		})
		describe('when state is initial', () => {
			it('submit should submit the order', () => {
				mockedOrder.submit()
				expect(mockedOrder.state.constructor.name).toBe('SubmittedOrderState')
			})

			it('startPayment should throw an error', () => {
				try {
					mockedOrder.startPayment()
					throw new Error('Expected mockedOrder.startPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order must first be submitted!')
					expect(mockedOrder.payment.state.constructor.name).toBe('InitialPaymentState')
					expect(mockedOrder.state.constructor.name).toBe('InitialOrderState')
				}
			})

			it('cancel should cancel the order', () => {
				mockedOrder.cancel()
				expect(mockedOrder.state.constructor.name).toBe('CancelledOrderState')
				expect(mockedOrder.movieTickets[0].state.constructor.name).toBe('AvailableMovieTicketState')
			})
		})

		describe('when state is submitted', () => {
			beforeEach(() => {
				mockedOrder.submit()
			})

			it('submit should throw an error', () => {
				try {
					mockedOrder.submit()
					throw new Error('Expected mockedOrder.submit to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been submitted!')
					expect(mockedOrder.state.constructor.name).toBe('SubmittedOrderState')
				}
			})

			it('startPayment should start the payment', () => {
				mockedOrder.startPayment()
				expect(mockedOrder.payment.state.constructor.name).toBe('StartedPaymentState')
				expect(mockedOrder.state.constructor.name).toBe('ProvisionalOrderState')
			})

			it('cancel should cancel the order', () => {
				mockedOrder.cancel()
				expect(mockedOrder.state.constructor.name).toBe('InitialOrderState')
			})
		})

		describe('when state is completed', () => {
			beforeEach(() => {
				mockedOrder.submit()
				mockedOrder.startPayment()
				mockedOrder.payment.completePayment()
			})

			it('submit should throw an error', () => {
				try {
					mockedOrder.submit()
					throw new Error('Expected mockedOrder.submit to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been completed!')
					expect(mockedOrder.state.constructor.name).toBe('CompletedOrderState')
				}
			})

			it('startPayment should throw an error', () => {
				try {
					mockedOrder.startPayment()
					throw new Error('Expected mockedOrder.startPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been completed!')
					expect(mockedOrder.state.constructor.name).toBe('CompletedOrderState')
				}
			})

			it('cancel should throw an error', () => {
				try {
					mockedOrder.cancel()
					throw new Error('Expected mockedOrder.cancel to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been completed!')
					expect(mockedOrder.state.constructor.name).toBe('CompletedOrderState')
				}
			})
		})

		describe('when state is cancelled', () => {
			beforeEach(() => {
				mockedOrder.cancel()
			})

			it('submit should throw an error', () => {
				try {
					mockedOrder.submit()
					throw new Error('Expected mockedOrder.submit to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has been cancelled!')
					expect(mockedOrder.state.constructor.name).toBe('CancelledOrderState')
				}
			})

			it('startPayment should throw an error', () => {
				try {
					mockedOrder.startPayment()
					throw new Error('Expected mockedOrder.startPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has been cancelled!')
					expect(mockedOrder.state.constructor.name).toBe('CancelledOrderState')
				}
			})

			it('cancel should throw an error', () => {
				try {
					mockedOrder.cancel()
					throw new Error('Expected mockedOrder.cancel to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been cancelled!')
					expect(mockedOrder.state.constructor.name).toBe('CancelledOrderState')
				}
			})
		})

		describe('when state is provisional', () => {
			beforeEach(() => {
				mockedOrder.submit()
				mockedOrder.startPayment()
			})

			it('submit should throw an error', () => {
				try {
					mockedOrder.submit()
					throw new Error('Expected mockedOrder.submit to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The order has already been submitted!')
					expect(mockedOrder.state.constructor.name).toBe('ProvisionalOrderState')
				}
			})

			it('startPayment should throw an error', () => {
				try {
					mockedOrder.startPayment()
					throw new Error('Expected mockedOrder.startPayment to throw an error, but it did not')
				} catch (error) {
					expect(error.message).toBe('The payment has already been started!')
					expect(mockedOrder.state.constructor.name).toBe('ProvisionalOrderState')
				}
			})

			it('cancel should cancel the order', () => {
				mockedOrder.cancel()
				expect(mockedOrder.state.constructor.name).toBe('SubmittedOrderState')
				expect(mockedOrder.payment.state.constructor.name).toBe('InitialPaymentState')
			})
		})
	})
})
