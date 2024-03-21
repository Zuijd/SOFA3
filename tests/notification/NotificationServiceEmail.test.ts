import NotificationServiceEmail from '../../src/notification/NotificationServiceEmail'
import EmailService from '../../src/notification/external/EmailService'

jest.mock('../../src/notification/external/EmailService')

describe('NotificationServiceEmail', () => {
	let notificationService: NotificationServiceEmail
	let emailService: EmailService

	beforeEach(() => {
		emailService = new EmailService()
		notificationService = new NotificationServiceEmail(emailService)
	})

	it('check if the NotificationService called the class constructor', () => {
		new NotificationServiceEmail(emailService)
		expect(EmailService).toHaveBeenCalledTimes(1)
	})

	it('should send a notification via Slack', () => {
		// arrange
		const message = 'Hello, world!'
		const recipient = 'user'
		const sendEmailMessageMock = jest.spyOn(notificationService, 'sendNotification')
		const sendMessageMock = jest.spyOn(emailService, 'sendEmail')

		// act
		notificationService.sendNotification(message, recipient)

		// assert
		expect(sendEmailMessageMock).toHaveBeenCalledWith(message, recipient)
		expect(sendMessageMock).toHaveBeenCalledWith(recipient, message)
	})
})
