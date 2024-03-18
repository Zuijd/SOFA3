// Interface for Adapter Pattern.
export default interface INotificationService {
	sendNotification(message: string, recipient: string): void
}
