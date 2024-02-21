import { INotificationObserver } from '../Observers/INotificationObserver'

export class ConsoleNotification implements INotificationObserver {
	update(message: string): void {
		console.log(`[CONSOLE] ${message}`)
	}
}
