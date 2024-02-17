import { IObserver } from '../Observers/IObserver'

export class ConsoleNotification implements IObserver {
	update(message: string): void {
		console.log(`[CONSOLE] ${message}`)
	}
}
