import { INotificationObserver } from '../Observers/INotificationObserver'

export default class EmailNotification implements INotificationObserver {
	notify(message: string): void {
		console.log(`[EMAIL] ${message}`)
	}
}
