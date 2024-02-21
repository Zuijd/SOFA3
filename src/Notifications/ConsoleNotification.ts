import { INotificationObserver } from '../Observers/INotificationObserver'

export default class ConsoleNotification implements INotificationObserver {
	notify(message: string): void {
		console.log(`[CONSOLE] ${message}`)
	}
}
