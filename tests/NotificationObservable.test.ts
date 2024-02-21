import Order from '../src/Order'
import MovieTicket from '../src/MovieTicket'
import MovieScreening from '../src/MovieScreening'
import Movie from '../src/Movie'
import SmsNotification from '../src/Notifications/SmsNotification'

describe('NotificationObservable', () => {
	let mockedOrder: Order

	beforeEach(() => {
		mockedOrder = new Order(1, true)

		mockedOrder.attach(new SmsNotification())
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('when no observable attached', () => {
		it('it should throw an error', () => {
			try {
				mockedOrder.detach()
				mockedOrder.startPayment()
			} catch (error) {
				expect(error.message).toBe('No observer attached!')
			}
		})
	})
})
