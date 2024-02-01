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

	describe('calculatePrice', () => {
		it('should not calculate price with zero tickets', () => {
			expect(typeof mockedOrder.calculatePrice()).toBe('number');
			expect(mockedOrder.calculatePrice()).toBe(0);
		});

		it('should calculate price with one regular ticket', () => {
			mockedTicket = new MovieTicket(mockedTicket.movieScreening, false, mockedTicket.seatNr, mockedTicket.rowNr);
			mockedOrder.addSeatToReservation(mockedTicket);
			expect(typeof mockedOrder.calculatePrice()).toBe('number');
			expect(mockedOrder.calculatePrice()).toBe(20);
		});

		it('should calculate price with two tickets and regular seats', () => {
			mockedTicket = new MovieTicket(mockedTicket.movieScreening, false, mockedTicket.seatNr, mockedTicket.rowNr);
			mockedOrder.addSeatToReservation(mockedTicket);
			mockedOrder.addSeatToReservation(mockedTicket);
			expect(typeof mockedOrder.calculatePrice()).toBe('number');
			expect(mockedOrder.calculatePrice()).toBe(20);
		});

		it('should calculate price with one premium ticket', () => {
			mockedOrder.addSeatToReservation(mockedTicket);
			expect(typeof mockedOrder.calculatePrice()).toBe('number');
			expect(mockedOrder.calculatePrice()).toBe(22);
		});

		it('should calculate price with two premium tickets', () => {
			mockedOrder.addSeatToReservation(mockedTicket);
			mockedOrder.addSeatToReservation(mockedTicket);
			expect(typeof mockedOrder.calculatePrice()).toBe('number');
			expect(mockedOrder.calculatePrice()).toBe(22);
		});
	});

	describe('export', () => {});
	
});
