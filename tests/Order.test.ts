import Order from '../src/Order';
import MovieTicket from '../src/MovieTicket';
import { TicketExportFormat } from '../src/TicketExportFormat';
import MovieScreening from '../src/MovieScreening';
import Movie from '../src/Movie';

describe('Order', () => {
	let mockedOrder: Order;
	let mockedTicket: MovieTicket;
	let mockedMovieScreening: MovieScreening;
	let mockedMovie: Movie;

	beforeEach(() => {
		mockedOrder = new Order(1, true);
		mockedMovie = new Movie('Mr. Bean');
		mockedMovieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, mockedMovie);
		mockedTicket = new MovieTicket(mockedMovieScreening, true, 1, 2);
	});

	it('should get order number', () => {
		expect(mockedOrder.getOrderNr()).toBe(1);
	});

	it('should add 3 seats to reservation', () => {
		mockedOrder.addSeatToReservation(mockedTicket);
		mockedOrder.addSeatToReservation(mockedTicket);
		mockedOrder.addSeatToReservation(mockedTicket);
		expect(mockedOrder.movieTickets.length).toBe(3);
	});

	it('should calculate price', () => {
		mockedOrder.addSeatToReservation(mockedTicket);
		mockedOrder.addSeatToReservation(mockedTicket);
		mockedOrder.addSeatToReservation(mockedTicket);
		console.log(mockedOrder.calculatePrice());
		expect(typeof mockedOrder.calculatePrice()).toBe('number');
		expect(mockedOrder.calculatePrice()).toBe(44);
	});

	it('should export order details in JSON format', () => {
		const result = mockedOrder.export(TicketExportFormat.JSON);

		expect(result).toBe(
			JSON.stringify({
				orderNr: mockedOrder.getOrderNr(),
				price: mockedOrder.calculatePrice(),
			})
		);
	});

	it('should export order details in PLAINTEXT format', () => {
		const result = mockedOrder.export(TicketExportFormat.PLAINTEXT);

		expect(result).toBe('OrderNr: ' + mockedOrder.getOrderNr() + '\n' + 'Price: ' + mockedOrder.calculatePrice());
	});
});
