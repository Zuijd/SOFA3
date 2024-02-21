import { INotificationObserver } from '../Observers/INotificationObserver'

export default class SmsNotification implements INotificationObserver {
	notify(message: string): void {
		console.log(`[SMS] ${message}`)
	}
}
