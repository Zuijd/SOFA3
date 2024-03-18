import INotificationService from './INotificationService'
import SlackService from './external/SlackService'

// Implementation of Adapter Pattern
export default class NotificationServiceSlack implements INotificationService {
	private slackService: SlackService

	constructor(slackService: SlackService) {
		this.slackService = slackService
	}

	sendNotification(message: string, recipient: string): void {
		this.slackService.sendSlackMessage(recipient, message)
	}
}
