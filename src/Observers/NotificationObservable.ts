import { INotificationObserver } from './INotificationObserver'

export default abstract class NotificationObservable {
	private observer: INotificationObserver | undefined

	attach(observer: INotificationObserver): void {
		this.observer = observer
	}

	detach(_observer: INotificationObserver): void {
		this.observer = undefined
	}

	notify(message: string): void {
		if (this.observer) {
			this.observer.notify(message)
		} else {
			throw new Error('No observer attached!')
		}
	}
}