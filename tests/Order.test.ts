import Order from '../src/Order'
import MovieTicket from '../src/MovieTicket'
import { TicketExportFormat } from '../src/TicketExportFormat'
import MovieScreening from '../src/MovieScreening'
import Movie from '../src/Movie'
import fs from 'fs'
import { TicketExportJSON } from '../src/TicketExportJSON'
import { TicketExportPlainText } from '../src/TicketExportPlainText'

jest.mock('fs')

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
			mockedMovieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, mockedMovie)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			mockedOrder.addSeatToReservation(mockedTicket)
			expect(typeof mockedOrder.calculatePrice()).toBe('number')
			expect(mockedOrder.calculatePrice()).toBe(63)
		})
	})

	describe('export', () => {
		it('should create folder and export json', () => {
			mockedOrder.export(new TicketExportJSON())

			expect(fs.existsSync).toHaveBeenCalledTimes(1)
			expect(fs.mkdirSync).toHaveBeenCalledTimes(1)
			expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
		})

		it('shouldn not create folder and export plaintext', () => {
			;(fs.existsSync as jest.Mock).mockImplementationOnce(() => true)

			mockedOrder.export(new TicketExportPlainText())

			expect(fs.existsSync).toHaveBeenCalledTimes(1)
			expect(fs.mkdirSync).toHaveBeenCalledTimes(0)
			expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
		})

		it('should throw error', () => {
			try {
				mockedOrder.export(new Object() as TicketExportJSON)
				throw new Error('Expected mockedOrder.export to throw an error, but it did not')
			} catch (error) {
				expect(error).toBeInstanceOf(Error)
				expect(error.message).toBe('exportType.export is not a function')
			}
		})
	})
})
