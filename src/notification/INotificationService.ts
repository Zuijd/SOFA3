// Interface for Adapter Pattern
export interface INotificationService {
	sendNotification(message: string, recipient: string): void
}
