import { INotificationObserver } from '../Observers/INotificationObserver'

export default class SmsNotification implements INotificationObserver {
	update(message: string): void {
		console.log(`[SMS] ${message}`)
	}
}
