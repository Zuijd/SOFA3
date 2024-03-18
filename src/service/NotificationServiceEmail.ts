import INotificationService from './INotificationService'
import EmailService from './external/EmailService'

// Implementation of Adapter Pattern
export default class NotificationServiceEmail implements INotificationService {
	private emailService: EmailService

	constructor(emailService: EmailService) {
		this.emailService = emailService
	}

	sendNotification(message: string, recipient: string): void {
		this.emailService.sendEmail(recipient, message)
	}
}
