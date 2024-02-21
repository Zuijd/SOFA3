import Order from '../src/Order'
import fs from 'fs'
import TicketExportJSON from '../src/Strategies/Export/TicketExportJSON'
import TicketExportPlainText from '../src/Strategies/Export/TicketExportPlainText'
import WhatsAppNotification from '../src/Notifications/WhatsAppNotification'

jest.mock('fs')

describe('Export', () => {
	let mockedOrder: Order

	beforeEach(() => {
		mockedOrder = new Order(1, true)

		mockedOrder.attach(new WhatsAppNotification())
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

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
