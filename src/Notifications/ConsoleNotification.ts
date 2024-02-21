import { INotificationObserver } from '../Observers/INotificationObserver'

export class ConsoleNotification implements INotificationObserver {
	notify(message: string): void {
		console.log(`[CONSOLE] ${message}`)
	}
}
