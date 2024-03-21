import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'

jest.mock('../../src/notification/external/SlackService')

describe('NotificationServiceSlack', () => {
	let notificationService: NotificationServiceSlack
	let slackService: SlackService

	beforeEach(() => {
		slackService = new SlackService()
		notificationService = new NotificationServiceSlack(slackService)
	})

	it('check if the NotificationService called the class constructor', () => {
		new NotificationServiceSlack(slackService)
		expect(SlackService).toHaveBeenCalledTimes(1)
	})

	it('should send a notification via Slack', () => {
		// arrange
		const message = 'Hello, world!'
		const recipient = 'user'
		const sendSlackMessageMock = jest.spyOn(notificationService, 'sendNotification')
		const sendMessageMock = jest.spyOn(slackService, 'sendSlackMessage')

		// act
		notificationService.sendNotification(message, recipient)

		// assert
		expect(sendSlackMessageMock).toHaveBeenCalledWith(message, recipient)
		expect(sendMessageMock).toHaveBeenCalledWith(recipient, message)
	})
})
