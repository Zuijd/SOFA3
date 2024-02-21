import { INotificationObserver } from '../Observers/INotificationObserver'

export default class EmailNotification implements INotificationObserver {
	update(message: string): void {
		console.log(`[EMAIL] ${message}`)
	}
}
