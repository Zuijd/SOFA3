import Order from '../src/Order';
import MovieTicket from '../src/MovieTicket';
import { TicketExportFormat } from '../src/TicketExportFormat';
import MovieScreening from '../src/MovieScreening';
import Movie from '../src/Movie';
import fs from 'fs';

jest.mock('fs');

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

	afterEach(() => {
		jest.clearAllMocks();
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

	describe('export', () => {
		it('should create folder and export json', () => {
			mockedOrder.export(TicketExportFormat.JSON);

			expect(fs.existsSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
			expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
		});

		it('shouldn not create folder and export plaintext', () => {
			(fs.existsSync as jest.Mock).mockImplementationOnce(() => true);

			mockedOrder.export(TicketExportFormat.PLAINTEXT);

			expect(fs.existsSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync).toHaveBeenCalledTimes(0);
			expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
		});

		it('should throw error', () => {
			try {
				mockedOrder.export('unsupported' as TicketExportFormat);
				throw new Error('Expected mockedOrder.export to throw an error, but it did not');
			} catch (error) {
				expect(error).toBeInstanceOf(Error);
				expect(error.message).toBe('Unsupported export format');
			}
		});
	});
});
